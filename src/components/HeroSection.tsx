import { FC } from 'react';
import { HennaIcon, PaletteIcon, CameraIcon, PlayIcon } from './icons/Icons';

export const HeroSection: FC = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3">
                <div className="line-accent animate-draw-line" />
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Artist & Creator
                </span>
              </div>
            </div>

            <h1 
              className="swiss-heading opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.2s' }}
            >
              Hardee<br />
              <span className="text-primary">Kapadiya</span>
            </h1>

            <p 
              className="swiss-body max-w-xl opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.3s' }}
            >
              An Indian girl who moved to the USA, bringing my roots, colors, and creativity 
              with me. I've been passionate about art since I was a kid—drawing, painting, 
              and losing myself in creative adventures.
            </p>

            {/* Skill Pills */}
            <div 
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.4s' }}
            >
              {[
                { icon: HennaIcon, label: 'Henna' },
                { icon: PaletteIcon, label: 'Drawing' },
                { icon: CameraIcon, label: 'Photography' },
                { icon: PlayIcon, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-sm text-secondary-foreground"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div 
              className="flex gap-4 pt-4 opacity-0 animate-fade-up" 
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#henna"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border font-medium rounded-sm hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-primary/30 rounded-sm" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-sm" />
              
              {/* Main image placeholder */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <HennaIcon size={40} className="text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Portrait</p>
                  </div>
                </div>
                {/* Decorative pattern overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
