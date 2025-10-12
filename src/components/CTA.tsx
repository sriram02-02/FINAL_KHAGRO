import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Expand Your Business Globally?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Get in touch with our team of experts to discuss your import/export needs and discover how we can help grow your business internationally.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started Today
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
