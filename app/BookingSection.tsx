"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Phone, Send, ShieldCheck, Wrench } from "lucide-react";

const phoneNumber = "+12024926806";

const services = [
  "Emergency plumbing repair",
  "Residential plumbing",
  "Commercial plumbing",
  "Water heater installation",
  "Fixture installation",
  "Repiping or system upgrade",
];

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

export default function BookingSection() {
  const today = useMemo(() => getLocalDateValue(), []);
  const [service, setService] = useState(services[0]);
  const [urgency, setUrgency] = useState("Today");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(timeSlots[2]);

  const message = `Hi PGS Plumbing Solutions LLC, I found you on your website and would like to request ${service}. Preferred timing: ${urgency}, ${date} around ${time}. Please confirm availability.`;
  const smsHref = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

  return (
    <section className="booking-section" id="booking">
      <div className="booking-copy">
        <p className="eyebrow">Request service</p>
        <h2>Tell PGS what needs attention.</h2>
        <p>
          Choose the job type and a preferred window. The request opens a text message so the team can
          confirm timing, site details, and access notes before dispatch.
        </p>
        <div className="booking-proof" aria-label="Booking confidence notes">
          <span>
            <ShieldCheck aria-hidden="true" />
            Residential and commercial
          </span>
          <span>
            <CalendarDays aria-hidden="true" />
            Open daily, 5 AM to 11 PM
          </span>
          <span>
            <Wrench aria-hidden="true" />
            Repairs and installations
          </span>
        </div>
      </div>

      <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
        <div className="booking-field">
          <label htmlFor="booking-service">Service</label>
          <select id="booking-service" value={service} onChange={(event) => setService(event.target.value)}>
            {services.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-urgency">Urgency</label>
          <select id="booking-urgency" value={urgency} onChange={(event) => setUrgency(event.target.value)}>
            <option>Today</option>
            <option>This week</option>
            <option>Flexible</option>
            <option>Emergency</option>
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-date">Preferred date</label>
          <input id="booking-date" min={today} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>

        <div className="booking-field">
          <label htmlFor="booking-time">Preferred window</label>
          <select id="booking-time" value={time} onChange={(event) => setTime(event.target.value)}>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="booking-actions">
          <a className="primary-link" href={smsHref}>
            <Send aria-hidden="true" />
            Text request
          </a>
          <a className="secondary-light-link" href={`tel:${phoneNumber}`}>
            <Phone aria-hidden="true" />
            Call (202) 492-6806
          </a>
        </div>

        <p className="booking-footnote">
          <CalendarDays aria-hidden="true" />
          Appointment requests are confirmed by PGS before the visit is final.
        </p>
      </form>
    </section>
  );
}
