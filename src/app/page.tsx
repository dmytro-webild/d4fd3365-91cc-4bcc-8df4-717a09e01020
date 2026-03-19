"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Leaf, ImageIcon, Star, Heart, CheckCircle, Facebook, Instagram, Phone, Users } from 'lucide-react';

export default function LandingPage() {
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
            { name: "Services", id: "services" },
            { name: "Our Work", id: "showcase" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" }
          ]}
          button={{ text: "Get Free Quote", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Land Care 4 U & Landscaping"
          description="Transform Your Yard Into a Beautiful, Stress-Free Outdoor Space. Reliable. Professional. Affordable landscaping trusted by homeowners who want it done right the first time."
          buttons={[
            { text: "Get a Free Quote", href: "#contact" },
            { text: "View Our Work", href: "#showcase" }
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

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardOne
          tag="Why Choose Us"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Landscaping Done With Care, Precision, and Pride"
          description="We transform outdoor spaces with expertise, honesty, and genuine care. Every project reflects our commitment to excellence and customer satisfaction."
          features={[
            {
              title: "Complete Transformations",              description: "From dirt and weeds to lush, healthy lawns. We handle projects of any size with professionalism and attention to detail.",              imageSrc: "http://img.b2bpic.net/free-vector/landscape-gardens-design-infographics-report_1284-5947.jpg?_wi=1",              imageAlt: "Beautiful professional garden landscape design"
            },
            {
              title: "Fast & Reliable Service",              description: "Next-day or same-week availability. We respect your time and deliver results when we promise them.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg?id=9696898",              imageAlt: "Professional landscaper maintaining green lawn"
            },
            {
              title: "Honest & Transparent",              description: "We walk you through everything before we start. No surprises, no hidden costs—just straightforward, quality work.",              imageSrc: "http://img.b2bpic.net/free-photo/view-water-tank-storage_23-2151748218.jpg?_wi=1",              imageAlt: "Professional irrigation system installation"
            },
            {
              title: "Above & Beyond Care",              description: "We don't just finish the job—we make sure it lasts. Your satisfaction is our priority.",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-empty-park-with-blooming-green-trees-walls_181624-19632.jpg?_wi=1",              imageAlt: "Professional hardscape and patio installation"
            },
            {
              title: "Affordable, Fair Pricing",              description: "Premium results without overpriced quotes. We believe great landscaping should be accessible.",              imageSrc: "http://img.b2bpic.net/premium-photo/price-symbol-price-concept-price-wording-increasing-wooden-block-coins-stacking_184421-3960.jpg?id=388981837",              imageAlt: "Professional landscaping service"
            },
            {
              title: "Versatile Services",              description: "From lawn care to gutters, roses, and hardscaping. Your trusted partner for all outdoor needs.",              imageSrc: "http://img.b2bpic.net/free-vector/landscape-gardens-design-infographics-report_1284-5947.jpg?_wi=2",              imageAlt: "Comprehensive landscaping services"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Request Your Custom Plan", href: "#contact" }]}
          buttonAnimation="slide-up"
          ariaLabel="Why choose us feature section"
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardThree
          title="Everything Your Yard Needs — Done Right"
          description="Complete landscaping solutions tailored to your property and lifestyle. From routine maintenance to complete transformations."
          tag="Our Services"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "lawn-care",              name: "Lawn & Yard Services",              price: "Weekly or Bi-Weekly",              imageSrc: "http://img.b2bpic.net/free-photo/male-hands-cutting-bushes-with-big-scissors_651396-1549.jpg?id=26767874",              imageAlt: "Professional lawn maintenance service"
            },
            {
              id: "irrigation",              name: "Irrigation & Lawn Health",              price: "Custom Quotes",              imageSrc: "http://img.b2bpic.net/free-photo/view-water-tank-storage_23-2151748218.jpg?_wi=2",              imageAlt: "Professional irrigation system installation"
            },
            {
              id: "landscaping",              name: "Landscaping & Design",              price: "Project-Based",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-empty-park-with-blooming-green-trees-walls_181624-19632.jpg?_wi=2",              imageAlt: "Professional hardscape and garden design"
            },
            {
              id: "specialty",              name: "Specialty Services",              price: "On Request",              imageSrc: "http://img.b2bpic.net/free-photo/worker-is-cutting-grass-with-hose_7502-9835.jpg?id=66860580",              imageAlt: "Specialty landscaping services"
            },
            {
              id: "maintenance",              name: "Ongoing Maintenance",              price: "Seasonal Plans",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-picture-hand-holding-wooden-tray-which-full-pots-plants_1150-26606.jpg?id=10401277",              imageAlt: "Ongoing yard maintenance service"
            },
            {
              id: "consultation",              name: "Consultation & Planning",              price: "Free Assessment",              imageSrc: "http://img.b2bpic.net/free-photo/quality-control-inspector-worker-talking-while-going-through-list-plants-greenhouse_637285-1670.jpg?id=25624237",              imageAlt: "Free landscaping consultation and planning"
            }
          ]}
          buttons={[{ text: "Request Your Custom Plan", href: "#contact" }]}
          buttonAnimation="slide-up"
          ariaLabel="Services and products section"
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

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="Meet the Team Behind the Work"
          description="Led by Juan and his dedicated team, Land Care 4 U & Landscaping is built on hard work, honesty, and real care for every home we touch."
          subdescription="We don't just show up—we listen, explain, and deliver results that last. Every project is treated with the same pride and attention to detail, regardless of size."
          icon={Users}
          imageSrc="http://img.b2bpic.net/premium-photo/landscaper-cut-natural-grass-turfs-size_1426-4787.jpg?id=49630866"
          imageAlt="Land Care 4 U team"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="About our team section"
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
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Phone, href: "tel:+1234567890", ariaLabel: "Call us" }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}