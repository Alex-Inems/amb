import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "DeFi Project Founder",
    company: "DecentraFi",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "Ambrose transformed our DeFi protocol from concept to $5M TVL in just 6 months. His technical expertise and strategic thinking are unparalleled in the Web3 space.",
    rating: 5,
    project: "DeFi Protocol Development"
  },
  {
    name: "David Chen",
    title: "CEO",
    company: "AfricaCoin",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "Working with Ambrose was a game-changer for our token launch. His tokenomics design and community building strategies led to a successful $2M raise.",
    rating: 5,
    project: "Token Launch Strategy"
  },
  {
    name: "Amara Okafor",
    title: "Blockchain Developer",
    company: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "The Ambrose Trading Academy completely changed my career trajectory. From zero knowledge to landing a blockchain developer role in 8 months. Incredible mentorship!",
    rating: 5,
    project: "Education & Mentoring"
  },
  {
    name: "Michael Rodriguez",
    title: "Product Manager",
    company: "CryptoVentures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "Ambrose's community building expertise is phenomenal. He grew our Discord from 100 to 25,000 engaged members while maintaining quality discussions.",
    rating: 5,
    project: "Community Growth"
  },
  {
    name: "Fatima Al-Rashid",
    title: "Smart Contract Auditor",
    company: "SecureChain",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "I've audited many of Ambrose's smart contracts. His code quality is exceptional - clean, secure, and well-documented. Zero critical vulnerabilities found.",
    rating: 5,
    project: "Smart Contract Development"
  },
  {
    name: "James Thompson",
    title: "Trading Student",
    company: "Independent Trader",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face&auto=format",
    content: "The trading strategies I learned from Ambrose helped me achieve consistent profitability. His risk management principles saved me during market downturns.",
    rating: 5,
    project: "Trading Education"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            What Others Say
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonials from clients, students, and collaborators across the Web3 ecosystem
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:shadow-elegant transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/50" />
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Project Tag */}
                <Badge 
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                >
                  {testimonial.project}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Add Your Success Story?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of successful Web3 builders, traders, and entrepreneurs 
            who have transformed their careers with expert guidance and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
}