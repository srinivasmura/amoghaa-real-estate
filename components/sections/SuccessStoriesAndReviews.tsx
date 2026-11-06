"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";

type Story = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
};

type Review = {
  quote: string;
  name: string;
  detail: string;
  date: string;
};

const stories: Story[] = [
  {
    quote:
      "The guidance helped us understand our options and shortlist homes that matched what our family was looking for.",
    name: "A Homebuyer",
    detail: "Bengaluru",
    initials: "HB",
  },
  {
    quote:
      "The team made it easier to compare projects, understand the next steps and arrange a property visit.",
    name: "A Family Buyer",
    detail: "Bengaluru",
    initials: "FB",
  },
  {
    quote:
      "We appreciated having a clear point of contact while exploring different residential options.",
    name: "A Property Seeker",
    detail: "Bengaluru",
    initials: "PS",
  },
];

const reviews: Review[] = [
  {
    quote:
      "Add the latest approved Google review here. Keep the customer's wording accurate and publish only with permission where required.",
    name: "Google reviewer",
    detail: "Customer review",
    date: "Latest review",
  },
  {
    quote:
      "Replace this sample text with another recent review from Amoghaa's Google Business Profile.",
    name: "Google reviewer",
    detail: "Customer review",
    date: "Recent review",
  },
  {
    quote:
      "Use the original review text and the reviewer's public display name as shown on Google.",
    name: "Google reviewer",
    detail: "Customer review",
    date: "Recent review",
  },
  {
    quote:
      "Add another genuine customer review here after connecting the Google reviews source.",
    name: "Google reviewer",
    detail: "Customer review",
    date: "Recent review",
  },
];

function Stars() {
  return (
    <span className="amg-stars" aria-label="5 star rating display">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={15} fill="currentColor" strokeWidth={1.4} />
      ))}
    </span>
  );
}

function Carousel({
  items,
  type,
}: {
  items: Story[] | Review[];
  type: "story" | "review";
}) {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const visibleItems = useMemo(
    () => items.slice(index, index + visibleCount),
    [items, index]
  );

  const move = (direction: -1 | 1) => {
    setIndex((current) =>
      Math.min(maxIndex, Math.max(0, current + direction))
    );
  };

  return (
    <div className={`amg-carousel amg-carousel--${type}`}>
      <div className="amg-carousel__track home-reveal-stagger">
        {visibleItems.map((item, itemIndex) => (
          <article
            className="amg-card"
            key={`${type}-${index + itemIndex}`}
          >
            {type === "story" ? (
              <>
                <span className="amg-card__quote-icon">
                  <Quote size={21} />
                </span>
                <p className="amg-card__quote">“{item.quote}”</p>
                <div className="amg-card__person">
                  <span className="amg-avatar">
                    {(item as Story).initials}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="amg-review-card__top">
                  <Stars />
                  <span className="amg-google-label">
                    <span className="amg-google-g">G</span> GOOGLE
                  </span>
                </div>
                <p className="amg-card__quote">“{item.quote}”</p>
                <div className="amg-card__person amg-card__person--review">
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.detail}</small>
                  </span>
                  <small className="amg-review-date">{(item as Review).date}</small>
                </div>
              </>
            )}
          </article>
        ))}
      </div>

      <div className="amg-carousel__controls">
        <span className="amg-carousel__count">
          {Math.min(index + 1, items.length)}–{Math.min(index + visibleCount, items.length)} of {items.length}
        </span>
        <button
          type="button"
          className="amg-arrow"
          onClick={() => move(-1)}
          disabled={index === 0}
          aria-label={`Previous ${type === "story" ? "success stories" : "Google reviews"}`}
        >
          <ArrowLeft size={17} />
        </button>
        <button
          type="button"
          className="amg-arrow"
          onClick={() => move(1)}
          disabled={index >= maxIndex}
          aria-label={`Next ${type === "story" ? "success stories" : "Google reviews"}`}
        >
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default function SuccessStoriesAndReviews() {
  return (
    <div className="amg-social-proof">
      <section className="amg-stories-section home-reveal" aria-labelledby="amg-stories-title">
        <div className="amg-social-container">
          <div className="amg-section-heading amg-section-heading--split">
            <div>
              <p className="amg-eyebrow">SUCCESS GALLERY</p>
              <h2 id="amg-stories-title">
                Client <em>Success Stories</em>
              </h2>
              <p className="amg-section-subtitle">
                Every home search has a story. We’re here to help make the
                journey feel simpler and more informed.
              </p>
            </div>
            <a className="amg-read-link" href="/success-stories">
              Read All Stories <ArrowRight size={16} />
            </a>
          </div>
          <Carousel items={stories} type="story" />
        </div>
      </section>

      <section className="amg-reviews-section home-reveal" aria-labelledby="amg-reviews-title">
        <div className="amg-social-container">
          <div className="amg-reviews-heading">
            <p className="amg-eyebrow">
              <Star size={13} fill="currentColor" /> GOOGLE REVIEWS
            </p>
            <h2 id="amg-reviews-title">Google Reviews from Homebuyers</h2>
            <p className="amg-section-subtitle">
              Hear from people who have connected with Amoghaa.
            </p>
            <div className="amg-rating-summary">
              <Stars />
              <span>REVIEWS FROM OUR CUSTOMERS</span>
            </div>
            <a
              className="amg-google-button"
              href="https://www.google.com/maps/search/?api=1&query=Amoghaa%20Real%20Estate"
              target="_blank"
              rel="noreferrer"
            >
              View on Google <ExternalLink size={14} />
            </a>
          </div>
          <Carousel items={reviews} type="review" />
          <p className="amg-review-disclaimer">
            Google review cards are placeholders until Amoghaa’s verified
            Google Business Profile reviews are connected.
          </p>
        </div>
      </section>
    </div>
  );
}
