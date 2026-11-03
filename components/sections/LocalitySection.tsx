import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const localities = [
  { name: "Hebbal", detail: "Connected city living", image: "photo-1600607687939-ce8a6c25118c", className: "locality-1", href: "/property/the-grove-residences" },
  { name: "Yelahanka", detail: "Space to grow", image: "photo-1600566753086-00f18fb6b3ea", className: "locality-2", href: "/property/garden-view-homes" },
  { name: "Sarjapura Road", detail: "A fast-growing destination", image: "photo-1600607687920-4e2a09cf159d", className: "locality-3", href: "/property/serene-acres" },
  { name: "Whitefield", detail: "Work, life and community", image: "photo-1600585154340-be6161a56a0c", className: "locality-4", href: "/property/parkside-living" },
];
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export default function LocalitySection() {
  return (
    <section className="section container home-reveal" id="locations">
      <div className="section-heading">
        <div><p className="eyebrow">A BETTER WAY TO BEGIN</p><h2>Find your place<br /><em>in Bangalore.</em></h2></div>
        <p className="section-intro">Every neighbourhood has its own rhythm. Explore the areas that fit your everyday life, your plans, and what home means to you.</p>
      </div>
      <div className="locality-grid">
        {localities.map((item) => (
          <Link className={`locality-card ${item.className}`} href="/property" key={item.name}>
            <img src={photo(item.image)} alt={`${item.name} residential neighbourhood`} />
            <div className="locality-overlay" />
            <div className="locality-content"><span>EXPLORE HOMES</span><h3>{item.name}</h3><p>{item.detail}</p></div>
            <span className="circle-arrow"><ArrowUpRight size={20} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
