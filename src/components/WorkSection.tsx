import { FC, ReactNode } from 'react';
import { HennaIcon, PaletteIcon, CameraIcon, ArrowRightIcon } from './icons/Icons';

interface WorkSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: ReactNode;
  accentColor?: string;
  reversed?: boolean;
}

const WorkCard: FC<WorkSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  icon,
  reversed = false,
}) => {
  return (
    <section id={id} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Image/Visual */}
          <div className={`lg:col-span-6 ${reversed ? 'lg:order-2' : ''}`}>
            <div className="relative group">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-muted to-secondary/50 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <p className="text-sm text-muted-foreground">{title} Examples</p>
                  </div>
                </div>
                {/* Grid overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100">
                  <pattern id={`grid-${id}`} width="5" height="5" patternUnits="userSpaceOnUse">
                    <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
                </svg>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-primary/20 rounded-sm" />
            </div>
          </div>

          {/* Content */}
          <div className={`lg:col-span-6 space-y-6 ${reversed ? 'lg:order-1' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="line-accent" />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {subtitle}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {title}
            </h2>

            <div className="space-y-4">
              {description.map((para, index) => (
                <p key={index} className="swiss-body">
                  {para}
                </p>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group">
              Show Examples
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HennaSection: FC = () => (
  <WorkCard
    id="henna"
    title="Henna"
    subtitle="Traditional Art"
    description={[
      "Henna has always been close to my heart. I started learning as a little girl in India, copying my mother's designs and getting mehndi on every family occasion.",
      "For a while, studies and life kept me busy, but when I came back to the USA, I picked up my cone again—and people loved my art!",
      "Soon it became my little business. Now, I get to make people feel special with unique mehndi designs, and it brings so much joy (and a bit of extra pocket money!).",
    ]}
    icon={<HennaIcon size={32} className="text-primary" />}
  />
);

export const DrawingSection: FC = () => (
  <WorkCard
    id="drawing"
    title="Drawing"
    subtitle="Illustration & Portraits"
    description={[
      "Drawing has been my escape, my passion, and my happiness since childhood. From sketching cartoon characters to creating detailed portraits, it's the one thing that's always close to my heart.",
      "I love experimenting with pens, colors, and digital art, too! It's the little things—like finishing a drawing at 2 am or doodling my favorite things—that make life so beautiful.",
    ]}
    icon={<PaletteIcon size={32} className="text-primary" />}
    reversed
  />
);

export const PhotographySection: FC = () => (
  <WorkCard
    id="photography"
    title="Photography"
    subtitle="Capturing Moments"
    description={[
      "Capturing beautiful moments and stories through my lens is something I deeply enjoy. Photography lets me see the world in a new light and saves memories forever.",
      "I adore portrait shots and candid smiles, but I also love photographing landscapes and all the little details that make life colorful!",
    ]}
    icon={<CameraIcon size={32} className="text-primary" />}
  />
);
