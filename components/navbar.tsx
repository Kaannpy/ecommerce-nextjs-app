"use client";
import { useCartStore } from "@/store/card-store";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Ghost } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export const Navbar = () => {
  const navigate = useRouter();
  const sign_upClick = () => {
    navigate.push("/sign-up");
  };
  const loginClick = () => {
    navigate.push("/login");
  };

  const { items } = useCartStore();
  //  total  tüm degerler  item ise o anki eleman
  const cardCount = items.reduce((total, item) => total + item.quantity, 0);
  const userContext = useUser();
  const user = userContext?.user;
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    await fetch("/logout/api", { method: "POST" });
    userContext?.setUser && userContext.setUser(null);
  };

  return (
    <nav className="sticky top-0 z-50  bg-white shadow">
      <div className="container mx-auto flex items-center justify-between  px-4 py-4">
        <Link href={"/"} className="hover:text-blue-600">
          My Ecommerce
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link href={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link href={"/checkout"} className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/checkout"} className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cardCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs">
                {cardCount}
              </span>
            )}
          </Link>
          {user ? (
            <>
              <span className="font-semibold">Welcome, {user.name}</span>
              <Button
                onClick={() =>
                  userContext?.setUser && userContext.setUser(null)
                }
                variant="outline"
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={sign_upClick} variant="outline">
                Sign up
              </Button>
              <Button onClick={loginClick} variant="default">
                Login
              </Button>
            </>
          )}
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden"
          >
            {MobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {MobileMenuOpen && (
        <nav className="md:hidden bg-white shadow">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href={"/"} className="block px-4 py-2 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className="block px-4 py-2 hover:text-blue-600"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href={"/checkout"}
                className="block px-4 py-2 hover:text-blue-600  "
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
