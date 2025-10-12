import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import spicesImage from "@/assets/spices-spoons.jpg";
import { Heart, Shield, Award, Sparkles, Quote } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "Every product undergoes rigorous quality checks to ensure excellence"
    },
    {
      icon: Shield,
      title: "Traditional Values",
      description: "Rooted in authentic practices and time-honored traditions"
    },
    {
      icon: Award,
      title: "Premium Standards",
      description: "Committed to delivering only the finest products to your home"
    },
    {
      icon: Sparkles,
      title: "Natural Purity",
      description: "Pure, authentic ingredients with no compromise on quality"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in relative">
            
            
            
            
            <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-16 border-2 border-primary/20 shadow-2xl">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-8 border border-primary/30">
                WELCOME TO SRI NANDI
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
                About Sri Nandi
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
              <p className="text-xl md:text-2xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
                Bringing premium, natural products rooted in tradition to every household
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in bg-card/95 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-8 border border-primary/30">
                  <Sparkles className="w-4 h-4" />
                  OUR STORY
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
                  A Legacy of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quality & Trust</span>
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  Sri Nandi is a trusted and emerging brand committed to delivering high-quality, authentic products rooted in traditional values and purity. Founded with a passion for excellence and a vision to bring premium, natural products to every household.
                </p>
                
                <div className="relative border-l-4 border-primary pl-8 my-10 bg-gradient-to-r from-primary/10 to-transparent py-6 rounded-r-xl">
                  <Quote className="absolute -left-3 top-6 w-6 h-6 text-primary bg-card rounded-full p-1" />
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Our Philosophy
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed italic">
                    Sri Nandi is more than just a brand—it's a commitment to health, heritage, and honesty. Every product is crafted with devotion and undergoes strict quality checks to ensure our customers receive only the best.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              {/* Glowing background effect */}
              
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-card ring-2 ring-primary/20">
                <img 
                  src={spicesImage} 
                  alt="Premium quality spices and ingredients"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <div className="relative bg-card/95 backdrop-blur-md rounded-3xl p-12 border-2 border-primary/20 shadow-2xl max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold mb-6 border border-primary/30">
                <Award className="w-4 h-4" />
                WHAT DRIVES US
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Our Core <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
              <p className="text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                The principles that guide us in delivering excellence
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="relative bg-card/95 backdrop-blur-md rounded-2xl p-10 shadow-xl border-2 border-primary/20 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Animated gradient background */}
                  
                  
                  {/* Decorative corner */}
                  
                  
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-8 border-2 border-primary/30">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default About;
