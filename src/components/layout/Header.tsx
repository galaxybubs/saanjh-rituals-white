import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/store' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-[100rem] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Image 
              src="https://static.wixstatic.com/media/b117e9_d1e97e3f959c4c4ca09fa07d3bde5b46~mv2.png?id=saanjh-vector-logo" 
              alt="Saanjh Rituals Logo" 
              width={48}
              height={48}
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <div className="flex flex-col items-start gap-0 py-2" style={{ lineHeight: '0.8' }}>
              <span className="font-heading text-2xl md:text-3xl font-bold text-[#A37A52]" style={{
                letterSpacing: '0.04em',
                fontWeight: '700',
                lineHeight: '0.8'
              }}>
                Saanjh
              </span>
              <span className="font-heading text-xs md:text-sm font-light text-[#A37A52]" style={{
                letterSpacing: '0.2em',
                fontWeight: '300',
                lineHeight: '0.8'
              }}>
                RITUALS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <MiniCart cartIconClassName="flex items-center justify-center" />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-paragraph text-lg text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
