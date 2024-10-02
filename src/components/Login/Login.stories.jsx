import React from 'react';
import Login from './Login';

export default {
  title: 'Kursapp/Login',
  component: Login,
  decorators: [
    (Story) => {
      // Mocka `fetch` för att returnera de mockade användardata från `users.json`
      const mockUsers = [
        { username: 'adam', password: 'adam123' },
        { username: 'koshin', password: 'haha' }
      ];

      global.fetch = () =>
        Promise.resolve({
          json: () => Promise.resolve(mockUsers),
        });

      return <Story />;
    },
  ],
};

// Skapar en standardstory för Login komponenten
export const Default = () => <Login />;
