# Amoghaa Real Estate — Phase 1A

Responsive Next.js App Router starter built with React, TypeScript, and CSS.

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Reusable component structure
- `components/Header.tsx` — desktop navigation and accessible full-screen mobile overlay
- `components/FindHomeSearch.tsx` — controlled search form and URL query navigation
- `components/Footer.tsx` — reusable footer
- `components/sections/HeroSection.tsx` — hero and Find Home panel
- `components/sections/LocalitySection.tsx` — locality cards
- `components/sections/FeaturedProperties.tsx` — property showcase cards
- `components/sections/ValueSection.tsx` — value proposition/service cards
- `components/sections/InsightSection.tsx` — insight CTA band
- `components/sections/ContactSection.tsx` — site-visit enquiry form UI
- `app/page.tsx` — page composition only
- `app/property/page.tsx` — mock property search results
- `app/globals.css` — global design tokens, responsive styles, and component styles

## Visual updates
- Darker forest-green palette and stronger contrast
- Rounded property cards, soft shadows, and hover elevation
- Larger typography and uppercase navigation labels
- Amoghaa logo image URL added to the header and footer
- Mobile menu button and full-screen overlay explicitly shown below 900px
- Keyboard Escape closes the overlay; background scrolling is locked while open

## Important
- Property data is illustrative and not verified listings.
- The enquiry form is UI only; connect it to a backend before launch.
- Blog, property detail route, CRM, and PostgreSQL integration remain future milestones.
- Remote Unsplash photos, Google Fonts, and the logo URL require internet access.



AMOGHAA — SUCCESS STORIES + GOOGLE REVIEWS

1. Copy:
   components/sections/SuccessStoriesAndReviews.tsx
   into the same folder in your project.

2. Append success-stories-reviews.css.txt to the bottom of app/globals.css.
   Do not replace the existing global stylesheet.

3. Import into the homepage file:
   import SuccessStoriesAndReviews from "@/components/sections/SuccessStoriesAndReviews";

4. Render it AFTER the "Good choices begin with the right questions" section
   and BEFORE the contact form section:
   <SuccessStoriesAndReviews />

5. Run:
   npm run build
   npm run dev

IMPORTANT ABOUT GOOGLE REVIEWS:
The review cards contain clearly marked placeholder text, not real Google reviews.
To show the latest genuine reviews automatically, connect the official Google
Business Profile / Places API (or an approved reviews provider). You will need
Amoghaa's exact Google Business Profile / Place ID and an API key or provider.
Do not publish placeholder reviews or claim an unverified star rating.
The "View on Google" link currently opens a Google Maps search for Amoghaa;
replace it with the exact business review URL when available.

SUCCESS STORIES:
The success-story text is sample copy. Replace with genuine customer stories
and obtain permission before publishing names, photos or personal details.

The component uses lucide-react, which is already used in the project.

