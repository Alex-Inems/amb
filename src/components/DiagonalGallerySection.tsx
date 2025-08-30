import React from "react";
import { Card } from "@/components/ui/card";

const galleryItems = [
  {
    title: "DeFi Innovation",
    description: "Building next-generation decentralized finance solutions with real-world impact.",
    image: "https://www.ambrose.live/public/inno.jpg",
    direction: "left"
  },
  {
    title: "Community Empowerment",
    description: "Fostering inclusive communities around technology and blockchain growth.",
    image: "https://www.ambrose.live/public/comm.jpg",
    direction: "right"
  },
  {
    title: "Smart Contract Excellence",
    description: "Delivering robust smart contract solutions and strategic growth campaigns.",
    image: "https://www.ambrose.live/public/smt.jpg",
    direction: "left"
  },
  {
    title: "Ecosystem Building",
    description: "Scaling user bases and building sustainable, measurable growth in Web3.",
    image: "https://images.unsplash.com/photo-1581091215366-7b67a0c8d110?auto=format&fit=crop&w=1200&q=80",
    direction: "right"
  },
  {
    title: "Global Recognition",
    description: "Partnering with top international voices to amplify impactful projects.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    direction: "left"
  },
  {
    title: "Web3 Events & Spaces",
    description: "Hosting high-demand sessions for startups, showcasing value and expertise.",
    image: "https://images.unsplash.com/photo-1601597119630-02b82f60e3d0?auto=format&fit=crop&w=1200&q=80",
    direction: "right"
  }
];

export default function DiagonalGallerySection() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background relative overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto space-y-32">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight">
            Innovation in Action
          </h2>
          <div className="w-28 h-1 gradient-primary rounded-full mx-auto"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Driving the intersection of technology, community, and measurable impact.
          </p>
        </div>

        {/* Gallery Items */}
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full ${
              item.direction === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1 min-h-[400px]">
              <Card className="shadow-xl rounded-xl overflow-hidden group h-full">
                <div className="relative h-full w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x400?text=Image+Not+Found";
                    }}
                  />
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">{item.title}</h3>
              <div className="w-16 h-1 gradient-primary rounded-full"></div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
