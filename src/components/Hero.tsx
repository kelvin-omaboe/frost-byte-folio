
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <p className="text-web3-main font-medium mb-3">Hello, I'm</p>
          </div>
          
          <div className="animate-fade-in [animation-delay:400ms] opacity-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-web3-darkest to-web3-main bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in [animation-delay:600ms] opacity-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-web3-dark">
              Web3 Developer & Blockchain Enthusiast
            </h2>
          </div>
          
          <div className="animate-fade-in [animation-delay:800ms] opacity-0">
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground">
              I build decentralized applications and explore blockchain technologies. 
              Currently focused on smart contract development and DeFi solutions.
            </p>
          </div>
          
          <div className="space-x-4 animate-fade-in [animation-delay:1000ms] opacity-0">
            <Button className="btn-gradient">
              View My Work
            </Button>
            
            <Button variant="outline" className="border-web3-main text-web3-main hover:bg-web3-main hover:text-white transition-all duration-300">
              Contact Me
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow hidden md:block">
            <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-web3-main transition-colors">
              <span className="mb-2">Scroll Down</span>
              <ArrowDownCircle size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
