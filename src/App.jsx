import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import ProductDetailModal from './components/ProductDetailModal';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import CollectionPage from './pages/CollectionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivateWorldPage from './pages/PrivateWorldPage';
import PrivateAppointmentsPage from './pages/PrivateAppointmentsPage';

import { BRANDS } from './data/brands';
import { PRODUCTS } from './data/products';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'brand' | 'collection' | 'about' | 'contact'
  const [currentBrandId, setCurrentBrandId] = useState('ikla-maison');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [collectionCategory, setCollectionCategory] = useState('All');

  // URL Hash Sync for fluid routing and direct deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileMenuOpen(false);
      const rawHash = window.location.hash.replace(/^#\/?/, '');
      if (!rawHash) {
        window.scrollTo(0, 0);
        setCurrentView('home');
        return;
      }
      if (!rawHash.startsWith('product/')) {
        setSelectedProduct(null);
      }

      // Split base route from in-page anchor (e.g., "brand/ikla-maison#home-living")
      const [hashAndQuery, anchorId] = rawHash.split('#');
      const [hashPath, queryString = ''] = hashAndQuery.split('?');
      const query = new URLSearchParams(queryString);

      if (hashPath.startsWith('brand/')) {
        const bId = hashPath.split('/')[1];
        if (BRANDS[bId]) {
          setCurrentBrandId(bId);
          setCurrentView('brand');
        }
      } else if (hashPath === 'collection') {
        setCollectionCategory(query.get('category') || 'All');
        setCurrentView('collection');
      } else if (hashPath === 'about') {
        setCurrentView('about');
      } else if (hashPath === 'contact') {
        setCurrentView('contact');
      } else if (hashPath === 'kids') {
        setCurrentView('kids');
      } else if (hashPath === 'griffin') {
        setCurrentView('griffin');
      } else if (hashPath === 'appointments' || hashPath === 'private-appointments') {
        setCurrentView('appointments');
      } else if (hashPath.startsWith('product/')) {
        const pId = hashPath.split('/')[1];
        const prod = PRODUCTS.find((p) => p.id === pId);
        if (prod) {
          setSelectedProduct(prod);
        }
      } else {
        setCurrentView('home');
        window.history.replaceState(null, '', `${window.location.pathname}#/`);
      }

      if (anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view, brandId = null, category = 'All') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProduct(null);
    setCurrentView(view);
    if (view === 'collection') {
      setCollectionCategory(category);
      window.location.hash = `/collection${category !== 'All' ? `?category=${encodeURIComponent(category)}` : ''}`;
    } else if (brandId) {
      setCurrentBrandId(brandId);
      window.location.hash = `/brand/${brandId}`;
    } else {
      window.location.hash = `/${view === 'home' ? '' : view}`;
    }
  };

  useEffect(() => {
    const brandName = currentView === 'brand' ? BRANDS[currentBrandId]?.name : null;
    const pageNames = {
      home: 'Internationally Known, Locally Accepted',
      collection: collectionCategory === 'Accessories' ? 'Accessories & Objects' : 'Private Collections',
      about: 'The Maison',
      contact: 'Private Client Relations',
      kids: 'IKLA Kids',
      griffin: 'The Griffin Edition',
      appointments: 'Private Appointments',
    };
    document.title = `${brandName || pageNames[currentView] || 'IKLA Maison'} | IKLA Maison`;
  }, [currentView, currentBrandId, collectionCategory]);

  const handleSelectBrand = (brandId) => {
    navigateTo('brand', brandId);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#16171A] selection:bg-[#C8A97E]/30 selection:text-[#0A0B0D]">
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
            initialCategory={collectionCategory}
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

        {(currentView === 'kids' || currentView === 'griffin') && (
          <PrivateWorldPage
            world={currentView}
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {currentView === 'appointments' && (
          <PrivateAppointmentsPage
            onSelectProduct={handleSelectProduct}
            onNavigateHome={() => navigateTo('home')}
            onNavigateCollection={() => navigateTo('collection')}
          />
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

      {/* Global Luxury Multi-Brand Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
