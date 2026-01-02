'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/7d297659e5afb201a30c237d7e88ae0e.svg',
  logoAlt: 'Company Logo',
  brandName: 'TechFlow',
  navItems: [{ label: 'Home', href: '#hero' }],
  ctaText: 'Get Started',
  ctaHref: '#hero',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
    setIsMobileMenuOpen(false);
  };

  return (
    <section id="navigation" className="bg-background text-foreground border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src={config.logoUrl}
                alt={config.logoAlt}
                fill
                className="object-contain"
                data-editable-src="logoUrl"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {config.navItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                    data-editable-href={`navItems[${idx}].href`}
                    data-href={item.href}
                  >
                    <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCTAClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-background text-foreground border-border w-[280px] sm:w-[320px]"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                        <Image
                          src={config.logoUrl}
                          alt={config.logoAlt}
                          fill
                          className="object-contain"
                          data-editable-src="logoUrl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col flex-1 pt-6">
                    <ul className="space-y-4">
                      {config.navItems.map((item, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleNavClick(item.href)}
                            className="w-full text-left py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200 font-medium"
                            data-editable-href={`navItems[${idx}].href`}
                            data-href={item.href}
                          >
                            <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Mobile CTA */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <Button
                        onClick={handleCTAClick}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                        data-editable-href="ctaHref"
                        data-href={config.ctaHref}
                      >
                        <span data-editable="ctaText">{config.ctaText}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
