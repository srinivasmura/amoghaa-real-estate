import FindHomeSearch from "@/components/FindHomeSearch";
import { BadgeCheck, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero home-reveal">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-image hero-image--one" />
        <div className="hero-image hero-image--two" />
        <div className="hero-image hero-image--three" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content hero-content--center container">
        <p className="eyebrow eyebrow-light"><span /> YOUR NEXT CHAPTER STARTS HERE</p>
        <h1>Find a home<br /><em>that feels like you.</em></h1>
        <p className="hero-copy">Thoughtful guidance. Better choices. A place to call your own.</p>
        <div className="hero-assurances" aria-label="Our price assurances">
          <div className="hero-assurance">
            <span className="hero-assurance__icon"><ShieldCheck size={17} aria-hidden="true" /></span>
            <span className="hero-assurance__text">Zero Brokerage <strong>Assured</strong></span>
          </div>
          <div className="hero-assurance">
            <span className="hero-assurance__icon"><BadgeCheck size={17} aria-hidden="true" /></span>
            <span className="hero-assurance__text">Lowest Builder Price <strong>Guarantee</strong></span>
          </div>
        </div>
        <FindHomeSearch />
        <div className="hero-search-bottom">
          <div className="hero-proof">
            <span>★ A more personal way to find home</span><span className="proof-divider" /><span>Explore Bangalore with confidence</span>
          </div>
          <a href="/privacy-policy" className="hero-privacy-link">
            Read the Privacy Policy
          </a>
        </div>
      </div>
      <div className="hero-side-note">FIND YOUR PLACE <span>—</span> FIND YOUR PEOPLE</div>
    </section>
  );
}