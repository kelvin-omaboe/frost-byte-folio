
import React, { useEffect, useState } from 'react';
import { 
  Layers, 
  Code, 
  Database, 
  Box, 
  Settings, 
  Network
} from 'lucide-react';

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Network className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "HTML/CSS/Js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      title: "Backend",
      icon: <Database className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "SuperBase", level: 80 },
      ]
    },
    {
      title: "Game Development",
      icon: <Layers className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Unity Engine", level: 85 },
        { name: "Pygame", level: 80 },
        { name: "Java", level: 75 },
        { name: "Blender/Coral Draw", level: 85 },
      ]
    },
    {
      title: "Developer Tools",
      icon: <Settings className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Hardhat", level: 90 },
        { name: "Truffle", level: 85 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Box className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Canva", level: 85 },
        { name: "Adobe Creative Cloud", level: 80 },
      ]
    },
    {
      title: "Computer Security",
      icon: <Box className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Penetration Testing", level: 50 },
        { name: "Vulnerability Assessment", level: 60 },
        { name: "Network Security", level: 70 },
        { name: "Web Application Security", level: 80 },
        { name: "Malware Analysis", level: 50 },
      ]  
    }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="section-container">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="section-subheading text-center mx-auto">
          I've developed a diverse skill set focused on modern web/App development and Computer Security
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-web3-darkest/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-web3-lightest/50 hover:border-web3-light ${
                visible ? 'animate-fade-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index * 200)}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-web3-main">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-web3-lightest rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-web3-light to-web3-main h-2 rounded-full transition-all duration-1000 ease-out ${visible ? '' : 'w-0'}`}
                        style={{ 
                          width: visible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 100) + (skillIndex * 100)}ms` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
