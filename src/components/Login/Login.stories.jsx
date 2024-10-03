import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from '../Register/Register';
import Homepage from '../Homepage/HomePage'; 

// Mockade användardata för att simulera users.json
const mockUsers = [
  { username: 'adam', password: 'adam123' },
  { username: 'koshin', password: 'haha' }
];

export default {
  title: 'Kursapp/Login',
  component: Login,
  decorators: [
    (Story) => {
      // Mocka fetch för att returnera de mockade användardata
      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(mockUsers),
        });

      return <Story />;
    },
  ],
};

export const Default = () => {
  const [showRegister, setShowRegister] = useState(false); // State för att växla mellan Login och Register
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State för att hantera om användaren är inloggad

  // Funktion som växlar till Register-komponenten
  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  // Funktion som växlar tillbaka till Login-komponenten
  const handleLoginClick = () => {
    setShowRegister(false);
  };

  // Funktion som hanterar inloggningens framgång
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // När inloggningen lyckas, sätt isLoggedIn till true
  };

  // Återställ fetch för att undvika problem om fetch är mockat flera gånger
  useEffect(() => {
    return () => {
      global.fetch = null;
    };
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Homepage /> // Visar homepage när användaren är inloggad 
      ) : showRegister ? (
        <Register /> // Visar register komponenten när showregister är true
      ) : (
        <Login
          onRegisterClick={handleRegisterClick}
          onLoginSuccess={handleLoginSuccess} // Lägg till onLoginSuccess-prop för att hantera inloggning
        />
      )}
      {/* Lägg till en knapp för att gå tillbaka till Login */}
      {showRegister && (
        <button onClick={handleLoginClick} style={{ marginTop: '20px' }}>
          Tillbaka till Login
        </button>
      )}
    </div>
  );
};
