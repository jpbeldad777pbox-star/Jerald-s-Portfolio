'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const portfolioItems = [
    { id: 1, category: 'web-design', image: 'https://jbsoftware.ca/wp-content/uploads/web-design.jpg', alt: 'Course Website Landing Page' },
    { id: 2, category: 'ui', images: [
      'https://img.freepik.com/premium-vector/online-training-courses-landing-page-design-concept_254538-184.jpg',
      'https://tse4.mm.bing.net/th/id/OIP.doYHfVKgVncrGIL5jmSOMgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
    ] },
    { id: 3, category: 'ux', images: [
      'https://tse4.mm.bing.net/th/id/OIP.FQZDZgMT85U_bgY-eIkENQHaDt?w=660&h=330&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://ibyteinfomatics.com/blog/wp-content/uploads/2021/08/Featured_banner-%E2%80%93-3.jpg',
      'https://www.thrillingtech.com/wp-content/uploads/2023/07/uxui-designing-1-1024x641.jpg'
    ] },
  ];

  const filters = ['all', 'ui', 'ux', 'web-design'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
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
        <h2 className="portfolio-title">
          My recent <span className="text-cyan">works</span>
        </h2>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item fade-in-up">
              {'image' in item ? (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={264}
                  height={158}
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  {item.images.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt={`Portfolio ${idx + 1}`}
                      width={200}
                      height={170}
                      style={{ borderRadius: '8px' }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
