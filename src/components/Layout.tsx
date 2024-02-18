import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import QuickContact from './QuickContact/QuickContact';

function Layout() {
  const location = useLocation();
  const isTrue = location.pathname !== '/contact' && location.pathname !== '/updatedb';
  return (
    <>
      <Header />
      <Outlet />
      {isTrue && <QuickContact />}
      <Footer />
    </>
  );
}

export default Layout;
