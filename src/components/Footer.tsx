import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2c3545] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              KH AGRO STOCKIST & EXPORTERS PVT. LTD.
            </h3>
            <p className="text-white/80 mb-6">
              Your trusted partner for premium quality agricultural exports including rice, pulses, and authentic spices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/khagroexporters"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-white/80">
              <p>
                Flat No. 304, Krisals County,<br />
                Syamala Nagar, Guntur -<br />
                522006, Andhra Pradesh,<br />
                India
              </p>
              <p>+91 9948547000</p>
              <p>khagrofoods@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white/60 text-sm">
            © 2024 KH AGRO STOCKIST & EXPORTERS PVT. LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
