import { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoChatboxSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Importera Link för att skapa klickbara länkar
import styles from './Navbar.module.css'; // Importera CSS-modulen

const navLinks = [
  { title: 'Home', url: '/Hompage'},
  { title: 'Login', url: '/Login' },
  { title: 'Register', url: '/Register' },
  { title: 'Products', url: '/Products' },
  { title: 'Cart', url: '/Cart' },
  { title: 'Chat', url: '/Chat' }
  
];

const iconList = [
  { icon: <FaUser />, url: '/Login' },
  { icon: <FaHeart />, url: '/Favorites' }, // Exempel på favorit-ikon (du kan lägga till sidan senare)
  { icon: <FaShoppingCart />, url: '/Cart' },
  { icon: <IoChatboxSharp />, url: '/Chat' }
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
                <li key={index}>
                  {/* Använd Link för att navigera till rätt rutt */}
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.icons}>
              {iconList.map((item, index) => (
                <Link to={item.url} key={index}>
                  {item.icon}
                </Link>
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
                  <span key={index}>
                    <Link to={link.url}>{link.title}</Link> {/* Klickbara textlänkar för mobil */}
                  </span>
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
