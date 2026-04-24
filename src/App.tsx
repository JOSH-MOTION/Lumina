/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './components/AuthContext';
import { CartProvider } from './components/CartContext';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <CartProvider>
          <AuthProvider>
          <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/category/:category" element={<Category />} />
            </Routes>
          </main>
          
          <footer className="py-20 border-t border-slate-100 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-slate-400">
              <Link to="/" className="font-bold text-slate-900 text-lg tracking-tight uppercase">Lumina</Link>
              <div className="flex gap-8">
                <Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
                <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
              </div>
              <div className="font-medium">© 2024 Lumina. All rights reserved.</div>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </CartProvider>
    </HelmetProvider>
    </Router>
  );
}

