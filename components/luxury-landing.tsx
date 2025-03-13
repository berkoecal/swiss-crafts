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
            <Image
              src='/logo-white.png'
              alt='Weyenthal Logo'
              width={550}
              height={320}
              className={`transition-all duration-300 ${
                isScrolled ? "h-24 w-auto" : "h-48 w-auto"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className='relative h-screen w-full overflow-hidden'>
        {/* Video Background with Overlay */}
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-black/60 z-10'></div>
          <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
            <source src='/bg-video-3.mp4' type='video/mp4' />
          </video>
        </div>

        {/* Content */}
        <div className='relative z-20 flex flex-col items-center justify-center h-full px-4 text-center'>
          <div
            className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {/* Main Content */}
            <h2 className='font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight'>
              Redefining <span className='text-[#c4a47c]'>Elegance</span>
            </h2>

            <p className='max-w-md mx-auto mb-10 text-gray-200 font-light tracking-wide'>
              Experience luxury reimagined for the modern connoisseur. Where sophistication meets
              classic elegance.
            </p>

            {/* CTA Button */}
            <Button
              className='bg-[#c4a47c] hover:bg-[#d5b78d] text-[#0a0a0a] border-none rounded-none px-8 py-6 group transition-all duration-300'
              onClick={scrollToProducts}
            >
              <span className='mr-2 font-light'>Discover</span>
              <span className='transition-transform group-hover:translate-y-1'>↓</span>
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
            Explore our bestsellers
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {/* Product 1 */}
            <div className='group'>
              <div className='relative overflow-hidden mb-6'>
                <div className='absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-500'></div>
                <Image
                  src='/custom-4.jpg'
                  alt='Luxury Timepiece'
                  width={800}
                  height={600}
                  className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='font-serif text-2xl text-white'></h3>
                </div>
              </div>
              <p className='text-gray-300 mb-4 font-light'>
                Where heritage meets prestige. Our bespoke espresso creations seamlessly merge
                artisanal craftsmanship with contemporary sophistication, delivering a statement
                piece for the most discerning connoisseurs.
              </p>
            </div>

            {/* Product 2 */}
            <div className='group'>
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
              <p className='text-gray-300 mb-4 font-light'>
                A symphony of elegance and refinement. Meticulously handcrafted and tailored to
                perfection, our espresso machines transcend functionality, becoming objets
                d&apos;art for those who demand the extraordinary.
              </p>
            </div>

            {/* Product 3 */}
            <div className='group'>
              <div className='relative overflow-hidden mb-6'>
                <div className='absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-all duration-500'></div>
                <Image
                  src='/custom-1.jpg'
                  alt='Luxury Accessories'
                  width={800}
                  height={600}
                  className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                  <h3 className='font-serif text-2xl text-white'></h3>
                </div>
              </div>
              <p className='text-gray-300 mb-4 font-light'>
                Uncompromising luxury, redefined. Our meticulously curated espresso collections
                elevate your lifestyle, ensuring every cup is a testament to your taste, status, and
                pursuit of perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Footer inspired by luxury brands */}
      <footer className='bg-[#0a0a0a] text-gray-400 py-6 px-6 md:px-12 border-t border-gray-800'>
        <div className='max-w-7xl mx-auto'>
          {/* Top section with logo, copyright, and main links */}
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center gap-4 mb-8 md:mb-0'>
              <div className='flex items-center'>
                {/* test */}
                <Image
                  src='/logo-white.png'
                  alt='Weyenthal Logo'
                  width={350}
                  height={100}
                  className='h-24 w-auto'
                />
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
