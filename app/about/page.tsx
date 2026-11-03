"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Compass,
  Eye,
  Handshake,
  HeartHandshake,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";

const guidancePoints = [
  "Understand true market pricing",
  "Evaluate builder track records",
  "Assess long-term infrastructure impact",
  "Compare micro-locations objectively",
  "Make decisions aligned with personal goals",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity in every recommendation",
    description:
      "We focus on what is suitable for your needs, sharing considered guidance rather than pushing a particular choice.",
  },
  {
    icon: Eye,
    title: "Transparency in communication",
    description:
      "We aim to make property information and the reasoning behind each recommendation clear and understandable.",
  },
  {
    icon: Scale,
    title: "Clear view of pros and cons",
    description:
      "Every property has strengths and limitations. We help you understand both before you make a decision.",
  },
  {
    icon: Handshake,
    title: "Relationships beyond transactions",
    description:
      "We value trust and long-term relationships, not simply the completion of a single property transaction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-image" role="img" aria-label="Contemporary residence surrounded by landscaped greenery" />
          <div className="about-hero-shade" />
          <div className="container about-hero-content">
            <span className="about-eyebrow">A MORE THOUGHTFUL PROPERTY JOURNEY</span>
            <h1>Clarity makes<br /><em>all the difference.</em></h1>
            <p>
              Independent-minded property guidance for people making important
              decisions about where to live and invest in Bengaluru.
            </p>
            <Link href="/property" className="about-primary-link">
              EXPLORE PROPERTIES <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="about-hero-caption">AMOGHAA REAL ESTATE · BENGALURU</div>
        </section>

        <section className="about-intro-section">
          <div className="container about-intro-grid">
            <div className="about-section-heading">
              <span className="about-eyebrow">ABOUT AMOGHAA</span>
              <h2>North Bengaluru property advisory, <em>with clarity at its core.</em></h2>
            </div>
            <div className="about-intro-copy">
              <p className="about-lead">
                Amoghaa Real Estate is a Bengaluru-based advisory firm with a
                primary focus on North Bengaluru residential real estate.
              </p>
              <p>
                Rapid infrastructure expansion, connectivity to Kempegowda
                International Airport, business parks and new residential
                developments create opportunity — but they can also make
                property decisions complex.
              </p>
              <p>
                Our role is to bring clarity. We help you understand the market,
                compare locations and evaluate options in the context of your
                own priorities.
              </p>
              <div className="about-location-note">
                <MapPin size={18} />
                <span>Focused on North Bengaluru and its evolving neighbourhoods</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-approach-section">
          <div className="container about-approach-grid">
            <div className="about-approach-visual">
              <img src="/images/amoghaa-about-hero.png" alt="Modern home framed by mature trees and landscaped gardens" />
              <div className="about-image-note">
                <Compass size={19} />
                <span>Understand the place. Evaluate the options. Decide with confidence.</span>
              </div>
            </div>
            <div className="about-approach-copy">
              <span className="about-eyebrow">OUR ADVISORY APPROACH</span>
              <h2>Guidance that begins with <em>understanding you.</em></h2>
              <p>
                Before discussing property options, we take time to understand
                each client’s requirements, budget, risk appetite and
                long-term objectives.
              </p>
              <p>
                Every recommendation is shaped by evaluation, verification and
                suitability — not sales targets. We explain both the advantages
                and limitations of an option, so you can make your decision
                with clarity and confidence.
              </p>
              <div className="about-approach-promise">
                <BadgeCheck size={21} />
                <span>Your priorities guide the conversation, at every step.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-checklist-section">
          <div className="container about-checklist-grid">
            <div>
              <span className="about-eyebrow">WHAT WE HELP YOU ASSESS</span>
              <h2>Look beyond the brochure.</h2>
              <p>
                A home is a significant decision. We help bring the important
                considerations into focus before you take the next step.
              </p>
            </div>
            <ul className="about-guidance-list">
              {guidancePoints.map((point) => (
                <li key={point}><BadgeCheck size={19} /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about-founder-section">
          <div className="container about-founder-grid">
            <div className="about-founder-mark">
              <HeartHandshake size={54} strokeWidth={1.1} />
              <span>PEOPLE FIRST<br />PROPERTY GUIDANCE</span>
            </div>
            <div>
              <span className="about-eyebrow">FOUNDER BACKGROUND</span>
              <h2>A professional approach, shaped by <em>global perspective.</em></h2>
              <p>
                With international exposure and a professional approach shaped
                by global standards, Amoghaa Real Estate was established to
                move away from pressure-driven selling.
              </p>
              <p>
                The focus is on clear communication, honest guidance and
                methodical evaluation — supporting both local buyers and NRIs
                with a structured and dependable property advisory experience.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="container">
            <div className="about-values-heading">
              <span className="about-eyebrow">THE PRINCIPLES WE STAND BY</span>
              <h2>Our values, in <em>every conversation.</em></h2>
              <p>The way we guide matters just as much as the property we discuss.</p>
            </div>
            <div className="about-values-grid">
              {values.map(({ icon: Icon, title, description }, index) => (
                <article className="about-value-card" key={title}>
                  <span className="about-value-number">0{index + 1}</span>
                  <div className="about-value-icon"><Icon size={23} strokeWidth={1.6} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-role-section">
          <div className="container about-role-inner">
            <span className="about-eyebrow">OUR ROLE</span>
            <h2>Here to guide. Never to pressure.</h2>
            <p>
              We partner directly with registered developers. Amoghaa Real
              Estate acts as a marketing and facilitation partner only. Our
              aim is to help you explore relevant options with a clear
              understanding of the information available.
            </p>
            <Link href="/property" className="about-role-link">
              FIND YOUR HOME <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
