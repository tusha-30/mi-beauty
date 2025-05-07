// src/app/components/FeatureHighlights.jsx
import React from 'react'
import {
  TruckIcon,
  ArchiveBoxIcon,
  TagIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import {
  HeartIcon,
  ArrowPathIcon,
  StarIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/solid'

const features = [
  {
    title: 'Free Shipping',
    subtitle: 'Above ₹499',
    Icon: TruckIcon,
    Badge: HeartIcon,
  },
  {
    title: 'Easy Returns',
    subtitle: '15-Days',
    Icon: ArchiveBoxIcon,
    Badge: ArrowPathIcon,
  },
  {
    title: '100% Authentic',
    subtitle: 'Products',
    Icon: TagIcon,
    Badge: StarIcon,
  },
  {
    title: '2100+ Brands',
    subtitle: '1.3L Products',
    Icon: CheckBadgeIcon,
    Badge: HandThumbUpIcon,
  },
]

export default function FeatureHighlights() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {features.map(({ title, subtitle, Icon, Badge }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 rounded-full border-2 border-pink-300 flex items-center justify-center overflow-visible">
              {/* pink “shadow” shape behind icon */}
          
              {/* main icon */}
              <Icon className="relative h-8 w-8 text-gray-700" />
              {/* badge overlay */}
              <div className="absolute bottom-0 right-0 bg-pink-600 rounded-full p-1">
                <Badge className="h-4 w-4 text-white" />
              </div>
            </div>
            <h3 className="mt-3 text-gray-900 font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
