import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp, Award, Users } from "lucide-react";

const journeySteps = [
  {
    year: "2024 - Present",
    title: "Senior Blockchain Architect",
    company: "Independent Consultant",
    location: "Global Remote",
    
    description: "Leading blockchain strategy and development for multiple Web3 startups, focusing on DeFi protocols and community-driven ecosystems.",
    achievements: [
      "Architected 5+ DeFi protocols with $12M+ TVL",
      "Grew communities to 50K+ active members",
      "Launched successful token projects"
    ],
    skills: ["Solidity", "Rust", "DeFi", "Tokenomics", "Community Building"],
    color: "from-red-600 to-orange-600"
  },
  {
    year: "2023 - 2024",
    title: "Web3 Growth Strategist",
    company: "Multiple Startups",
    location: "Africa & Global",
   
    description: "Specialized in scaling Web3 projects from MVP to market fit, with focus on sustainable growth and community engagement.",
    achievements: [
      "Scaled 3 projects to 100K+ users",
      "Designed tokenomics for 15+ projects",
      "Built strategic partnerships globally"
    ],
    skills: ["Growth Strategy", "Partnerships", "Token Design", "Marketing"],
    color: "from-orange-600 to-red-600"
  },
  {
    year: "2022 - 2023",
    title: "Blockchain Developer & Educator",
    company: "Ambrose Trading Academy",
    location: "Nigeria",
    
    description: "Founded educational platform teaching blockchain development and trading, while building smart contracts for various clients.",
    achievements: [
      "Trained 200+ students in blockchain",
      "Developed 20+ smart contracts",
      "Created comprehensive Web3 curriculum"
    ],
    skills: ["Smart Contracts", "Teaching", "Curriculum Design", "Mentoring"],
    color: "from-red-700 to-orange-700"
  },
  {
    year: "2021 - 2022",
    title: "Crypto Trader & Analyst",
    company: "Independent",
    location: "Global Markets",
   
    description: "Full-time cryptocurrency trading and market analysis, developing strategies for both personal portfolio and client funds.",
    achievements: [
      "Achieved 300%+ portfolio returns",
      "Built automated trading systems",
      "Created market analysis frameworks"
    ],
    skills: ["Technical Analysis", "Trading Systems", "Risk Management", "DeFi"],
    color: "from-orange-700 to-red-700"
  },
  {
    year: "2020 - 2021", 
    title: "Forex Trader",
    company: "Independent",
    location: "Traditional Markets",
  
    description: "Started trading journey in traditional forex markets, building foundation in financial markets and risk management.",
    achievements: [
      "Developed systematic trading approach",
      "Built risk management frameworks", 
      "Transitioned to crypto successfully"
    ],
    skills: ["Forex Trading", "Risk Management", "Market Analysis", "Psychology"],
    color: "from-red-800 to-orange-800"
  }
];

export default function ProfessionalJourneySection() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Professional Evolution</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Journey to Excellence
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A transformative progression from traditional trading to pioneering Web3 innovation and blockchain leadership
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full"></div>

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in group`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2 z-20">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r bg-primary rounded-full border-4 border-background shadow-2xl flex items-center justify-center text-primary-foreground">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r bg-primary rounded-full animate-pulse-glow opacity-50"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:pr-16 md:text-right' 
                    : 'md:pl-16 md:text-left'
                } md:w-1/2 group-hover:scale-105 transition-all duration-500`}>
                  
                  <Card className="glass-card p-8 border-l-4 border-primary shadow-elegant hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                    {/* Card Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardContent className="p-0 relative z-10">
                      {/* Header */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-primary font-bold text-lg">
                          <Calendar className="w-5 h-5" />
                          {step.year}
                        </div>
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{step.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{step.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-4 mb-6">
                        <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {step.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-foreground text-lg">Technologies & Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill, i) => (
                            <Badge 
                              key={i}
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-3 py-1 font-medium border border-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connecting Line to Next Item */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-16 w-1 h-16 bg-gradient-to-b from-primary to-primary/30"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex justify-center mt-16">
            <div className="w-24 h-24 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full flex items-center justify-center shadow-glow">
              <Award className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}