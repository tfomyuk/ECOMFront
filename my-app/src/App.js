import { RouterProvider, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import './App.css';
import appRouter from './router/routerConfig';
import CartMenu from './components/cartMenu';

const ScrollToTop = () =>{
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className='app'>
    <RouterProvider router={appRouter}>
      <ScrollToTop />
     
    </RouterProvider>
    </div>
  );
}

export default App;