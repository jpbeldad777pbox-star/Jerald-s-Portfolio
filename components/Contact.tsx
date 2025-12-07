'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleBackClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
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
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="contact-title">
              Hire <span className="text-cyan">me</span>
            </h2>
            <h3 className="contact-subtitle">
              Got a project in <span className="text-cyan">mind?</span>
            </h3>
            <div style={{ position: 'relative' }}>
              <Image
                src="https://via.placeholder.com/400x300?text=Let's+Work+Together"
                alt="person climbing bars"
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Send Message
              <Image
                src="https://static.vecteezy.com/system/resources/previews/018/930/479/original/telegram-logo-telegram-icon-transparent-free-png.png"
                alt="Send"
                width={24}
                height={24}
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
