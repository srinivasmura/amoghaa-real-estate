import { ArrowUpRight } from "lucide-react";

const localities = ["Hebbal", "Yelahanka", "Sarjapura Road", "Whitefield"];

export default function ContactSection() {
  return (
    <div className="contact-container home-reveal-stagger">
      <section className="section container contact-section" id="contact">
        <div><p className="eyebrow">LET'S FIND YOUR HOME</p><h2>Your next chapter<br /><em>starts with a hello.</em></h2><p className="contact-copy">Tell us what you're looking for. Our team can help you take the next step.</p></div>
        <div className="contact-card">
          <h3>Book a site visit</h3><p>Share a few details and we'll help you get started.</p>
          <form action="/contact" method="get" className="contact-form">
            <label>FULL NAME<input name="name" placeholder="Your name" required /></label>
            <label>PHONE NUMBER<input name="phone" type="tel" placeholder="+91" required /></label>
            <label>INTERESTED LOCALITY<select name="locality" defaultValue=""><option value="" disabled>Select a locality</option>{localities.map((locality) => <option key={locality}>{locality}</option>)}</select></label>
            <button className="button button-dark" type="submit">REQUEST A CALLBACK <ArrowUpRight size={17} /></button>
            <small>Demo form UI. Connect to the enquiry API before launch.</small>
          </form>
        </div>
      </section>
    </div>
  );
}
