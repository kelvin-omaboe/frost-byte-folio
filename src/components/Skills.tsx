import React from 'react';
import { 
  Layers, 
  Code, 
  Database, 
  Box, 
  Settings, 
  Network
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Blockchain",
      icon: <Network className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Ethereum", level: 90 },
        { name: "Solana", level: 75 },
        { name: "Smart Contracts", level: 85 },
        { name: "Web3.js/Ethers.js", level: 90 },
      ]
    },
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "React", level: 95 },
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
      ]
    },
    {
      title: "DeFi Protocols",
      icon: <Layers className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "Uniswap", level: 85 },
        { name: "Aave", level: 80 },
        { name: "Compound", level: 75 },
        { name: "Chainlink", level: 85 },
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
      title: "NFT Development",
      icon: <Box className="h-8 w-8 text-web3-main" />,
      skills: [
        { name: "ERC-721", level: 90 },
        { name: "ERC-1155", level: 85 },
        { name: "NFT Marketplaces", level: 80 },
        { name: "IPFS", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="section-container">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="section-subheading text-center mx-auto">
          I've developed a diverse skill set focused on Web3 technologies and modern web development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-web3-darkest/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-web3-lightest/50 hover:border-web3-light"
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
                        className="bg-gradient-to-r from-web3-light to-web3-main h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
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
