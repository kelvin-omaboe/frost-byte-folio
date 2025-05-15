
import React from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
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
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="section-subheading text-center mx-auto">
          Have a question or want to work together? Feel free to contact me!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-web3-main mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:alex@web3folio.dev" className="text-web3-main hover:text-web3-dark transition-colors">
                    alex@web3folio.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="h-5 w-5 text-web3-main mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                    linkedin.com/in/alexjohnson
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Github className="h-5 w-5 text-web3-main mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                    github.com/alexweb3
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Twitter className="h-5 w-5 text-web3-main mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Twitter</h4>
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors">
                    @alexweb3
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                  <Github className="h-5 w-5 text-web3-dark" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                  <Linkedin className="h-5 w-5 text-web3-dark" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="p-3 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                  <Twitter className="h-5 w-5 text-web3-dark" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-web3-light/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-web3-main/20 rounded-full blur-3xl"></div>
            
            <div className="glass p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
              
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
    </section>
  );
};

export default Contact;
