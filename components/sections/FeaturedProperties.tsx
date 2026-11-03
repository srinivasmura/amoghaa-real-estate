import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    slug: "the-grove-residences",
    name: "The Grove Residences",
    builder: "FEATURED COMMUNITY",
    area: "North Bengaluru",
    price: "Price on request",
    bhk: "2, 3 BHK",
    image: "photo-1600607687939-ce8a6c25118c",
    tag: "FEATURED",
    description:
      "Discover thoughtfully planned homes with inviting outdoor spaces, lifestyle amenities and convenient access to everyday essentials.",
  },
  {
    slug: "parkside-living",
    name: "Parkside Living",
    builder: "PREMIUM HOMES",
    area: "East Bengaluru",
    price: "Price on request",
    bhk: "2, 3, 4 BHK",
    image: "photo-1600566753086-00f18fb6b3ea",
    tag: "NEW LAUNCH",
    description:
      "Explore contemporary residences designed around comfort, community living and convenient access to key city destinations.",
  },
  {
    slug: "serene-acres",
    name: "Serene Acres",
    builder: "THOUGHTFUL COMMUNITIES",
    area: "South-East Bengaluru",
    price: "Price on request",
    bhk: "3, 4 BHK",
    image: "photo-1600585154340-be6161a56a0c",
    tag: "CURATED",
    description:
      "Experience a relaxed residential setting with spacious homes, green surroundings and thoughtfully planned lifestyle spaces.",
  },
];

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export default function FeaturedProperties() {
  return (
    <section className="featured-section home-reveal-stagger" id="builders">
      <div className="container">
        <div className="section-heading section-heading-light">
          <div>
            <p className="eyebrow eyebrow-light">A THOUGHTFUL SHORTLIST</p>
            <h2>
              Homes worth
              <br />
              <em>looking closer at.</em>
            </h2>
          </div>
          <a className="text-link light-link" href="/property">
            EXPLORE ALL PROPERTIES <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <Link className="project-image" href={`/property/${project.slug}`}>
                <img src={photo(project.image)} alt={`${project.name} property`} />
                <span className="project-tag">{project.tag}</span>
                <span className="project-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <div className="project-info">
                <p className="project-builder">{project.builder}</p>
                <h3><Link href={`/property/${project.slug}`}>{project.name}</Link></h3>
                <p className="property-description">{project.description}</p>
                <p className="project-location">
                  <MapPin size={14} />
                  {project.area}
                </p>
                <div className="project-meta">
                  <span>{project.bhk}</span>
                  <strong>{project.price}</strong>
                </div>
                <Link className="project-link" href={`/property/${project.slug}`}>
                  VIEW PROPERTY DETAILS <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="demo-note">
          Illustrative showcase cards — confirm project information with the
          developer before publishing.
        </p>
      </div>
    </section>
  );
}