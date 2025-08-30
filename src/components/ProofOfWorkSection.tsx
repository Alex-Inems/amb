import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, Users, Award } from "lucide-react";

const achievements = [
  {
    icon: <Coins className="w-8 h-8" />,
    title: "DeFi Protocol Development",
    description: "Built and deployed multiple DeFi protocols handling over $12M in total value locked",
    metrics: ["$12M+ TVL", "5 Protocols", "Zero Hacks"],
    color: "text-yellow-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Token Launch Success",
    description: "Successfully launched 15+ tokens with sustainable tokenomics and strong market performance",
    metrics: ["15+ Tokens", "95% Success Rate", "100K+ Holders"],
    color: "text-green-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Building",
    description: "Grew Web3 communities from zero to thousands of active members across multiple platforms",
    metrics: ["45 Communities", "50K+ Members", "80% Engagement"],
    color: "text-blue-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Industry Recognition", 
    description: "Received multiple industry awards and recognition for contributions to Web3 ecosystem",
    metrics: ["6 Awards", "3 Certifications", "10+ Speaking Events"],
    color: "text-purple-500"
  }
];

const certifications = [
  "Certified Blockchain Developer",
  "Solidity Smart Contract Auditor", 
  "DeFi Protocol Specialist",
  "Web3 Community Manager",
  "Crypto Trading Professional"
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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 group hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className={`${achievement.color} group-hover:scale-110 transition-smooth`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {achievement.metrics.map((metric, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
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