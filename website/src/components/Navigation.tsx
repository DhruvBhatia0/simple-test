"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <style jsx>{`
        .nav {
          background-color: #F0E0D6;
          border-bottom: 1px solid #D9BFB7;
          padding: 10px 20px;
          text-align: center;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          align-items: center;
        }

        .nav-link {
          color: #800000;
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 3px;
          transition: background-color 0.2s;
        }

        .nav-link:hover {
          background-color: #E8D4C8;
          text-decoration: none;
        }

        .nav-link.active {
          background-color: #D9BFB7;
        }

        .nav-title {
          color: #800000;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      `}</style>
      <nav className="nav">
        <div className="nav-title">Simple Test Website</div>
        <div className="nav-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
            About Us
          </Link>
          <Link href="/learn" className={`nav-link ${pathname === '/learn' ? 'active' : ''}`}>
            Learn More
          </Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}