
import React from 'react';
import { Mail, Github, Linkedin, Instagram, Send, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from 'lucide-react'; // Import X icon (formerly Twitter)
import { Discord } from 'lucide-react';
import { MessageSquare } from 'lucide-react'; // For WhatsApp

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
    // Show success message or error
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="section-subheading text-center mx-auto">
          Have a question or want to work together? Feel free to contact me!
        </p>
        
        <div className="glass p-8 relative mt-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Information Side */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:kelvin@kaysfolio.dev" className="text-web3-main hover:text-web3-dark transition-colors">
                      kelvin@kaysfolio.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      linkedin.com/in/kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a href="https://github.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      github.com/kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <X className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">X</h4>
                    <a href="https://x.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      @kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <a href="https://instagram.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      @kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Discord className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Discord</h4>
                    <a href="https://discord.com/users/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                      kelvinomaboe#1234
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Github className="h-5 w-5 text-web3-dark" />
                  </a>
                  <a href="https://linkedin.com/in/kelvinomaboe" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Linkedin className="h-5 w-5 text-web3-dark" />
                  </a>
                  <a href="https://x.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <X className="h-5 w-5 text-web3-dark" />
                  </a>
                  <a href="https://instagram.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Instagram className="h-5 w-5 text-web3-dark" />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <MessageSquare className="h-5 w-5 text-web3-dark" />
                  </a>
                  <a href="https://discord.com/users/kelvinomaboe" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Discord className="h-5 w-5 text-web3-dark" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Message Form Side */}
            <div className="flex-1 relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-web3-light/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-web3-main/20 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
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
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Subject" 
                      required 
                      className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      required 
                      className="border-web3-light/50 focus:border-web3-main focus:ring-web3-main/20 min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-gradient w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
