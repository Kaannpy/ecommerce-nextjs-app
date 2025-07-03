"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}
export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  // product[0 ] gösteriliyor

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length); // sona geldiğinde başa dön
    }, 2000);
    return () => clearInterval(interval);
    // bellek sızıntısını önlemek için interval temizleniyor
  }, [products.length]);

  const currentProduct = products[current];
  // o anlık gösterilecek ürün
  const price = currentProduct.default_price as Stripe.Price;
  // ürünün fiyatı aldık

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
      {/* // ürünün resmini gösteriyoruz image boş olabilir // resim yoksa hata
      vermesin diye kontrol ediyoruz[0 demek resmi varsa göster] */}
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            fill
            className=" object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <CardTitle className="text-3xl font-bold text-center">
          {currentProduct.name}
          {price && price.unit_amount && (
            <p>${(price.unit_amount / 100).toFixed(2)}</p>
          )}
        </CardTitle>
      </CardContent>
    </Card>
  );
};
