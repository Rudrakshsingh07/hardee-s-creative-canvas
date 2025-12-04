import { FC } from 'react';
import { YouTubeIcon, PlayIcon } from './icons/Icons';

export const YouTubeSection: FC = () => {
  return (
    <section id="youtube" className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-0.5 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-background/60">
                Video Content
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              YouTube
            </h2>

            <p className="text-lg leading-relaxed text-background/70">
              My YouTube channel is my latest artistic adventure! I share tutorials, vlogs, 
              behind-the-scenes, and my favorite creative hacks.
            </p>

            <p className="text-background/60">
              As soon as I post my first video, it will appear here.
            </p>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors mt-4"
            >
              <YouTubeIcon size={20} />
              Visit my YouTube channel
            </a>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-video bg-background/10 rounded-sm overflow-hidden flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PlayIcon size={32} className="text-primary-foreground ml-1" />
                </div>
                {/* Play overlay text */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-sm text-background/50">Coming Soon</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
