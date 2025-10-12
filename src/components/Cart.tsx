import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { CheckoutDialog } from "./CheckoutDialog";
import { Badge } from "@/components/ui/badge";

export const Cart = () => {
  const { cartItems, removeFromCart, updateCartItem, cartCount } = useCart();
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editWeight, setEditWeight] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleUpdateWeight = (itemId: string) => {
    if (editWeight.trim()) {
      updateCartItem(itemId, editWeight);
      setEditingItemId(null);
      setEditWeight("");
    }
  };

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {cartCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Card key={item.id} className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base pr-8">{item.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {item.image && (
                        <div className="w-full h-32 rounded-md overflow-hidden bg-muted">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Available: {item.defaultWeight}</p>
                        {editingItemId === item.id ? (
                          <div className="space-y-2">
                            <Input
                              value={editWeight}
                              onChange={(e) => setEditWeight(e.target.value)}
                              placeholder="Enter custom weight"
                              className="h-9"
                            />
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleUpdateWeight(item.id)}
                                className="flex-1"
                              >
                                Save
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingItemId(null);
                                  setEditWeight("");
                                }}
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-xs">Weight:</Label>
                              <p className="text-sm font-medium">{item.customWeight}</p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingItemId(item.id);
                                setEditWeight(item.customWeight);
                              }}
                            >
                              Customize
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  className="w-full"
                  size="lg"
                  disabled={cartItems.length === 0}
                  onClick={() => {
                    setCheckoutOpen(true);
                    setSheetOpen(false);
                  }}
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <CheckoutDialog
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
      />
    </>
  );
};
