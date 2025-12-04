import { FC } from 'react';
import { StarIcon } from './icons/Icons';

const achievements = [
  'Winner of multiple art and mehndi competitions',
  'Professional Henna artist with a flourishing side business',
  'Specialized in drawing and portrait art since childhood',
  'Experienced photographer, capturing people and places',
  'YouTube creator sharing tutorials and creative vlogs',
];

export const AboutSection: FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="line-accent" />
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  About
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                My Creative<br />
                <span className="text-primary">Journey</span>
              </h2>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                My journey includes winning school drawing competitions, learning classical 
                mehndi from my elders, and making memories with every new creation.
              </p>
              <p className="swiss-body">
                Now, I combine all my skills: henna art, drawing, photography, and YouTube—sharing 
                my craft and culture with even more people!
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <StarIcon 
                      size={16} 
                      className="text-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" 
                    />
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {[
                { number: '10+', label: 'Years Creating' },
                { number: '100+', label: 'Henna Designs' },
                { number: '50+', label: 'Portraits' },
                { number: '∞', label: 'Passion' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
