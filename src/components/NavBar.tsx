'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getLinkClassName = (path: string, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block px-3 py-2 text-riseon-cream hover:bg-riseon-cream hover:text-riseon-green font-bold text-lg transition-colors rounded-md'
      : 'text-riseon-cream hover:text-opacity-80 font-bold text-xl transition-colors';
    const activeClasses = isMobile ? 'bg-riseon-cream text-riseon-green' : 'border-b-2 border-riseon-cream';

    return isActive(path) ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='bg-riseon-green shadow-sm border-b border-riseon-cream sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-3' onClick={closeMobileMenu}>
            <Image src='/home/11.png' alt='RiseOn Education Icon' width={72} height={72} className='object-contain' />
            <div>
              <h1 className='sm:text-lg lg:text-2xl font-bold text-riseon-cream'>RiseOn Education</h1>
              <p className='text-sm text-riseon-cream hidden sm:block'>From Pages to Possibilities</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link href='/' className={getLinkClassName('/')}>
              Home
            </Link>
            <Link href='/about' className={getLinkClassName('/about')}>
              Meet the Team
            </Link>
            <Link href='/services' className={getLinkClassName('/services')}>
              Services
            </Link>
            <Link href='/#contact' className={getLinkClassName('#contact')}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-md text-riseon-cream hover:bg-riseon-cream hover:text-riseon-green transition-colors'
            onClick={handleMobileMenuToggle}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-riseon-cream/30 mt-2 pt-4 pb-4'>
            <div className='space-y-2'>
              <Link href='/' className={getLinkClassName('/', true)} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href='/about' className={getLinkClassName('/about', true)} onClick={closeMobileMenu}>
                Meet the Team
              </Link>
              <Link href='/services' className={getLinkClassName('/services', true)} onClick={closeMobileMenu}>
                Services
              </Link>
              <Link href='/#contact' className={getLinkClassName('#contact', true)} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
