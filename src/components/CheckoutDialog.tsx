import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCart } from "@/lib/cart-context";
import { openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";
import { WhatsAppFallbackDialog } from "@/components/WhatsAppFallbackDialog";

const checkoutSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Please enter a valid WhatsApp number").max(15),
  address: z.string().trim().min(1, "Address is required").max(500),
  message: z.string().trim().max(1000).optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: CheckoutDialogProps) => {
  const { cartItems, clearCart } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
});

  const [waOpen, setWaOpen] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const handlePlaceOrder = () => {
    const data = form.getValues();
    const validation = checkoutSchema.safeParse(data);

    if (!validation.success) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    // Format cart items
    const cartItemsText = cartItems
      .map((item, index) => 
        `${index + 1}. ${item.name}\n   Category: ${item.category}\n   Weight: ${item.customWeight}`
      )
      .join("\n\n");

    const whatsappMessage = `🛒 NEW ORDER FROM KH AGRO WEBSITE

📋 CUSTOMER DETAILS:
Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.phone}
Address: ${data.address}

🛍️ ORDER ITEMS:
${cartItemsText}

${data.message ? `💬 Additional Message:\n${data.message}` : ''}

📞 Please contact me to confirm this order. Thank you!`;

    const whatsappNumber = "919948547000";
    const fallbackUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const success = openWhatsApp(whatsappNumber, whatsappMessage);

    if (!success) {
      // Show fallback dialog for manual opening
      setWaUrl(fallbackUrl);
      setWaOpen(true);
      return;
    }

    // Success - WhatsApp opened automatically
    toast.success("Opening WhatsApp…");
    form.reset();
    clearCart();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Checkout</DialogTitle>
          <DialogDescription>
            Complete your order details to proceed
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Cart Summary */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Order Summary ({cartItems.length} items)</h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={item.id} className="text-sm flex justify-between items-start gap-2">
                  <span className="flex-1">
                    {index + 1}. {item.name}
                  </span>
                  <span className="text-muted-foreground text-xs">{item.customWeight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Form */}
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Address *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your complete delivery address"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special instructions or requirements..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
                onClick={handlePlaceOrder}
              >
                Place Order via WhatsApp
              </Button>
            </form>
          </Form>
        </div>
        <WhatsAppFallbackDialog open={waOpen} onOpenChange={setWaOpen} url={waUrl ?? ""} />
      </DialogContent>
    </Dialog>
  );
};
