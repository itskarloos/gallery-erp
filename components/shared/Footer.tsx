import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Image
              src="/assets/images/Logo(Dark).png"
              alt="Company Logo"
              width={150}
              height={50}
            />
            <p className="text-sm mt-2">
              Short description about your company.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-1">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-1">
                <Link href="/about">About</Link>
              </li>
              <li className="mb-1">
                <Link href="/services">Services</Link>
              </li>
              <li className="mb-1">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">
              123 Main Street
              <br />
              City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
