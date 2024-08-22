import React, { useRef, useEffect, useContext } from 'react';
import logo from '../../assets/images/logo01.png';
// import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';

const navlinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctor', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user, role, token} = useContext(authContext);

  const handleStickyHeader = () => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    handleStickyHeader();
  }, []);

  return (
    <header ref={headerRef} className="header flex items-center sticky top-0 bg-white z-50"> {/* Added sticky class */}
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo"  className='w-18 h-16'/>
          </div>
          {/* Menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">

          {
            token && user ? ( 
            <div>
            <link to= {`${role ==='doctor' ? '/doctors/profile/me' : '/user/profile/me'}`}>
            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
              <img 
                src= {user?.photo}
                className='w-full rounded-full' 
                alt="" />
            </figure>

            <h2>{user?.name}</h2>

            </link>
            </div>)
            :(            
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] 
              h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            )}

            <Link to="/signup">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] 
              h-[44px] flex items-center justify-center rounded-[50px]">
                Register
              </button>
            </Link>
            <span className="md:hidden" onClick={() => menuRef.current.classList.toggle('show_menu')}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
