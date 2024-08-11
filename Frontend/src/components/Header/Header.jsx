import React, { useRef, useEffect } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const navlinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctor', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' }
];

const Header = () => {
  const headerRef = useRef(null);

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
            <img src={logo} alt="Logo" />
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
            <Link to="/">
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img src={userImg} className="w-full rounded-full" alt="User" />
              </figure>
            </Link>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] 
              h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
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
