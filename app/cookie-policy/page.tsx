import Link from "next/link";
import Image from "next/image";

export default function CookiePolicy() {
  return (
    <div className='bg-[#0a0a0a] text-white min-h-screen'>
      {/* Header */}
      <header className='py-6 border-b border-gray-800'>
        <div className='max-w-6xl mx-auto px-4 flex justify-center md:justify-start'>
          <Link href='/'>
            <Image
              src='/weyenthal-logo-final.png'
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
        <h1 className='font-serif text-3xl md:text-4xl text-[#c4a47c] mb-8'>Cookie Policy</h1>

        <div className='space-y-8 text-gray-300'>
          <section>
            <h2 className='text-xl font-serif text-white mb-4'>What Are Cookies</h2>
            <p className='leading-relaxed'>
              As is common practice with almost all professional websites, Weyenthal uses cookies,
              which are tiny files that are downloaded to your device, to improve your experience.
              This page describes what information they gather, how we use it, and why we sometimes
              need to store these cookies. We will also share how you can prevent these cookies from
              being stored, however, this may downgrade or &apos;break&apos; certain elements of the
              site&apos;s functionality.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-serif text-white mb-4'>How We Use Cookies</h2>
            <p className='leading-relaxed'>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases,
              there are no industry standard options for disabling cookies without completely
              disabling the functionality and features they add to this site. It is recommended that
              you leave on all cookies if you are not sure whether you need them or not in case they
              are used to provide a service that you use.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-serif text-white mb-4'>The Cookies We Set</h2>
            <ul className='list-disc pl-5 space-y-4'>
              <li>
                <p className='leading-relaxed'>
                  <strong>Site preferences cookies</strong>
                  <br />
                  To provide you with a great experience on this site, we provide the functionality
                  to set your preferences for how this site runs when you use it. In order to
                  remember your preferences, we need to set cookies so that this information can be
                  called whenever you interact with a page that is affected by your preferences.
                </p>
              </li>
              <li>
                <p className='leading-relaxed'>
                  <strong>Third-party cookies</strong>
                  <br />
                  In some special cases, we also use cookies provided by trusted third parties. The
                  following section details which third-party cookies you might encounter through
                  this site.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-xl font-serif text-white mb-4'>Disabling Cookies</h2>
            <p className='leading-relaxed'>
              You can prevent the setting of cookies by adjusting the settings on your browser (see
              your browser Help for how to do this). Be aware that disabling cookies will affect the
              functionality of this and many other websites that you visit. Disabling cookies will
              usually result in also disabling certain functionality and features of this site.
              Therefore it is recommended that you do not disable cookies.
            </p>
          </section>

          <section>
            <h2 className='text-xl font-serif text-white mb-4'>More Information</h2>
            <p className='leading-relaxed'>
              Hopefully, that has clarified things for you. As was previously mentioned, if there is
              something that you aren&apos;t sure whether you need or not, it&apos;s usually safer
              to leave cookies enabled in case it does interact with one of the features you use on
              our site.
            </p>
            <p className='leading-relaxed mt-4'>
              If you are still looking for more information, you can contact us through one of our
              preferred contact methods.
            </p>
            <p className='leading-relaxed mt-4'>
              Email:{" "}
              <a href='mailto:privacy@weyenthal.com' className='text-[#c4a47c] hover:underline'>
                privacy@weyenthal.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-[#0a0a0a] text-gray-400 py-8 px-4 border-t border-gray-800'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='text-xs font-light'>
            © {new Date().getFullYear()} Weyenthal. All rights reserved.
          </div>
          <div className='mt-4'>
            <Link
              href='/'
              className='text-sm uppercase tracking-wider hover:text-[#c4a47c] transition-colors'
            >
              Return to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
