
import React from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MessageSquare, Shield, Gamepad, Whatsapp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
    // Show success message or error
  };

  return (
    <section id="contact" className="py-10">
      <div className="section-container">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="section-subheading text-center mx-auto max-w-2xl">
          Have a question or want to work together? Feel free to contact me!
        </p>
        
        <div className="glass p-6 md:p-8 relative mt-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Information Side */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:omaboekelvin2005@gmail.com" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      omaboekelvin2005@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/kelvin-omaboe/" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      /kelvin-omaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a href="https://github.com/kelvin-omaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      /kelvin-omaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-web3-main mr-3 mt-1">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                  </svg>
                  <div>
                    <h4 className="font-medium">X</h4>
                    <a href="https://x.com/techjesus_kaey" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      @techjesus_kaey
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <a href="https://www.instagram.com/theboy_kaey" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      @theboy_kaey
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-web3-main mr-3 mt-1">
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/>
                  </svg>
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a href="https://wa.link/75oudd" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Message Form Side */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 md:w-40 md:h-40 bg-web3-light/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-60 md:h-60 bg-web3-main/20 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Subject" 
                      required 
                      className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      required 
                      className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-gradient w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Mobile Social Links */}
          <div className="mt-6 block md:hidden">
            <h3 className="text-lg font-bold mb-3">Let's Connect</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <a href="https://github.com/kelvin-omaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Github className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://linkedin.com/in/kelvin-omaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Linkedin className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://x.com/techjesus_kaey" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-web3-dark">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/theboy_kaey" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Instagram className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://wa.link/75oudd" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-web3-dark">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/>
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
