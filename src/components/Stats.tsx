import React from "react";

export const Stats = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-primary">
              Scroll to explore more
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              Discover our products, services and stories
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll down"
            onClick={() =>
              window.scrollBy({ top: Math.round(window.innerHeight * 0.8), behavior: "smooth" })
            }
            className="p-3 rounded-full bg-muted/60 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <svg
              className="w-6 h-6 text-primary animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
