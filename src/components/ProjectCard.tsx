
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="group bg-white dark:bg-web3-darkest/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-web3-lightest/50 hover:border-web3-light">
      <div className="relative overflow-hidden w-full h-48">
        <div className="absolute inset-0 bg-web3-dark/10 group-hover:bg-web3-dark/0 transition-all duration-300"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-web3-lightest text-web3-dark hover:bg-web3-light hover:text-web3-darkest"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-3 mt-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-web3-main transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-web3-main transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          <div className="grow"></div>
          
          <a 
            href={liveUrl || githubUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-web3-main hover:text-web3-dark transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
