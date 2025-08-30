import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, Users, Award, Globe, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Wave – SocialFi Wallet",
    role: "Continental Lead",
    description:
      "Built a SocialFi wallet on Solana, driving adoption and community engagement across Africa.",
    metrics: ["Solana-based", "Community-focused", "SocialFi features"],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-green-500",
    links: {
      live: "https://usewave.app",
      code: "#",
      details: "#",
      preview: {
        title: "Wave SocialFi Wallet",
        description: "Solana-based wallet for social finance interactions.",
        image: "https://via.placeholder.com/150x150.png?text=Wave+Wallet",
      },
    },
  },
  {
    title: "Swifey AI – AI + Web3 Project",
    role: "Marketing Lead",
    description:
      "Architected the Swifey AI app and smart contracts, scaling adoption and building strategic partnerships in the Web3 space.",
    metrics: ["AI + Web3 integration", "Smart contracts", "Community initiatives"],
    icon: <Users className="w-8 h-8" />,
    color: "text-blue-500",
    links: {
      live: "https://swifey.ai",
      code: "#",
      details: "#",
      preview: {
        title: "Swifey AI App",
        description: "AI-powered platform for African users in Web3.",
        image: "https://via.placeholder.com/150x150.png?text=Swifey+AI",
      },
    },
  },
  {
    title: "Flip – Gaming & Community Platform",
    role: "Marketing Lead",
    description:
      "Promoted Flip.gg, engaging users and growing the platform’s community presence in Africa.",
    metrics: ["Gaming engagement", "Community growth", "Event hosting"],
    icon: <Award className="w-8 h-8" />,
    color: "text-purple-500",
    links: {
      live: "https://flip.gg",
      code: "#",
      details: "#",
      preview: {
        title: "Flip.gg Platform",
        description: "Gaming and community engagement platform.",
        image: "https://via.placeholder.com/150x150.png?text=Flip+GG",
      },
    },
  },
  // Add your other projects here...
];

const certifications = [
  "Certified Blockchain Developer",
  "Solidity Smart Contract Auditor",
  "DeFi Protocol Specialist",
  "Web3 Community Manager",
  "Crypto Trading Professional",
];

export default function ProofOfWorkSection() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Proof of Work
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstrable results and measurable impact across the Web3 ecosystem
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card p-8 group hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className={`${project.color} group-hover:scale-110 transition-smooth`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="italic text-sm text-muted-foreground mb-3">{project.role}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>

                                        

                    {/* Link Preview */}
                    {project.links.preview && (
                      <div className="flex border rounded-lg overflow-hidden bg-muted/20 hover:shadow-lg transition-smooth cursor-pointer">
                        
                        <div className="p-3 flex-1">
                          <p className="font-bold text-foreground">{project.links.preview.title}</p>
                          <p className="text-sm text-muted-foreground">{project.links.preview.description}</p>
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary underline mt-1 block"
                          >
                            {project.links.live}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Skills */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl font-bold text-foreground">Certifications & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-base border-primary/30 hover:border-primary hover:bg-primary/10 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
