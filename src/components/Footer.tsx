import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <p className="mb-2">&copy; {new Date().getFullYear()} BlogGenie AI. All rights reserved.</p>
      <nav className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
      </nav>
      <MadeWithDyad />
    </footer>
  );
};

export default Footer;