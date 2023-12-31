import React, {lazy, Suspense} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/Loading/Loading';
import Footer from './components/Footer/Footer';
import { loader as HomeLoader } from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/NavigationBar/NavigationBar';
import './App.css';
const Movies = lazy( () => import('./pages/Movies/Movies') );
const Home = lazy( () => import('./pages/Home/Home') );

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
        element: <Suspense fallback={<Loading/>}><Home /></Suspense>
      },
      {
        path: "/movies",
        element: <Suspense fallback={<Loading/>}><Movies /></Suspense>
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
