import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, TrendingUp, Users, DollarSign } from "lucide-react";

const projects = [
  {
    title: "DecentraSwap Protocol",
    category: "DeFi",
    description: "A next-generation AMM DEX with advanced features like concentrated liquidity and cross-chain swaps. Built for maximum capital efficiency.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Solidity", "TypeScript", "DeFi", "AMM"],
    metrics: {
      tvl: "$5.2M",
      users: "15K+",
      volume: "$45M+"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Live",
    featured: true
  },
  {
    title: "AfriCoin Ecosystem",
    category: "Token",
    description: "A comprehensive cryptocurrency ecosystem designed specifically for African markets, featuring staking, governance, and utility functions.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Tokenomics", "Governance", "Staking", "Mobile"],
    metrics: {
      tvl: "$2.8M",
      users: "25K+",
      volume: "$12M+"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Live",
    featured: true
  },
  {
    title: "Web3 Learning Platform",
    category: "Education",
    description: "Interactive platform for learning blockchain development with hands-on coding exercises, mentorship, and certification programs.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["React", "Node.js", "Education", "Blockchain"],
    metrics: {
      tvl: "200+",
      users: "3K+",
      volume: "95%"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Live",
    featured: false
  },
  {
    title: "NFT Marketplace",
    category: "NFT",
    description: "Curated NFT marketplace focusing on African digital art and collectibles with low fees and creator-friendly royalties.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["NFT", "IPFS", "Marketplace", "Art"],
    metrics: {
      tvl: "$800K",
      users: "5K+",
      volume: "$3.2M+"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Live",
    featured: false
  },
  {
    title: "DeFi Yield Optimizer",
    category: "DeFi",
    description: "Automated yield farming protocol that optimizes returns across multiple DeFi platforms while minimizing risks and gas costs.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Yield Farming", "Automation", "Optimization", "Multi-chain"],
    metrics: {
      tvl: "$3.5M",
      users: "8K+",
      volume: "18.5%"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Live",
    featured: false
  },
  {
    title: "Cross-Chain Bridge",
    category: "Infrastructure",
    description: "Secure and efficient bridge for transferring assets between Ethereum, BSC, and Polygon networks with minimal fees.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format",
    tags: ["Cross-chain", "Bridge", "Security", "Multi-chain"],
    metrics: {
      tvl: "$1.2M",
      users: "6K+",
      volume: "$8M+"
    },
    links: {
      live: "#",
      github: "#",
      demo: "#"
    },
    status: "Beta",
    featured: false
  }
];

const getMetricIcon = (category: string) => {
  switch (category) {
    case "DeFi":
    case "Token":
      return <DollarSign className="w-4 h-4" />;
    case "Education":
      return <Users className="w-4 h-4" />;
    default:
      return <TrendingUp className="w-4 h-4" />;
  }
};

const getMetricLabel = (category: string, key: string) => {
  if (category === "Education") {
    const labels = { tvl: "Students", users: "Graduates", volume: "Success Rate" };
    return labels[key as keyof typeof labels] || key;
  }
  const labels = { tvl: "TVL", users: "Users", volume: "Volume" };
  return labels[key as keyof typeof labels] || key;
};

export default function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative Web3 solutions that drive real-world impact and adoption
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Spotlight Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card overflow-hidden group hover:shadow-elegant transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Live' ? 'default' : 'secondary'}
                      className={project.status === 'Live' ? 'bg-green-500' : 'bg-orange-500'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge 
                          key={i}
                          variant="outline"
                          className="border-primary/30 text-primary hover:border-primary hover:bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="flex items-center justify-center gap-1 text-primary mb-1">
                            {getMetricIcon(project.category)}
                            <span className="text-sm font-medium">
                              {getMetricLabel(project.category, key)}
                            </span>
                          </div>
                          <div className="text-lg font-bold text-foreground">{value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="glass-card overflow-hidden group hover:shadow-elegant transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge 
                          key={i}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        View Project
                      </Button>
                      <Button size="sm" variant="ghost" className="px-2">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-6">
          <Card className="glass-card p-8 max-w-3xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate on building the next generation of Web3 solutions that make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary">
                  Start a Project
                </Button>
                <Button variant="outline" size="lg">
                  View All Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
