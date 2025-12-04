import { FC } from 'react';
import { MailIcon, InstagramIcon, YouTubeIcon } from './icons/Icons';

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Create<br />
              <span className="text-primary">Together</span>
            </h2>
            <p className="swiss-body">
              Whether you're looking for a custom henna design, a portrait commission, 
              or just want to say hello—I'd love to hear from you!
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <a
                href="mailto:hello@hardeekapadiya.com"
                className="group p-8 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors hover-lift"
              >
                <MailIcon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">hello@hardeekapadiya.com</p>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors hover-lift"
              >
                <InstagramIcon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                <p className="text-muted-foreground text-sm">@hardeekapadiya</p>
              </a>

              {/* YouTube Card */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-secondary rounded-sm hover:bg-secondary/80 transition-colors hover-lift md:col-span-2"
              >
                <YouTubeIcon size={32} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">YouTube</h3>
                <p className="text-muted-foreground text-sm">Subscribe for tutorials and vlogs</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
