import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Bauman Auctions</h2>
          <p className="text-gray-400 text-sm">
            A smart auction assistant powered by OCR, AI, and automation to make
            listing and pricing effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-300">
            Email:{" "}
            <a
              href="mailto:support@baumanauctions.com"
              className="hover:text-white"
            >
              support@baumanauctions.com
            </a>
            <br />
            Phone: +1 (800) 123-4567
            <br />
            Address: 123 Auction Way, NY 10001
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Bauman Auctions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
