import { Outlet } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
