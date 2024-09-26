import { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoChatboxSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Importera Link för att skapa klickbara länkar
import styles from './Navbar.module.css'; // Importera CSS-modulen

const navLinks = [
  { title: 'Login', url: '/Login' },
  { title: 'Register', url: '/Register' },
  { title: 'Home', url: '/' },
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
  // Fix: Använd säker initialisering av window.innerWidth i useState
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 769);
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

  // Funktion för att toggla modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Fix: Rendera navigationslänkar med en separat funktion för återanvändning
  const renderNavLinks = () => (
    navLinks.map((link, index) => (
      <li key={index}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ))
  );

  return (
    <>
      {!isMobile ? (
        // Laptop Navbar
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarBrand}>KursApp</div>
            <ul className={styles.navLinks}>
              {renderNavLinks()} {/* Använder renderNavLinks-funktionen */}
            </ul>
            <ul className={styles.icons}>
              {/* Fix: Omge ikonerna med li-element för semantisk korrekthet */}
              {iconList.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} aria-label={item.url.substring(1)}> {/* Fix: Lagt till aria-label för bättre tillgänglighet */}
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarBrand}>Logo</div>
            {/* Fix: Använder toggleModal direkt på FaBars */}
            <FaBars onClick={toggleModal} className={styles.mobileBarsIcon} />
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
