import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-300 py-10 px-4 mt-12">
      <div className=" max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About us</h3>
          <p className="text-sm leading-relaxed">
            &quot;E-Commerce App is a modern platform designed to provide the
            best shopping experience. It is secure, fast, and
            user-friendly.&quot;
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">
                <a className="hover:text-white transition">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="hover:text-white transition">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/checkout">
                <a className="hover:text-white transition">Cart</a>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/Kaannpy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kaanpey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-Commerce App. – Kaan Pey
      </div>
    </footer>
  );
}
