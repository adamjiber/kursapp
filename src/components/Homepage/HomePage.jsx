import React from 'react';
import './HomePage.css';
import bokbild1 from '../../images/bokbild1.jpg';
import bokbild2 from '../../images/bokbild2.jpg';
import bokbild3 from '../../images/bokbild3.jpg';

const HomePage = () => {
  return (
    <section className="home-page bg-gray-100 py-16">
      <div className="container mx-auto text-left">
        {/* Rubrik och inledning */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Köp och sälj begagnad kurslitteratur enkelt och lokalt!
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Upptäck och sälj kurslitteratur enkelt och snabbt. Hitta böcker från studenter i ditt område och spara pengar på dina studier!
        </p>
        
        {/* Sök och Sälj knappar */}
        <div className="flex space-x-4 mb-12">
          <a href="/search" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
            Sök böcker
          </a>
          <a href="/sell" className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600">
            Sälj böcker
          </a>
        </div>

        {/* Populära böcker sektion */}
        <div className="popular-books">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Populära kurslitteratur just nu</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-white p-4 shadow-md rounded-md">
              <img src={bokbild1} alt="Boktitel 1" className="mb-4"/>
              <h3 className="text-lg font-semibold">101 essays that will change the way you think</h3>
              <p>Brianna</p>
              <p className="text-blue-600 font-bold">Pris: 200 kr</p>
            </li>
            <li className="bg-white p-4 shadow-md rounded-md">
              <img src={bokbild2} alt="Boktitel 2" className="mb-4"/>
              <h3 className="text-lg font-semibold">JavaScript</h3>
              <p>John</p>
              <p className="text-blue-600 font-bold">Pris: 150 kr</p>
            </li>
            <li className="bg-white p-4 shadow-md rounded-md">
              <img src={bokbild3} alt="Boktitel 3" className="mb-4"/>
              <h3 className="text-lg font-semibold">Stunning CSS</h3>
              <p>Elon</p>
              <p className="text-blue-600 font-bold">Pris: 180 kr</p>
            </li>
          </ul>
        </div>

        {/* Här kan man fylla på mer */}
      </div>
    </section>
  );
};

export default HomePage;
