import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/shashikant190", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shashikant-maurya-37b360251", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "mshashikant3600@gmail.com", href: "mailto:mshashikant3600@gmail.com" },
    { icon: <Phone size={16} />, text: "+91-7559372735", href: "tel:+917559372735" },
    { icon: <MapPin size={16} />, text: "Pune, India", href: "#" },
  ];

  return (
    <footer className="bg-gray-900/80 border-t border-maroon-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">Shashikant</span>
                <span className="text-maroon-500">Maurya</span>
              </div>
              <p className="text-gray-400 mb-6">
                Software Developer | Entrepreneurial Program Facilitator passionate about building interactive platforms 
                and delivering high-performance solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-gray-400 hover:text-maroon-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-maroon-400">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Professional Summary', href: '#summary' },
                  { name: 'Work Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Education', href: '#education' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-maroon-400">Get In Touch</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="mr-3 text-maroon-400">{info.icon}</span>
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-maroon-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Shashikant Maurya. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with Dedication, efforts and hopes ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;