
import React from 'react';
import { FileText, Send, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-background to-web3-lightest/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">About Me</h2>
            <div className="mb-6 flex items-center">
              <Avatar className="h-52 w-52 border-2 border-web3-main mr-6">
                <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Kelvin Omaboe" />
                <AvatarFallback>KO</AvatarFallback>
              </Avatar>
              <p className="text-lg">
                Hi there! I'm a passionate tech student and Web/App developer & Computer Security expert with a strong interest in blockchain technology, 
                decentralized applications, and the future of the internet.
              </p>
            </div>
            
            <p className="text-lg mb-6">
              My journey began with traditional web development, but after discovering new technologies in 2024, 
              I became fascinated with its potential to revolutionize how we interact with the digital world.
            </p>
            
            <p className="text-lg mb-6">
              Currently, I'm pursuing my degree in Computer Science at the University of Cape Coast while working on various personal projects. 
              I'm particularly interested in learning more aout new and emerging technologies and building bridges between traditional 
              web applications and modern technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Globe className="mr-3 text-web3-main flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Soft-Skills</h3>
                  <p className="text-muted-foreground text-sm">Leardership, Public-Speaking, Team-Work, Project Planning</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="mr-3 text-web3-main flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">University of Cape Coast - B.Sc. Computer Science (2022-2026)</p>
                  <p className="text-muted-foreground text-sm">University Practice Senior High School (2019-2022)</p>
                  <p className="text-muted-foreground text-sm">Primary-JHS : Emmanuelo Daisy International School</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="btn-gradient">
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="border-web3-main text-web3-main hover:bg-web3-main hover:text-white"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <Send size={16} className="mr-2" /> Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-web3-light/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-web3-main/20 rounded-full blur-3xl"></div>
            
            <div className="glass p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-web3-light to-web3-main"></div>
              
              <h3 className="text-xl font-bold mb-6 text-web3-dark">Journey Highlights</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-web3-main pl-4 py-1">
                  <h4 className="font-semibold">Internships:</h4>
                  <p className="text-sm text-muted-foreground">Infromation Technology Department - General Headquarters, Burma Camp</p>
                </div>
                
                <div className="border-l-2 border-web3-light pl-4 py-1">
                  <h4 className="font-semibold">Team Work/Personal Work:</h4>
                  <p className="text-sm text-muted-foreground">Built and Deployed over 15 Web Applications with  Bytant Innovative Group</p>
                  <p className="text-sm text-muted-foreground">4 years of experience and self improvements from working on Personal Projects</p>
                </div>
                
                <div className="border-l-2 border-web3-main pl-4 py-1">
                  <h4 className="font-semibold">Roles:</h4>        
                  <p className="text-sm text-muted-foreground">Served as Band Steward for the CASAD Air Force Cadet- Casford Hall, UCC </p>
                  <p className="text-sm text-muted-foreground">Served as Band Master for CASAD Air Force Cadet - Casford Hall, UCC</p>
                </div>
                
                <div className="border-l-2 border-web3-light pl-4 py-1">
                  <h4 className="font-semibold">Achievements:</h4>
                  <p className="text-sm text-muted-foreground">2nd Runner in the Joy Learning Essay Competition - February 2021 Edition</p>
                  <p className="text-sm text-muted-foreground">Most Dedicated Cadet Recruit, Casford Hall - 2022/2023</p>
                </div>

                <div className="border-l-2 border-web3-main pl-4 py-1">
                  <h4 className="font-semibold">Certifications:</h4>        
                  <p className="text-sm text-muted-foreground">ALX Professional Foundations - 2024 </p>
                  <p className="text-sm text-muted-foreground">Canva Certification Course</p>
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
