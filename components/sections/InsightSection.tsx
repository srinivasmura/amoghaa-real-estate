import { ArrowUpRight } from "lucide-react";

export default function InsightSection() {
  return (
    <section className="insight-band home-reveal-stagger">
      <div className="container insight-inner">
        <div><p className="eyebrow eyebrow-light">YOUR DECISION, BETTER INFORMED</p><h2>Good choices begin<br /><em>with the right questions.</em></h2><p>Compare the details, explore the neighbourhood, and make your next move with confidence.</p></div>
        <a className="button button-light" href="/property">START EXPLORING <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}
