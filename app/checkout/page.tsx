"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/card-store";
import { checkoutAction } from "./checkout-action";
import { json } from "stream/consumers";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const totalprice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (totalprice === 0 || items.length === 0) {
    return (
      <div className="container mx-auto p-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <Card className="max-w-md mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
            <CardContent>
              <ul className="space-y-4">
                {items.map((item, key) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 border-b pb-2"
                  >
                    <div className="flex justify-between ">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold">
                        ${((item.price * item.quantity) / 100).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size={"sm"}
                        onClick={() => removeItem(item.id)}
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <Button onClick={() => addItem({ ...item, quantity: 1 })}>
                        +
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-2 text-lg font-semibold">
                Total:${(totalprice / 100).toFixed(2)}
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        <form
          action={checkoutAction}
          className="max-w-md mx-auto flex flex-col items-center gap-2"
        >
          <input type="hidden" name="items" value={JSON.stringify(items)} />
          <Button className="w-85">Proceed to Payment</Button>
          <Button
            className="w-85 bg-red-600 hover:bg-red-500 text-white"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </form>
      </div>
    </>
  );
}
