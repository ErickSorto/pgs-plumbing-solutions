<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses Next.js 16.2.6 with App Router behavior that may differ from older Next.js versions. Before changing routing, metadata, image handling, server/client component boundaries, or build behavior, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PGS Plumbing Solutions Agent Reference

This file is for future AI agents and developers working on this project. Treat it as an operational design and implementation checklist, not a marketing README.

## Project Identity

- Client: `PGS Plumbing Solutions LLC`.
- Business type: residential and commercial plumbing contractor.
- Service area copy in `app/page.tsx`: Prince George's County, Maryland, Washington DC, Virginia, and nearby communities.
- Address: `7201 E Forest Rd, Hyattsville, MD 20785`.
- Phone: `(202) 492-6806`, raw tel value `+12024926806`.
- Hours: Monday through Sunday, `5 AM - 11 PM`.
- Rating strip values in `app/page.tsx`: `4.9` Google rating, `33` Google reviews, `7` days open, `5 AM` first appointments.
- Primary social link: YouTube search URL in `youtubeUrl`; use `/pgs/youtube.svg` for the icon.
- Production URL: `https://pgs-plumbing-solutions.vercel.app`.
- Logo assets: `/public/pgs/pgs-logo-full.png` for full logo; `/public/pgs/pgs-logo.png` is a smaller logo asset.
- Active page imagery should be WebP except the share preview JPG. Current active visual assets live in `/public/pgs/`.

## Visual System

- Maintain the existing service-company visual system: dark navy surfaces for `.hero`, `.gallery-section`, `.booking-section`, and `.site-footer`; white or mist surfaces for `.services-section`, `.intro-section`, `.location-section`; bright blue `--water` for primary CTAs and icons; copper `--copper` for `.eyebrow` labels.
- Color variables are defined at the top of `app/globals.css`. Preserve the current system unless the brand changes:
  - `--navy: #123657`
  - `--navy-deep: #071b2d`
  - `--water: #2f9bd7`
  - `--copper: #c5793d`
  - `--mist: #edf7fb`
  - `--sand: #f6efe6`
  - `--line: rgba(18, 54, 87, 0.16)`
- Border radius is intentionally restrained at `8px` for cards, buttons, gallery tiles, drawers, maps, service blocks, and forms. Do not introduce large pill/card radii except for segmented toggles and carousel dots.
- Page sections should use distinct backgrounds while staying in the same color family:
  - `intro-section`: mist blue
  - `services-section`: white/ice
  - `process-section`: pale blue
  - `reviews-section`: sand and mist mix
  - `gallery-section`: dark navy
  - `location-section`: pale white/blue
  - `booking-section`: dark navy with grid
  - `site-footer`: near-black navy
- The visible grid/blueprint effect should remain only in the booking section via `.booking-section::before`. Do not add visible grid overlays back to every section.

## Codebase Map

- Main page and business content: `app/page.tsx`.
- Booking form and SMS body: `app/BookingSection.tsx`.
- Review carousel behavior: `app/ReviewCarousel.tsx`.
- Drawer auto-close behavior: `app/DrawerAutoClose.tsx`.
- Global styling and all responsive layout rules: `app/globals.css`.
- Metadata and share preview config: `app/layout.tsx`.
- Static assets: `public/pgs/`.
- Framework scripts in `package.json`:
  - `npm run dev`
  - `npm run lint`
  - `npm run build`
- Icons come from `lucide-react`; keep icon usage consistent with existing imports.

## Layout And Spacing Rules

- Global layout variables in `app/globals.css`:
  - `--top-announcement-height: 40px`
  - `--navbar-height-desktop: 88px`
  - `--navbar-height-mobile: 72px`
  - `--container-max: 1400px`
  - `--container-pad: 28px`
  - `--page-gutter` is calculated from container max and pad.
- Header is fixed. Keep `html { scroll-padding-top: var(--header-height); }` so anchor links land below the header.
- `.announcement-bar` is a three-column desktop strip. On mobile it becomes a compact row where the phone and YouTube controls are icon-sized.
- `.main-nav` is a three-column desktop grid: brand, nav links, actions. Below `1120px`, hide `.main-nav nav` and show `.menu-button`.
- CTA/button minimum height is `46px` for `.nav-cta`, `.primary-link`, `.secondary-link`, `.secondary-dark-link`, `.secondary-light-link`, and `.drawer-cta`.
- Main section padding is `104px var(--page-gutter)` on desktop and `78px` top/bottom under `820px`.
- Do not put page sections inside cards. Use full-width sections and constrain with `--page-gutter`.
- Text should never rely on negative letter spacing. The CSS intentionally uses `letter-spacing: 0`.
- Do not use viewport-width font scaling. Use existing `clamp()` patterns for mobile headings only where already present.

## Hero Rules

- Hero image path: `/pgs/hero-plumbing.webp`.
- Hero image uses `fill`, `priority`, `loading="eager"`, `sizes="100vw"`, and class `.hero-image`.
- Desktop `.hero-image` uses `object-position: center`.
- Mobile `.hero-image` currently uses `object-position: 70% center` to show more of the worker and pipe side.
- Mobile hero must stay tall enough: under `820px`, `.hero` has `min-height: 760px`, `padding-top: calc(var(--header-height) + 52px)`, and `padding-bottom: 196px`.
- Mobile overlay is tuned to keep the right side visible while preserving text contrast:
  - vertical gradient begins at `rgba(5, 17, 30, 0.62)` and lightens to `0.18` at `52%`
  - horizontal gradient ends at transparent on the right
- Do not darken the right side so much that the worker disappears. Do not center so far left that pipes and the worker are lost.
- Mobile H1 is capped by `.hero h1 { max-width: 335px; font-size: clamp(2.28rem, 11vw, 2.82rem); }` under `560px`.

## Mobile Rules

- Mobile breakpoint rules live under `@media (max-width: 820px)` and `@media (max-width: 560px)` in `app/globals.css`.
- Verify at `390px` width and at a short height such as `390x560`.
- No horizontal overflow is acceptable. Check `document.documentElement.scrollWidth - document.documentElement.clientWidth` and keep it at `0` or at most `2px`.
- `.site-header`, `.announcement-bar`, and `.main-nav` are forced to `width: 100vw; max-width: 100vw` on mobile.
- Under `560px`, `.topbar-language-toggle` is hidden; language control belongs inside the drawer.
- Mobile stats must remain four columns: `.stats-band { grid-template-columns: repeat(4, minmax(0, 1fr)); }`.
- Mobile stat icons are `34px`, labels are `0.66rem`, and stat values use `clamp(1.28rem, 6.6vw, 1.92rem)`.
- Mobile gallery is two columns with `gap: 10px` and `.gallery-tile { min-height: 218px; }`.
- Mobile service cards become a single column and each `.service-item` changes to a two-column icon/text layout.
- Touch targets must be at least about `44px` high. Do not shrink `.menu-button`, drawer close labels, CTA buttons, or language buttons below this.

## Drawer Rules

- Drawer toggles are hidden checkbox inputs in `app/page.tsx`:
  - `#pgs-menu` controls `.mobile-drawer`
  - `#pgs-translate` controls `.language-drawer`
- `.mobile-drawer` opens from the right with `transform: translateX(105%)`.
- `.language-drawer` opens from the left with `transform: translateX(-105%)`.
- Checked drawer selectors:
  - `#pgs-menu:checked ~ .mobile-drawer`
  - `#pgs-translate:checked ~ .language-drawer`
- Drawer z-index is `80`; backdrop z-index is `70`; header z-index is `50`.
- Drawers must scroll on short screens. Preserve these properties on `.mobile-drawer, .language-drawer`:
  - `max-height: 100dvh`
  - `overflow-y: auto`
  - `overscroll-behavior: contain`
  - `padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom))`
  - `-webkit-overflow-scrolling: touch`
- Close icon containers are `.drawer-top label`: `44px` by `44px`, centered with `display: inline-flex`.
- `.drawer-card-icon` is `42px` by `42px` and must center the language icon with `place-items: center`.
- The mobile language toggle must not open the phone app. In `app/page.tsx`, drawer language buttons call `event.stopPropagation()` before `setLanguage(...)`.
- `app/DrawerAutoClose.tsx` intentionally ignores `.drawer-language-toggle button` clicks so language toggling does not close the drawer.
- `.drawer-language-toggle` is `min-height: 56px`; its buttons are `min-height: 46px`; keep this larger target.
- `.drawer-cta` has `margin-top: 8px` and lower z-index than `.drawer-language` so it does not overlap the language toggle.

## Translation Rules

- Language state is defined in `app/page.tsx` as `type Language = "en" | "es"` and `const [language, setLanguage] = useState<Language>("en")`.
- `<main className="site-shell" lang={language}>` must stay synchronized with the selected language.
- Desktop uses `.topbar-language-toggle` with `EN` and `ES` segmented buttons.
- Mobile uses `.drawer-language-toggle` with `English` and `Español` segmented buttons inside `.mobile-drawer`.
- Active language state is represented by `.active` class and `aria-pressed`.
- All visible UI must switch language:
  - nav links
  - announcement text
  - drawer labels
  - hero eyebrow/body/buttons
  - stats labels
  - intro/services/process/reviews/gallery/location
  - booking form labels/options/buttons/SMS body
  - footer copy
  - key aria labels
- If adding a new section, define English and Spanish strings together near the existing data arrays in `app/page.tsx` or inside the component if local, as `BookingSection.tsx` does.

## Review Carousel Rules

- Carousel implementation is `app/ReviewCarousel.tsx`; do not replace it with static cards.
- Required behavior:
  - previous and next icon buttons
  - active count
  - dots under the track
  - scroll-snap track
  - autoplay every `4200ms` unless `prefers-reduced-motion: reduce`
  - localized aria labels
- `.stars` and `.review-stars` must stay horizontal. Preserve:
  - `display: flex`
  - `flex-direction: row`
  - `flex-wrap: nowrap`
  - `width: max-content`
  - `white-space: nowrap` on `.review-stars`
- Mobile review track uses `grid-auto-columns: minmax(280px, 84vw)`.
- Before finishing carousel edits, click previous/next and dots in browser automation and confirm the active dot/count changes.

## Gallery And Image Rules

- Gallery data lives in `const gallery` in `app/page.tsx`.
- Display exactly six gallery tiles unless the user explicitly asks otherwise.
- Current visible gallery images:
  - `/pgs/site-work-2.webp`
  - `/pgs/site-work-1.webp`
  - `/pgs/pgs-real-valve.webp`
  - `/pgs/site-work-4.webp`
  - `/pgs/site-work-3.webp`
  - `/pgs/pgs-real-tools.webp`
- Gallery grid rules:
  - desktop: `.gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }`
  - mobile: `.gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }`
  - desktop tile min height `360px`
  - mobile tile min height `218px`
- Use WebP for active site imagery. Do not reintroduce heavy active PNG/JPG gallery assets unless the user provides source photos and asks for a different format.
- Real Google Business Profile photos may not be directly downloadable from a Google search result because Google can serve recaptcha/bot-protected pages. If the user wants exact GBP photos, ask for the original files or saved downloads, then convert them to WebP.
- Keep `/public/pgs/share-preview.jpg` as JPG for Messages/social preview reliability.
- After image edits, test that every `.gallery-tile img` has a nonzero `naturalWidth` and a `.webp` current source.

## Share Preview And Metadata Rules

- Metadata lives in `app/layout.tsx`.
- `siteUrl` must resolve to the production URL outside Vercel env detection: `https://pgs-plumbing-solutions.vercel.app`.
- Share preview image object:
  - `url: "/pgs/share-preview.jpg"`
  - `width: 1200`
  - `height: 630`
  - alt text: `PGS Plumbing Solutions LLC preview card with logo and plumbing company name`
- The share image should remain a lightweight static JPG. Current file: `/public/pgs/share-preview.jpg`.
- Do not rely on App Router special files `app/opengraph-image.png` or `app/twitter-image.png` for Messages if the user reports missing previews; those previously produced hashed image URLs and were removed.
- Required live tags:
  - `<link rel="canonical" ...>`
  - `og:title`
  - `og:description`
  - `og:url`
  - `og:image`
  - `og:image:width`
  - `og:image:height`
  - `twitter:card` with `summary_large_image`
  - `twitter:image`
- Verify production with:
  - `curl -sL 'https://pgs-plumbing-solutions.vercel.app/?preview=agent-check' | rg -o '<meta[^>]+(og:|twitter:)[^>]+>|<title>[^<]+</title>|<link rel="canonical"[^>]+>'`
  - `curl -I -L 'https://pgs-plumbing-solutions.vercel.app/pgs/share-preview.jpg'`
- Apple Messages caches previews aggressively. Test with a fresh query string such as `https://pgs-plumbing-solutions.vercel.app/?preview=4` and send the URL by itself.

## Booking Rules

- Booking form is `app/BookingSection.tsx`.
- It does not submit to a server; it builds an `sms:` link to `+12024926806`.
- Keep service and urgency state values in English keys so the selected option remains stable while labels translate.
- If adding services, update both English and Spanish labels in `services`.
- If changing hours, update `timeSlots`, page hours array, announcement copy, drawer note, stats if needed, and footer.

## Known Pitfalls

- Mobile top bar can overflow if new actions are added. Under `560px`, keep only the menu button in `.nav-actions`; `.nav-cta` and `.topbar-language-toggle` are hidden.
- Language toggle taps in the drawer previously opened the call app. Keep `event.stopPropagation()` on drawer language buttons and preserve the `DrawerAutoClose.tsx` early return for `.drawer-language-toggle button`.
- Drawer content can be taller than the viewport. Do not remove drawer `overflow-y: auto` or `100dvh` sizing.
- Review stars previously stacked vertically. Preserve `.stars` and `.review-stars` flex row rules.
- Mobile hero image crop is sensitive. Current compromise is `object-position: 70% center` with a lighter right-side overlay; verify any crop change visually.
- Preview cards in Messages previously failed with heavier hashed PNG metadata. Keep the static clean JPG path in metadata.
- Google Business Profile images may be visible in a browser but unavailable to scripts due to bot protection. Ask for uploaded originals when exact photos matter.
- Do not push without the user's explicit request.

## Verification Checklist

Run these before finalizing visual or behavior changes:

- `npm run lint`
- `npm run build`
- Desktop screenshot around `1440x900` or `1440x1100`.
- Mobile screenshot around `390x900`.
- Short mobile drawer test around `390x560`: open `.menu-button`, ensure `.mobile-drawer` scrolls and `.drawer-cta` is reachable.
- Language toggle test:
  - desktop: click `.topbar-language-toggle button` with `ES`
  - mobile: open `.menu-button`, click `.drawer-language-toggle button` with `Español`
  - confirm `main.site-shell` has `lang="es"`
  - confirm URL did not become `tel:...`
- Carousel test:
  - click `.review-controls button`
  - click `.proof-carousel-dots button`
  - confirm active dot/count changes
  - confirm stars remain in one row
- Gallery test:
  - confirm `document.querySelectorAll('.gallery-tile').length === 6`
  - confirm every gallery image completes and has nonzero `naturalWidth`
  - confirm current gallery image sources include `.webp`
- Overflow test:
  - confirm `Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth) <= 2`
- Metadata test:
  - inspect local or production `<head>` for canonical, OG, Twitter tags
  - verify `/pgs/share-preview.jpg` returns `200 OK` and `content-type: image/jpeg`
- `git status --short --branch` before final response so you can report uncommitted changes accurately.

## Safe Editing Guidance

- Use existing data arrays in `app/page.tsx` for content changes. Add parallel `en` and `es` fields.
- Use existing CSS class patterns in `app/globals.css`; avoid adding a new styling system or component library.
- Keep edits scoped. Do not refactor unrelated sections while fixing one issue.
- Preserve user or previous-agent changes in a dirty worktree. Do not revert unrelated files.
- Use `apply_patch` for manual edits.
- If adding client-provided images, place final optimized files under `public/pgs/`, prefer `.webp` for page imagery, and update `app/page.tsx` references.
