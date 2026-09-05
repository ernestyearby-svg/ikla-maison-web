import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ProductDetailModal from './components/ProductDetailModal';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import CollectionPage from './pages/CollectionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { useCart } from './context/CartContext';
import { BRANDS } from './data/brands';
import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'brand' | 'collection' | 'about' | 'contact'
  const [currentBrandId, setCurrentBrandId] = useState('ikla-maison');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const { toastMessage } = useCart();

  // URL Hash Sync for fluid routing and direct deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentView('home');
        return;
      }
      if (!hash.startsWith('product/')) {
        setSelectedProduct(null);
      }
      if (hash.startsWith('brand/')) {
        const bId = hash.split('/')[1];
        if (BRANDS[bId]) {
          setCurrentBrandId(bId);
          setCurrentView('brand');
        }
      } else if (hash === 'collection') {
        setCurrentView('collection');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'contact') {
        setCurrentView('contact');
      } else if (hash.startsWith('product/')) {
        const pId = hash.split('/')[1];
        const prod = PRODUCTS.find((p) => p.id === pId);
        if (prod) {
          setSelectedProduct(prod);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view, brandId = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProduct(null);
    setCurrentView(view);
    if (brandId) {
      setCurrentBrandId(brandId);
      window.location.hash = `/brand/${brandId}`;
    } else {
      window.location.hash = `/${view === 'home' ? '' : view}`;
    }
  };

  const handleSelectBrand = (brandId) => {
    navigateTo('brand', brandId);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#16171A] selection:bg-[#C8A97E]/30 selection:text-[#0A0B0D]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white border border-[#C8A97E] text-[#16171A] text-xs py-3 px-5 shadow-2xl flex items-center gap-3 animate-fade-in rounded-xs">
          <span className="w-2 h-2 rounded-full bg-[#C8A97E]" />
          <span className="font-medium font-manrope">{toastMessage}</span>
        </div>
      )}

      {/* Global Luxury Navigation */}
      <Navbar
        currentView={currentView}
        currentBrandId={currentBrandId}
        onNavigate={navigateTo}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Slide-out Mobile Navigation Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={navigateTo}
        currentView={currentView}
        currentBrandId={currentBrandId}
      />

      {/* Primary Page Views */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onSelectBrand={handleSelectBrand}
            onSelectProduct={handleSelectProduct}
            onNavigateCollection={() => navigateTo('collection')}
            onNavigateAbout={() => navigateTo('about')}
          />
        )}

        {currentView === 'brand' && (
          <BrandPage
            brandId={currentBrandId}
            onSelectBrand={handleSelectBrand}
            onSelectProduct={handleSelectProduct}
            onNavigateHome={() => navigateTo('home')}
            onNavigateCollection={() => navigateTo('collection')}
          />
        )}

        {currentView === 'collection' && (
          <CollectionPage
            onSelectProduct={handleSelectProduct}
            onSelectBrand={handleSelectBrand}
            initialBrandFilter="all"
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
        )}

        {currentView === 'about' && (
          <AboutPage
            onSelectBrand={handleSelectBrand}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateCollection={() => navigateTo('collection')}
          />
        )}

        {currentView === 'contact' && (
          <ContactPage onNavigateHome={() => navigateTo('home')} />
        )}
      </main>

      {/* Product Detail Modal (PDP) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSelectBrand={handleSelectBrand}
          onContinueShopping={() => setSelectedProduct(null)}
        />
      )}

      {/* Slide-Over Shopping Bag Drawer */}
      <CartDrawer
        onNavigateCollection={() => navigateTo('collection')}
        onSelectBrand={handleSelectBrand}
        onReturnHome={() => navigateTo('home')}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Standalone Concierge Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onReturnHome={() => {
          setIsCheckoutOpen(false);
          navigateTo('home');
        }}
      />

      {/* Global Luxury Multi-Brand Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
