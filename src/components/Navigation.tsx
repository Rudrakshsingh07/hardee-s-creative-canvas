import { FC, useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Henna', href: '#henna' },
  { label: 'Drawing', href: '#drawing' },
  { label: 'Photography', href: '#photography' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            HK
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-medium bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
