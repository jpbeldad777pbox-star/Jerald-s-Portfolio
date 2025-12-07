'use client';

import Image from 'next/image';

export default function Footer() {
  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'https://e0.pxfuel.com/wallpapers/1005/400/desktop-wallpaper-black-facebook-icon-icono-de-aplicacion-iconos-de-redes-sociales-icono-de-ios.jpg' },
    { name: 'Instagram', url: '#', icon: 'https://tse2.mm.bing.net/th/id/OIP.4fLcBk_g8eYKdPiXlL2J2gHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Twitter', url: '#', icon: 'https://wallpapers.com/images/hd/black-bird-silhouette-white-circle-kfqb976zeakvkzhs.jpg' },
    { name: 'YouTube', url: '#', icon: 'https://static.vecteezy.com/system/resources/previews/018/930/569/original/youtube-logo-youtube-icon-transparent-free-png.png' },
  ];

  return (
    <footer className="footer">
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
        <div className="footer-content">
          <div>
            <h3 className="footer-title">Contact Me</h3>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-icon"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <Image
                src="https://tse2.mm.bing.net/th/id/OIP.I9ILOU9MvDd171cTLQ0ppAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Phone"
                width={32}
                height={32}
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <div>Contact</div>
                <div>+639939972416</div>
              </div>
            </div>
            <div className="contact-item">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/000/571/088/original/vector-mail-icon.jpg"
                alt="Email"
                width={32}
                height={32}
                style={{ width: '32px', height: '32px' }}
              />
              <div>
                <div>Email</div>
                <div>beldadjerald0@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
