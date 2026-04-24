import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, ChevronDown, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

export default function Navbar() {
  const { isLoggedIn, user, logout, requireAuth } = useAuth();
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Newsroom', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold tracking-tight uppercase">Lumina</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`${location.pathname === link.path ? 'text-slate-900' : 'hover:text-slate-900'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-500">
            <Search className="w-5 h-5" />
          </button>
          
          {isLoggedIn ? (
            <div className="hidden sm:flex items-center gap-4">
              <button 
                onClick={logout}
                className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors"
              >
                Sign Out
              </button>
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
                <User className="w-4 h-4" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => requireAuth(() => {})}
              className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-500"
            >
              <User className="w-5 h-5" />
            </button>
          )}

          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors relative text-slate-500">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden hover:bg-slate-50 rounded-full transition-colors text-slate-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-2xl font-bold tracking-tight ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn && (
                <button 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-2xl font-bold tracking-tight text-red-500 pt-4 border-t border-slate-100 w-full text-left"
                >
                  Sign Out
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
