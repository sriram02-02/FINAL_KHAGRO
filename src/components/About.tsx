import { Card } from "@/components/ui/card";
import { CheckCircle, Globe } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

export const About = () => {
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
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About KH AGRO FOODS
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 15 years of experience in international trade, KH AGRO FOODS has established itself as a trusted partner for businesses seeking reliable import and export services. Our commitment to excellence and deep understanding of global markets has enabled us to build lasting relationships with clients across 50+ countries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in facilitating seamless trade operations, offering comprehensive solutions from sourcing and procurement to logistics and delivery. Our team of experienced professionals ensures that every transaction meets the highest standards of quality and compliance.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-4 flex flex-col items-center text-center border-primary/20">
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold">Quality Assured</h4>
              </Card>
              <Card className="p-4 flex flex-col items-center text-center border-primary/20">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold">Global Reach</h4>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={teamImage} 
              alt="Professional business team" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
