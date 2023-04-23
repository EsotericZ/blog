import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Single from './pages/Single';
import Write from './pages/Write';
import './style.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      { 
        path: '/post/:id',
        element: <Single />,
      },
      { 
        path: '/Write',
        element: <Write />,
      },
    ]
  },
  { 
    path: '/Login',
    element: <Login />,
  },
])

function App() {
  return (
    <div classNae="app">
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;