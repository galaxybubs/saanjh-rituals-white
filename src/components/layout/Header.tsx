import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-center leading-none -space-y-1">
              <span className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F5F5DC] via-[#E8D4B8] to-[#D4AF37] bg-clip-text text-transparent" style={{
                textShadow: '0 3px 12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(232, 212, 184, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                WebkitTextStroke: '0.4px rgba(139, 105, 20, 0.25)',
                letterSpacing: '-0.02em'
              }}>
                Saanjh
              </span>
              <span className="font-heading text-xs md:text-sm font-light tracking-[0.15em] bg-gradient-to-r from-[#D4AF37] via-[#C9A961] to-[#A37A52] bg-clip-text text-transparent" style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 16px rgba(212, 175, 55, 0.3)',
                filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4))',
                WebkitTextStroke: '0.3px rgba(107, 80, 20, 0.2)',
                letterSpacing: '0.15em'
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
