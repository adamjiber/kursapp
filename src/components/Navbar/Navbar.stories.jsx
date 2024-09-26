import Navbar from "./Navbar";
import { BrowserRouter } from 'react-router-dom'; // Importera BrowserRouter för att omge din story

export default {
  title: 'Kursapp/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = {};
