import React from 'react'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

const products = [
  {
    id: 1,
    title: 'Kay Beauty Matte Liquid Lipstick',
    image: '/images/lipstick1.jpg',
    mrp: '₹1200',
    discount: null,
    originalMrp: null,
    rating: 4,
    reviews: 4848,
    shades: 12,
    status: ['Featured'],
  },
  {
    id: 2,
    title: 'Kay Beauty Jelly Lip & Cheek Popsicle Wand',
    image: '/images/lipstick2.webp',
    mrp: '₹1199',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 39,
    shades: 3,
    status: ['Featured', 'New'],
  },
  {
    id: 3,
    title: 'Kay Beauty Hydra Creme Lipstick',
    image: '/images/lipstick3.png',
    mrp: '₹999',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 3928,
    shades: 16,
    status: ['Featured', 'Bestseller'],
  },
  {
    id:4,
    title: 'Kay Beauty Hydra Creme Lipstick',
    image: '/images/lipstick4.jpeg',
    mrp: '₹999',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 3928,
    shades: 16,
    status: ['Featured', 'Bestseller'],
  },
  {
    id: 5,
    title: 'Kay Beauty Matte Liquid Lipstick',
    image: '/images/lipstick1.jpg',
    mrp: '₹1200',
    discount: null,
    originalMrp: null,
    rating: 4,
    reviews: 4848,
    shades: 12,
    status: ['Featured'],
  },
  {
    id: 6,
    title: 'Kay Beauty Jelly Lip & Cheek Popsicle Wand',
    image: '/images/lipstick2.webp',
    mrp: '₹1199',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 39,
    shades: 3,
    status: ['Featured', 'New'],
  },
  {
    id: 7,
    title: 'Kay Beauty Hydra Creme Lipstick',
    image: '/images/lipstick3.png',
    mrp: '₹999',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 3928,
    shades: 16,
    status: ['Featured', 'Bestseller'],
  },
  {
    id: 8,
    title: 'Kay Beauty Hydra Creme Lipstick',
    image: '/images/lipstick4.jpeg',
    mrp: '₹999',
    discount: null,
    originalMrp: null,
    rating: 5,
    reviews: 3928,
    shades: 16,
    status: ['Featured', 'Bestseller'],
  },
  // add more products...
]

export default function ProductSection() {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
          >
            {/* Status badges */}
            <div className="flex space-x-2 mb-2">
              {p.status.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-semibold uppercase
                    ${tag === 'Featured' ? 'text-pink-500' : ''}
                    ${tag === 'New' ? 'text-blue-400' : ''}
                    ${tag === 'Bestseller' ? 'text-green-500' : ''}`.replace(/\s+/g, ' ').trim()}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-sm font-medium text-gray-800 mb-2">
              {p.title}
            </h3>

            {/* Price & Discount */}
            <div className="text-gray-600 text-sm mb-2">
              <span>MRP: {p.originalMrp || p.mrp}</span>
              {p.discount && (
                <span className="text-green-600 ml-2">
                  {p.mrp} {p.discount}% Off
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIconSolid
                  key={i}
                  className={`h-4 w-4
                    ${i < p.rating ? 'text-yellow-400' : 'text-gray-300'}`.trim()}
                />
              ))}
              <span className="text-gray-500 text-xs ml-1">
                ({p.reviews})
              </span>
            </div>

            {/* Shades info */}
            <p className="text-gray-500 text-xs mt-auto">
              {p.shades} Shades
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
