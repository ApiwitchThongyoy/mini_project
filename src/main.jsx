import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main_page from './page/Main_page.jsx';
import Hangman_page from './page/Hangman_page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_page />
  },
  {
    path: "/Hangman",
    element: <Hangman_page />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
