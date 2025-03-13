import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <div className='bg-[#0a0a0a] text-white min-h-screen'>
      {/* Header */}
      <header className='py-6 border-b border-gray-800'>
        <div className='max-w-6xl mx-auto px-4 flex justify-center md:justify-start'>
          <Link href='/'>
            <Image
              src='/logo-white.png'
              alt='Weyenthal Logo'
              width={300}
              height={100}
              className='h-24 w-auto'
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-4 py-12'>
        <h1 className='font-serif text-3xl md:text-4xl text-[#c4a47c] mb-8'>Contact Us</h1>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-8 text-gray-300'>
            <section>
              <h2 className='text-xl font-serif text-white mb-4'>Get in Touch</h2>
              <p className='leading-relaxed'>
                We welcome your inquiries and look forward to assisting you with any questions about
                our luxury crafts.
              </p>
            </section>

            <section>
              <h2 className='text-xl font-serif text-white mb-4'>Contact Information</h2>
              <div className='space-y-4'>
                <p className='leading-relaxed'>
                  <strong className='text-[#c4a47c]'>Email:</strong>
                  <br />
                  <a
                    href='mailto:info@weyenthal.com'
                    className='hover:text-[#c4a47c] transition-colors'
                  >
                    contact@weyenthal.ch
                  </a>
                </p>
                <p className='leading-relaxed'>
                  <strong className='text-[#c4a47c]'>Phone:</strong>
                  <br />
                  <a href='tel:+11234567890' className='hover:text-[#c4a47c] transition-colors'>
                    +41 43 444 68 14
                  </a>
                </p>
                <p className='leading-relaxed'>
                  <strong className='text-[#c4a47c]'>Headquarters:</strong>
                  <br />
                  Weyenthal Luxusgueter GmbH
                  <br />
                  Stockerstrasse 38
                  <br />
                  8002 Zürich
                  <br />
                  Switzerland
                </p>
              </div>
            </section>

            <section>
              <h2 className='text-xl font-serif text-white mb-4'>Hours of Operation</h2>
              <p className='leading-relaxed'>
                <strong className='text-[#c4a47c]'>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                <br />
                <strong className='text-[#c4a47c]'>Saturday:</strong> 10:00 AM - 4:00 PM
                <br />
                <strong className='text-[#c4a47c]'>Sunday:</strong> By appointment only
              </p>
            </section>
          </div>

          <div className='bg-[#111111] p-6 rounded-lg border border-gray-800'>
            <h2 className='text-xl font-serif text-white mb-6'>Send Us a Message</h2>

            <form className='space-y-6' action='https://formspree.io/f/mldjeyoo' method='POST'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#c4a47c] focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#c4a47c] focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-1'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#c4a47c] focus:border-transparent'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  className='w-full bg-[#1a1a1a] border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#c4a47c] focus:border-transparent'
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full bg-[#c4a47c] hover:bg-[#b3936b] text-black font-medium py-2 px-4 rounded-md transition-colors duration-300'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-[#0a0a0a] text-gray-400 py-8 px-4 border-t border-gray-800'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='text-xs font-light'>
            © {new Date().getFullYear()} Weyenthal. All rights reserved.
          </div>
          <div className='mt-4 flex justify-center space-x-6'>
            <Link
              href='/'
              className='text-sm uppercase tracking-wider hover:text-[#c4a47c] transition-colors'
            >
              Home
            </Link>
            <Link
              href='/cookie-policy'
              className='text-sm uppercase tracking-wider hover:text-[#c4a47c] transition-colors'
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
