import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home, { loader as HomeLoader } from './pages/Home/Home';
import Movies, { loader as MoviesLoader } from './pages/Movies/Movies';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/NavigationBar/NavigationBar';
import './App.css';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: HomeLoader,
        element: <Home />
      },
      {
        path: "/movies",
        loader: MoviesLoader,
        element: <Movies />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
