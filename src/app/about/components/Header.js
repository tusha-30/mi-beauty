import React from 'react'
import {
  Bars3Icon,
  GiftIcon,
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const butterflyVariants = {
  animate: {
    x: [0, -6, 6, 0],
    y: [0, -6, 6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 ">
        {/* Top nav */}
        <div className="flex items-center justify-between h-16">
          {/* Hamburger on mobile */}
          <button className="sm:hidden p-2 rounded-md hover:bg-gray-100">
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Logo with animated butterfly */}
          <div className="flex-1 flex items-center justify-center sm:justify-start">
            <div className="relative inline-flex items-center">
              <span className="text-2xl font-bold text-gray-900">Ri Beauty</span>
              <motion.img
                src="/images/BUTTERFLY.png"
                alt="butterfly"
                className="absolute top-0 left-full h-12 w-12 ml-1"
                variants={butterflyVariants}
                animate="animate"
              />
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <GiftIcon className="h-6 w-6 text-pink-500" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <UserIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Search bar below */}
        <div className="mt-3">
          <div className="relative max-w-lg mx-auto">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Explore our Beauty Collection"
              className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
