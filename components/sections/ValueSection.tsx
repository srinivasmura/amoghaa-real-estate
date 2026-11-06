import { BadgeCheck, Compass, Handshake, HeartHandshake, MapPin } from "lucide-react";

const services = [
  { icon: Compass, title: "Personalized shortlisting", text: "A considered shortlist shaped around your budget, location and priorities." },
  { icon: MapPin, title: "Locality guidance", text: "Understand connectivity, everyday conveniences and the character of each area." },
  { icon: Handshake, title: "Site visit coordination", text: "Plan visits and compare the details that matter before making a decision." },
  { icon: BadgeCheck, title: "Clear, guided support", text: "Move through your property journey with a dedicated point of contact." },
];

export default function ValueSection() {
  return (
    <section className="section container value-section home-reveal">
      <div className="section-heading">
        <div><p className="eyebrow">OUR VALUE PROPOSITION</p><h2>More clarity.<br /><em>Less guesswork.</em></h2></div>
        <p className="section-intro">Buying a home is a big decision. We make the journey feel more informed, personal and manageable.</p>
      </div>
      <div className="service-grid home-reveal-stagger">
        {services.map(({ icon: Icon, title, text }, index) => (
          <article className="service-card" key={title}>
            <span className="service-number">0{index + 1}</span><div className="service-icon"><Icon size={22} /></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
