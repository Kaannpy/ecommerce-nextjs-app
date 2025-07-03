import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/footer";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"], // ürünün ıd verir
    limit: 5,
  });

  return (
    <>
      <div>
        <section className="rounded bg-neutral-100 py-8 sm:py-12">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-8 sm:px-16 max-w-6xl">
            <div className="max-w-md space-y-4 md:text-left text-center md:items-start items-center flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Welcome to My Ecommerce
              </h2>
              <p className="text-neutral-600">
                Discover the latest products at the best prices.
              </p>
              <Button
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
                asChild
                variant={"default"}
              >
                <Link
                  className="inline-flex items-center justify-center rounded-full px-6 py-3"
                  href={"/products"}
                >
                  Browse All Products
                </Link>
              </Button>
            </div>
            <div className="flex-shrink-0">
              <Image
                alt="Banner Image"
                src={products.data[2].images[0]}
                width={450}
                height={450}
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section className="py-8">
          <Carousel products={products.data} />
        </section>

        <Footer />
      </div>
    </>
  );
}
