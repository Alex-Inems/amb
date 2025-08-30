import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

// Stats data
const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Communities Grown", value: 45 },
  { label: "Funds Raised ($M)", value: 12 },
  { label: "Industry Awards", value: 6 },
];

// Counter Component with Intersection Observer
const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-foreground animate-counter">
      {count}+
    </div>
  );
};

// Social Media Icons as SVG components
const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// Journey Timeline Items
const journeyItems = [
  {
    title: "Early Foundation in Trading",
    desc: "Started in Forex trading, building resilience, analysis, and risk management. Transitioned to crypto trading, creating a foundation for Web3.",
  },
  {
    title: "Transition into Web3",
    desc: "From trading to building ecosystems, communities, and decentralized infrastructure. Grew into a Web3 strategist and builder.",
  },
  {
    title: "Blockchain Development & Leadership",
    desc: "Specialized in Solidity & Rust, powering MemeCoins and utility tokens, leading projects to adoption and scale.",
  },
  {
    title: "Education & Community Impact",
    desc: "Founded Ambrose Trading Academy, mentoring 200+ learners in Forex & crypto. Created Acrypt Signal Group and host of The Newbies' Corner weekly X Space.",
  },
  {
    title: "Vision",
    desc: "Focused on scaling blockchain adoption globally, especially across Africa, empowering communities through ecosystems, projects, and education.",
  },
];

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `
My name is Mfonmmabasi Ambrose, widely known as Web3 Ambrose (@Web3Ambrose). 
I am a blockchain builder, ecosystem strategist, smart contract developer, trader, and growth leader 
passionate about driving Web3 adoption across Africa and globally. With years of experience in both 
traditional and decentralized finance, I've dedicated my career to building sustainable blockchain 
ecosystems, mentoring the next generation of Web3 enthusiasts, and creating meaningful impact 
through technology and community building.
  `;
  
  const shortText = fullText.slice(0, 280) + "...";

  return (
    <section className="min-h-screen bg-background py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column: About Text + Stats */}
          <div className="flex-1 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="w-24 h-1 gradient-primary rounded-full"></div>
            </div>
            
            <Card className="glass-card p-8 transition-smooth hover:shadow-glow">
              <CardContent className="p-0">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {isExpanded ? fullText : shortText}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-primary hover:text-primary-glow hover:bg-primary/10 transition-smooth"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, i) => (
                <Card
                  key={i}
                  className="stats-card p-6 text-center group animate-pulse-glow"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <CardContent className="p-0">
                    <Counter target={stat.value} />
                    <p className="mt-2 text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a href="#" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="#" className="social-icon">
                <LinkedInIcon />
              </a>
              <a href="#" className="social-icon">
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Right Column: Profile + Journey */}
          <div className="flex-1 space-y-12 animate-slide-in lg:sticky lg:top-24">
            {/* Profile Image */}
            <Card className="relative overflow-hidden shadow-elegant group">
              <div className="relative h-96 w-full">
                <img
                  src={profileImage}
                  alt="Web3 Ambrose Profile"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">Web3 Ambrose</h3>
                  <p className="text-primary-glow font-medium">Blockchain Builder & Strategist</p>
                </div>
              </div>
            </Card>

            {/* Journey Timeline */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">My Journey</h2>
              {journeyItems.map((item, idx) => (
                <Card
                  key={idx}
                  className="journey-card p-6 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}