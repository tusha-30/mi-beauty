import React from 'react'

const categories = [
  {
    name: 'Lip',image:'/images/lipcategory.webp',
  },
  {
    name: 'Eye',
    image: '/images/eyecategory.webp',
  },
  {
    name: 'Bestsellers',
    image: '/images/bestseller.webp',
  },
]

export default function ShopByCategory() {
  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center lg:text-left">
          Shop by Category
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Lip: spans two rows on large */}
          <div className="relative overflow-hidden rounded-lg shadow-lg row-span-2">
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-4 left-4 text-xl font-semibold text-pink-600">
              {categories[0].name}
            </span>
          </div>

          {/* Eye */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={categories[1].image}
              alt={categories[1].name}
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-4 left-4 text-xl font-semibold text-pink-600">
              {categories[1].name}
            </span>
          </div>

          {/* Bestsellers */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={categories[2].image}
              alt={categories[2].name}
              className="object-cover w-full h-full"
            />
            <span className="absolute bottom-4 left-4 text-xl font-semibold text-pink-600">
              {categories[2].name}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
