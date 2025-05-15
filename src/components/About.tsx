
import React from 'react';
import { FileText, Send, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-web3-lightest/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">About Me</h2>
            <div className="mb-6 flex items-center">
              <Avatar className="h-32 w-32 border-2 border-web3-main mr-6">
                <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Kelvin Omaboe" />
                <AvatarFallback>KO</AvatarFallback>
              </Avatar>
              <p className="text-lg">
                Hi there! I'm a passionate tech student and Web3 developer with a strong interest in blockchain technology, 
                decentralized applications, and the future of the internet.
              </p>
            </div>
            
            <p className="text-lg mb-6">
              My journey began with traditional web development, but after discovering blockchain technology in 2020, 
              I became fascinated with its potential to revolutionize how we interact with the digital world.
            </p>
            
            <p className="text-lg mb-6">
              Currently, I'm pursuing my degree in Computer Science while working on various Web3 projects. 
              I'm particularly interested in DeFi protocols, NFT platforms, and building bridges between traditional 
              web applications and blockchain technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Globe className="mr-3 text-web3-main flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Web3 Focus</h3>
                  <p className="text-muted-foreground text-sm">Ethereum, Solana, DeFi, NFTs, Smart Contracts</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="mr-3 text-web3-main flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">B.S. Computer Science (Expected 2025)</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="btn-gradient">
                Download Resume
              </Button>
              
              <Button variant="outline" className="border-web3-main text-web3-main hover:bg-web3-main hover:text-white">
                <Send size={16} className="mr-2" /> Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-web3-light/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-web3-main/20 rounded-full blur-3xl"></div>
            
            <div className="glass p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
              
              <h3 className="text-xl font-bold mb-6 text-web3-dark">Web3 Highlights</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-web3-main pl-4 py-1">
                  <h4 className="font-semibold">Ethereum Developer Bootcamp</h4>
                  <p className="text-sm text-muted-foreground">Completed intensive 12-week program on smart contract development</p>
                </div>
                
                <div className="border-l-2 border-web3-light pl-4 py-1">
                  <h4 className="font-semibold">DeFi Research Contributor</h4>
                  <p className="text-sm text-muted-foreground">Published analysis on emerging DeFi protocols</p>
                </div>
                
                <div className="border-l-2 border-web3-main pl-4 py-1">
                  <h4 className="font-semibold">Hackathon Winner</h4>
                  <p className="text-sm text-muted-foreground">1st place at ETHGlobal 2024 for NFT marketplace project</p>
                </div>
                
                <div className="border-l-2 border-web3-light pl-4 py-1">
                  <h4 className="font-semibold">Web3 Community Leader</h4>
                  <p className="text-sm text-muted-foreground">Organizing monthly workshops on blockchain technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
