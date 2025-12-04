import { FC } from 'react';
import { HennaIcon } from './icons/Icons';

export const Footer: FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <HennaIcon size={24} className="text-primary" />
            <span className="font-semibold">Hardee Kapadiya</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hardee Kapadiya. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#henna" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
