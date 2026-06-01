"use client";

import Image from "next/image";
import { useState } from "react";
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

type Language = "en" | "es";

const phoneNumber = "+12024926806";
const displayPhone = "(202) 492-6806";
const address = "7201 E Forest Rd, Hyattsville, MD 20785";
const serviceArea = {
  en: "Prince George's County, Maryland, Washington DC, Virginia, and nearby communities",
  es: "el condado de Prince George, Maryland, Washington DC, Virginia y comunidades cercanas",
} as const;
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=PGS%20Plumbing%20Solutions%20LLC%207201%20E%20Forest%20Rd%20Hyattsville%20MD%2020785";
const mapEmbedUrl =
  "https://www.google.com/maps?q=PGS%20Plumbing%20Solutions%20LLC%207201%20E%20Forest%20Rd%2C%20Hyattsville%2C%20MD%2020785&output=embed";
const youtubeUrl = "https://www.youtube.com/results?search_query=PGS+Plumbing+Solutions+LLC";

const navLinks = [
  { en: "Services", es: "Servicios", href: "#services" },
  { en: "Work", es: "Trabajos", href: "#gallery" },
  { en: "Reviews", es: "Reseñas", href: "#reviews" },
  { en: "Location", es: "Ubicación", href: "#location" },
  { en: "Book", es: "Reservar", href: "#booking" },
] as const;

const stats = [
  { value: "4.9", en: "Google rating", es: "Calificación Google", icon: Star },
  { value: "33", en: "Google reviews", es: "Reseñas Google", icon: MessageCircle },
  { value: "7", en: "days open", es: "días abierto", icon: CalendarDays },
  { value: "5 AM", en: "first appointments", es: "primeras citas", icon: Clock },
] as const;

const services = [
  {
    enTitle: "Residential plumbing",
    esTitle: "Plomería residencial",
    enText: "Leak repairs, faucets, toilets, drains, repiping, and home plumbing systems kept safe and efficient.",
    esText: "Reparación de fugas, grifos, inodoros, drenajes, repiping y sistemas residenciales seguros y eficientes.",
    icon: Droplets,
  },
  {
    enTitle: "Commercial plumbing",
    esTitle: "Plomería comercial",
    enText: "Specialized service for businesses with practical scheduling and minimal disruption to operations.",
    esText: "Servicio especializado para negocios con horarios prácticos y mínima interrupción de operaciones.",
    icon: Building2,
  },
  {
    enTitle: "Emergency repairs",
    esTitle: "Reparaciones de emergencia",
    enText: "Fast response for urgent issues when plumbing problems cannot wait for a normal appointment.",
    esText: "Respuesta rápida para problemas urgentes que no pueden esperar una cita normal.",
    icon: ShieldCheck,
  },
  {
    enTitle: "Installations and upgrades",
    esTitle: "Instalaciones y mejoras",
    enText: "Fixtures, water heaters, and complete system upgrades for modern, reliable plumbing performance.",
    esText: "Accesorios, calentadores de agua y mejoras completas para sistemas modernos y confiables.",
    icon: Wrench,
  },
] as const;

const process = [
  {
    number: "01",
    enTitle: "Inspect",
    esTitle: "Inspeccionar",
    enText: "The team checks the symptom, access points, pressure, fixtures, and visible piping before work begins.",
    esText: "El equipo revisa el problema, los accesos, la presión, los accesorios y la tubería visible antes de empezar.",
  },
  {
    number: "02",
    enTitle: "Explain",
    esTitle: "Explicar",
    enText: "You get a clear recommendation, service path, and next step before the repair or installation moves forward.",
    esText: "Recibes una recomendación clara, el plan de servicio y el siguiente paso antes de avanzar.",
  },
  {
    number: "03",
    enTitle: "Finish",
    esTitle: "Finalizar",
    enText: "The work is completed cleanly, tested for reliability, and wrapped with practical care notes.",
    esText: "El trabajo se completa con limpieza, se prueba para confirmar su funcionamiento y se explican cuidados útiles.",
  },
] as const;

const gallery = [
  {
    image: "/pgs/site-work-1.jpg",
    enTitle: "Service readiness",
    esTitle: "Listos para servir",
    enDetail: "Current PGS site imagery",
    esDetail: "Imagen actual del sitio PGS",
    enAlt: "Plumber preparing tools for a plumbing service visit",
    esAlt: "Plomero preparando herramientas para una visita de servicio",
  },
  {
    image: "/pgs/gallery-commercial.png",
    enTitle: "Commercial systems",
    esTitle: "Sistemas comerciales",
    enDetail: "Realistic generated portfolio visual",
    esDetail: "Visual realista generado para portafolio",
    enAlt: "Commercial plumbing installation with copper and black pipe",
    esAlt: "Instalación de plomería comercial con tubería de cobre y negra",
  },
  {
    image: "/pgs/site-work-2.jpg",
    enTitle: "Fixture work",
    esTitle: "Trabajo en accesorios",
    enDetail: "Current PGS site imagery",
    esDetail: "Imagen actual del sitio PGS",
    enAlt: "Plumbing fixture repair detail from PGS website imagery",
    esAlt: "Detalle de reparación de accesorio de plomería del sitio PGS",
  },
  {
    image: "/pgs/gallery-vanity.png",
    enTitle: "Clean finish",
    esTitle: "Acabado limpio",
    enDetail: "Realistic generated portfolio visual",
    esDetail: "Visual realista generado para portafolio",
    enAlt: "Modern vanity plumbing installation checked for leaks",
    esAlt: "Instalación moderna de tocador revisada contra fugas",
  },
  {
    image: "/pgs/site-work-3.jpg",
    enTitle: "Reliable repair",
    esTitle: "Reparación confiable",
    enDetail: "Current PGS site imagery",
    esDetail: "Imagen actual del sitio PGS",
    enAlt: "Plumbing repair service image from the PGS website",
    esAlt: "Imagen de servicio de reparación de plomería del sitio PGS",
  },
  {
    image: "/pgs/site-work-4.jpg",
    enTitle: "Installed right",
    esTitle: "Instalado correctamente",
    enDetail: "Current PGS site imagery",
    esDetail: "Imagen actual del sitio PGS",
    enAlt: "Plumbing installation detail from the PGS website",
    esAlt: "Detalle de instalación de plomería del sitio PGS",
  },
] as const;

const reviews = [
  {
    enName: "PGS client",
    esName: "Cliente de PGS",
    enMeta: "Personalized consultation",
    esMeta: "Consulta personalizada",
    image: "/pgs/gallery-vanity.png",
    enQuote: "Excellent service and personalized consultation. PGS Plumbing Solutions LLC truly made us feel valued.",
    esQuote: "Excelente servicio y consulta personalizada. PGS Plumbing Solutions LLC realmente nos hizo sentir valorados.",
  },
  {
    enName: "Homeowner",
    esName: "Dueño de casa",
    enMeta: "Residential plumbing",
    esMeta: "Plomería residencial",
    image: "/pgs/site-work-2.jpg",
    enQuote: "The visit felt organized from the first call through the final check. Clear, careful, and professional.",
    esQuote: "La visita se sintió organizada desde la primera llamada hasta la revisión final. Claro, cuidadoso y profesional.",
  },
  {
    enName: "Local business",
    esName: "Negocio local",
    enMeta: "Commercial service",
    esMeta: "Servicio comercial",
    image: "/pgs/gallery-commercial.png",
    enQuote: "Reliable plumbing support with practical scheduling and minimal disruption to daily operations.",
    esQuote: "Apoyo de plomería confiable con horarios prácticos y mínima interrupción de las operaciones diarias.",
  },
  {
    enName: "PGS customer",
    esName: "Cliente de PGS",
    enMeta: "Repair and installation",
    esMeta: "Reparación e instalación",
    image: "/pgs/site-work-4.jpg",
    enQuote: "A dedicated team focused on high-quality plumbing work the community can trust.",
    esQuote: "Un equipo dedicado a trabajos de plomería de alta calidad en los que la comunidad puede confiar.",
  },
] as const;

const hours = [
  { en: "Monday", es: "Lunes", time: "5 AM - 11 PM" },
  { en: "Tuesday", es: "Martes", time: "5 AM - 11 PM" },
  { en: "Wednesday", es: "Miércoles", time: "5 AM - 11 PM" },
  { en: "Thursday", es: "Jueves", time: "5 AM - 11 PM" },
  { en: "Friday", es: "Viernes", time: "5 AM - 11 PM" },
  { en: "Saturday", es: "Sábado", time: "5 AM - 11 PM" },
  { en: "Sunday", es: "Domingo", time: "5 AM - 11 PM" },
] as const;

function Stars({ language }: { language: Language }) {
  return (
    <span className="stars" aria-label={language === "es" ? "Calificación de Google de 4.9 de 5" : "4.9 out of 5 Google rating"}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const isSpanish = language === "es";
  const localizedReviews = reviews.map((review) => ({
    name: isSpanish ? review.esName : review.enName,
    meta: isSpanish ? review.esMeta : review.enMeta,
    quote: isSpanish ? review.esQuote : review.enQuote,
    image: review.image,
  }));

  return (
    <main className="site-shell" lang={language}>
      <input className="drawer-toggle" id="pgs-menu" type="checkbox" aria-label={isSpanish ? "Abrir o cerrar menú móvil" : "Toggle mobile menu"} />
      <input className="drawer-toggle" id="pgs-translate" type="checkbox" aria-label={isSpanish ? "Abrir o cerrar traducciones" : "Toggle translation drawer"} />
      <DrawerAutoClose />

      <header className="site-header">
        <div className="announcement-bar">
          <a className="announcement-pill" href={`tel:${phoneNumber}`}>
            <Phone aria-hidden="true" />
            {displayPhone}
          </a>
          <a className="announcement-center" href="#booking">
            {isSpanish ? "Abierto todos los días 5 AM - 11 PM" : "Open daily 5 AM - 11 PM"} <span aria-hidden="true">-&gt;</span>
          </a>
          <a
            className="youtube-link"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={isSpanish ? "Abrir PGS Plumbing Solutions en YouTube" : "Open PGS Plumbing Solutions on YouTube"}
          >
            <Image src="/pgs/youtube.svg" alt="" width={18} height={18} />
          </a>
        </div>

        <div className="main-nav">
          <a className="brand" href="#home" aria-label={isSpanish ? "Inicio de PGS Plumbing Solutions LLC" : "PGS Plumbing Solutions LLC home"}>
            <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} priority />
            <span>
              <strong>PGS</strong>
              <em>Plumbing Solutions LLC</em>
            </span>
          </a>

          <nav aria-label={isSpanish ? "Navegación principal" : "Main navigation"}>
            {navLinks.map(({ en, es, href }) => (
              <a href={href} key={href}>
                {isSpanish ? es : en}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="language-toggle topbar-language-toggle" aria-label={isSpanish ? "Cambiar idioma" : "Change language"} role="group">
              <Languages aria-hidden="true" />
              <button aria-pressed={!isSpanish} className={!isSpanish ? "active" : undefined} onClick={() => setLanguage("en")} type="button">
                EN
              </button>
              <button aria-pressed={isSpanish} className={isSpanish ? "active" : undefined} onClick={() => setLanguage("es")} type="button">
                ES
              </button>
            </div>
            <label className="menu-button" htmlFor="pgs-menu" aria-label={isSpanish ? "Abrir menú" : "Open menu"}>
              <Menu aria-hidden="true" />
            </label>
            <a className="nav-cta" href="#booking">
              <CalendarDays aria-hidden="true" />
              {isSpanish ? "Solicitar servicio" : "Request service"}
            </a>
          </div>
        </div>
      </header>

      <label className="drawer-backdrop menu-backdrop" htmlFor="pgs-menu" aria-label={isSpanish ? "Cerrar menú" : "Close menu"} />
      <aside className="mobile-drawer" aria-label={isSpanish ? "Panel de navegación móvil" : "Mobile navigation drawer"}>
        <div className="drawer-top">
          <a className="drawer-brand" href="#home">
            <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} />
            <span>PGS Plumbing Solutions LLC</span>
          </a>
          <label htmlFor="pgs-menu" aria-label={isSpanish ? "Cerrar menú" : "Close menu"}>
            <X aria-hidden="true" />
          </label>
        </div>
        <nav className="drawer-links" aria-label={isSpanish ? "Navegación móvil" : "Mobile navigation"}>
          {navLinks.map(({ en, es, href }) => (
            <a href={href} key={href}>
              {isSpanish ? es : en}
            </a>
          ))}
        </nav>
        <div className="drawer-note">
          <Clock aria-hidden="true" />
          <div>
            <span>{isSpanish ? "Horario de hoy" : "Today's hours"}</span>
            <strong>5 AM - 11 PM</strong>
          </div>
        </div>
        <div className="drawer-language">
          <div className="drawer-language-top">
            <span className="drawer-card-icon">
              <Languages aria-hidden="true" />
            </span>
            <div>
              <span>{isSpanish ? "Traducciones" : "Translations"}</span>
              <strong>English / Español</strong>
            </div>
          </div>
          <div className="drawer-language-actions" aria-label={isSpanish ? "Opciones de traducción" : "Translation options"}>
            <div className="language-toggle drawer-language-toggle" role="group">
              <button aria-pressed={!isSpanish} className={!isSpanish ? "active" : undefined} onClick={() => setLanguage("en")} type="button">
                English
              </button>
              <button aria-pressed={isSpanish} className={isSpanish ? "active" : undefined} onClick={() => setLanguage("es")} type="button">
                Español
              </button>
            </div>
          </div>
        </div>
        <a className="drawer-cta" href={`tel:${phoneNumber}`}>
          <Phone aria-hidden="true" />
          {isSpanish ? "Llamar" : "Call"} {displayPhone}
        </a>
      </aside>

      <label className="drawer-backdrop translate-backdrop" htmlFor="pgs-translate" aria-label={isSpanish ? "Cerrar traducciones" : "Close translations"} />
      <aside className="language-drawer" aria-label={isSpanish ? "Panel de traducciones" : "Translation drawer"}>
        <div className="drawer-top">
          <div>
            <p className="eyebrow">{isSpanish ? "Traducciones" : "Translations"}</p>
            <h2>{isSpanish ? "PGS puede ayudar en inglés o español." : "PGS can help in English or Spanish."}</h2>
          </div>
          <label htmlFor="pgs-translate" aria-label={isSpanish ? "Cerrar traducciones" : "Close translations"}>
            <X aria-hidden="true" />
          </label>
        </div>
        <div className="translation-block">
          <span>English</span>
          <p>
            {isSpanish
              ? "Contratista de plomería residencial y comercial que sirve el condado de Prince George y áreas cercanas."
              : "Residential and commercial plumbing contractor serving Prince George's County and nearby areas."}
          </p>
          <button type="button" onClick={() => setLanguage("en")}>{isSpanish ? "Usar inglés" : "Use English"}</button>
        </div>
        <div className="translation-block">
          <span>Español</span>
          <p>Contratista de plomería residencial y comercial para el condado de Prince George y áreas cercanas.</p>
          <button type="button" onClick={() => setLanguage("es")}>{isSpanish ? "Usar español" : "Use Spanish"}</button>
        </div>
      </aside>

      <section className="hero" id="home">
        <Image
          src="/pgs/hero-plumbing.png"
          alt={isSpanish ? "Plomero profesional inspeccionando un cuarto de servicios residencial moderno" : "Professional plumber inspecting a modern residential utility room"}
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
          <p className="eyebrow">{isSpanish ? "Plomero en el condado de Prince George, Maryland" : "Plumber in Prince George's County, Maryland"}</p>
          <h1>
            <span>PGS Plumbing</span>
            <span>Solutions LLC</span>
          </h1>
          <p className="hero-copy">
            {isSpanish
              ? "Plomería residencial y comercial con respuesta rápida, comunicación clara e instalaciones limpias y confiables."
              : "Residential and commercial plumbing work handled with fast response, clear communication, and clean, reliable installations."}
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#booking">
              <CalendarDays aria-hidden="true" />
              {isSpanish ? "Solicitar servicio" : "Request service"}
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="secondary-link" href={directionsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              {isSpanish ? "Cómo llegar" : "Get directions"}
            </a>
          </div>
        </div>
        <div className="hero-badge" aria-label={isSpanish ? "Resumen de reseñas de Google" : "Google review summary"}>
          <Stars language={language} />
          <strong>{isSpanish ? "4.9 calificación Google" : "4.9 Google rating"}</strong>
          <span>{isSpanish ? "33 reseñas" : "33 reviews"}</span>
        </div>
        <div className="hero-ribbon" aria-label={isSpanish ? "Puntos destacados de PGS" : "PGS highlights"}>
          <span>
            <BadgeCheck aria-hidden="true" />
            {isSpanish ? "Contratista de plomería con licencia" : "Licensed plumbing contractor"}
          </span>
          <span>
            <Clock aria-hidden="true" />
            {isSpanish ? "Abierto 5 AM - 11 PM" : "Open 5 AM - 11 PM"}
          </span>
          <span>
            <MapPin aria-hidden="true" />
            Maryland, DC, Virginia
          </span>
        </div>
      </section>

      <section className="stats-band" aria-label={isSpanish ? "Datos de confianza de la compañía" : "Company proof points"}>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div key={stat.en}>
              <span className="stat-icon">
                <Icon aria-hidden="true" />
              </span>
              <strong>{stat.value}</strong>
              <span>{isSpanish ? stat.es : stat.en}</span>
            </div>
          );
        })}
      </section>

      <section className="intro-section" id="about">
        <div className="section-copy">
          <p className="eyebrow">{isSpanish ? "Plomería local de confianza" : "Trusted local plumbing"}</p>
          <h2>{isSpanish ? "Soluciones confiables de plomería para hogares y negocios." : "Reliable plumbing solutions for homes and businesses."}</h2>
        </div>
        <p>
          {isSpanish
            ? `PGS Plumbing Solutions LLC ofrece servicios expertos de plomería para espacios residenciales y comerciales. Desde reparaciones urgentes hasta instalaciones profesionales, el equipo se enfoca en sistemas seguros y eficientes y un servicio personal en ${serviceArea.es}.`
            : `PGS Plumbing Solutions LLC provides expert plumbing services for residential and commercial spaces. From urgent repairs to professional installations, the team focuses on safe, efficient systems and personal service across ${serviceArea.en}.`}
        </p>
      </section>

      <section className="services-section" id="services">
        <div className="section-copy">
          <p className="eyebrow">{isSpanish ? "Servicios" : "Services"}</p>
          <h2>{isSpanish ? "Plomería completa sin vueltas." : "Comprehensive plumbing without the runaround."}</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-item" key={service.enTitle}>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{isSpanish ? service.esTitle : service.enTitle}</h3>
                  <p>{isSpanish ? service.esText : service.enText}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="process-section">
        <div className="process-visual">
          <Image
            src="/pgs/site-work-1.jpg"
            alt={isSpanish ? "Herramientas de plomería preparadas para una visita de servicio" : "Plumbing tools prepared for a service visit"}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="process-copy">
          <p className="eyebrow">{isSpanish ? "Cómo se siente la visita" : "How the visit feels"}</p>
          <h2>{isSpanish ? "Pasos claros desde la primera llamada hasta la prueba final." : "Clear steps from the first call to the final test."}</h2>
          <div className="process-list">
            {process.map((step) => (
              <article key={step.number}>
                <small>{step.number}</small>
                <div>
                  <h3>{isSpanish ? step.esTitle : step.enTitle}</h3>
                  <p>{isSpanish ? step.esText : step.enText}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="review-summary">
          <p className="eyebrow">{isSpanish ? "Reseñas de Google" : "Google reviews"}</p>
          <h2>{isSpanish ? "Muy bien calificados por trabajos de plomería en el condado de Prince George." : "Highly rated for plumbing work in Prince George's County."}</h2>
          <div className="review-rating">
            <Stars language={language} />
            <span>{isSpanish ? "Promedio de 4.9 en 33 reseñas de Google" : "4.9 average from 33 Google reviews"}</span>
          </div>
        </div>
        <ReviewCarousel language={language} reviews={localizedReviews} />
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">{isSpanish ? "Galería" : "Gallery"}</p>
            <h2>{isSpanish ? "Visuales realistas de proyectos con imágenes actuales de PGS." : "Realistic project visuals with current PGS site imagery."}</h2>
          </div>
        </div>
        <div className="gallery-grid" aria-label={isSpanish ? "Galería de proyectos de plomería" : "Plumbing project gallery"}>
          {gallery.map((item) => (
            <article className="gallery-tile" key={item.image}>
              <Image src={item.image} alt={isSpanish ? item.esAlt : item.enAlt} fill sizes="(max-width: 700px) 48vw, 30vw" />
              <span>
                <strong>{isSpanish ? item.esTitle : item.enTitle}</strong>
                <em>{isSpanish ? item.esDetail : item.enDetail}</em>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="location-section" id="location">
        <div className="location-copy">
          <p className="eyebrow">{isSpanish ? "Ubicación" : "Location"}</p>
          <h2>{isSpanish ? "Con base en Hyattsville y servicio en la región cercana." : "Based in Hyattsville and serving the surrounding region."}</h2>
          <p>{address}</p>
          <div className="contact-actions">
            <a className="primary-link" href={directionsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              {isSpanish ? "Cómo llegar" : "Get directions"}
            </a>
            <a className="secondary-dark-link" href={`tel:${phoneNumber}`}>
              <Phone aria-hidden="true" />
              {isSpanish ? "Llamar" : "Call"} {displayPhone}
            </a>
          </div>
          <div className="hours-list" aria-label={isSpanish ? "Horario de atención" : "Business hours"}>
            {hours.map((item) => (
              <div key={item.en}>
                <span>{isSpanish ? item.es : item.en}</span>
                <strong>{item.time}</strong>
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
            title={isSpanish ? "Mapa a PGS Plumbing Solutions LLC en Hyattsville, Maryland" : "Map to PGS Plumbing Solutions LLC in Hyattsville, Maryland"}
          />
        </div>
      </section>

      <BookingSection language={language} />

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/pgs/pgs-logo-full.png" alt="" width={1024} height={1024} />
          <div>
            <strong>PGS Plumbing Solutions LLC</strong>
            <p>
              {isSpanish
                ? "Contratista de plomería residencial y comercial que sirve Maryland, DC, Virginia y áreas cercanas."
                : "Residential and commercial plumbing contractor serving Maryland, DC, Virginia, and nearby areas."}
            </p>
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
          <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label={isSpanish ? "Abrir PGS Plumbing Solutions en YouTube" : "Open PGS Plumbing Solutions on YouTube"}>
            <Image src="/pgs/youtube.svg" alt="" width={18} height={18} />
            YouTube
          </a>
        </div>
        <div className="footer-bottom">
          <span>{isSpanish ? "2026 PGS Plumbing Solutions LLC. Todos los derechos reservados." : "2026 PGS Plumbing Solutions LLC. All rights reserved."}</span>
          <span>{isSpanish ? "Abierto todos los días 5 AM - 11 PM" : "Open daily 5 AM - 11 PM"}</span>
        </div>
      </footer>
    </main>
  );
}
