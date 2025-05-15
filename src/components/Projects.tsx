
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'defi', label: 'DeFi' },
    { id: 'nft', label: 'NFTs' },
    { id: 'dapp', label: 'dApps' },
    { id: 'web3', label: 'Web3 Integration' },
  ];
  
  const projects = [
    {
      id: 1,
      title: "DeFi Yield Optimizer",
      description: "An automated yield farming protocol that optimizes returns across multiple DeFi platforms.",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop",
      tags: ["DeFi", "Solidity", "React", "Web3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "defi"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "A decentralized marketplace for creating, buying, and selling NFTs with low gas fees.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      tags: ["NFT", "ERC-721", "TypeScript", "IPFS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "nft"
    },
    {
      id: 3,
      title: "DAO Governance Platform",
      description: "A platform for decentralized autonomous organizations to manage proposals and voting.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop",
      tags: ["DAO", "Governance", "Smart Contracts", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "dapp"
    },
    {
      id: 4,
      title: "Cross-Chain Bridge",
      description: "A bridge for transferring assets between Ethereum and other blockchain networks.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop",
      tags: ["Cross-Chain", "Solidity", "Web3"],
      githubUrl: "https://github.com",
      category: "web3"
    },
    {
      id: 5,
      title: "Lending Protocol",
      description: "A decentralized lending platform with variable interest rates based on utilization.",
      image: "https://images.unsplash.com/photo-1642262865526-230e7f364f36?q=80&w=1000&auto=format&fit=crop",
      tags: ["DeFi", "Lending", "Solidity", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "defi"
    },
    {
      id: 6,
      title: "Web3 Social Platform",
      description: "A decentralized social media platform with content monetization features.",
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000&auto=format&fit=crop",
      tags: ["Social", "Web3", "Next.js", "IPFS"],
      githubUrl: "https://github.com",
      category: "web3"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-web3-lightest/30 to-background">
      <div className="section-container">
        <h2 className="section-heading text-center">My Projects</h2>
        <p className="section-subheading text-center mx-auto">
          Explore my Web3 development work across DeFi, NFTs, and dApps
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
