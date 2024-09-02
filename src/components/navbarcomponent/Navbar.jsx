import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';


const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Services', url: '/services' }, 
  { title: 'Contact', url: '/contact' } 
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> },
];

const bgColor = 'bg-gray-800';
const modalColor = 'bg-gray-900';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  return (
    <>
      {!isMobile ? (
        // Laptop Navbar
        <nav className={`w-full ${bgColor} py-4`}>
          <div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
            <div className='text-white font-bold text-xl'>KursApp</div>
            <ul className='flex space-x-8 items-center'>
              {navLinks.map((link, index) => (
                <li key={index} className='text-white text-sm hover:text-gray-300 cursor-pointer'>{link.title}</li>
              ))}
            </ul>
            <ul className='flex space-x-6 items-center text-white'>
              {iconList.map((item, index) => (
                <div key={index} className='cursor-pointer hover:text-gray-300'>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar
        <nav className={`w-full ${bgColor} py-4`}>
          <div className='flex justify-between items-center px-4'>
            <div className='text-white font-bold text-xl'>Logo</div>
            <FaBars onClick={handleBarsIconClick} className='text-white cursor-pointer' />
          </div>
          {showModal && (
            <div className='fixed inset-0 flex justify-center items-center'>
              <div className={`absolute inset-0 ${modalColor}`} />
              <FaTimes 
                className='absolute top-6 right-4 text-white cursor-pointer'
                onClick={toggleModal}
                style={{ fontSize: '16px' }}
              />
              <div className='relative bg-gray-900 w-full'>
                <div className='flex flex-col gap-8 items-center justify-center h-full'>
                  {navLinks.map((link, index) => (
                    <span key={index} className='text-white font-light text-2xl cursor-pointer'>{link.title}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
