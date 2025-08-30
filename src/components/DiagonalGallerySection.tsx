import React from "react";
import { Card } from "@/components/ui/card";

const galleryItems = [
  {
    title: "DeFi Innovation",
    description: "Building next-generation decentralized finance protocols that empower financial inclusion across emerging markets.",
    image: "./public/pow.jpg",
    direction: "left"
  },
  {
    title: "Community Empowerment", 
    description: "Creating sustainable Web3 communities that drive adoption and education across Africa and beyond.",
    image: "./public/featured.jpg",
    direction: "right"
  },
  {
    title: "Smart Contract Excellence",
    description: "Developing secure, efficient, and scalable smart contracts that power the decentralized economy.",
    image: "./public/recommend.jpg",
    direction: "left"
  },
  {
    title: "Ecosystem Building",
    description: "Architecting comprehensive blockchain ecosystems that foster innovation and sustainable growth.",
    image: "./public/stats.jpg",
    direction: "right"
  },
  {
    title: "Ecosystem Building",
    description: "Architecting comprehensive blockchain ecosystems that foster innovation and sustainable growth.",
    image: "./public/swift.jpg",
    direction: "left"
  },
  {
    title: "Ecosystem Building",
    description: "Architecting comprehensive blockchain ecosystems that foster innovation and sustainable growth.",
    image: "./public/featured.jpg",
    direction: "right"
  }
];

export default function DiagonalGallerySection() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-background relative overflow-hidden">
      {/* Background Diagonal Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 to-transparent transform -skew-y-2"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-primary-glow/10 to-transparent transform skew-y-2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Innovation in Action
          </h2>
          <div className="w-24 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of technology, community, and sustainable impact
          </p>
        </div>

        {/* Gallery Items */}
        <div className="space-y-32">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                item.direction === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="overflow-hidden shadow-elegant group">
                  <div className="relative h-80 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </Card>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6 animate-slide-in" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 gradient-primary rounded-full"></div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Diagonal Accent */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-20 transform -skew-y-1 rounded-lg"></div>
          <div className="relative z-10 text-center py-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Build the Future Together?
            </h3>
            <p className="text-muted-foreground">
              Let's create something extraordinary in the Web3 space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}