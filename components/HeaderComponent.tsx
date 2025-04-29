import Link from 'next/link';
import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-between h-16 items-center">
        <div className="flex space-x-4 text-black">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;
