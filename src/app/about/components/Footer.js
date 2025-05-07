import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from 'react-icons/fa'
import { HandThumbDownIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6 lg:mb-0">
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FaYoutube />
          </a>
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600 transition">
            <FaPinterestP />
          </a>
        </div>

        {/* Legal Links */}
        <div className="text-gray-600 text-sm text-center lg:text-right space-y-2 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center justify-center lg:justify-end space-x-2">
            {/* Rare Beauty Logo */}
            <img src="/images/logo1.svg" alt="Rare Beauty" className="h-6 w-6" />
            <span>© 2025 All rights reserved</span>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">UGC Terms of Service</a>
        
          </div>
        </div>
      </div>
    </footer>
  )
}