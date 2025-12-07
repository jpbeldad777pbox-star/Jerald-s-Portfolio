'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Portfolio</h1>
      <nav className={`nav-menu ${menuOpen ? 'mobile-open' : ''}`}>
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#about" className="nav-item">
          About Me
        </Link>
        <Link href="#contact" className="nav-item">
          Contact
        </Link>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
}
