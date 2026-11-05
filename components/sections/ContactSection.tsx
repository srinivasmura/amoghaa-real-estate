
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const localities = ["Hebbal", "Yelahanka", "Sarjapura Road", "Whitefield"];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    const name = formData.name.trim();
    const phone = formData.phone.replace(/[\s()-]/g, "");
    const mobile = phone.replace(/^\+91/, "").replace(/^91/, "");

    if (name.length < 2) {
      setMessage("Please enter your full name.");
      setMessageType("error");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      setMessageType("error");
      return;
    }

    if (!formData.locality) {
      setMessage("Please select your interested locality.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: `+91${mobile}`,
          locality: formData.locality,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry.");
      }

      setMessage(
        "Thank you! Your enquiry has been submitted successfully. Our team will contact you soon."
      );
      setMessageType("success");

      setFormData({
        name: "",
        phone: "",
        locality: "",
      });
    } catch {
      setMessage(
        "Something went wrong. Please try again or contact our team directly."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container home-reveal-stagger">
      <section className="section container contact-section" id="contact">
        <div>
          <p className="eyebrow">LET'S FIND YOUR HOME</p>
          <h2>
            Your next chapter
            <br />
            <em>starts with a hello.</em>
          </h2>
          <p className="contact-copy">
            Tell us what you're looking for. Our team can help you take the
            next step.
          </p>
        </div>

        <div className="contact-card">
          <h3>Book a site visit</h3>
          <p>Share a few details and we'll help you get started.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              FULL NAME
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                minLength={2}
              />
            </label>

            <label>
              PHONE NUMBER
              <input
                name="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </label>

            <label>
              INTERESTED LOCALITY
              <select
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a locality
                </option>
                {localities.map((locality) => (
                  <option key={locality} value={locality}>
                    {locality}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="button button-dark"
              type="submit"
              disabled={loading}
            >
              {loading ? "SUBMITTING..." : "REQUEST A CALLBACK"}
              {!loading && <ArrowUpRight size={17} />}
            </button>

            {message && (
              <p
                className={`contact-feedback ${messageType}`}
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            )}

            <small>
              Your information will only be used to respond to your enquiry.
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}
