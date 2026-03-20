"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Star, Heart, CheckCircle, Instagram, Phone, Users, ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  const handleGetAssessment = () => {
    router.push('/assessment');
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="largeSmall"
      background="noise"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Land Care 4 U"
          navItems={[
            { name: "Our Work", id: "showcase" }
          ]}
          button={{ text: "Get Free Quote", onClick: handleGetAssessment }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Land Care 4 U & Landscaping"
          description="Transform Your Yard Into a Beautiful, Stress-Free Outdoor Space. Reliable. Professional. Affordable landscaping trusted by homeowners who want it done right the first time."
          buttons={[
            { text: "Get Your Free Yard Assessment", onClick: handleGetAssessment }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-modern-house-cement-view-from-garden_1127-3209.jpg?id=1242915", imageAlt: "Yard transformation from overgrown to lush green landscape" },
            { imageSrc: "http://img.b2bpic.net/premium-photo/suburban-home-with-lush-green-lawn_332679-26291.jpg?id=403791437", imageAlt: "Professional landscaping transformation before and after" },
            { imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-male-gardener-digging-soil-with-hoe_23-2148165200.jpg?_wi=1", imageAlt: "Desert yard transformed to beautiful lush garden" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={false}
          ariaLabel="Hero section showcasing landscaping transformations"
        />
      </div>

      <div id="showcase" data-section="showcase">
        <MetricCardEleven
          title="Real Transformations. Real Results."
          description="See how we've transformed yards across the community. From neglected spaces to stunning outdoor oases."
          tag="Before & After Gallery"
          tagIcon={ImageIcon}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "transform-1",              value: "Desert → Lush",              title: "Complete Lawn Transformation",              description: "From dry, weed-filled yard to thriving green landscape in just weeks.",              imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-vertical-shot-cylindrical-cement-blocks-park_181624-24752.jpg?_wi=2",              imageAlt: "Before and after yard transformation"
            },
            {
              id: "transform-2",              value: "Wasteland → Paradise",              title: "Backyard Makeover",              description: "Diseased soil and weeds replaced with healthy turf and professional irrigation.",              imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-male-gardener-digging-soil-with-hoe_23-2148165200.jpg?_wi=2",              imageAlt: "Landscaping transformation project"
            },
            {
              id: "transform-3",              value: "1000% Better",              title: "Stunning Results",              description: "Every transformation represents our commitment to exceeding expectations.",              imageSrc: "http://img.b2bpic.net/premium-photo/luxury-home-facade-sunset-with-lush-lawn_661495-46990.jpg?id=218986032",              imageAlt: "Professional garden design"
            },
            {
              id: "transform-4",              value: "Love It Again",              title: "Outdoor Living",              description: "Transform your space into an outdoor oasis you'll actually use and enjoy.",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-empty-park-with-blooming-green-trees-walls_181624-19632.jpg?_wi=3",              imageAlt: "Hardscape and landscape design"
            }
          ]}
          ariaLabel="Before and after showcase section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Homeowners Are Saying"
          description="Real reviews from real customers. Hear why families trust Land Care 4 U with their outdoor spaces."
          tag="5-Star Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "shawn-moon",              name: "Shawn Moon",              role: "Homeowner",              company: "Satisfied Customer",              rating: 5
            },
            {
              id: "cory-randle",              name: "Cory Randle",              role: "Homeowner",              company: "Satisfied Customer",              rating: 5
            },
            {
              id: "frank-molinari",              name: "Frank Molinari",              role: "Homeowner",              company: "Satisfied Customer",              rating: 5
            },
            {
              id: "zapporah",              name: "Zapporah",              role: "Homeowner",              company: "Satisfied Customer",              rating: 5
            },
            {
              id: "anahuac-enciso",              name: "Anahuac Enciso",              role: "Homeowner",              company: "Satisfied Customer",              rating: 5
            },
            {
              id: "five-star",              name: "Juan Garcia",              role: "Landscaping Expert",              company: "Land Care 4 U",              rating: 5
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardOne
          tag="Simple Process"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          title="Stress-Free, Straightforward Process"
          description="We make landscaping simple. Four easy steps from your first call to enjoying your dream yard."
          features={[
            {
              title: "Request a Quote",              description: "Tell us about your yard. Share your vision, challenges, and goals. We listen and understand your unique needs.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-building-exterior-design_23-2151917336.jpg?id=408580761",              imageAlt: "Free quote consultation"
            },
            {
              title: "Get a Custom Plan",              description: "We walk you through everything. No hidden costs, no surprises—just honest, transparent pricing and clear expectations.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-hand-trowel-green-grass_181624-26501.jpg?id=11942615",              imageAlt: "Professional landscaping plan"
            },
            {
              title: "We Get to Work",              description: "Fast, clean, professional execution. We handle every detail while respecting your property and timeline.",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-empty-park-with-blooming-green-trees-walls_181624-19632.jpg?_wi=4",              imageAlt: "Professional landscaping execution"
            },
            {
              title: "Enjoy Your Yard",              description: "Relax and love your outdoor space again. Maintenance plans available to keep it looking perfect year-round.",              imageSrc: "http://img.b2bpic.net/free-photo/view-water-tank-storage_23-2151748218.jpg?_wi=3",              imageAlt: "Beautiful maintained landscape"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="How it works process section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Land Care 4 U & Landscaping"
          copyrightText="© 2025 Land Care 4 U & Landscaping. All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://www.instagram.com/lawncare4ulandscaping", ariaLabel: "Follow us on Instagram @lawncare4ulandscaping" }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}