'use client';

import { Separator } from '@/components/ui/separator';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import Image from 'next/image';

const DEFAULT_FOOTER = {
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/7d297659e5afb201a30c237d7e88ae0e.svg',
  logoAlt: 'Company Logo',
  companyName: 'TechFlow',
  tagline:
    'Streamlined technology solutions that simplify your digital experience and drive results.',
  copyright: '© 2024 TechFlow. All rights reserved.',
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <footer id="footer" className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={config.logoUrl}
                  alt={config.logoAlt}
                  width={32}
                  height={32}
                  className="object-contain"
                  data-editable-src="logoUrl"
                />
                <span className="text-xl font-semibold text-foreground" data-editable="companyName">
                  {config.companyName}
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-6" data-editable="tagline">
                {config.tagline}
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-foreground">Email: </span>
                  <span data-editable="contactEmail">{config.contactEmail}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Phone: </span>
                  <span data-editable="contactPhone">{config.contactPhone}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <nav className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.href)}
                    className="block text-sm hover:text-foreground transition-colors text-left"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <nav className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLinkClick(link.href)}
                    className="block text-sm hover:text-foreground transition-colors text-left"
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm" data-editable="copyright">
              {config.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
