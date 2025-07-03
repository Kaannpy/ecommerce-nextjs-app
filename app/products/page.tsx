import Footer from "@/components/footer";
import { ProductList } from "@/components/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <>
      <div className=" pb-8">
        <h1 className="font-bold">All Products</h1>
        <ProductList product={products.data} />
      </div>
      <Footer />
    </>
  );
}
