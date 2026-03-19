import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../assets/data';
import logoMark from '../assets/logo-mark.svg';
import ThemeToggle from './ThemeToggle';

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navClassName = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-[color:var(--primary)]' : 'text-[color:var(--text-soft)] hover:text-[color:var(--text)]'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className="container-shell">
        <div className="my-4 flex items-center justify-between rounded-full px-4 py-3 glass-panel">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoMark} alt="Xceller logo" className="h-10 w-10 sm:h-11 sm:w-11" />
            <div className="min-w-0">
              <div className="font-display text-2xl font-bold leading-none text-[color:var(--text)]">
                Xceller
              </div>
              <div className="hidden text-[11px] uppercase tracking-[0.24em] text-[color:var(--text-soft)] sm:block">
                IT Services
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClassName}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Link
              to="/contact"
              className="hidden rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--primary-strong)] lg:inline-flex"
            >
              Start a Project
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border text-[color:var(--text)] lg:hidden soft-border"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="container-shell lg:hidden"
          >
            <div className="mb-4 flex flex-col gap-4 rounded-3xl p-5 glass-panel">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navClassName}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[color:var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
