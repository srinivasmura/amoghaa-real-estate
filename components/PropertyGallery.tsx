"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const previous = () =>
    setActive((current) => (current - 1 + images.length) % images.length);
  const next = () => setActive((current) => (current + 1) % images.length);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const intervalId = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [images.length, isPaused]);

  if (!images.length) return null;

  return (
    <div
      className="property-gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="property-gallery__main">
        <img
          key={`${active}-${images[active]}`}
          className="property-gallery__image"
          src={images[active]}
          alt={`${name} gallery image ${active + 1}`}
        />

        <button
          type="button"
          className="property-gallery__arrow property-gallery__arrow--left"
          onClick={previous}
          aria-label="Previous image"
        >
          <ChevronLeft size={23} />
        </button>

        <button
          type="button"
          className="property-gallery__arrow property-gallery__arrow--right"
          onClick={next}
          aria-label="Next image"
        >
          <ChevronRight size={23} />
        </button>

        <span className="property-gallery__counter">
          {active + 1} / {images.length}
        </span>
      </div>

      <div className="property-gallery__thumbs" aria-label="Choose a gallery image">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            className={`property-gallery__thumb ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === active}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
