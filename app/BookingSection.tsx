"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Phone, Send, ShieldCheck, Wrench } from "lucide-react";

const phoneNumber = "+12024926806";
type Language = "en" | "es";

const services = [
  { en: "Emergency plumbing repair", es: "Reparación de plomería de emergencia" },
  { en: "Residential plumbing", es: "Plomería residencial" },
  { en: "Commercial plumbing", es: "Plomería comercial" },
  { en: "Water heater installation", es: "Instalación de calentador de agua" },
  { en: "Fixture installation", es: "Instalación de accesorios" },
  { en: "Repiping or system upgrade", es: "Repiping o mejora del sistema" },
] as const;

const timeSlots = [
  "5:00 AM",
  "7:30 AM",
  "10:00 AM",
  "12:30 PM",
  "3:00 PM",
  "5:30 PM",
  "8:00 PM",
  "10:00 PM",
];

function getLocalDateValue(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

  return date.toISOString().slice(0, 10);
}

const urgencyOptions = [
  { en: "Today", es: "Hoy" },
  { en: "This week", es: "Esta semana" },
  { en: "Flexible", es: "Flexible" },
  { en: "Emergency", es: "Emergencia" },
] as const;

export default function BookingSection({ language }: { language: Language }) {
  const isSpanish = language === "es";
  const today = useMemo(() => getLocalDateValue(), []);
  const [service, setService] = useState<string>(services[0].en);
  const [urgency, setUrgency] = useState<string>(urgencyOptions[0].en);
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(timeSlots[2]);
  const selectedService = services.find((item) => item.en === service);
  const selectedUrgency = urgencyOptions.find((item) => item.en === urgency);
  const serviceText = isSpanish ? selectedService?.es ?? service : selectedService?.en ?? service;
  const urgencyText = isSpanish ? selectedUrgency?.es ?? urgency : selectedUrgency?.en ?? urgency;

  const message = isSpanish
    ? `Hola PGS Plumbing Solutions LLC, encontré su sitio web y quisiera solicitar ${serviceText}. Preferencia: ${urgencyText}, ${date} alrededor de ${time}. Por favor confirmen disponibilidad.`
    : `Hi PGS Plumbing Solutions LLC, I found you on your website and would like to request ${serviceText}. Preferred timing: ${urgencyText}, ${date} around ${time}. Please confirm availability.`;
  const smsHref = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

  return (
    <section className="booking-section" id="booking">
      <div className="booking-copy">
        <p className="eyebrow">{isSpanish ? "Solicitar servicio" : "Request service"}</p>
        <h2>{isSpanish ? "Dile a PGS qué necesita atención." : "Tell PGS what needs attention."}</h2>
        <p>
          {isSpanish
            ? "Elige el tipo de trabajo y una ventana preferida. La solicitud abre un mensaje de texto para que el equipo confirme el horario, los detalles del sitio y las notas de acceso antes del despacho."
            : "Choose the job type and a preferred window. The request opens a text message so the team can confirm timing, site details, and access notes before dispatch."}
        </p>
        <div className="booking-proof" aria-label={isSpanish ? "Notas de confianza para reservar" : "Booking confidence notes"}>
          <span>
            <ShieldCheck aria-hidden="true" />
            {isSpanish ? "Residencial y comercial" : "Residential and commercial"}
          </span>
          <span>
            <CalendarDays aria-hidden="true" />
            {isSpanish ? "Abierto todos los días, 5 AM a 11 PM" : "Open daily, 5 AM to 11 PM"}
          </span>
          <span>
            <Wrench aria-hidden="true" />
            {isSpanish ? "Reparaciones e instalaciones" : "Repairs and installations"}
          </span>
        </div>
      </div>

      <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
        <div className="booking-field">
          <label htmlFor="booking-service">{isSpanish ? "Servicio" : "Service"}</label>
          <select id="booking-service" value={service} onChange={(event) => setService(event.target.value)}>
            {services.map((item) => (
              <option key={item.en} value={item.en}>{isSpanish ? item.es : item.en}</option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-urgency">{isSpanish ? "Urgencia" : "Urgency"}</label>
          <select id="booking-urgency" value={urgency} onChange={(event) => setUrgency(event.target.value)}>
            {urgencyOptions.map((item) => (
              <option key={item.en} value={item.en}>{isSpanish ? item.es : item.en}</option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-date">{isSpanish ? "Fecha preferida" : "Preferred date"}</label>
          <input id="booking-date" min={today} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>

        <div className="booking-field">
          <label htmlFor="booking-time">{isSpanish ? "Horario preferido" : "Preferred window"}</label>
          <select id="booking-time" value={time} onChange={(event) => setTime(event.target.value)}>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="booking-actions">
          <a className="primary-link" href={smsHref}>
            <Send aria-hidden="true" />
            {isSpanish ? "Enviar texto" : "Text request"}
          </a>
          <a className="secondary-light-link" href={`tel:${phoneNumber}`}>
            <Phone aria-hidden="true" />
            {isSpanish ? "Llamar" : "Call"} (202) 492-6806
          </a>
        </div>

        <p className="booking-footnote">
          <CalendarDays aria-hidden="true" />
          {isSpanish ? "PGS confirma las solicitudes de cita antes de que la visita sea final." : "Appointment requests are confirmed by PGS before the visit is final."}
        </p>
      </form>
    </section>
  );
}
