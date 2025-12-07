import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-warm-cream">
      <div className="max-w-[100rem] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6 flex items-center gap-3">
              <Image
                src="https://static.wixstatic.com/media/b117e9_7a6cf5be3dbb4573bd2fac8dd38c7ca8~mv2.png"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                originWidth={1024}
                originHeight={1024}
                alt="Saanjh Rituals Logo"
              />
              <span className="font-heading text-2xl font-bold text-primary">
                Saanjh
              </span>
            </Link>
            <p className="font-paragraph text-sm text-warm-cream/70 leading-relaxed">
              Ancestral botanicals meet golden-hour calm. A ritual rebirth for evening grounding.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/store"
                  className="font-paragraph text-sm text-warm-cream/70 hover:text-primary transition-colors duration-300"
                >
                  All Ritual Blends
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="font-paragraph text-sm text-warm-cream/70 hover:text-primary transition-colors duration-300"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="font-paragraph text-sm text-warm-cream/70 hover:text-primary transition-colors duration-300"
                >
                  About Saanjh
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="font-paragraph text-sm text-warm-cream/70 hover:text-primary transition-colors duration-300"
                >
                  The Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-paragraph text-sm text-warm-cream/70 hover:text-primary transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/saanjhrituals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/saanjhrituals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/saanjhrituals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@saanjhrituals.com"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="font-paragraph text-sm text-warm-cream/70">
              hello@saanjhrituals.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-warm-cream/60">
              © {new Date().getFullYear()} Saanjh Rituals. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-primary italic">
              Slow sensory wellness rooted in heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
