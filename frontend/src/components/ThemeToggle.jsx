import { Moon, SunMedium } from 'lucide-react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border bg-[color:var(--surface-strong)] text-[color:var(--text)] transition hover:-translate-y-0.5 hover:border-[color:var(--primary)] soft-border"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;
