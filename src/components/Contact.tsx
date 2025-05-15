
import React from 'react';
import { Mail, Github, Linkedin, Instagram, Send, MessageSquare, X } from 'lucide-react';
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
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="section-heading text-center">Get In Touch</h2>
        <p className="section-subheading text-center mx-auto max-w-2xl">
          Have a question or want to work together? Feel free to contact me!
        </p>
        
        <div className="glass p-6 md:p-8 relative mt-8 md:mt-12">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
          
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Contact Information Side */}
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:kelvin@kaysfolio.dev" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      kelvin@kaysfolio.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      /kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a href="https://github.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      /kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <X className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">X</h4>
                    <a href="https://x.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      @kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Instagram</h4>
                    <a href="https://instagram.com/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      @kelvinomaboe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-web3-main mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  {/* Using a custom SVG for Discord since Discord isn't available in lucide-react */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-web3-main mr-3 mt-1"
                  >
                    <path d="M9 16c1.2 0 2.25-.72 2.25-1.6S10.2 12.8 9 12.8s-2.25.72-2.25 1.6S7.8 16 9 16Z" />
                    <path d="M15 16c1.2 0 2.25-.72 2.25-1.6s-1.05-1.6-2.25-1.6-2.25.72-2.25 1.6S13.8 16 15 16Z" />
                    <path d="M5.61 19.13c1.46.69 3.08 1.04 4.67 1.04 5.5 0 8.96-2.75 9.82-8.01.25-1.5.24-3.04-.06-4.55-.91-4.63-7.26-1.98-8.89-1.98-1.17 0-3.25-.28-5.38-1.29-2.51-1.2-3.33 7.85-3.77 8.92-.61 1.49-.42 3.38.08 4.76.71 1.94 1.7 1.8 3.53 1.11Z" />
                    <path d="M4.5 17.72c-.38 0-.71-.32-.68-.7.04-.58.19-1.32.51-2.2.34-.95.92-1.87 1.91-2.24.92-.35 1.91-.1 2.72.53 1.54 1.2 3.3 1.82 5.03 1.82s3.49-.62 5.03-1.82c.81-.63 1.8-.88 2.72-.53.99.37 1.57 1.3 1.91 2.24.32.88.47 1.62.51 2.2.03.38-.3.7-.68.7H4.5Z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Discord</h4>
                    <a href="https://discord.com/users/kelvinomaboe" target="_blank" rel="noreferrer" className="text-web3-main hover:text-web3-dark transition-colors text-sm">
                      kelvinomaboe#1234
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <h3 className="text-xl font-bold mb-3">Let's Connect</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="https://github.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Github className="h-4 w-4 text-web3-dark" />
                  </a>
                  <a href="https://linkedin.com/in/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Linkedin className="h-4 w-4 text-web3-dark" />
                  </a>
                  <a href="https://x.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <X className="h-4 w-4 text-web3-dark" />
                  </a>
                  <a href="https://instagram.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <Instagram className="h-4 w-4 text-web3-dark" />
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    <MessageSquare className="h-4 w-4 text-web3-dark" />
                  </a>
                  <a href="https://discord.com/users/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                    {/* Custom Discord icon for the social links section */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-web3-dark"
                    >
                      <path d="M9 16c1.2 0 2.25-.72 2.25-1.6S10.2 12.8 9 12.8s-2.25.72-2.25 1.6S7.8 16 9 16Z" />
                      <path d="M15 16c1.2 0 2.25-.72 2.25-1.6s-1.05-1.6-2.25-1.6-2.25.72-2.25 1.6S13.8 16 15 16Z" />
                      <path d="M5.61 19.13c1.46.69 3.08 1.04 4.67 1.04 5.5 0 8.96-2.75 9.82-8.01.25-1.5.24-3.04-.06-4.55-.91-4.63-7.26-1.98-8.89-1.98-1.17 0-3.25-.28-5.38-1.29-2.51-1.2-3.33 7.85-3.77 8.92-.61 1.49-.42 3.38.08 4.76.71 1.94 1.7 1.8 3.53 1.11Z" />
                      <path d="M4.5 17.72c-.38 0-.71-.32-.68-.7.04-.58.19-1.32.51-2.2.34-.95.92-1.87 1.91-2.24.92-.35 1.91-.1 2.72.53 1.54 1.2 3.3 1.82 5.03 1.82s3.49-.62 5.03-1.82c.81-.63 1.8-.88 2.72-.53.99.37 1.57 1.3 1.91 2.24.32.88.47 1.62.51 2.2.03.38-.3.7-.68.7H4.5Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Message Form Side */}
            <div className="flex-1 order-1 lg:order-2 relative">
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
              <a href="https://github.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Github className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://linkedin.com/in/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Linkedin className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://x.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <X className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://instagram.com/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <Instagram className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                <MessageSquare className="h-4 w-4 text-web3-dark" />
              </a>
              <a href="https://discord.com/users/kelvinomaboe" target="_blank" rel="noreferrer" className="p-2 bg-web3-lightest rounded-full hover:bg-web3-light transition-colors">
                {/* Custom Discord icon for the social links section */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-web3-dark"
                >
                  <path d="M9 16c1.2 0 2.25-.72 2.25-1.6S10.2 12.8 9 12.8s-2.25.72-2.25 1.6S7.8 16 9 16Z" />
                  <path d="M15 16c1.2 0 2.25-.72 2.25-1.6s-1.05-1.6-2.25-1.6-2.25.72-2.25 1.6S13.8 16 15 16Z" />
                  <path d="M5.61 19.13c1.46.69 3.08 1.04 4.67 1.04 5.5 0 8.96-2.75 9.82-8.01.25-1.5.24-3.04-.06-4.55-.91-4.63-7.26-1.98-8.89-1.98-1.17 0-3.25-.28-5.38-1.29-2.51-1.2-3.33 7.85-3.77 8.92-.61 1.49-.42 3.38.08 4.76.71 1.94 1.7 1.8 3.53 1.11Z" />
                  <path d="M4.5 17.72c-.38 0-.71-.32-.68-.7.04-.58.19-1.32.51-2.2.34-.95.92-1.87 1.91-2.24.92-.35 1.91-.1 2.72.53 1.54 1.2 3.3 1.82 5.03 1.82s3.49-.62 5.03-1.82c.81-.63 1.8-.88 2.72-.53.99.37 1.57 1.3 1.91 2.24.32.88.47 1.62.51 2.2.03.38-.3.7-.68.7H4.5Z" />
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
