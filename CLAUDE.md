# CLAUDE.md - Clean Site Dumpsters Coding Standards

This file guides Claude Code and all AI agents working on this codebase. When you see Claude make mistakes or generate code that doesn't follow these rules, add new rules here.

## Project Overview
- **Stack:** Next.js 15, TypeScript, Tailwind CSS, React
- **Architecture:** Config-driven, franchise-ready
- **Goal:** Single codebase that deploys to multiple franchise locations
- **Deployment:** Ubuntu VPS, nginx, PM2

## Critical Architecture Rules

### Config-Driven Design (MOST IMPORTANT)
- **NEVER hardcode business data** - always use config files
- All business info goes in `/src/config/`:
  - `site.ts` - Business name, phone, address, branding colors
  - `services.ts` - Service offerings and pricing
  - `areas.ts` - Service areas and geographic data
  - `dumpsters.ts` - Dumpster sizes, pricing, specifications
  - `navigation.ts` - Menu structure
- When adding new features, ask: "Should this be configurable for franchises?"
- If yes → put it in config; if no → hardcode is fine

### Franchise-Ready Code
- **NEVER write:** "Clean Site Dumpsters" directly in components
- **ALWAYS write:** `{siteConfig.businessName}`
- **NEVER write:** "Nashville" in component logic
- **ALWAYS write:** Loop through `serviceAreas` config or use dynamic city data
- **NEVER write:** Specific prices in JSX
- **ALWAYS write:** Pull from pricing config
- Each franchise location just updates config files, not component code

### File Organization
```
/src
  /app               - Next.js pages (route handlers)
  /components
    /layout          - Header, Footer, Navigation
    /sections        - Homepage sections (reusable)
    /forms           - Contact forms, booking forms
    /ui              - Buttons, cards, modals (smallest atoms)
  /config            - ALL business configuration
  /lib
    /api             - API utilities
    /utils           - Helper functions
    /schema          - Schema.org JSON-LD
  /types             - TypeScript interfaces
```

## TypeScript Standards

### Type Safety
- **ALWAYS** define interfaces for props
- **ALWAYS** define interfaces for config objects
- **NEVER** use `any` - use `unknown` if type is truly unknown
- **ALWAYS** export interfaces that might be reused
- Put interfaces at TOP of file, before components

### Example - Good:
```typescript
interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  isFlipped: boolean
  onFlip: () => void
}

export default function FlipCard({ frontContent, backContent, isFlipped, onFlip }: FlipCardProps) {
  // component code
}
```

### Example - Bad:
```typescript
export default function FlipCard(props: any) {  // ❌ Never use any
  // component code
}
```

## React Component Standards

### Component Structure
1. Imports (grouped: React, Next.js, external libraries, internal)
2. TypeScript interfaces/types
3. Component definition
4. Return statement with JSX

### Prefer Function Components
- **NEVER** use class components
- **ALWAYS** use functional components with hooks
- Use `const` for component functions

### State Management
- **ALWAYS** use `useState` for component state
- **NEVER** use state for data that should be in config
- Keep state close to where it's used (avoid prop drilling)

### Props
- **ALWAYS** destructure props in function signature
- **ALWAYS** provide default values where appropriate
- **NEVER** mutate props

## Styling Standards

### Tailwind CSS
- **ALWAYS** use Tailwind utility classes
- **NEVER** write custom CSS unless absolutely necessary
- **NEVER** use inline styles when Tailwind class exists
- Use Tailwind's responsive prefixes: `md:`, `lg:`, `xl:`

### Example - Good:
```typescript
<div className="bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors">
```

### Example - Bad:
```typescript
<div style={{backgroundColor: '#D32F2F', color: 'white', padding: '1rem'}}>  // ❌
```

### Color Consistency
- Primary red: `#D32F2F` → Use `bg-red-600`, `text-red-600`
- Dark/black: `#1A1A1A` → Use `bg-gray-900`, `text-gray-900`
- **NEVER** use arbitrary color values unless specified in brand colors
- If new color needed, add to `site.ts` config first

### Responsive Design
- Mobile-first approach
- **ALWAYS** test at these breakpoints:
  - Mobile: `<768px` (default, no prefix)
  - Tablet: `768px-1024px` (use `md:` prefix)
  - Desktop: `>1024px` (use `lg:` prefix)
- Stack vertically on mobile, side-by-side on desktop

## Typography Standards (Construction/Waste Industry Aesthetic)

### Approved Font Pairing
- **Headings:** Oswald (Google Font)
- **Body:** Lato (Google Font)
- **Client Approved:** January 9, 2026

### Font Implementation

#### Google Fonts Import (in layout.tsx)
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

#### Tailwind v4 Configuration (in globals.css)
```css
@theme inline {
  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Lato', sans-serif;
}
```

### Typography Classes & Usage

#### Hero/Page Titles (h1)
```tsx
className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl"
```
- **Font:** Oswald
- **Weight:** Bold (700)
- **Case:** UPPERCASE (always)
- **Letter spacing:** tracking-wide
- **Size:** 5xl mobile → 6xl tablet → 7xl desktop
- **Usage:** Main page hero, primary page titles

**Example:**
```tsx
<h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl">
  NASHVILLE'S ALL-IN-ONE DUMPSTER RENTAL SOLUTION
</h1>
```

#### Section Headings (h2)
```tsx
className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl"
```
- **Font:** Oswald
- **Weight:** Bold (700)
- **Case:** UPPERCASE (always)
- **Letter spacing:** tracking-wide
- **Size:** 3xl mobile → 4xl tablet → 5xl desktop
- **Usage:** Major section titles, service area headings

**Example:**
```tsx
<h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl">
  RESIDENTIAL & COMMERCIAL DUMPSTER SERVICES
</h2>
```

#### Subsection Headings (h3)
```tsx
className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl lg:text-3xl"
```
- **Font:** Oswald
- **Weight:** Semibold (600)
- **Case:** UPPERCASE or Title Case (depending on length)
- **Letter spacing:** tracking-wide
- **Size:** xl mobile → 2xl tablet → 3xl desktop
- **Usage:** Subsections, card titles, feature headings

**Example:**
```tsx
<h3 className="font-heading font-semibold uppercase tracking-wide text-xl md:text-2xl lg:text-3xl">
  NASHVILLE'S AFFORDABLE DUMPSTER SERVICE
</h3>
```

#### Small Headings (h4, h5)
```tsx
className="font-heading font-semibold uppercase text-lg md:text-xl"
```
- **Font:** Oswald
- **Weight:** Semibold (600)
- **Case:** UPPERCASE
- **Letter spacing:** tracking-normal (no extra spacing for smaller text)
- **Size:** lg mobile → xl tablet
- **Usage:** List headers, minor section dividers

#### Body Text - Standard
```tsx
className="font-body text-base md:text-lg leading-relaxed"
```
- **Font:** Lato
- **Weight:** Regular (400)
- **Case:** Sentence case
- **Line height:** leading-relaxed (1.625)
- **Size:** base mobile → lg desktop
- **Usage:** Paragraphs, descriptions, general content

**Example:**
```tsx
<p className="font-body text-base md:text-lg leading-relaxed">
  Looking for reliable dumpster rental in Nashville that won't let you down?
  Clean Site Dumpsters delivers the perfect waste removal solution for every project.
</p>
```

#### Body Text - Emphasis
```tsx
className="font-body font-bold text-base md:text-lg"
```
- **Font:** Lato
- **Weight:** Bold (700)
- **Usage:** Important callouts within body text, emphasis

#### Body Text - Light/Secondary
```tsx
className="font-body font-light text-sm md:text-base"
```
- **Font:** Lato
- **Weight:** Light (300)
- **Size:** sm mobile → base desktop
- **Usage:** Supporting text, disclaimers, metadata

#### Buttons - Primary
```tsx
className="font-heading font-semibold uppercase tracking-wide text-sm md:text-base"
```
- **Font:** Oswald
- **Weight:** Semibold (600)
- **Case:** UPPERCASE (always)
- **Letter spacing:** tracking-wide
- **Size:** sm mobile → base desktop

**Example:**
```tsx
<button className="font-heading font-semibold uppercase tracking-wide text-sm md:text-base">
  RESERVE A DUMPSTER NOW
</button>
```

#### Buttons - Secondary/Text Links
```tsx
className="font-body font-semibold text-sm md:text-base"
```
- **Font:** Lato
- **Weight:** Semibold (600)
- **Case:** Sentence case or Title Case
- **Usage:** Secondary actions, text links

#### Navigation Links
```tsx
className="font-heading font-medium uppercase tracking-wide text-sm"
```
- **Font:** Oswald
- **Weight:** Medium (500)
- **Case:** UPPERCASE
- **Letter spacing:** tracking-wide
- **Size:** sm (fixed size)

#### Labels/Form Text
```tsx
className="font-body font-semibold text-sm uppercase tracking-wide"
```
- **Font:** Lato
- **Weight:** Semibold (600)
- **Case:** UPPERCASE
- **Letter spacing:** tracking-wide
- **Size:** sm

### Typography Scale Reference
```
HEADINGS (Oswald):
Hero h1:      text-5xl  md:text-6xl  lg:text-7xl    (48px → 60px → 72px)
Section h2:   text-3xl  md:text-4xl  lg:text-5xl    (30px → 36px → 48px)
Subsection h3: text-xl  md:text-2xl  lg:text-3xl    (20px → 24px → 30px)
Small h4/h5:  text-lg   md:text-xl                  (18px → 20px)

BODY (Lato):
Large body:   text-lg   md:text-xl                  (18px → 20px)
Standard body: text-base md:text-lg                 (16px → 18px)
Small text:   text-sm   md:text-base                (14px → 16px)
Tiny text:    text-xs                               (12px)
```

### Line Height Standards
```
Headings:     leading-tight     (1.25)  - Compact, impactful
Body standard: leading-relaxed  (1.625) - Comfortable reading
Body tight:   leading-normal    (1.5)   - Compact but readable
Lists:        leading-loose     (2)     - Extra breathing room
```

### Common Typography Patterns

#### Hero Section
```tsx
<div>
  <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl lg:text-7xl">
    NASHVILLE'S ALL-IN-ONE DUMPSTER RENTAL SOLUTION
  </h1>
  <p className="font-body text-lg md:text-xl leading-relaxed">
    Professional dumpster rental services for residential, commercial, and construction projects.
  </p>
</div>
```

#### Content Section
```tsx
<section>
  <h2 className="font-heading font-bold uppercase tracking-wide text-3xl md:text-4xl lg:text-5xl">
    RESIDENTIAL & COMMERCIAL DUMPSTER SERVICES
  </h2>
  <p className="font-body text-base md:text-lg leading-relaxed">
    Clean Site Dumpsters was founded with the idea of providing customers with the absolute best experience...
  </p>
</section>
```

#### Card/Feature
```tsx
<div>
  <h3 className="font-heading font-semibold uppercase text-xl md:text-2xl">
    10 YD DUMPSTER
  </h3>
  <p className="font-body text-sm md:text-base leading-relaxed">
    Perfect for small cleanouts and single room renovations.
  </p>
  <button className="font-heading font-semibold uppercase tracking-wide">
    ORDER NOW
  </button>
</div>
```

### Critical Rules - NEVER VIOLATE

#### ❌ DON'T:
- Use body font (Lato) for headings
- Use heading font (Oswald) for long paragraphs
- Use lowercase for major headings (h1, h2)
- Forget tracking-wide on uppercase headings
- Mix font families within the same heading level
- Use font sizes outside the established scale
- Forget responsive sizing (mobile → tablet → desktop)

#### ✅ DO:
- Use Oswald for ALL headings (h1-h6)
- Use Lato for ALL body text and paragraphs
- Use UPPERCASE for h1 and h2 (always)
- Use tracking-wide with UPPERCASE text
- Use responsive sizing: text-base md:text-lg pattern
- Use leading-relaxed for body text readability
- Use font-semibold or font-bold for headings (never regular)

### Accessibility Requirements

- Minimum body text size: 16px (text-base)
- Line height for body: 1.5+ (use leading-relaxed or leading-loose)
- Heading contrast ratio: 4.5:1 minimum
- Body text contrast ratio: 4.5:1 minimum
- White text on dark backgrounds: Ensure sufficient contrast
- Red text (#D32F2F) on white background: Meets AA standards

### Typography Troubleshooting

**Problem:** Headings look cramped
**Solution:** Add tracking-wide class

**Problem:** Body text hard to read
**Solution:** Use leading-relaxed or leading-loose, ensure text-base minimum size

**Problem:** Uppercase text looks too tight
**Solution:** Always pair uppercase with tracking-wide

**Problem:** Font not loading
**Solution:** Check Google Fonts link in layout.tsx, verify globals.css @theme block

**Problem:** Responsive sizing not working
**Solution:** Use pattern: text-base md:text-lg lg:text-xl (mobile → tablet → desktop)

### Testing Checklist

Before committing typography changes:
- [ ] All headings use font-heading (Oswald)
- [ ] All body text uses font-body (Lato) or inherits default
- [ ] Major headings (h1, h2) are UPPERCASE
- [ ] UPPERCASE text includes tracking-wide
- [ ] Responsive sizing applied (md:, lg: breakpoints)
- [ ] Body text has leading-relaxed for readability
- [ ] Buttons use font-heading with uppercase
- [ ] Text contrast meets accessibility standards
- [ ] Test on mobile, tablet, and desktop viewports

## Next.js Specific Rules

### Image Handling
- **ALWAYS** use Next.js `<Image>` component
- **NEVER** use HTML `<img>` tag
- **ALWAYS** specify width and height (or fill)
- **ALWAYS** use descriptive alt text for SEO

### Example - Good:
```typescript
import Image from 'next/image'

<Image 
  src="/images/dumpsters/10-yard.jpg" 
  alt="10 yard dumpster for small renovation projects in Nashville"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Metadata
- **ALWAYS** export metadata on page components
- Include: title, description, keywords, openGraph
- Keep titles under 60 characters
- Keep descriptions under 155 characters

### File Structure
- Page components go in `/app/[route]/page.tsx`
- Layout components go in `/app/[route]/layout.tsx`
- Loading states go in `/app/[route]/loading.tsx`

## Data & Configuration

### Import Config
```typescript
// ✅ Good
import { siteConfig } from '@/config/site'
import { dumpsterSizes } from '@/config/dumpsters'

// ❌ Bad - don't hardcode
const price = 349
const phone = '615-717-2200'
```

### Accessing Config
```typescript
// ✅ Good
<h1>{siteConfig.businessName}</h1>
<a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
{dumpsterSizes.map(dumpster => (
  <Card key={dumpster.id} price={dumpster.pricing.seven_day} />
))}

// ❌ Bad
<h1>Clean Site Dumpsters</h1>
<a href="tel:615-717-2200">615-717-2200</a>
```

## SEO & AEO Standards

### Schema.org JSON-LD
- **ALWAYS** include schema on every page
- Import from `/lib/schema.ts`
- Use `dangerouslySetInnerHTML` to inject
- Test at https://validator.schema.org/

### Meta Tags
- Title: 60 chars max, include location and service
- Description: 155 chars max, include key benefits
- Include keywords (comma-separated)
- Add OpenGraph tags for social sharing

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<section>`, `<article>`, `<aside>` appropriately
- Use `<nav>` for navigation
- Use `<button>` for clickable actions, `<a>` for links

## Common Mistakes to Avoid

### ❌ DON'T: Use nested ternary operators
```typescript
// Bad
const price = size === '10' ? 349 : size === '15' ? 439 : 519
```

### ✅ DO: Use if/else or switch
```typescript
// Good
let price: number
switch (size) {
  case '10': price = 349; break
  case '15': price = 439; break
  case '20': price = 519; break
  default: price = 349
}
```

### ❌ DON'T: Repeat service area logic
```typescript
// Bad
<option value="nashville">Nashville</option>
<option value="franklin">Franklin</option>
<option value="hendersonville">Hendersonville</option>
```

### ✅ DO: Map over config
```typescript
// Good
{serviceAreas.map(area => (
  <option key={area.id} value={area.id}>{area.name}</option>
))}
```

### ❌ DON'T: Put business logic in components
```typescript
// Bad - pricing logic in component
function PriceCalculator() {
  const calculatePrice = (size: string, days: number) => {
    if (size === '10' && days === 7) return 349
    // ... 20 lines of pricing logic
  }
}
```

### ✅ DO: Keep business logic in config or utils
```typescript
// Good - pricing in config
import { dumpsterSizes } from '@/config/dumpsters'

function PriceDisplay({ size, rentalPeriod }: Props) {
  const dumpster = dumpsterSizes.find(d => d.id === size)
  const price = dumpster?.pricing[rentalPeriod]
  return <span>${price}</span>
}
```

### ❌ DON'T: Create duplicate components
```typescript
// Bad - separate components for each size
function TenYardCard() { ... }
function FifteenYardCard() { ... }
function TwentyYardCard() { ... }
```

### ✅ DO: Create reusable components with props
```typescript
// Good - one component, multiple uses
function DumpsterCard({ size, pricing, description }: DumpsterCardProps) { ... }

{dumpsterSizes.map(dumpster => (
  <DumpsterCard key={dumpster.id} {...dumpster} />
))}
```

## Performance Optimization

### Images
- Use Next.js Image with `priority` for above-fold images
- Use `loading="lazy"` for below-fold images
- Optimize image sizes before upload (compress, resize)
- Use WebP format when possible

### Code Splitting
- Dynamic imports for heavy components
- Lazy load components that aren't immediately visible

### Caching
- Use Next.js built-in caching
- Set proper cache headers for static assets

## Git Workflow

### Commit Messages
- Use descriptive, action-oriented messages
- Format: `[Component/Feature]: Brief description`
- Examples:
  - `FlipCard: Add interactive flip animation`
  - `Config: Update pricing for all dumpster sizes`
  - `Homepage: Implement testimonial carousel`

### Branch Naming
- Feature: `feature/testimonial-carousel`
- Fix: `fix/flip-card-mobile-layout`
- Refactor: `refactor/simplify-pricing-logic`

## Testing Requirements

### Before Committing
- [ ] Test on mobile (responsive)
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Verify images load
- [ ] Test forms (if applicable)

### SEO Checklist
- [ ] Schema validates at schema.org
- [ ] Meta tags present and correct length
- [ ] Images have descriptive alt text
- [ ] Heading hierarchy is proper
- [ ] Links have descriptive text (not "click here")

## API & Integration Standards

### Future Booking System (Phase 2)
- All API routes go in `/app/api/`
- Use TypeScript for request/response types
- Validate all inputs
- Return proper HTTP status codes
- Handle errors gracefully

### Payment Integration (Authorize.NET)
- Store credentials in environment variables
- Never commit API keys
- Use server-side API routes only
- Log all transactions

### Email (Amazon SES)
- Use templates for consistency
- Include unsubscribe links
- Test before sending to customers

### SMS (Twilio)
- Keep messages concise
- Include opt-out instructions
- Rate limit to prevent spam

## Accessibility

### ARIA Labels
- Add to interactive elements without visible text
- Example: `<button aria-label="Close menu">`

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Test tab order makes sense
- Provide focus indicators

### Color Contrast
- Maintain WCAG AA standards minimum
- Red (#D32F2F) on white is good
- White text needs dark background

## Documentation

### Component Documentation
- Add JSDoc comments for complex components
- Explain WHY not just WHAT
- Document prop interfaces clearly

### README Updates
- Keep README.md current with setup instructions
- Document any new environment variables
- List all required dependencies

## Security

### Environment Variables
- Use `.env.local` for secrets
- Never commit `.env.local`
- Document required variables in `.env.example`

### User Input
- Validate all form inputs
- Sanitize data before storing
- Use parameterized queries (when database added)

### API Routes
- Rate limit public endpoints
- Validate request origin
- Use CORS appropriately

## Franchise Deployment Checklist

When deploying to a new franchise location:
- [ ] Update `site.ts` with franchise business info
- [ ] Update `areas.ts` with franchise service areas
- [ ] Update `dumpsters.ts` if pricing differs by location
- [ ] Update schema.org with franchise location data
- [ ] Update meta tags with franchise city name
- [ ] Test all pages render with new config
- [ ] Deploy to franchise-specific domain

## Code Simplifier Specific Rules

When the code-simplifier subagent runs:

### DO Simplify:
- Complex conditional logic → clear if/else or switch
- Nested ternaries → readable chains
- Long functions → smaller, named functions
- Repetitive code → loops or config-driven patterns

### DON'T Change:
- Variable/function names (unless truly confusing)
- Component structure if it's already clean
- Working functionality - preserve behavior exactly
- Config file structure - those are intentional

### Priority Order:
1. Preserve functionality (most important)
2. Follow this CLAUDE.md
3. Improve readability
4. Reduce complexity
5. Maintain consistency

## When to Update This File

Add rules to CLAUDE.md when:
- Claude makes the same mistake twice
- A new pattern emerges that works well
- Franchise deployment reveals inconsistencies
- Code review identifies improvements
- New features require new standards

---

**Version:** 1.1
**Last Updated:** January 9, 2026
**Project:** Clean Site Dumpsters (CSD)
**Maintainer:** Keith

### Changelog
- **v1.1** (Jan 9, 2026): Added Typography Standards section with Oswald + Lato font pairing
- **v1.0** (Jan 9, 2026): Initial version
