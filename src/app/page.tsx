"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "menu-preview" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "cta" }
          ]}
          brandName="Mermaids"
          bottomLeftText="1725 Walkley Rd, Ottawa ON"
          bottomRightText="(613) 733-7070"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Ottawa's Hidden Seafood Gem"
          description="Fresh seafood, Mediterranean flavors, and unforgettable hospitality — all in the heart of Ottawa."
          background={{ variant: "sparkles-gradient" }}
          tag="4.6★ 650+ Reviews"
          tagAnimation="slide-up"
          buttons={[
            { text: "View Menu", href: "#menu-preview" },
            { text: "Reserve a Table", href: "#cta" }
          ]}
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/onion-rings-served-with-lettuce-sauce_141793-889.jpg?_wi=1", imageAlt: "Fresh seafood platter display" },
            { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-french-fries-bowls-with-salt-copy-space_23-2148701505.jpg?_wi=1", imageAlt: "Crispy fried calamari" },
            { imageSrc: "http://img.b2bpic.net/free-photo/grilled-prawns-wooden-sticks-side-view_141793-4454.jpg?_wi=1", imageAlt: "Sautéed shrimp with herbs" },
            { imageSrc: "http://img.b2bpic.net/free-photo/fresh-healthy-food-breakfast-lunch-ideas-bread-with-cheese-avocado-salmon_8353-8798.jpg", imageAlt: "Grilled fresh fish" },
            { imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-tomato-cucumber-bell-peppers-red-onion-grated-parmesan-parsley_140725-8477.jpg?_wi=1", imageAlt: "Fresh Mediterranean tabouli" }
          ]}
        />
      </div>

      <div id="featured-dishes" data-section="featured-dishes">
        <ProductCardThree
          title="Signature Dishes"
          description="Experience our most beloved menu items, freshly prepared daily"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              name: "Fried Calamari",              price: "$14",              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-french-fries-bowls-with-salt-copy-space_23-2148701505.jpg?_wi=2",              imageAlt: "Fried calamari"
            },
            {
              id: "2",              name: "Tabouli",              price: "$12",              imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-tomato-cucumber-bell-peppers-red-onion-grated-parmesan-parsley_140725-8477.jpg?_wi=2",              imageAlt: "Fresh tabouli salad"
            },
            {
              id: "3",              name: "Sautéed Shrimp",              price: "$16",              imageSrc: "http://img.b2bpic.net/free-photo/grilled-prawns-wooden-sticks-side-view_141793-4454.jpg?_wi=2",              imageAlt: "Sautéed shrimp"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardTwelve
          title="Why Customers Love Us"
          description="Discover what makes Mermaids the heartbeat of Ottawa's seafood community"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "fresh",              label: "Fresh",              title: "Premium Seafood Daily",              items: ["Hand-selected suppliers", "Daily deliveries", "Highest quality standards"]
            },
            {
              id: "service",              label: "Warm",              title: "Family Hospitality",              items: ["Welcoming atmosphere", "Attentive staff", "Community focused"]
            },
            {
              id: "value",              label: "Fair",              title: "Exceptional Value",              items: ["Premium without premium prices", "Generous portions", "Quality ingredients"]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThirteen
          title="What Our Guests Say"
          description="Real reviews from the Ottawa community"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarajohn",              testimonial: "Amazing food and excellent customer service. The calamari is crispy perfection and the staff made our anniversary dinner unforgettable.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "@mikechen",              testimonial: "Best restaurant in quality, prices, and treatment. Truly special. My family visits every week and we never get tired of it.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emilyeats",              testimonial: "The food is delicious, and the restaurant is clean and peaceful. Perfect spot for a quiet dinner with great seafood.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg",              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",              name: "David Kim",              handle: "@davidkim",              testimonial: "Fresh catch grilled to perfection. The hospitality here is genuine and warm. Highly recommend for anyone craving authentic Mediterranean seafood.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-joyful-guy-enjoying-leisure-time_1262-20555.jpg",              imageAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Thompson",              handle: "@jessthompson",              testimonial: "Took my parents here for their anniversary. The service was impeccable and every dish was restaurant-quality. Worth every penny.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-work_23-2149304146.jpg",              imageAlt: "Jessica Thompson"
            },
            {
              id: "6",              name: "Robert Walsh",              handle: "@rwals",              testimonial: "My new favorite restaurant. The shrimp is always fresh and the portions are generous. They treat you like family here.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1617.jpg",              imageAlt: "Robert Walsh"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Mermaids Seafood Restaurant: Where Ocean Flavor Meets" },
            { type: "image", src: "http://img.b2bpic.net/free-photo/medium-shot-happy-friends-seaside_23-2149426408.jpg", alt: "Restaurant interior" },
            { type: "text", content: "Mediterranean Soul" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Order Online", href: "#cta" }
          ]}
        />
      </div>

      <div id="menu-preview" data-section="menu-preview">
        <FeatureCardTwelve
          title="Explore Our Menu"
          description="Carefully curated selections celebrating fresh seafood and authentic Mediterranean traditions"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "appetizers",              label: "Start",              title: "Appetizers",              items: ["Fried Calamari - $14", "Shrimp Saganaki - $16", "Mixed Seafood Platter - $22"]
            },
            {
              id: "salads",              label: "Fresh",              title: "Salads & Sides",              items: ["Tabouli - $12", "Fattoush - $13", "Hummus with Pita - $8"]
            },
            {
              id: "mains",              label: "Main",              title: "Seafood Dishes",              items: ["Grilled Fish - $24", "Sautéed Shrimp - $22", "Family Seafood Platter - $45"]
            }
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactSplit
          tag="Reserve or Order"
          title="Taste the Ocean Tonight"
          description="Reserve your table or order your favorites for delivery. Experience the freshness and warmth that defines Mermaids."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/onion-rings-served-with-lettuce-sauce_141793-889.jpg?_wi=2"
          imageAlt="Seafood platter"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Sign Up for Updates"
          termsText="We respect your privacy and will only send you restaurant updates and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Mermaids"
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#hero" },
                { label: "Menu", href: "#menu-preview" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#testimonial" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "1725 Walkley Rd", href: "https://maps.google.com/?q=1725+Walkley+Rd+Ottawa+ON" },
                { label: "(613) 733-7070", href: "tel:+16137337070" },
                { label: "Open Daily Until 10PM", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Google Reviews", href: "https://google.com/maps" }
              ]
            }
          ]}
          copyrightText="© 2025 Mermaids Seafood Restaurant | Fresh From the Sea. Served With Heart."
        />
      </div>
    </ThemeProvider>
  );
}
