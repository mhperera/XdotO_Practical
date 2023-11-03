import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './components/NavigationBar/NavigationBar';
import './App.css';

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
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
