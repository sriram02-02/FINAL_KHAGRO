import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Wheat, Soup, Flame, Blend, Sparkles } from "lucide-react";
import basmatiRice from "@/assets/basmati_rice.jpg";
import crystalRice from "@/assets/crystal_rice.jpg";
import idliRavva from "@/assets/idli_ravva.jpeg";
import idliRice from "@/assets/idli_rice.jpg";
import sonaMasooRice from "@/assets/sona_masoori_rice.jpg";
import arharDal from "@/assets/arhar_dal.jpeg";
import chanaDal from "@/assets/chana_dal.jpg";
import masoorSplit from "@/assets/masoor_split.jpg";
import moongDal from "@/assets/moong_dal.jpg";
import moongSplit from "@/assets/moong_split.jpeg";
import moong from "@/assets/moong.jpg";
import rajma from "@/assets/rajma.jpg";
import toorDal from "@/assets/toor_dal.jpg";
import uradDal from "@/assets/urad_dal.jpeg";
import uradGota from "@/assets/urad_gota.jpeg";
import ajwain from "@/assets/ajwain.png";
import blackPepper from "@/assets/black_pepper.png";
import cardamom from "@/assets/cardamom.png";
import cinnamon from "@/assets/cinnamon.png";
import clove from "@/assets/clove.png";
import cuminWhole from "@/assets/cumin_whole.png";
import fennelWhole from "@/assets/fennel_whole.png";
import fenugreekWhole from "@/assets/fenugreek_whole.png";
import redChilli from "@/assets/red_chilli.png";
import turmeric from "@/assets/turmeric.png";
import biryaniMasala from "@/assets/biryani_masala.jpeg";
import chickenMasala from "@/assets/chicken_masala.png";
import chilliCrushed from "@/assets/chilli_crushed.jpeg";
import curryPowder from "@/assets/curry_powder.jpeg";
import garamMasala from "@/assets/garam_masala.png";
import rasamMasala from "@/assets/rasam_masala.jpeg";
import sambarMasala from "@/assets/sambar_masala.png";
import ajwainPowder from "@/assets/ajwain_powder.png";
import kashmiriChilliPowder from "@/assets/kashmiri_chilli_powder.jpeg";
import corianderPowder from "@/assets/coriander_powder.png";
import methiPowder from "@/assets/methi_powder.png";
import garlicPowder from "@/assets/garlic_powder.png";
import nutmegPowder from "@/assets/nutmeg_powder.png";
import cuminPowder from "@/assets/cumin_powder.png";
import pepperPowder from "@/assets/pepper_powder.png";
import fennelPowder from "@/assets/fennel_powder.png";
import cinnamonPowder from "@/assets/cinnamon_powder.png";
import chilliPowder from "@/assets/chilli_powder.png";
import clovePowder from "@/assets/clove_powder.png";
import turmericPowder from "@/assets/turmeric_powder.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Copy, ShoppingCart } from "lucide-react";
import { openWhatsApp as openWhatsAppUtil } from "@/lib/whatsapp";
import { AddToCartDialog } from "@/components/AddToCartDialog";
import { Cart } from "@/components/Cart";

const Products = () => {
  const [selectedProductTitle, setSelectedProductTitle] = useState<string | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<string | null>(null);
  const [addToCartDialogOpen, setAddToCartDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    category: string;
    defaultWeight: string;
    image?: string;
  } | null>(null);

  const contactInfo = {
    email: "khagrofoods@gmail.com",
    phone: "+91 9948547000",
    address: "Flat No. 304, Krisals County, Syamala Nagar, Guntur - 522006, Andhra Pradesh, India"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openWhatsApp = () => {
    const message = enquiryProduct 
      ? `Hi, I would like to enquire about ${enquiryProduct}`
      : "Hi, I would like to enquire about your products";
    openWhatsAppUtil(contactInfo.phone, message);
  };

  const sendEmail = () => {
    const subject = enquiryProduct 
      ? `Enquiry about ${enquiryProduct}`
      : "Product Enquiry";
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}`;
  };
  const products = [
    {
      title: "Rice",
      description: "Premium quality rice varieties sourced from the finest farms",
      icon: Wheat,
      varieties: [
        { name: "Basmati Rice", image: basmatiRice },
        { name: "Crystal Rice", image: crystalRice },
        { name: "Idli Ravva", image: idliRavva },
        { name: "Idli Rice", image: idliRice },
        { name: "Sona Masoori Rice", image: sonaMasooRice }
      ]
    },
    {
      title: "Pulses and Dals",
      description: "High-quality pulses and lentils for nutritious meals",
      icon: Soup,
      varieties: [
        { name: "Arhar Dal", image: arharDal },
        { name: "Chana Dal", image: chanaDal },
        { name: "Masoor Split", image: masoorSplit },
        { name: "Moong Dal", image: moongDal },
        { name: "Moong Split", image: moongSplit },
        { name: "Moong", image: moong },
        { name: "Rajma", image: rajma },
        { name: "Toor Dal", image: toorDal },
        { name: "Urad Dal", image: uradDal },
        { name: "Urad Gota", image: uradGota }
      ]
    },
    {
      title: "Spices",
      description: "Authentic and aromatic whole spices",
      icon: Flame,
      varieties: [
        { name: "Cardamom", image: cardamom },
        { name: "Black Pepper", image: blackPepper },
        { name: "Cinnamon", image: cinnamon },
        { name: "Clove", image: clove },
        { name: "Ajwain", image: ajwain },
        { name: "Fenugreek (Whole)", image: fenugreekWhole },
        { name: "Fennel (Whole)", image: fennelWhole },
        { name: "Cumin (Whole)", image: cuminWhole },
        { name: "Turmeric", image: turmeric },
        { name: "Red Chilli", image: redChilli }
      ]
    },
    {
      title: "Blended Spices",
      description: "Expertly blended spice mixes for perfect flavors",
      icon: Blend,
      varieties: [
        { name: "Chilli Crushed", image: chilliCrushed },
        { name: "Rasam Masala", image: rasamMasala },
        { name: "Curry Powder", image: curryPowder },
        { name: "Biryani Masala", image: biryaniMasala },
        { name: "Chicken Masala", image: chickenMasala },
        { name: "Sambar Masala", image: sambarMasala },
        { name: "Garam Masala", image: garamMasala }
      ]
    },
    {
      title: "Grounded Spices",
      description: "Freshly ground spices for enhanced taste",
      icon: Sparkles,
      varieties: [
        { name: "Kashmiri Chilli Powder", image: kashmiriChilliPowder },
        { name: "Coriander Powder", image: corianderPowder },
        { name: "Methi Powder", image: methiPowder },
        { name: "Nutmeg Powder", image: nutmegPowder },
        { name: "Cumin Powder", image: cuminPowder },
        { name: "Pepper Powder", image: pepperPowder },
        { name: "Fennel Powder", image: fennelPowder },
        { name: "Cinnamon Powder", image: cinnamonPowder },
        { name: "Ajwain Powder", image: ajwainPowder },
        { name: "Garlic Powder", image: garlicPowder },
        { name: "Clove Powder", image: clovePowder },
        { name: "Turmeric Powder", image: turmericPowder },
        { name: "Chilli Powder", image: chilliPowder }
      ]
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
        <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Premium Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully curated selection of finest products sourced from trusted suppliers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={product.title}
                  className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative">
                    <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2 mb-6">
                      {product.description}
                    </CardDescription>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => setEnquiryProduct(product.title)}
                        className="flex-1"
                      >
                        Enquire Now
                      </Button>
                      <Button 
                        onClick={() => setSelectedProductTitle(product.title)}
                        variant="outline"
                        className="flex-1"
                      >
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <Dialog open={selectedProductTitle !== null} onOpenChange={(open) => !open && setSelectedProductTitle(null)}>
            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
              {(() => {
                const current = products.find((p) => p.title === selectedProductTitle);
                if (!current) return null;
                const Icon = current.icon;
                return (
                  <>
                    <DialogHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <DialogTitle className="text-2xl">{current.title} Varieties</DialogTitle>
                      </div>
                      <DialogDescription className="sr-only">
                        List of product varieties for {current.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                      {current.varieties.map((variety, vIndex) => {
                        const varietyName = typeof variety === 'string' ? variety : (variety as any).name;
                        const varietyImage = typeof variety === 'object' && (variety as any).image ? (variety as any).image : null;
                        return (
                          <Card 
                            key={varietyName} 
                            className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/50"
                          >
                            <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                              {varietyImage ? (
                                <>
                                  <img 
                                    src={varietyImage} 
                                    alt={varietyName}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </>
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <Icon className="w-12 h-12 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                                </>
                              )}
                            </div>
                            <CardContent className="p-3">
                              <p className="font-medium text-center text-sm leading-tight line-clamp-2 mb-3">
                                {varietyName}
                              </p>
                              {current.title === "Rice" && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  10 LB/20LB AND 40 LB
                                </p>
                              )}
                              {current.title === "Pulses and Dals" && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  2 LB/4 LB/ AND 40 LB
                                </p>
                              )}
                              {(current.title === "Spices" || current.title === "Blended Spices" || current.title === "Grounded Spices") && (
                                <p className="text-xs text-muted-foreground text-center mb-2 font-medium">
                                  1 LB/100 GRAMS/200 GRAMS
                                </p>
                              )}
                              <div className="flex gap-2">
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    let defaultWeight = "";
                                    if (current.title === "Rice") {
                                      defaultWeight = "10 LB/20LB AND 40 LB";
                                    } else if (current.title === "Pulses and Dals") {
                                      defaultWeight = "2 LB/4 LB/ AND 40 LB";
                                    } else {
                                      defaultWeight = "1 LB/100 GRAMS/200 GRAMS";
                                    }
                                    setSelectedProduct({
                                      name: varietyName,
                                      category: current.title,
                                      defaultWeight,
                                      image: varietyImage,
                                    });
                                    setAddToCartDialogOpen(true);
                                  }}
                                  size="sm"
                                  variant="outline"
                                  className="flex-1"
                                >
                                  <ShoppingCart className="h-3 w-3 mr-1" />
                                  Add
                                </Button>
                                <Button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnquiryProduct(varietyName);
                                  }}
                                  size="sm"
                                  className="flex-1"
                                >
                                  Enquire
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </DialogContent>
          </Dialog>

          <Dialog open={enquiryProduct !== null} onOpenChange={(open) => !open && setEnquiryProduct(null)}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl">Contact Information</DialogTitle>
                <DialogDescription className="text-base">
                  Enquiry about: {enquiryProduct}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-sm text-muted-foreground break-all">{contactInfo.email}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={sendEmail}
                    >
                      Send
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={openWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(contactInfo.address)}
                    className="flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center pt-2">
                  We typically respond within 24 hours during business days
                </p>

                <Button
                  onClick={() => setEnquiryProduct(null)}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <AddToCartDialog
            open={addToCartDialogOpen}
            onOpenChange={setAddToCartDialogOpen}
            product={selectedProduct}
          />
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
