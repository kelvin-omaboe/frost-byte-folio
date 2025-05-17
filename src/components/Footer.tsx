
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-web3-darkest text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-web3-light to-web3-main bg-clip-text text-transparent">
              Kelvin Omaboe | Tech Boy
            </h3>
            <p className="text-gray-300 mb-4">
              Building the digital future, one project at a time.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kelvin Omaboe. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-web3-main transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-web3-main transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-web3-main transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-web3-main transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-web3-main transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/kelvin-omaboe" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-web3-main transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/kelvin-omaboe" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-web3-main transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/theboy_kaey" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-web3-main transition-colors flex items-center">
                  X
                </a>
              </li>
              <li>
                <a href="mailto:omaboekelvin2005@gmail.com" className="text-gray-300 hover:text-web3-main transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join My Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Get updates on my latest projects and computer security insights
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-web3-dark/50 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-web3-main border-none w-full"
              />
              <button className="bg-web3-main hover:bg-web3-dark text-white px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-web3-dark/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Designed and developed by Kelvin Omaboe in 2025
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-web3-dark/60 hover:bg-web3-dark p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-web3-main" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
