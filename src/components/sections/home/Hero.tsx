'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Streamlined Technology Solutions',
  subtitle:
    'Cutting-edge technology made accessible and user-friendly. Reliable solutions that deliver measurable results through optimized processes.',
  ctaText: 'Get Started',
  ctaHref: '/contact',
  secondaryCtaText: 'View Solutions',
  secondaryCtaHref: '/solutions',
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/7d297659e5afb201a30c237d7e88ae0e.svg',
  logoAlt: 'Company Logo',
  features: [
    {
      icon: 'Code2',
      title: 'Intuitive Development',
      description: 'Scalable solutions built with modern frameworks',
    },
    {
      icon: 'Zap',
      title: 'Optimized Performance',
      description: 'Efficient systems that reduce complexity',
    },
    {
      icon: 'Shield',
      title: 'Robust Security',
      description: 'Reliable infrastructure you can trust',
    },
  ],
  badge: 'Technology Solutions',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-6 w-6" />;
      case 'Zap':
        return <Zap className="h-6 w-6" />;
      case 'Shield':
        return <Shield className="h-6 w-6" />;
      default:
        return <Code2 className="h-6 w-6" />;
    }
  };

  return (
    <section
      id="hero"
      className="bg-background text-foreground min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="bg-muted text-muted-foreground px-4 py-2">
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span data-editable="title">{config.title}</span>
            </h1>

            <p
              className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
