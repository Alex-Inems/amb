import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Code, Users, TrendingUp } from "lucide-react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'; // Make sure to import the styles

interface LinkPreview {
  url: string;
  title: string;
  description: string;
}

const links: LinkPreview[] = [
  { url: "https://t.me/+DWQprC01D6hhYjg8", title: "Proof of Work", description: "Join my Telegram group for Web3 projects" },
  { url: "http://t.me/Ambroseweb3", title: "Let's Connect", description: "Connect with me directly on Telegram" },
  { url: "https://www.linkedin.com/in/web3-ambrose-0053a922a/?originalSubdomain=ng", title: "LinkedIn", description: "Check out project resources and links" },
  { url: "https://t.me/Ambrosealpha", title: "Resources", description: "Explore more project links" },
  { url: "https://linktr.ee/Web3Ambrose", title: "More about Me", description: "All my Web3 links in one place" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-32 pb-20">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Hero Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-extrabold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Web3
              </span>{" "}
              Ambrose
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto">
              nCMO @Flipgg_ | CL @Usewavedotapp | CEO @Xcelerategrow | Growth Lead (3 Yrs+) | Smart Contract, Web & AI Developer (4 Yrs+) | Scaling Projects Past $10M+
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving Web3 adoption across Africa and beyond through innovative blockchain solutions, 
              sustainable ecosystems, and community empowerment.
            </p>
          </div>

          {/* CTA Buttons with Hover Previews */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {links.map((link, index) => (
              <div key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id={`tooltip-${index}`}
                >
                  <Button
                    variant={index === 0 ? "default" : "outline"}
                    size="lg"
                    className="px-6 py-4 text-lg"
                  >
                    {link.title}
                  </Button>
                </a>

                <Tooltip
                  id={`tooltip-${index}`}
                  place="top"
                  className="max-w-xs text-left p-3 bg-background border border-primary rounded shadow-lg"
                >
                  <div className="font-semibold">{link.title}</div>
                  <div className="text-sm text-muted-foreground">{link.description}</div>
                  <div className="text-xs text-primary mt-1">{link.url}</div>
                </Tooltip>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
            <Card className="glass-card p-6 text-center group hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Smart Contract Expert</h3>
              <p className="text-muted-foreground">Solidity & Rust development for scalable DeFi solutions</p>
            </Card>

            <Card className="glass-card p-6 text-center group hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community Builder</h3>
              <p className="text-muted-foreground">Growing engaged Web3 communities across Africa</p>
            </Card>

            <Card className="glass-card p-6 text-center group hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Growth Strategist</h3>
              <p className="text-muted-foreground">Scaling projects from idea to mass adoption</p>
            </Card>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
