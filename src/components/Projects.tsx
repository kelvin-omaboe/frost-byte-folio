import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Webapp', label: 'Web App' },
    { id: 'moapp', label: 'Mobile App' },
    { id: 'comsec', label: 'Computer Security' },
    { id: 'gamedev', label: 'Games' },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Crib",
      description: "A social Platform for all Creatives to connect, share, and collaborate on projects.",
      image: "public/crib.png",
      tags: ["Social","Next.Js", "SuperBase", "Vercel", "HTML/CSS/Js"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Webapp"
    },
    {
      id: 2,
      title: "Vision",
      description: "An Online App to test vision and eye health using tests.",
      image: "public/vision.png",
      tags: ["Health Care","Next.Js", "SuperBase", "Vercel", "HTML/CSS/Js","typeScript"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Webapp"
    },
    {
      id: 3,
      title: "Next Logistics",
      description: "A shipping and logistics platform that connects shippers with carriers.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop",
      tags: ["Transport", "Next.Js", "SuperBase", "Vercel", "HTML/CSS/Js"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Webapp"
    },
    {
      id: 4,
      title: "Launching Soon",
      description: "Launching Soon",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop",
      tags: [""],
      githubUrl: "#",
      category: "moapp"
    },
    {
      id: 5,
      title: "Launching Soon",
      description: "Launching Soon",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000&auto=format&fit=crop",
      tags: [""],
      githubUrl: "#",
      liveUrl: "#",
      category: "moapp"
    },
    {
      id: 6,
      title: "Launching Soon",
      description: "Launching Soon",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000&auto=format&fit=crop",
      tags: [""],
      githubUrl: "#",
      category: "gamedev"
    },
    {
      id: 7,
      title: "Launching Soon",
      description: "Launching Soon",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000&auto=format&fit=crop",
      tags: [""],
      githubUrl: "#",
      category: "comsec"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-web3-lightest/30 to-background">
      <div className="section-container">
        <h2 className="section-heading text-center">My Projects</h2>
        <p className="section-subheading text-center mx-auto">
          Explore my work across Web/App Dev, Computer Security, and Game Development
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={
                activeFilter === filter.id 
                  ? "bg-web3-main hover:bg-web3-dark text-white" 
                  : "border-web3-light text-web3-dark hover:bg-web3-lightest"
              }
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
