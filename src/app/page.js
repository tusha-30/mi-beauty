//home page

// home page
"use client"
export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#E69DB8] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Mi Beauty</div>
          <div className="space-x-4">
            <a href="#about" className="text-white hover:text-gray-300">About Us</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Video Section */}
      <div className="">
        <video 
          src="/vid4.mp4" 
          autoPlay 
          loop 
          muted
          className="w-full h-auto" 
          alt="Beauty video"
        />
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          nav {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

