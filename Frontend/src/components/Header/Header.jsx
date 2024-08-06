
import {useEffect,userRef} from "react"; 6.9k (gzipped:2.7k)
import { NavLink, Link } from "react-router-dom";

  const navlinks= [
    {
        path: '/home',
        display: 'home'
    },
    {
        path: '/doctor',
        display: 'Find a Doctor'
    },

    {
        path: '/services',
        display: 'Services'
    },

    {
        path: '/Contact',
        display: 'Contact'
    },


  ]
    const Header = ()=>{
        return (
          <header className="header flex item-center">
            <div className="container">
            <div className="flex item-center justify-between">
            {/*        logo    */}
            </div>
            <div>
            <img src={logo} alt="" />
            </div>
            {/* menu */}
            <div className="navigation">
            <ul className="menu flex item-center gap-[2.7rem]">
             {
            navLinks.map((link,index)=><li key={index}>
            <NavLink to={Link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : ''}
                >{Link.display}</NavLink>
            </li>)
            }
            </ul>
            </div>
            </div>
            </header>
     );
    };

    export default Header;