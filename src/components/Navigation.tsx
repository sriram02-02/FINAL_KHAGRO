import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/srichakra.jpg";
import { Cart } from "@/components/Cart";

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onResize = () => {
      // close mobile menu when switching to desktop
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    // lock body scroll when menu open
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // New: ensure each navigation opens at top of new page and close mobile menu
  useEffect(() => {
    // scroll to top of new route and ensure mobile menu is closed
    window.scrollTo({ top: 0, behavior: "auto" });
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* lazy-load logo for mobile perf */}
            <img
              src={logo}
              alt="Sri Chakra Logo"
              className="w-10 h-10 rounded-lg object-cover"
              loading="lazy"
            />
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

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-sm hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {/* simple animated icon */}
              <span className="sr-only">{mobileOpen ? "Close navigation" : "Open navigation"}</span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>

            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile sliding panel */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        className={`md:hidden transition-all duration-200 ease-in-out overflow-hidden bg-background/95 border-t border-border ${
          mobileOpen ? "max-h-[400px]" : "max-h-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 py-3 space-y-2">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <Button variant="ghost" className="w-full justify-start py-3">Home</Button>
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>
            <Button variant="ghost" className="w-full justify-start py-3">About</Button>
          </Link>
          <Link to="/products" onClick={() => setMobileOpen(false)}>
            <Button variant="ghost" className="w-full justify-start py-3">Products</Button>
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button className="w-full bg-accent hover:bg-accent/90 py-3">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
