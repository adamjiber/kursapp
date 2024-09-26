import React from 'react';
import styles from './HomePage.module.css';
import bokbild1 from '../../images/bokbild1.jpg';
import bokbild2 from '../../images/bokbild2.jpg';
import bokbild3 from '../../images/bokbild3.jpg';

const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <div className="container mx-auto text-left">
        {/* Rubrik och inledning */}
        <h1 className={styles.title}>Köp och sälj begagnad kurslitteratur enkelt och lokalt!</h1>
        <p className={styles.description}>
          Upptäck och sälj kurslitteratur enkelt och snabbt. Hitta böcker från studenter i ditt område och spara pengar på dina studier!
        </p>
        
        {/* Sök och Sälj knappar med mellanrum */}
        <div className={styles.buttonContainer}>
          <a href="/search" className={styles.link}>
            Sök böcker
          </a>
          <a href="/sell" className={`${styles.link} bg-green-500 hover:bg-green-600`}>
            Sälj böcker
          </a>
        </div>

        {/* Populära böcker sektion */}
        <div className={styles.popularBooks}>
          <h2>Populära kurslitteratur just nu</h2>
          <ul>
            <li>
              <img src={bokbild1} alt="Boktitel 1"/>
              <h3>101 essays that will change the way you think</h3>
              <p>Brianna</p>
              <p className={styles.textBlue}>Pris: 200 kr</p>
            </li>
            <li>
              <img src={bokbild2} alt="Boktitel 2"/>
              <h3>JavaScript</h3>
              <p>John</p>
              <p className={styles.textBlue}>Pris: 150 kr</p>
            </li>
            <li>
              <img src={bokbild3} alt="Boktitel 3"/>
              <h3>Stunning CSS</h3>
              <p>Elon</p>
              <p className={styles.textBlue}>Pris: 180 kr</p>
            </li>
          </ul>
        </div>

        {/* Här kan man fylla på mer */}
      </div>
    </section>
  );
};

export default HomePage;
