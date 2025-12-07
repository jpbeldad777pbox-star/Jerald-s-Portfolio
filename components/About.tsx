'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <button className="back-btn" onClick={handleBackClick}>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/019/858/315/large_2x/back-flat-color-outline-icon-free-png.png"
            alt="Back"
            width={24}
            height={24}
            style={{ width: '24px', height: '24px' }}
          />
          Back
        </button>
        <div className="about-container">
          <div className="about-image">
            <Image
              src="https://via.placeholder.com/400x400?text=Jerald+Beldad"
              alt="Jerald Beldad - About Me"
              width={400}
              height={400}
              className="about-profile-img"
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">
              About <span className="text-cyan">me</span>
            </h2>
            <p className="about-description">
              I&apos;m an aspiring designer who, loves learning, experimenting with new ideas, or discovering inspiration in every project I work on.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '54px' }}>
              <Link href="#portfolio" className="btn btn-primary">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
