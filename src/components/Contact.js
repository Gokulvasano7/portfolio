import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedinIn, 
  faTwitter, 
  faWhatsapp, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import AnimatedBackground from './AnimatedBackground';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Replace with your WhatsApp number (include country code)
  const whatsappNumber = '919659220236'; // Format: country code + number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Name: ${formData.name}%0A` + 
                   `Email: ${formData.email}%0A` +
                   `Message: ${formData.message}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    {
      name: 'Gmail',
      icon: faEnvelope,
      url: 'mailto:gokulvasan77@gmail.com', // Replace with your email
      color: '#EA4335'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://instagram.com/gokul_vasan_',
      color: '#E1306C'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: 'https://linkedin.com/in/gokulvasan7',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/yourusername',
      color: '#1DA1F2'
    },
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      url: `https://wa.me/${whatsappNumber}`,
      color: '#25D366'
    },
    {
      name: 'YouTube',
      icon: faYoutube,
      url: 'https://youtube.com/c/yourusername',
      color: '#FF0000'
    }
  ];

  return (
    <div className="contact-section">
      {/* <AnimatedBackground type="contact" /> */}
      <div className="social-media-container">
        <h2>Connect With Me</h2>
        <div className="social-buttons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              style={{'--hover-color': social.color}}
            >
              <FontAwesomeIcon icon={social.icon} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      <h1>Contact Me</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
      
      {/* <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: your.email@example.com</p>
        <p>WhatsApp: +91 98765 43210</p>
        <p>Agent: John Doe Agency</p>
      </div> */}
    </div>
  );
}

export default Contact;
