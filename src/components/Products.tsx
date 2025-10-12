import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Premium Product Categories
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Carefully curated selection of finest products sourced from trusted suppliers worldwide
        </p>
        
        <Link to="/products">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Products
          </Button>
        </Link>
      </div>
    </section>
  );
};
