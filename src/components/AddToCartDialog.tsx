import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

interface AddToCartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    category: string;
    defaultWeight: string;
    image?: string;
  } | null;
}

export const AddToCartDialog = ({ open, onOpenChange, product }: AddToCartDialogProps) => {
  const [customWeight, setCustomWeight] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: "",
      name: product.name,
      category: product.category,
      defaultWeight: product.defaultWeight,
      customWeight: customWeight || product.defaultWeight,
      image: product.image,
    });

    toast.success(`${product.name} added to cart!`);
    setCustomWeight("");
    onOpenChange(false);
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>{product.name}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {product.image && (
            <div className="w-full h-48 rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <Label className="text-sm font-semibold">Available Weights</Label>
            <p className="text-sm text-muted-foreground mt-1">{product.defaultWeight}</p>
          </div>

          <div>
            <Label htmlFor="customWeight" className="text-sm font-semibold">
              Custom Weight (Optional)
            </Label>
            <Input
              id="customWeight"
              placeholder="e.g., 5 LB, 100 GRAMS"
              value={customWeight}
              onChange={(e) => setCustomWeight(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Leave empty to use default weights
            </p>
          </div>

          <Button onClick={handleAddToCart} className="w-full">
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
