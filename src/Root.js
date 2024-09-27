import './Root.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

function Root() {
  return (
    <div className="Root">
      <Navbar />
      <div id='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
