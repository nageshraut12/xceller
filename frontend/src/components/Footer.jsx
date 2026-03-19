import { Link } from 'react-router-dom';
import { footerLinks, navLinks } from '../assets/data';
import { siteConfig } from '../utils/site';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-shell">
        <div className="grid gap-10 rounded-[2rem] p-8 glass-panel md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-bold">Xceller IT Services</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-soft)]">
              Delivering technology strategy, engineering excellence, and training programs that move businesses and careers forward.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[color:var(--text)]">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--text-soft)]">
              {navLinks.slice(0, 5).map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[color:var(--text)]">Solutions</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[color:var(--text-soft)]">
              {footerLinks.services.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[color:var(--text)]">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-[color:var(--text-soft)]">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 px-2 text-sm text-[color:var(--text-soft)] md:flex-row">
          <p>© {new Date().getFullYear()} Xceller IT Services. All rights reserved.</p>
          <p>Modern IT services, training, and enterprise solutions.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
