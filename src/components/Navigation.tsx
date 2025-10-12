import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/srichakra.jpg";
import { Cart } from "@/components/Cart";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Sri Chakra Logo" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-bold text-lg text-primary">KH AGRO STOCKIST & EXPORTERS PVT. LTD.</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link to="/products">
                <Button variant="ghost">Products</Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90">Contact</Button>
              </Link>
            </div>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
};
