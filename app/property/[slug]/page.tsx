import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { notFound } from "next/navigation";
// import FeaturedProperties from "@/components/FeaturedProperties";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Phone,
  Building2,
  CalendarDays,
  Layers3,
  Ruler,
  Home,
  Trees,
  ShieldCheck,
  Dumbbell,
  Waves,
  Baby,
  Users,
  CarFront,
  Flower2,
  Bike,
  Gamepad2,
  HeartPulse,
  Sparkles,
} from "lucide-react";

type Project = {
  slug: string;
  name: string;
  builder: string;
  locality: string;
  type: string;
  bhk: string;
  price: string;
  pricePerSqft: string;
  image: string;
  gallery: string[];
  description: string;
  overview: string;
  rera: string;
  status: string;
  projectArea: string;
  possession: string;
  towers: string;
  floors: string;
  units: string;
  openSpace: string;
  configurations: string;
  highlights: string[];
  amenities: string[];
  locationAdvantages: string[];
  floorPlans: { title: string; detail: string; image: string }[];
};

const mahindraGallery = [
  "photo-1600607687939-ce8a6c25118c",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600607687920-4e2a09cf159d",
];

const projects: Project[] = [
  {
    slug: "mahindra-blossom",
    name: "Mahindra Blossom",
    builder: "Mahindra Lifespaces",
    locality: "Whitefield, Bangalore",
    type: "Apartment",
    bhk: "Configurations to be updated",
    price: "₹1.90 Cr",
    pricePerSqft: "₹15,000/sqft",
    image: mahindraGallery[0],
    gallery: mahindraGallery,
    description: "A residential project by Mahindra Lifespaces in Whitefield, Bangalore.",
    overview: "Mahindra Blossom is presented here as a residential opportunity in Whitefield, Bangalore. Explore the project information, specifications and neighbourhood context below. Please confirm current availability, approved plans, pricing and all project details with the developer before making a decision.",
    rera: "PRM/KA/RERA/1251/446/PR/171225/008348",
    status: "New launch",
    projectArea: "9.36 acres",
    possession: "October 2030",
    towers: "6 towers",
    floors: "29 floors",
    units: "733 units",
    openSpace: "72% open space",
    configurations: "To be updated",
    highlights: [
      "Project area of 9.36 acres",
      "Six residential towers",
      "29 floors",
      "733 residential units",
      "72% open space",
    ],
    amenities: [
      "Clubhouse and community spaces",
      "Fitness and wellness facilities",
      "Swimming pool",
      "Children's play area",
      "Landscaped gardens and open spaces",
      "Indoor and outdoor recreation",
    ],
    locationAdvantages: [
      "Located in Whitefield, Bangalore",
      "Neighbourhood access to shopping and dining",
      "Schools and healthcare facilities in the wider area",
      "Connectivity to East Bengaluru employment hubs",
    ],
    floorPlans: [
      { title: "Configurations", detail: "Floor plans and unit configurations to be updated by the developer.", image: mahindraGallery[1] },
      { title: "Typical floor plan", detail: "Request the latest approved floor plan and area statement.", image: mahindraGallery[2] },
      { title: "Site layout", detail: "Request the latest approved master plan from the developer.", image: mahindraGallery[3] },
    ],
  },
  {
    slug: "the-grove-residences",
    name: "The Grove Residences",
    builder: "Amoghar curated collection",
    locality: "Hebbal, North Bengaluru",
    type: "Apartment",
    bhk: "2, 3 BHK",
    price: "Price on request",
    pricePerSqft: "On request",
    image: "photo-1600607687939-ce8a6c25118c",
    gallery: ["photo-1600607687939-ce8a6c25118c", "photo-1600210492486-724fe5c67fb0", "photo-1600566753086-00f18fb6b3ea"],
    description: "Discover thoughtfully planned homes with inviting outdoor spaces, lifestyle amenities and convenient access to everyday essentials.",
    overview: "The Grove Residences is presented as a residential community for people looking for a considered balance of comfort, everyday convenience and community living. Explore the available home options, project information and surrounding neighbourhood before arranging a visit.",
    rera: "To be confirmed",
    status: "Curated listing",
    projectArea: "To be confirmed",
    possession: "To be confirmed",
    towers: "To be confirmed",
    floors: "To be confirmed",
    units: "To be confirmed",
    openSpace: "To be confirmed",
    configurations: "2, 3 BHK",
    highlights: ["Thoughtfully planned residential layouts", "Lifestyle spaces for residents", "Landscaped outdoor areas", "Options designed for different household needs"],
    amenities: ["Clubhouse and community spaces", "Fitness and wellness facilities", "Children's play area", "Landscaped gardens", "Recreation spaces", "Parking and security facilities"],
    locationAdvantages: ["Schools and educational institutions in the wider neighbourhood", "Healthcare and daily convenience services", "Shopping and dining destinations", "Road connectivity to key parts of Bengaluru"],
    floorPlans: [{ title: "Floor plans", detail: "Contact our team for available layouts and area statements.", image: "photo-1600210492486-724fe5c67fb0" }],
  },
  {
    slug: "parkside-living",
    name: "Parkside Living",
    builder: "Amoghar curated collection",
    locality: "Whitefield, East Bengaluru",
    type: "Apartment",
    bhk: "2, 3, 4 BHK",
    price: "Price on request",
    pricePerSqft: "On request",
    image: "photo-1600566753086-00f18fb6b3ea",
    gallery: ["photo-1600566753086-00f18fb6b3ea", "photo-1600585154340-be6161a56a0c", "photo-1600607687920-4e2a09cf159d"],
    description: "Explore contemporary residences designed around comfort, community living and convenient access to key city destinations.",
    overview: "Parkside Living is presented as a contemporary residential option for buyers who value practical home layouts, shared lifestyle spaces and access to the wider East Bengaluru neighbourhood. Review the project details and confirm current availability with our team.",
    rera: "To be confirmed", status: "Curated listing", projectArea: "To be confirmed", possession: "To be confirmed",
    towers: "To be confirmed", floors: "To be confirmed", units: "To be confirmed", openSpace: "To be confirmed", configurations: "2, 3, 4 BHK",
    highlights: ["Contemporary residential design", "Multiple home configuration options", "Community-oriented shared spaces", "Lifestyle features for everyday living"],
    amenities: ["Clubhouse and gathering spaces", "Fitness facilities", "Children's activity area", "Outdoor relaxation spaces", "Parking and security facilities"],
    locationAdvantages: ["Access to shopping and dining options", "Schools and healthcare services in the wider area", "Connectivity to major roads", "Access to East Bengaluru business hubs"],
    floorPlans: [{ title: "Floor plans", detail: "Contact our team for available layouts and area statements.", image: "photo-1600566753086-00f18fb6b3ea" }],
  },
  {
    slug: "serene-acres",
    name: "Serene Acres",
    builder: "Amoghar curated collection",
    locality: "Sarjapura Road, South-East Bengaluru",
    type: "Villa",
    bhk: "3, 4 BHK",
    price: "Price on request",
    pricePerSqft: "On request",
    image: "photo-1600585154340-be6161a56a0c",
    gallery: ["photo-1600585154340-be6161a56a0c", "photo-1600607687920-4e2a09cf159d", "photo-1600607687939-ce8a6c25118c"],
    description: "Experience a relaxed residential setting with spacious homes, green surroundings and thoughtfully planned lifestyle spaces.",
    overview: "Serene Acres is presented as a home option for buyers looking for more space and a quieter residential setting around the Sarjapura Road area. Explore the available villa options, site plan and project specifications with the developer.",
    rera: "To be confirmed", status: "Curated listing", projectArea: "To be confirmed", possession: "To be confirmed",
    towers: "To be confirmed", floors: "To be confirmed", units: "To be confirmed", openSpace: "To be confirmed", configurations: "3, 4 BHK",
    highlights: ["Villa-style residential options", "Layouts planned for comfortable family living", "Outdoor and open-space emphasis", "Community lifestyle features"],
    amenities: ["Community and recreation spaces", "Fitness and wellness facilities", "Children's play areas", "Landscaped open spaces", "Walking and relaxation areas"],
    locationAdvantages: ["Schools and educational options in the wider area", "Healthcare and daily needs nearby", "Shopping and dining destinations", "Road connectivity towards South-East Bengaluru"],
    floorPlans: [{ title: "Floor plans", detail: "Contact our team for available layouts and area statements.", image: "photo-1600585154340-be6161a56a0c" }],
  },
  {
    slug: "garden-view-homes",
    name: "Garden View Homes",
    builder: "Amoghar curated collection",
    locality: "Yelahanka, North Bengaluru",
    type: "Apartment",
    bhk: "1, 2, 3 BHK",
    price: "Price on request",
    pricePerSqft: "On request",
    image: "photo-1600607687920-4e2a09cf159d",
    gallery: ["photo-1600607687920-4e2a09cf159d", "photo-1600607687939-ce8a6c25118c", "photo-1600566753086-00f18fb6b3ea"],
    description: "Find a welcoming home with practical layouts, everyday conveniences and access to neighbourhood essentials.",
    overview: "Garden View Homes is presented as a residential option with a range of home configurations for different needs. Review the project information, compare available options and speak with our team to confirm current details.",
    rera: "To be confirmed", status: "Curated listing", projectArea: "To be confirmed", possession: "To be confirmed",
    towers: "To be confirmed", floors: "To be confirmed", units: "To be confirmed", openSpace: "To be confirmed", configurations: "1, 2, 3 BHK",
    highlights: ["Multiple residential configurations", "Practical home layouts", "Community lifestyle spaces", "Green and outdoor areas, where provided"],
    amenities: ["Community spaces", "Fitness facilities", "Children's play area", "Landscaped areas", "Recreation spaces", "Parking and security facilities"],
    locationAdvantages: ["Schools and educational institutions in the wider neighbourhood", "Healthcare and daily convenience services", "Shopping and dining options", "Connectivity to North Bengaluru destinations"],
    floorPlans: [{ title: "Floor plans", detail: "Contact our team for available layouts and area statements.", image: "photo-1600607687920-4e2a09cf159d" }],
  },
];

const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function PropertyCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <a className="project-image" href={`/property/${project.slug}`}>
        <img src={photo(project.image, 900)} alt={`${project.name} property`} />
        <span className="project-tag">CURATED</span>
      </a>
      <div className="project-info">
        <p className="project-builder">{project.builder}</p>
        <h3>{project.name}</h3>
        <p className="property-description">{project.description}</p>
        <p className="project-location"><MapPin size={14} />{project.locality}</p>
        <div className="project-meta"><span>{project.bhk}</span><strong>{project.price}</strong></div>
        <a className="project-link" href={`/property/${project.slug}`}>VIEW PROPERTY DETAILS <ArrowUpRight size={16} /></a>
      </div>
    </article>
  );
}

function getAmenityIcon(item: string) {
  const name = item.toLowerCase();

  if (name.includes("pool") || name.includes("swimming")) return <Waves size={21} />;
  if (name.includes("fitness") || name.includes("gym")) return <Dumbbell size={21} />;
  if (name.includes("children") || name.includes("play")) return <Baby size={21} />;
  if (name.includes("garden") || name.includes("landscaped") || name.includes("green")) return <Trees size={21} />;
  if (name.includes("clubhouse") || name.includes("community") || name.includes("gathering")) return <Users size={21} />;
  if (name.includes("parking")) return <CarFront size={21} />;
  if (name.includes("security")) return <ShieldCheck size={21} />;
  if (name.includes("walking") || name.includes("outdoor")) return <Bike size={21} />;
  if (name.includes("recreation") || name.includes("indoor")) return <Gamepad2 size={21} />;
  if (name.includes("wellness")) return <HeartPulse size={21} />;
  if (name.includes("relaxation")) return <Flower2 size={21} />;
  if (name.includes("facilities")) return <Building2 size={21} />;

  return <Sparkles size={21} />;
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug);
  const isMahindra = project.slug === "mahindra-blossom";

  // Project-specific floor plan rows. Only Mahindra Blossom uses the sample
  // area and price figures supplied for that project; other projects remain
  // clearly marked as price/details on request until confirmed.
  const floorPlanRows = isMahindra
    ? [
      { bhk: "2 BHK", area: "1250 sqft", price: "₹1.88 Cr" },
      { bhk: "2 BHK", area: "1350 sqft", price: "₹2.03 Cr" },
      { bhk: "3 BHK", area: "1775 sqft", price: "₹2.66 Cr" },
      { bhk: "3 BHK", area: "2175 sqft", price: "₹3.26 Cr" },
      { bhk: "4 BHK", area: "2450 sqft", price: "₹3.68 Cr" },
    ]
    : project.slug === "the-grove-residences"
      ? [
        { bhk: "2 BHK", area: "Contact for configuration", price: "Price on request" },
        { bhk: "3 BHK", area: "Contact for configuration", price: "Price on request" },
      ]
      : project.slug === "parkside-living"
        ? [
          { bhk: "2 BHK", area: "Contact for configuration", price: "Price on request" },
          { bhk: "3 BHK", area: "Contact for configuration", price: "Price on request" },
          { bhk: "4 BHK", area: "Contact for configuration", price: "Price on request" },
        ]
        : project.slug === "serene-acres"
          ? [
            { bhk: "3 BHK", area: "Contact for configuration", price: "Price on request" },
            { bhk: "4 BHK", area: "Contact for configuration", price: "Price on request" },
          ]
          : project.bhk.split(",").map((configuration) => ({
            bhk: configuration.trim(),
            area: "Contact for configuration",
            price: "Price on request",
          }));

  const specs = [
    { label: "Starting price", value: project.price, icon: Home },
    { label: "Price per sqft", value: project.pricePerSqft, icon: Ruler },
    { label: "Project area", value: project.projectArea, icon: Trees },
    { label: "Configurations", value: project.configurations, icon: Building2 },
    { label: "Possession date", value: project.possession, icon: CalendarDays },
    { label: "Number of towers", value: project.towers, icon: Building2 },
    { label: "Number of floors", value: project.floors, icon: Layers3 },
    { label: "Number of units", value: project.units, icon: Home },
    { label: "Open space", value: project.openSpace, icon: Trees },
  ];

  return (
    <>
      <Header />
      <main className="listing-page property-detail-page">
        <div className="container">
          <a className="text-link property-back-link" href="/property"><ArrowLeft size={16} /> BACK TO PROPERTIES</a>

          <section className="property-identity">
            <div className="property-identity__top">
              <p className="property-builder">{project.builder}</p>
              <span className="property-exclusive">{isMahindra ? "EXCLUSIVE LISTING" : "AMOGHAR CURATED"}</span>
            </div>
            <div className="property-identity__main">
              <div>
                <p className="eyebrow">{project.type} · {project.status}</p>
                <h1>{project.name}</h1>
                <p className="property-location"><MapPin size={16} />{project.locality}</p>
              </div>
              <div className="property-identity__price">
                <span>STARTING PRICE</span>
                <strong>{project.price}</strong>
                <small>{project.bhk}</small>
              </div>
            </div>
            <div className="property-identity__meta">
              <span><ShieldCheck size={15} /> RERA: {project.rera}</span>
              <span className="property-status">{project.status}</span>
            </div>
          </section>

          <section className="property-gallery-section" aria-label="Project image gallery">
            <PropertyGallery images={project.gallery.map((id) => photo(id, 1600))} name={project.name} />
          </section>

          <section className="property-enquiry-layout" id="project-highlights">
            <div className="property-spec-card">
              <div className="property-section-heading">
                <p className="eyebrow">AT A GLANCE</p>
                <h2>Project highlights &amp; specifications</h2>
                <p>Key details to help you evaluate the project.</p>
              </div>
              <div className="property-spec-grid">
                {specs.map(({ label, value, icon: Icon }) => (
                  <div className="property-spec-item" key={label}>
                    <span className="property-spec-icon"><Icon size={18} /></span>
                    <span className="property-spec-copy"><small>{label}</small><strong>{value}</strong></span>
                  </div>
                ))}
              </div>
              <p className="property-disclaimer">Project information is indicative and should be verified with the developer and official documents before purchase.</p>
            </div>

            <aside className="property-enquiry-card" id="property-enquiry">
              <p className="eyebrow">LET'S TALK ABOUT THIS HOME</p>
              <h2>Interested in {project.name}?</h2>
              <p>Share your details and our team can help you with project information or a site visit.</p>
              <form action="/contact" method="get" className="contact-form">
                <input type="hidden" name="project" value={project.name} />
                <label>FULL NAME<input name="name" placeholder="Your name" required /></label>
                <label>PHONE NUMBER<input name="phone" type="tel" placeholder="+91" required /></label>
                <label>EMAIL ADDRESS<input name="email" type="email" placeholder="Your email address" /></label>
                <label>MESSAGE<input name="message" placeholder="I'm interested in this project" /></label>
                <button className="button button-dark" type="submit">REQUEST A CALLBACK <ArrowUpRight size={17} /></button>
                <small>Demo enquiry form. Connect it to your enquiry API before launch.</small>
              </form>
              <a className="property-call-link" href="/#contact"><Phone size={15} /> Prefer to speak with our team?</a>
            </aside>
          </section>

          <section className="property-detail-section" id="floor-plans">
            <div className="property-section-heading">
              <p className="eyebrow">SPACE &amp; LAYOUTS</p>
              <h2>Floor plans &amp; configurations</h2>
              <p>Explore the available layouts. Request approved floor plans and area statements from the developer.</p>
            </div>
            <div className="property-floor-table-wrap">
              <table className="property-floor-table">
                <thead>
                  <tr>
                    <th scope="col">BHK</th>
                    <th scope="col">Configuration</th>
                    <th scope="col">Price</th>
                    <th scope="col" className="property-floor-action-heading">Floor plan</th>
                  </tr>
                </thead>
                <tbody>
                  {floorPlanRows.map((plan, index) => (
                    <tr key={`${plan.bhk}-${index}`}>
                      <td data-label="BHK"><strong>{plan.bhk}</strong></td>
                      <td data-label="Configuration">{plan.area}</td>
                      <td data-label="Price"><strong>{plan.price}</strong></td>
                      <td data-label="Floor plan" className="property-floor-action">
                        <a className="property-floor-request" href="#property-enquiry">
                          <ArrowUpRight size={15} /> REQUEST FLOOR PLAN
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="property-overview-section" id="overview">
            <div className="property-overview-copy">
              <p className="eyebrow">ABOUT THE PROJECT</p>
              <h2>A closer look at {project.name}.</h2>
              <p>{project.overview}</p>
              <a className="button button-dark" href="#property-enquiry">ENQUIRE ABOUT THIS PROJECT <ArrowUpRight size={16} /></a>
            </div>
            <div className="property-overview-image"><img src={photo(project.gallery[1] || project.image, 1100)} alt={`${project.name} residence`} /></div>
          </section>

          <section className="property-detail-section property-amenities-dark" id="amenities">
            <div className="property-section-heading">
              <p className="eyebrow">LIFESTYLE &amp; COMFORT</p>
              <h2>World-class amenities</h2>
              <p>Thoughtfully designed spaces for a better everyday lifestyle. </p>
            </div>
            <div className="property-amenity-grid">
              {project.amenities.map((item) => (
                <div className="property-amenity" key={item}>
                  <span className="property-amenity__icon">{getAmenityIcon(item)}</span>
                  <span className="property-amenity__text">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="property-neighbourhood-section" id="location">
            <div className="property-section-heading">
              <p className="eyebrow">THE NEIGHBOURHOOD</p>
              <h2>Strategic neighbourhood mapping</h2>
              <p>Explore the project location and nearby conveniences in the wider area.</p>
            </div>
            <div className="property-map-layout">
              <div className="property-map-frame">
                <iframe title={`${project.name} location map`} src={`https://www.google.com/maps?q=${encodeURIComponent(project.locality)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="property-location-list">
                {project.locationAdvantages.map((item) => <p key={item}><MapPin size={17} />{item}</p>)}
              </div>
            </div>
          </section>

          <section className="property-related-section">
            <div className="property-section-heading property-section-heading--row">
              <div><p className="eyebrow">EXPLORE MORE</p><h2>More properties</h2></div>
              <a className="text-link" href="/property">VIEW ALL PROPERTIES <ArrowUpRight size={16} /></a>
            </div>
            <div className="project-grid property-related-grid">
              {related.slice(0, 3).map((item) => <PropertyCard key={item.slug} project={item} />)}
            </div>
          </section>

          <section className="property-related-section property-similar-section">
            <div className="property-section-heading">
              <p className="eyebrow">MORE TO CONSIDER</p>
              <h2>Similar high-appreciation options</h2>
              <p>Compare other curated homes in Bengaluru. Appreciation is not guaranteed; assess each project independently.</p>
            </div>
            <div className="project-grid property-related-grid">
              {related.slice(1, 4).map((item) => <PropertyCard key={item.slug} project={item} />)}
            </div>
          </section>

          <section className="property-final-cta">
            <div><p className="eyebrow eyebrow-light">TAKE THE NEXT STEP</p><h2>Would you like to explore this home?</h2><p>Speak with Amoghar for project information or to arrange a visit.</p></div>
            <a className="button button-gold" href="#property-enquiry">ENQUIRE NOW <ArrowUpRight size={16} /></a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
