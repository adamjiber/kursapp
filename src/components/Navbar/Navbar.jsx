import { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Importera CSS-modulen

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
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarBrand}>KursApp</div>
            <ul className={styles.navLinks}>
              {navLinks.map((link, index) => (
                <li key={index}>{link.title}</li>
              ))}
            </ul>
            <ul className={styles.icons}>
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarBrand}>Logo</div>
            <FaBars onClick={handleBarsIconClick} className={styles.mobileBarsIcon} />
          </div>
          {showModal && (
            <div className={styles.mobileNav}>
              <FaTimes 
                className={styles.mobileNavClose}
                onClick={toggleModal}
              />
              <div className={styles.mobileNavContent}>
                {navLinks.map((link, index) => (
                  <span key={index}>{link.title}</span>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
