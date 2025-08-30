import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

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
    skills: ["Solidity", "Rust", "DeFi", "Tokenomics", "Community Building"]
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
    skills: ["Growth Strategy", "Partnerships", "Token Design", "Marketing"]
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
    skills: ["Smart Contracts", "Teaching", "Curriculum Design", "Mentoring"]
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
    skills: ["Technical Analysis", "Trading Systems", "Risk Management", "DeFi"]
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
    skills: ["Forex Trading", "Risk Management", "Market Analysis", "Psychology"]
  }
];

export default function ProfessionalJourneySection() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Professional Journey
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A progression from traditional trading to leading Web3 innovation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary"></div>

          {/* Journey Steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-1/2`}>
                  <Card className="glass-card p-6 hover:shadow-elegant transition-smooth group">
                    <CardContent className="p-0">
                      {/* Header */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <Calendar className="w-4 h-4" />
                          {step.year}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {step.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {step.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3 mb-4">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {step.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.skills.map((skill, i) => (
                            <Badge 
                              key={i}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}