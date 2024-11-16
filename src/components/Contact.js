import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: your.email@example.com</p>
        <p>Phone: +1 234 567 8900</p>
        <p>Agent: John Doe Agency</p>
      </div>
    </div>
  );
}

export default Contact;