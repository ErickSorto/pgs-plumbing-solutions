"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  name: string;
  meta: string;
  quote: string;
  image: string;
};

const autoplayDelay = 4200;

function Stars() {
  return (
    <div className="stars review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function ReviewCarousel({ reviews }: { reviews: readonly Review[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToReview = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const scroller = scrollerRef.current;
    const cards = scroller?.querySelectorAll<HTMLElement>(".review-card");
    const card = cards?.[index];

    if (!scroller || !card) {
      return;
    }

    const inlinePadding = Number.parseFloat(window.getComputedStyle(scroller).scrollPaddingInlineStart) || 0;

    scroller.scrollTo({
      left: Math.max(card.offsetLeft - inlinePadding, 0),
      behavior,
    });
  }, []);

  const updateActiveReview = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>(".review-card"));
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    const closestIndex = cards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - scrollerCenter);
      const closestCard = cards[closest];
      const closestDistance = closestCard
        ? Math.abs(closestCard.offsetLeft + closestCard.offsetWidth / 2 - scrollerCenter)
        : Number.POSITIVE_INFINITY;

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  }, []);

  const move = useCallback(
    (direction: -1 | 1) => {
      const nextIndex = (activeIndex + direction + reviews.length) % reviews.length;

      setActiveIndex(nextIndex);
      scrollToReview(nextIndex);
    },
    [activeIndex, reviews.length, scrollToReview],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let animationFrame = 0;

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveReview);
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      scroller.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateActiveReview]);

  useEffect(() => {
    if (reviews.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      const nextIndex = (activeIndex + 1) % reviews.length;

      setActiveIndex(nextIndex);
      scrollToReview(nextIndex);
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, reviews.length, scrollToReview]);

  return (
    <div className="review-carousel" aria-label="Customer review carousel">
      <div className="review-carousel-toolbar">
        <div className="review-count">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/ {String(reviews.length).padStart(2, "0")}</span>
        </div>
        <div className="review-controls">
          <button aria-label="Previous review" onClick={() => move(-1)} type="button">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button aria-label="Next review" onClick={() => move(1)} type="button">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="review-track" ref={scrollerRef}>
        {reviews.map((review, index) => (
          <article className="review-card" key={review.name}>
            <div className="review-image">
              <Image
                alt=""
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 700px) 74vw, (max-width: 1100px) 38vw, 26vw"
                src={review.image}
              />
            </div>
            <div className="review-card-copy">
              <Stars />
              <p>&quot;{review.quote}&quot;</p>
              <div>
                <strong>{review.name}</strong>
                <span>{review.meta}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="proof-carousel-dots">
        {reviews.map((review, index) => (
          <button
            aria-current={activeIndex === index ? "true" : undefined}
            aria-label={`Show ${review.name} review`}
            className={activeIndex === index ? "active" : undefined}
            key={review.name}
            onClick={() => {
              setActiveIndex(index);
              scrollToReview(index);
            }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
