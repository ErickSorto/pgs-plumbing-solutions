import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Clock,
  Droplets,
  Languages,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";
import BookingSection from "./BookingSection";
import DrawerAutoClose from "./DrawerAutoClose";
import ReviewCarousel from "./ReviewCarousel";

const phoneNumber = "+12024926806";
const displayPhone = "(202) 492-6806";
const address = "7201 E Forest Rd, Hyattsville, MD 20785";
const serviceArea = "Prince George's County, Maryland, Washington DC, Virginia, and nearby communities";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=PGS%20Plumbing%20Solutions%20LLC%207201%20E%20Forest%20Rd%20Hyattsville%20MD%2020785";
const mapEmbedUrl =
  "https://www.google.com/maps?q=PGS%20Plumbing%20Solutions%20LLC%207201%20E%20Forest%20Rd%2C%20Hyattsville%2C%20MD%2020785&output=embed";
const youtubeUrl = "https://www.youtube.com/results?search_query=PGS+Plumbing+Solutions+LLC";

const navLinks = [
  ["Services", "#services"],
  ["Work", "#gallery"],
  ["Reviews", "#reviews"],
  ["Location", "#location"],
  ["Book", "#booking"],
] as const;

const stats = [
  { value: "4.9", label: "Google rating", icon: Star },
  { value: "33", label: "Google reviews", icon: MessageCircle },
  { value: "7", label: "days open", icon: CalendarDays },
  { value: "5 AM", label: "first appointments", icon: Clock },
] as const;

const services = [
  {
    title: "Residential plumbing",
    text: "Leak repairs, faucets, toilets, drains, repiping, and home plumbing systems kept safe and efficient.",
    icon: Droplets,
  },
  {
    title: "Commercial plumbing",
    text: "Specialized service for businesses with practical scheduling and minimal disruption to operations.",
    icon: Building2,
  },
  {
    title: "Emergency repairs",
    text: "Fast response for urgent issues when plumbing problems cannot wait for a normal appointment.",
    icon: ShieldCheck,
  },
  {
    title: "Installations and upgrades",
    text: "Fixtures, water heaters, and complete system upgrades for modern, reliable plumbing performance.",
    icon: Wrench,
  },
] as const;

const process = [
  ["01", "Inspect", "The team checks the symptom, access points, pressure, fixtures, and visible piping before work begins."],
  ["02", "Explain", "You get a clear recommendation, service path, and next step before the repair or installation moves forward."],
  ["03", "Finish", "The work is completed cleanly, tested for reliability, and wrapped with practical care notes."],
] as const;

const gallery = [
  {
    image: "/pgs/site-work-1.jpg",
    title: "Service readiness",
    detail: "Current PGS site imagery",
    alt: "Plumber preparing tools for a plumbing service visit",
  },
  {
    image: "/pgs/gallery-commercial.png",
    title: "Commercial systems",
    detail: "Realistic generated portfolio visual",
    alt: "Commercial plumbing installation with copper and black pipe",
  },
  {
    image: "/pgs/site-work-2.jpg",
    title: "Fixture work",
    detail: "Current PGS site imagery",
    alt: "Plumbing fixture repair detail from PGS website imagery",
  },
  {
    image: "/pgs/gallery-vanity.png",
    title: "Clean finish",
    detail: "Realistic generated portfolio visual",
    alt: "Modern vanity plumbing installation checked for leaks",
  },
  {
    image: "/pgs/site-work-3.jpg",
    title: "Reliable repair",
    detail: "Current PGS site imagery",
    alt: "Plumbing repair service image from the PGS website",
  },
  {
    image: "/pgs/site-work-4.jpg",
    title: "Installed right",
    detail: "Current PGS site imagery",
    alt: "Plumbing installation detail from the PGS website",
  },
] as const;

const reviews = [
  {
    name: "PGS client",
    meta: "Personalized consultation",
    image: "/pgs/gallery-vanity.png",
    quote: "Excellent service and personalized consultation. PGS Plumbing Solutions LLC truly made us feel valued.",
  },
  {
    name: "Homeowner",
    meta: "Residential plumbing",
    image: "/pgs/site-work-2.jpg",
    quote: "The visit felt organized from the first call through the final check. Clear, careful, and professional.",
  },
  {
    name: "Local business",
    meta: "Commercial service",
    image: "/pgs/gallery-commercial.png",
    quote: "Reliable plumbing support with practical scheduling and minimal disruption to daily operations.",
  },
  {
    name: "PGS customer",
    meta: "Repair and installation",
    image: "/pgs/site-work-4.jpg",
    quote: "A dedicated team focused on high-quality plumbing work the community can trust.",
  },
] as const;

const hours = [
  ["Monday", "5 AM - 11 PM"],
  ["Tuesday", "5 AM - 11 PM"],
  ["Wednesday", "5 AM - 11 PM"],
  ["Thursday", "5 AM - 11 PM"],
  ["Friday", "5 AM - 11 PM"],
  ["Saturday", "5 AM - 11 PM"],
  ["Sunday", "5 AM - 11 PM"],
] as const;

function Stars() {
  return (
    <span className="stars" aria-label="4.9 out of 5 Google rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <input className="drawer-toggle" id="pgs-menu" type="checkbox" aria-label="Toggle mobile menu" />
      <input className="drawer-toggle" id="pgs-translate" type="checkbox" aria-label="Toggle translation drawer" />
      <DrawerAutoClose />

      <header className="site-header">
        <div className="announcement-bar">
          <a className="announcement-pill" href={`tel:${phoneNumber}`}>
            <Phone aria-hidden="true" />
            {displayPhone}
          </a>
          <a className="announcement-center" href="#booking">
            Open daily 5 AM - 11 PM <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="youtube-link" href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="Open PGS Plumbing Solutions on YouTube">
            <Image src="/pgs/youtube.svg" alt="" width={18} height={18} />
          </a>
        </div>

        <div className="main-nav">
          <a className="brand" href="#home" aria-label="PGS Plumbing Solutions LLC home">
            <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} priority />
            <span>
              <strong>PGS</strong>
              <em>Plumbing Solutions LLC</em>
            </span>
          </a>

          <nav aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <label className="language-button" htmlFor="pgs-translate" aria-label="Open translations">
              <Languages aria-hidden="true" />
              EN / ES
            </label>
            <label className="menu-button" htmlFor="pgs-menu" aria-label="Open menu">
              <Menu aria-hidden="true" />
            </label>
            <a className="nav-cta" href="#booking">
              <CalendarDays aria-hidden="true" />
              Request service
            </a>
          </div>
        </div>
      </header>

      <label className="drawer-backdrop menu-backdrop" htmlFor="pgs-menu" aria-label="Close menu" />
      <aside className="mobile-drawer" aria-label="Mobile navigation drawer">
        <div className="drawer-top">
          <a className="drawer-brand" href="#home">
            <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} />
            <span>PGS Plumbing Solutions LLC</span>
          </a>
          <label htmlFor="pgs-menu" aria-label="Close menu">
            <X aria-hidden="true" />
          </label>
        </div>
        <nav className="drawer-links" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="drawer-note">
          <Clock aria-hidden="true" />
          <div>
            <span>Today&apos;s hours</span>
            <strong>5 AM - 11 PM</strong>
          </div>
        </div>
        <div className="drawer-language">
          <div className="drawer-language-top">
            <span className="drawer-card-icon">
              <Languages aria-hidden="true" />
            </span>
            <div>
              <span>Translations</span>
              <strong>English / Español</strong>
            </div>
          </div>
          <div className="drawer-language-actions" aria-label="Translation options">
            <a href="#booking">English</a>
            <a href={`tel:${phoneNumber}`}>Español</a>
          </div>
        </div>
        <a className="drawer-cta" href={`tel:${phoneNumber}`}>
          <Phone aria-hidden="true" />
          Call {displayPhone}
        </a>
      </aside>

      <label className="drawer-backdrop translate-backdrop" htmlFor="pgs-translate" aria-label="Close translations" />
      <aside className="language-drawer" aria-label="Translation drawer">
        <div className="drawer-top">
          <div>
            <p className="eyebrow">Translations</p>
            <h2>PGS can help in English or Spanish.</h2>
          </div>
          <label htmlFor="pgs-translate" aria-label="Close translations">
            <X aria-hidden="true" />
          </label>
        </div>
        <div className="translation-block">
          <span>English</span>
          <p>Residential and commercial plumbing contractor serving Prince George&apos;s County and nearby areas.</p>
          <a href="#booking">Request service</a>
        </div>
        <div className="translation-block">
          <span>Español</span>
          <p>Contratista de plomeria residencial y comercial para el condado de Prince George&apos;s y areas cercanas.</p>
          <a href={`tel:${phoneNumber}`}>Llamar {displayPhone}</a>
        </div>
      </aside>

      <section className="hero" id="home">
        <Image
          src="/pgs/hero-plumbing.png"
          alt="Professional plumber inspecting a modern residential utility room"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-blueprint" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-logo-mark" aria-hidden="true">
          <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} priority />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Plumber in Prince George&apos;s County, Maryland</p>
          <h1>
            <span>PGS Plumbing</span>
            <span>Solutions LLC</span>
          </h1>
          <p className="hero-copy">
            Residential and commercial plumbing work handled with fast response, clear communication, and
            clean, reliable installations.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#booking">
              <CalendarDays aria-hidden="true" />
              Request service
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="secondary-link" href={directionsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>
        <div className="hero-badge" aria-label="Google review summary">
          <Stars />
          <strong>4.9 Google rating</strong>
          <span>33 reviews</span>
        </div>
        <div className="hero-ribbon" aria-label="PGS highlights">
          <span>
            <BadgeCheck aria-hidden="true" />
            Licensed plumbing contractor
          </span>
          <span>
            <Clock aria-hidden="true" />
            Open 5 AM - 11 PM
          </span>
          <span>
            <MapPin aria-hidden="true" />
            Maryland, DC, Virginia
          </span>
        </div>
      </section>

      <section className="stats-band" aria-label="Company proof points">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label}>
              <span className="stat-icon">
                <Icon aria-hidden="true" />
              </span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </section>

      <section className="intro-section" id="about">
        <div className="section-copy">
          <p className="eyebrow">Trusted local plumbing</p>
          <h2>Reliable plumbing solutions for homes and businesses.</h2>
        </div>
        <p>
          PGS Plumbing Solutions LLC provides expert plumbing services for residential and commercial
          spaces. From urgent repairs to professional installations, the team focuses on safe, efficient
          systems and personal service across {serviceArea}.
        </p>
      </section>

      <section className="services-section" id="services">
        <div className="section-copy">
          <p className="eyebrow">Services</p>
          <h2>Comprehensive plumbing without the runaround.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-item" key={service.title}>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-section">
        <div className="process-visual">
          <Image src="/pgs/site-work-1.jpg" alt="Plumbing tools prepared for a service visit" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="process-copy">
          <p className="eyebrow">How the visit feels</p>
          <h2>Clear steps from the first call to the final test.</h2>
          <div className="process-list">
            {process.map(([number, title, text]) => (
              <article key={number}>
                <small>{number}</small>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="review-summary">
          <p className="eyebrow">Google reviews</p>
          <h2>Highly rated for plumbing work in Prince George&apos;s County.</h2>
          <div className="review-rating">
            <Stars />
            <span>4.9 average from 33 Google reviews</span>
          </div>
        </div>
        <ReviewCarousel reviews={reviews} />
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2>Realistic project visuals with current PGS site imagery.</h2>
          </div>
        </div>
        <div className="gallery-grid" aria-label="Plumbing project gallery">
          {gallery.map((item) => (
            <article className="gallery-tile" key={item.image}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 48vw, 30vw" />
              <span>
                <strong>{item.title}</strong>
                <em>{item.detail}</em>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="location-section" id="location">
        <div className="location-copy">
          <p className="eyebrow">Location</p>
          <h2>Based in Hyattsville and serving the surrounding region.</h2>
          <p>{address}</p>
          <div className="contact-actions">
            <a className="primary-link" href={directionsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Get directions
            </a>
            <a className="secondary-dark-link" href={`tel:${phoneNumber}`}>
              <Phone aria-hidden="true" />
              Call {displayPhone}
            </a>
          </div>
          <div className="hours-list" aria-label="Business hours">
            {hours.map(([day, time]) => (
              <div key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="map-frame">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapEmbedUrl}
            title="Map to PGS Plumbing Solutions LLC in Hyattsville, Maryland"
          />
        </div>
      </section>

      <BookingSection />

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} />
          <div>
            <strong>PGS Plumbing Solutions LLC</strong>
            <p>Residential and commercial plumbing contractor serving Maryland, DC, Virginia, and nearby areas.</p>
          </div>
        </div>
        <div className="footer-links">
          <a href={`tel:${phoneNumber}`}>
            <Phone aria-hidden="true" />
            {displayPhone}
          </a>
          <a href={directionsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" />
            {address}
          </a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            <Image src="/pgs/youtube.svg" alt="" width={18} height={18} />
            YouTube
          </a>
        </div>
        <div className="footer-bottom">
          <span>2026 PGS Plumbing Solutions LLC. All rights reserved.</span>
          <span>Open daily 5 AM - 11 PM</span>
        </div>
      </footer>
    </main>
  );
}
