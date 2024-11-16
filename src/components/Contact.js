import React, { useState } from 'react';

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

  return (
    <div className="contact-section">
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
      
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: your.email@example.com</p>
        <p>WhatsApp: +91 98765 43210</p>
        <p>Agent: John Doe Agency</p>
      </div>
    </div>
  );
}

export default Contact;