import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaLanguage, FaUser, FaRuler, FaPalette, FaEye, FaInstagram, FaWhatsapp, FaEnvelope, FaPlay, FaTimes, FaGraduationCap, FaBirthdayCake, FaFilm, FaVideo, FaChevronLeft, FaChevronRight, FaArrowDown } from 'react-icons/fa';
import { Clapperboard, Film } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';


//import images from .src/images/
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';
import image14 from '../images/image14.jpg';
import image15 from '../images/image16.jpg';
import image16 from '../images/image17 .jpg';
import image17 from '../images/image18.jpg';
import image18 from '../images/image19.jpg';
import image20 from '../images/image21.jpg';






const Index = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [imageDominantColor, setImageDominantColor] = useState<string>('#3b82f6');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const galleryImages = [
    image1,image2,image3,image4,image6,image7,image8,image9,image10,image11,image12,image15,image14,image16,image17,image18,image20,image5
  ];

  // Theme-based classes with blue/violet color scheme
  const bgPrimary = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const bgSecondary = isDarkMode ? 'bg-gray-800' : 'bg-blue-50';
  const bgTertiary = isDarkMode ? 'bg-gray-700' : 'bg-violet-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = isDarkMode ? 'border-blue-400/20' : 'border-blue-300/30';
  const borderHover = isDarkMode ? 'hover:border-blue-400/40' : 'hover:border-violet-500/50';

  // Extract dominant color from image
  const extractDominantColor = (imageSrc: string) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      
      const pixelCount = data.length / 4;
      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);
      
      setImageDominantColor(`rgb(${r}, ${g}, ${b})`);
    };
    img.src = imageSrc;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
    extractDominantColor(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % galleryImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
    extractDominantColor(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
    extractDominantColor(galleryImages[prevIndex]);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgPrimary} ${textPrimary}`}>
      <ThemeToggle />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      {/* Hero Section with Dual Background Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Floating Cinema Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FaFilm className="absolute top-20 left-10 text-blue-500/30 text-4xl animate-bounce" style={{ animationDelay: '0s' }} />
          <FaVideo className="absolute top-40 right-20 text-violet-500/30 text-3xl animate-bounce" style={{ animationDelay: '1s' }} />
          <Clapperboard className="absolute bottom-40 left-20 text-blue-500/30 w-12 h-12 animate-bounce" style={{ animationDelay: '2s' }} />
          <FaPlay className="absolute bottom-20 right-10 text-violet-500/30 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          
          {/* Additional floating elements */}
          <Film className="absolute top-60 left-1/4 text-blue-400/20 w-8 h-8 animate-bounce" style={{ animationDelay: '1.5s' }} />
          <FaFilm className="absolute top-80 right-1/3 text-violet-400/20 text-2xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          <Clapperboard className="absolute top-32 right-40 text-blue-400/25 w-6 h-6 animate-bounce" style={{ animationDelay: '3s' }} />
          <FaVideo className="absolute bottom-60 left-1/3 text-violet-400/25 text-2xl animate-bounce" style={{ animationDelay: '3.5s' }} />
          <Film className="absolute bottom-80 right-1/4 text-blue-400/20 w-10 h-10 animate-bounce" style={{ animationDelay: '4s' }} />
        </div>

        {/* Dual Background Images */}
        <div className="absolute inset-0 flex">
          <div 
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage:  `url(${image4})` 
            }}
          ></div>
          <div 
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image12})` 
            }}
          ></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${isDarkMode 
          ? 'bg-gradient-to-br from-black/80 via-gray-900/70 to-blue-900/50' 
          : 'bg-gradient-to-br from-white/90 via-blue-50/80 to-violet-100/60'
        }`}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent animate-pulse">
            Gokulvasan
          </h1>
          <p className={`text-2xl md:text-3xl mb-4 ${textSecondary} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
            Actor & Performer
          </p>
          <p className="text-xl md:text-2xl text-blue-600 mb-8 italic animate-fade-in" style={{ animationDelay: '1s' }}>
            "Bringing characters to life through passion and dedication"
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center gap-2 animate-fade-in shadow-lg hover:shadow-2xl"
              style={{ animationDelay: '1.5s' }}
            >
              <FaPlay className="text-sm animate-pulse" />
              🎬 View Gallery
            </button>
            
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center gap-2 animate-fade-in shadow-lg hover:shadow-2xl"
              style={{ animationDelay: '2s' }}
            >
              <FaArrowDown className="text-sm animate-pulse" />
              💼 Hire Me
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section with Enhanced Animations */}
      <section className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600 animate-fade-in">
              About Me
            </h2>
            <p className={`text-xl ${textSecondary} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              Passionate Actor & Performer with a Creative Vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FaBirthdayCake, label: 'Age', value: '22 Years', delay: '0s' },
                  { icon: FaGraduationCap, label: 'Qualification', value: 'B.E - ECE', delay: '0.1s' },
                  { icon: FaMapMarkerAlt, label: 'Native', value: 'Palani, Tamil Nadu', delay: '0.2s' },
                  { icon: FaLanguage, label: 'Languages', value: 'Tamil, Telugu', delay: '0.3s' },
                  { icon: FaRuler, label: 'Height', value: '164.5 cm (5.48 ft)', delay: '0.4s' },
                  { icon: FaUser, label: 'Skills', value: 'Acting', delay: '0.5s' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`${bgTertiary} p-6 rounded-lg border ${borderColor} ${borderHover} transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in`}
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="text-blue-500 text-xl animate-pulse drop-shadow-md" />
                      <span className={textSecondary}>{item.label}</span>
                    </div>
                    <p className={`${textPrimary} font-semibold`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-violet-100'} p-8 rounded-lg border ${borderColor} animate-fade-in transform hover:scale-105 transition-all duration-300`} style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Physical Attributes</h3>
                <div className="space-y-4">
                  {[
                    { icon: FaPalette, label: 'Hair Color', value: 'Black' },
                    { icon: FaEye, label: 'Eye Color', value: 'Black' },
                    { icon: FaUser, label: 'Skin Tone', value: 'Sandal Brown' }
                  ].map((attr, index) => (
                    <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                      <attr.icon className="text-violet-500 animate-pulse drop-shadow-md" />
                      <span className={textSecondary}>{attr.label}:</span>
                      <span className={`${textPrimary} font-semibold`}>{attr.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section with View Buttons and Video Thumbnails */}
      <section className={`py-20 px-4 ${bgPrimary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600">Featured Work</h2>
            <p className={`text-xl ${textSecondary}`}>Notable performances that showcase my range</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chithha Card */}
            <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-blue-50 to-blue-100'} rounded-lg overflow-hidden border ${borderColor} ${borderHover} transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`}>
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://img.youtube.com/vi/FYj4iZc1rD0/maxresdefault.jpg" 
                  alt="Chithha Movie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Chithha</h3>
                    <p className="text-white/80 text-lg">(2023)</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Supporting Role
                  </span>
                </div>
                <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>Ponni's Lover</h4>
                <p className={`${textSecondary} mb-4`}>A compelling drama exploring emotional depth and human connections.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${bgTertiary} text-blue-600 px-3 py-1 rounded-full text-sm`}>🎬 Featured in Key Scenes</span>
                  <span className={`${bgTertiary} text-violet-600 px-3 py-1 rounded-full text-sm`}>🎥 Worked with Renowned Director</span>
                </div>
                <a 
                  href="https://www.youtube.com/watch?v=FYj4iZc1rD0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full"
                >
                  <FaPlay className="text-sm" />
                  View Project
                </a>
              </div>
            </div>
            
            {/* Kadhal Solla Bayamen Card */}
            <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-violet-50 to-violet-100'} rounded-lg overflow-hidden border ${borderColor} ${borderHover} transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              <div className="h-64 relative overflow-hidden">
                <img 
                  src="https://img.youtube.com/vi/g_xU8jJpVxw/maxresdefault.jpg" 
                  alt="Kadhal Solla Bayamen Movie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">Kadhal Solla Bayamen</h3>
                    <p className="text-white/80 text-lg">(2022)</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Lead Role
                  </span>
                </div>
                <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>Lead Character</h4>
                <p className={`${textSecondary} mb-4`}>A romantic tale through a dreamer's love journey, showcasing versatility and emotional range.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${bgTertiary} text-violet-600 px-3 py-1 rounded-full text-sm`}>🌟 Lead Performance</span>
                  <span className={`${bgTertiary} text-blue-600 px-3 py-1 rounded-full text-sm`}>🔥 Audience Favorite</span>
                  <span className={`${bgTertiary} text-violet-600 px-3 py-1 rounded-full text-sm`}>🏆 Festival Selection</span>
                </div>
                <a 
                  href="https://www.youtube.com/watch?v=g_xU8jJpVxw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full"
                >
                  <FaPlay className="text-sm" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section with Dynamic Glowing Border */}
      <section id="gallery" className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Photo Gallery</h2>
            <p className={`text-xl ${textSecondary}`}>Behind the scenes and professional moments</p>
          </div>
          
          {/* Responsive Grid - 2 columns on mobile, 3 on larger screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="cursor-pointer group animate-fade-in"
                onClick={() => openLightbox(image, index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className={`w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border ${borderColor} group-hover:border-violet-500/40`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Me Section with Instagram Link */}
      <section className={`py-20 px-4 ${bgPrimary} transition-colors duration-500`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600">Connect With Me</h2>
          <p className={`text-xl ${textSecondary} mb-12`}>Let's create something amazing together</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://www.instagram.com/gokul_vasan_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-500 to-blue-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
            >
              <FaInstagram className="text-2xl" />
              <span>Follow on Instagram</span>
            </a>
            <a 
              href="https://wa.me/+919876543210?text=Hello%20Gokulvasan!%20I%20would%20like%20to%20discuss%20a%20potential%20collaboration." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp Me</span>
            </a>
            <a 
              href="mailto:gokulvasan777@gmail.com" 
              className="bg-gradient-to-r from-blue-500 to-violet-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <FaEnvelope className="text-2xl" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Contact Me</h2>
            <p className={`text-xl ${textSecondary}`}>Ready to work together? Let's talk!</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block ${textSecondary} font-semibold mb-2`}>Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-violet-500 focus:outline-none transition-colors`}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block ${textSecondary} font-semibold mb-2`}>Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-violet-500 focus:outline-none transition-colors`}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block ${textSecondary} font-semibold mb-2`}>Message</label>
              <textarea 
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-violet-500 focus:outline-none transition-colors resize-none`}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${bgPrimary} border-t ${borderColor} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={textSecondary}>&copy; 2024 Gokulvasan. All rights reserved.</p>
          <p className="text-blue-600 mt-2">Actor & Performer</p>
        </div>
      </footer>

      {/* Developer Credits Footer */}
      <footer className={`py-6 px-4 ${bgSecondary} transition-colors duration-500 cursor-pointer`} onClick={() => window.open('https://dineshcreates.vercel.app/', '_blank')}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 bg-clip-text text-transparent font-semibold text-lg hover:from-violet-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105" style={{
            filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))',
            textShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
          }}>
            Sprinkled with creativity & code 🪄 | Crafted by Dinesh • Freelance Creator
          </p>
        </div>
      </footer>

      {/* Enhanced Lightbox Modal with Larger Images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-20 bg-black/50 rounded-full p-2"
            >
              <FaTimes className="text-2xl" />
            </button>
            
            {/* Previous Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-20 bg-black/50 rounded-full p-3"
            >
              <FaChevronLeft className="text-3xl" />
            </button>
            
            {/* Next Button */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-20 bg-black/50 rounded-full p-3"
            >
              <FaChevronRight className="text-3xl" />
            </button>
            
            {/* Larger Image with Dynamic Glow */}
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="max-w-full max-h-full object-contain rounded-lg transition-all duration-500"
              style={{
                boxShadow: `0 0 30px ${imageDominantColor}, 0 0 60px ${imageDominantColor}40, 0 0 90px ${imageDominantColor}20`,
                border: `3px solid ${imageDominantColor}60`
              }}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
