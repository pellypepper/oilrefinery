import React, { useRef, useState , useEffect} from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { FaWhatsapp } from "react-icons/fa";
import { Link, Outlet,useLocation } from 'react-router-dom';
import { routesConfig } from '../../route';

const Navbar = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(false);


  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle('active');

  }

  const toggleClose = () => {
    menuRef.current.classList.remove('active');
  }
  useEffect(() => {
    // Function to preload adjacent routes
    const preloadAdjacentRoutes = () => {
      const currentPath = location.pathname === '/' ? '/' : location.pathname.slice(1);
      const currentIndex = routesConfig.findIndex(route => route.path === currentPath);
      
      // Preload next route
      if (currentIndex < routesConfig.length - 1) {
        routesConfig[currentIndex + 1].preload();
      }
      // Preload previous route
      if (currentIndex > 0) {
        routesConfig[currentIndex - 1].preload();
      }
    };

    // Call preload function when route changes
    preloadAdjacentRoutes();
  }, [location]);


  return (
    <div className='layout'>
      <nav className=" align-items-center px-5  d-flex justify-content-between">

        <div className='logo-wrapper'>
          <h1><Link to="/">TAIMYR <span>FUEL</span></Link></h1>
        </div>

        <div className='menu-wrapper' ref={menuRef}>
          <ul className='d-flex gap-3 list-unstyled '>
            <li><Link to="/">Home</Link></li>
            <li >Our Service
              <span onClick={toggleServices}>
                {isServicesOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
              {isServicesOpen && (
                <ul className='submenu-wrapper  list-unstyled lh-lg'>
              
                  <li className='p-2'><Link to="/refinery">Oil Exploration</Link></li>

                </ul>
              )}
            </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/hseq">HSEQ</Link></li>
            <li onClick={toggleClose} className='menu-icon'>          <FontAwesomeIcon icon={faTimes} /> </li>
          </ul>
        </div>

        <div className='menu-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>

      </nav>
      <main>
        <Outlet />
      </main>
      <div className="whatsapp-logo">
                <a
                    href="https://wa.me/4407349459445"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    <FaWhatsapp size={50} color="#25D366" />
                </a>
            </div>

        <div>
   
        </div>
    </div>
  );
};

export default Navbar;