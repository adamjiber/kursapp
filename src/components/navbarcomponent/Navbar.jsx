import React, { useState, useEffect } from 'react';
import {  FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

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
  
  useEffect (() => {
    const handleResize = () => {
      setIsMobile(window.innerwidth < 769);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
}