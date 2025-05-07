import React from 'react';

const Me = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12">
      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <div className="w-72 h-72 rounded-full overflow-hidden">
          <img
            src="/images/dp.webp"
            alt="Soft Pinch Liquid Blush"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Soft Pinch Liquid Blush
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          Meet our award-winning bestseller that’s sold every four seconds.
          Lightweight, layerable, long-lasting—and loved by so many
          worldwide. Get pinch-perfect color in just one dot.
        </p>
        <a
          href="#"
          className="inline-block text-sm tracking-widest uppercase text-pink-600 hover:underline"
        >
          Shop Soft Pinch
        </a>
      </div>
    </section>
  );
};

export default Me;
