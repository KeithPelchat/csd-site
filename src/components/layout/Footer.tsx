import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Rent a Dumpster', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]

  return (
    <footer className="bg-black text-white">
      <Container className="py-10">
        {/* Top Section: Logo centered */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt={siteConfig.business.name}
              width={280}
              height={70}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Middle Section: Address | Tagline | Phone */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Address */}
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-[#D32F2F] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <div className="font-body">
              <div>{siteConfig.business.address.street},</div>
              <div>{siteConfig.business.address.city}, {siteConfig.business.address.state} {siteConfig.business.address.zip}</div>
            </div>
          </div>

          {/* Tagline */}
          <div className="font-heading text-center text-sm text-gray-300 uppercase tracking-wide">
            <div>Dumpster Rental Service –</div>
            <div>Serving Nashville, Franklin, &amp; Hendersonville TN area</div>
          </div>

          {/* Phone */}
          <a
            href={`tel:${siteConfig.business.phone.replace(/\./g, '')}`}
            className="font-heading flex items-center gap-2 text-sm hover:text-[#D32F2F] transition-colors tracking-wide"
          >
            <svg className="w-5 h-5 text-[#D32F2F] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="font-semibold">{siteConfig.business.phone}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D32F2F] mb-8" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wide hover:text-[#D32F2F] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {siteConfig.social.facebook && (
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D32F2F] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
          )}
          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D32F2F] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Copyright */}
        <div className="font-body text-center text-xs text-gray-500">
          &copy; {currentYear} {siteConfig.business.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
