import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Truck, FileText, Shield, TrendingUp, ClipboardCheck } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Export Services",
      description: "Comprehensive export solutions including documentation, logistics coordination, and compliance management for global markets.",
    },
    {
      icon: TrendingUp,
      title: "Import Services",
      description: "Streamlined import processes with customs clearance, quality inspection, and timely delivery to your location.",
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end logistics solutions including warehousing, transportation, and supply chain optimization.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation services including certificates, permits, and compliance paperwork for international trade.",
    },
    {
      icon: Shield,
      title: "Quality Inspection",
      description: "Rigorous quality control and inspection services to ensure products meet international standards and specifications.",
    },
    {
      icon: ClipboardCheck,
      title: "Trade Consulting",
      description: "Expert consultation on market entry strategies, trade regulations, and business development opportunities.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive import and export solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
