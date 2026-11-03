import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowUpRight, Send } from "lucide-react";

const LOGO_URL = "https://amoghar.com/wp-content/uploads/2025/08/Amogha-logo-final-Golden-png-scaled.png";

const quickLinks = [
  { label: "TERMS & CONDITIONS", href: "https://amoghar.com/term-condition/" },
  { label: "PRIVACY POLICY", href: "https://amoghar.com/privacy-policy/" },
  { label: "SUPPORT", href: "https://amoghar.com/contact-us/" },
  { label: "BLOGS", href: "/blog" },
];
const usefulLinks = [
  { label: "SEARCH BY DEVELOPER", href: "https://amoghar.com/developer/" },
  { label: "ALL PROJECTS", href: "/property" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <section className="footer-about" aria-labelledby="footer-about-title">
          <a href="/" className="footer-logo-link" aria-label="Amoghaa home">
            <img className="footer-logo" src={LOGO_URL} alt="Amoghaa Real Estate" />
          </a>
          <h2 id="footer-about-title" className="footer-column-title">ABOUT US</h2>
          <p className="footer-description">We partner directly with registered developers. Amoghaa Real Estate acts as a marketing and facilitation partner only.</p>
          <a className="footer-contact-link" href="tel:+918861269488"><Phone size={16} /><span>Mobile: +91 8861269488</span></a>
          <a className="footer-contact-link" href="mailto:amogharadmin@gmail.com"><Mail size={16} /><span>Email: amogharadmin@gmail.com</span></a>
        </section>
        <nav className="footer-column" aria-label="Quick links">
          <h2 className="footer-column-title">QUICK LINKS</h2>
          {quickLinks.map((link) => <a href={link.href} key={link.label}>{link.label}<ArrowUpRight size={13} /></a>)}
        </nav>
        <nav className="footer-column" aria-label="Useful links">
          <h2 className="footer-column-title">USEFUL LINKS</h2>
          {usefulLinks.map((link) => <a href={link.href} key={link.label}>{link.label}<ArrowUpRight size={13} /></a>)}
        </nav>
        <section className="footer-social" aria-labelledby="footer-social-title">
          <h2 id="footer-social-title" className="footer-column-title">FOLLOW US</h2>
          <div className="footer-social-links" aria-label="Social media links">
            <a href="#" aria-label="Facebook — replace with official profile URL" title="Add official Facebook URL"><Facebook size={17} /></a>
            <a href="#" aria-label="Instagram — replace with official profile URL" title="Add official Instagram URL"><Instagram size={17} /></a>
            <a href="#" aria-label="LinkedIn — replace with official profile URL" title="Add official LinkedIn URL"><Linkedin size={17} /></a>
          </div>
          <p className="footer-newsletter-copy">Get property updates and news in your inbox.</p>
          <form className="footer-newsletter" action="#" method="get">
            <label className="sr-only" htmlFor="footer-newsletter-email">Enter your email</label>
            <input id="footer-newsletter-email" type="email" name="email" placeholder="Enter your e-mail" required />
            <button type="submit" aria-label="Subscribe to newsletter"><Send size={16} /></button>
          </form>
          <p className="footer-form-note">Newsletter signup needs an email service integration.</p>
        </section>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 Amogha Real Estate — Designed &amp; Developed by Digital Rubix</span>
        <a href="https://amoghar.com/" target="_blank" rel="noreferrer">AMOGHAA REAL ESTATE <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
