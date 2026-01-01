"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LuxuryLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bg-[#0a0a0a] text-white'>
      {/* Fixed Logo Bar - Thinner Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-1 px-4 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className='flex items-center'>
            <div
              className={`relative transition-all duration-300 ${
                isScrolled ? "h-16 w-24 my-2" : "h-20 w-32"
              }`}
            >
              <Image src='/logo.png' alt='Weyenthal Logo' fill className='object-contain' />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className='relative h-screen w-full overflow-hidden'>
        {/* Video Background with Overlay */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-black/60 z-10'></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute w-full h-full object-cover'
          >
            <source src='/bg-video-3.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className='relative z-20 flex flex-col items-center justify-center h-full px-4 text-center'>
          <div
            className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {/* Main Content */}
            <h2 className='font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight'>
              Redefining{" "}
              <span className='text-[#c4a47c] font-bold relative overflow-hidden'>
                <span className='relative z-10'>Elegance</span>
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#f0d9b5] to-transparent opacity-0 ${
                    isLoaded ? "animate-spotlight" : ""
                  }`}
                ></span>
              </span>
            </h2>

            {/* Swiss Tagline */}
            <div className='flex items-center justify-center gap-3 mb-8'>
              <span className='text-xs uppercase tracking-[0.3em] text-[#c4a47c] font-light'>
                Swiss Precision. Timeless Luxury.
              </span>
            </div>

            <p className='max-w-md mx-auto mb-10 text-gray-200 font-light tracking-wide'>
              Experience <span className='font-bold'>luxury</span> reimagined for the modern
              connoisseur. Where sophistication meets{" "}
              <span className='font-bold'>classic elegance</span>.
            </p>

            {/* CTA Button */}
            <Button
              className='relative bg-[#c4a47c] hover:bg-[#d5b78d] text-[#0a0a0a] border-none rounded-none px-8 py-6 group transition-all duration-300 overflow-hidden'
              onClick={scrollToProducts}
            >
              {/* Fancy animation without fixed borders */}
              <span className='absolute inset-[-2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shine-effect pointer-events-none'></span>

              <span className='relative mr-2 font-light text-m'>Discover now </span>
              <span className='relative transition-transform group-hover:translate-y-1'>↓</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={productsRef}
        className='min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#141414] py-24 px-4 md:px-8'
      >
        <div className='max-w-7xl mx-auto'>
          <h2 className='font-serif text-3xl md:text-4xl text-center mb-16 text-[#c4a47c]'>
            A glimpse into our craftsmanship
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {/* Product 1 */}
            <div className='group relative overflow-hidden'>
              {/* Fancy border animation - removed outer border */}
              <span className='absolute inset-0 border border-white/20 scale-[0.98] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-100'></span>
              <span className='absolute inset-[-2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shine-effect z-10 pointer-events-none'></span>

              <div className='relative bg-[#0a0a0a] p-4 h-full'>
                <div className='relative overflow-hidden mb-6'>
                  <div className='absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-500'></div>
                  <Image
                    src='/custom-1.jpg'
                    alt='Luxury Timepiece'
                    width={800}
                    height={600}
                    className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                    <h3 className='font-serif text-2xl text-white'></h3>
                  </div>
                </div>
                <p className='text-[#c4a47c] text-xs uppercase tracking-[0.15em] mb-2 text-center'>
                  Rosso Levanto & 24K Gold
                </p>
                <h3 className='font-serif text-xl text-white mb-3 text-center'>
                  The Crimson Sovereign
                </h3>
                <p className='text-gray-400 mb-4 font-light text-sm leading-relaxed text-center'>
                  Hand-selected Rosso Levanto marble from the quarries of Liguria, its deep burgundy
                  veins flowing like rivers of wine through ancient stone. Crowned with 24-karat
                  gold accents, hand-finished by master artisans in our Swiss atelier.
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='group relative overflow-hidden'>
              {/* Fancy border animation - removed outer border */}
              <span className='absolute inset-0 border border-white/20 scale-[0.98] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-100'></span>
              <span className='absolute inset-[-2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shine-effect z-10 pointer-events-none'></span>

              <div className='relative bg-[#0a0a0a] p-4 h-full'>
                <div className='relative overflow-hidden mb-6'>
                  <div className='absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-500'></div>
                  <Image
                    src='/custom-2.jpg'
                    alt='Luxury Jewelry'
                    width={800}
                    height={600}
                    className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                    <h3 className='font-serif text-2xl text-white'></h3>
                  </div>
                </div>
                <p className='text-[#c4a47c] text-xs uppercase tracking-[0.15em] mb-2 text-center'>
                  Calacatta Gold & 24K Gold
                </p>
                <h3 className='font-serif text-xl text-white mb-3 text-center'>
                  The Venetian Grace
                </h3>
                <p className='text-gray-400 mb-4 font-light text-sm leading-relaxed text-center'>
                  Rare Calacatta Gold marble, treasured since the Renaissance for its luminous ivory
                  canvas and dramatic golden veining. Each slab personally curated from Italian
                  quarries, paired with hand-polished 24-karat gold fixtures of unparalleled
                  brilliance.
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='group relative overflow-hidden'>
              {/* Fancy border animation - removed outer border */}
              <span className='absolute inset-0 border border-white/20 scale-[0.98] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-100'></span>
              <span className='absolute inset-[-2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shine-effect z-10 pointer-events-none'></span>

              <div className='relative bg-[#0a0a0a] p-4 h-full'>
                <div className='relative overflow-hidden mb-6'>
                  <div className='absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-500'></div>
                  <Image
                    src='/custom-3.jpg'
                    alt='Luxury Accessories'
                    width={800}
                    height={600}
                    className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                    <h3 className='font-serif text-2xl text-white'></h3>
                  </div>
                </div>
                <p className='text-[#c4a47c] text-xs uppercase tracking-[0.15em] mb-2 text-center'>
                  Verde Alpi & 24K Gold
                </p>
                <h3 className='font-serif text-xl text-white mb-3 text-center'>
                  The Alpine Empress
                </h3>
                <p className='text-gray-400 mb-4 font-light text-sm leading-relaxed text-center'>
                  Majestic Verde Alpi marble, born from the eternal Alps, its serpentine depths
                  echoing primordial forests frozen in time. Adorned with 24-karat gold detailing,
                  each piece represents over 200 hours of meticulous handcraft by our master
                  goldsmiths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Waitlist Section */}
      <section className='relative bg-[#0a0a0a] py-16 px-4 md:px-8'>
        <div className='max-w-xl mx-auto text-center'>
          <p className='text-[#c4a47c] text-xs uppercase tracking-[0.2em] mb-4'>
            By Invitation Only
          </p>
          <h3 className='font-serif text-xl md:text-2xl mb-6 text-white'>
            Join Our Exclusive Circle
          </h3>
          <form
            action='https://formspree.io/f/mldjeyoo'
            method='POST'
            className='flex flex-col sm:flex-row gap-3 max-w-sm mx-auto'
          >
            <input type='hidden' name='subject' value='Waitlist Signup' />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              required
              className='flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 font-light focus:outline-none focus:border-[#c4a47c] transition-colors'
            />
            <button
              type='submit'
              className='bg-[#c4a47c] hover:bg-[#d5b78d] text-[#0a0a0a] px-6 py-3 text-xs uppercase tracking-wider transition-colors'
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Minimalist Footer inspired by luxury brands */}
      <footer className='bg-[#0a0a0a] text-gray-400 py-6 px-6 md:px-12 border-t border-gray-800'>
        <div className='max-w-7xl mx-auto'>
          {/* Top section with logo, copyright, and main links */}
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center gap-4 mb-8 md:mb-0'>
              <div className='flex items-center'>
                <div className='relative h-10 w-16'>
                  <Image src='/logo.png' alt='Weyenthal Logo' fill className='object-contain' />
                </div>
              </div>
              <div className='flex items-center gap-2 text-xs font-light'>
                <svg
                  className='w-3 h-3'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='32' height='32' rx='2' fill='#FF0000' />
                  <path d='M14 6H18V14H26V18H18V26H14V18H6V14H14V6Z' fill='white' />
                </svg>
                <span className='uppercase tracking-wider'>Swiss Made</span>
              </div>
              <div className='text-xs font-light'>
                © {new Date().getFullYear()} Weyenthal. All rights reserved.
              </div>
            </div>

            <div className='flex flex-wrap justify-center gap-x-10 gap-y-4'>
              <Link
                href='/cookie-policy'
                className='text-sm uppercase tracking-wider hover:text-[#c4a47c] transition-colors'
              >
                Cookie Policy
              </Link>
              <Link
                href='/contact'
                className='text-sm uppercase tracking-wider hover:text-[#c4a47c] transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
