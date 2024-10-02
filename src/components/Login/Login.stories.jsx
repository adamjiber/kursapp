import React, { useState, useEffect } from 'react';
import Login from './Login';
import Register from '../Register/Register';

// Mockade användardata för att simulera `users.json`
const mockUsers = [
  { username: 'adam', password: 'adam123' },
  { username: 'koshin', password: 'haha' }
];

export default {
  title: 'Kursapp/Login',
  component: Login,
  decorators: [
    (Story) => {
      // Mocka `fetch` för att returnera de mockade användardata
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

  // Funktion som växlar till `Register`-komponenten
  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  // Funktion som växlar tillbaka till `Login`-komponenten
  const handleLoginClick = () => {
    setShowRegister(false);
  };

  // Återställ fetch för att undvika problem om `fetch` är mockat flera gånger
  useEffect(() => {
    return () => {
      global.fetch = null;
    };
  }, []);

  return (
    <div>
      {showRegister ? (
        <Register /> // Visa `Register`-komponenten när `showRegister` är true
      ) : (
        <Login onRegisterClick={handleRegisterClick} /> // Visa `Login`-komponenten med `onRegisterClick`
      )}
      {/* Lägg till en knapp för att gå tillbaka till `Login` */}
      {showRegister && (
        <button onClick={handleLoginClick} style={{ marginTop: '20px' }}>
          Tillbaka till Login
        </button>
      )}
    </div>
  );
};
