'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-brand">JeraldDesign</div>
            <div className="hero-text">
              <div className="hero-greeting">Hi It's Me</div>
              <h1 className="hero-name">Jerald Beldad</h1>
              <div className="hero-title">And I'm a UI Developer</div>
            </div>
            <div className="hero-buttons">
              <Link href="#contact" className="btn btn-primary">
                Hire me
              </Link>
              <a href="/cv.pdf" className="btn btn-secondary" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <Image
                src="https://via.placeholder.com/400x400?text=Jerald+Beldad"
                alt="Jerald Beldad - UI Developer"
                width={400}
                height={400}
                className="hero-profile-img"
              />
              <div className="hero-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
