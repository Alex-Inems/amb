import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Code, Users, TrendingUp } from "lucide-react";

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
            17 | nCMO @PoweredbySYNQ | Dev & Growth Strategist @AxiomExchange | Scaling SYNQ into a $1M+ Web3 Brand
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving Web3 adoption across Africa and beyond through innovative blockchain solutions, 
              sustainable ecosystems, and community empowerment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-4 text-lg gradient-primary hover:shadow-glow transition-smooth">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Let's Connect
            </Button>
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