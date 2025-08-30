import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coins, TrendingUp, Users, Award } from "lucide-react";

const projects = [
  {
    title: "Swifey AI – Growth Engine & App Architect",
    role: "Growth Strategist | App Developer | Brand Director",
    description:
      "Architected the Swifey AI app for thousands of African users, spearheaded Swifey Women initiative, and positioned Swifey AI as Africa’s voice in AI innovation for Web3.",
    metrics: ["Thousands of users", "Swifey Women initiative", "Strategic Partnerships"],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "Spectrum – Rise of a Meme Giant",
    role: "Growth Lead | Ecosystem Strategist",
    description:
      "Devised high-impact campaigns, hosted community events, and turned Spectrum into a culture-driven phenomenon.",
    metrics: ["High-engagement Spaces", "Community-driven coin", "Rapid awareness growth"],
    icon: <Users className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    title: "Spungi ($SPUNGI) – Builder of a Movement",
    role: "Founder | Developer | Growth Engineer",
    description:
      "Deployed secure smart contracts, led branding and narrative, and engineered presale UX/UI to transform $SPUNGI into a Web3 revolution.",
    metrics: ["Presale success", "Secure contracts", "Community hype"],
    icon: <Coins className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    title: "Core DAO – The African Voice of Core",
    role: "Ecosystem Influencer | Community Ambassador",
    description:
      "Educated thousands through tutorials and Spaces, brought mainstream African attention, and became the trusted African voice for Core DAO.",
    metrics: ["Twitter Spaces education", "Cultural outreach", "Global recognition"],
    icon: <Award className="w-8 h-8" />,
    color: "text-purple-500",
  },
  {
    title: "Acrypt Signal Group & Ambrose Trading Academy",
    role: "Founder | Lead Analyst | Educator",
    description:
      "Mentored 500+ students, built structured trading academies, and delivered financial literacy beyond signals.",
    metrics: ["500+ students", "Structured rulebooks", "Consistent market signals"],
    icon: <TrendingUp className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    title: "Ikigai & Ikigai AI – DevOps + Culture Builder",
    role: "Smart Contract Engineer | Ecosystem Strategist",
    description:
      "Deployed smart contracts, advised on token strategy, and balanced tech with community narrative for sustained ecosystem growth.",
    metrics: ["Smart contract deployment", "Token strategy", "Holder confidence"],
    icon: <Coins className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    title: "AquaCoin & AlphaCoin – Community-first Airdrop Campaigns",
    role: "Lead Hype Strategist | Ambassador | Airdrop Director",
    description:
      "Engineered content series, structured ambassador programs, and maintained authentic hype across emerging airdrops.",
    metrics: ["Daily content series", "Ambassador rewards", "Consistent hype"],
    icon: <Users className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    title: "Sosofi – The Web3 Influence Economy",
    role: "Founder | Token Visionary | Influence Market Architect",
    description:
      "Designed tokenomics and smart contracts, created a social token economy for influencers and content drivers.",
    metrics: ["Utility token design", "Smart contract implementation", "Influencer rewards system"],
    icon: <Award className="w-8 h-8" />,
    color: "text-purple-500",
  },
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
                    <div className="flex flex-wrap gap-2">
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
