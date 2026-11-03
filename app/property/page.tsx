"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  ArrowUpRight,
  SearchX,
  SlidersHorizontal,
  X,
  Check,
} from "lucide-react";
import { useMemo, useState } from "react";

type ProjectStatus = "New Launch" | "Under Construction" | "Ready to Move";

type Project = {
  slug: string;
  name: string;
  locality: string;
  bhk: string[];
  type: "Apartment" | "Villa" | "Plot";
  priceLabel: string;
  priceValue: number;
  image: string;
  description: string;
  status: ProjectStatus;
  possession: string;
  featured?: boolean;
};

// Static demo data for the listing-page design. Replace with API data later.
const projects: Project[] = [
  {
    slug: "the-grove-residences",
    name: "The Grove Residences",
    locality: "Hebbal",
    bhk: ["2 BHK", "3 BHK"],
    type: "Apartment",
    priceLabel: "₹ 1.25 Cr onwards",
    priceValue: 12500000,
    image: "photo-1600607687939-ce8a6c25118c",
    description: "Thoughtfully planned homes with inviting outdoor spaces and lifestyle amenities.",
    status: "New Launch",
    possession: "Dec 2028",
    featured: true,
  },
  {
    slug: "parkside-living",
    name: "Parkside Living",
    locality: "Whitefield",
    bhk: ["2 BHK", "3 BHK", "4 BHK"],
    type: "Apartment",
    priceLabel: "₹ 1.48 Cr onwards",
    priceValue: 14800000,
    image: "photo-1600566753086-00f18fb6b3ea",
    description: "Contemporary residences designed around comfort and community living.",
    status: "Under Construction",
    possession: "Jun 2027",
  },
  {
    slug: "serene-acres",
    name: "Serene Acres",
    locality: "Sarjapura Road",
    bhk: ["3 BHK", "4 BHK"],
    type: "Villa",
    priceLabel: "₹ 2.10 Cr onwards",
    priceValue: 21000000,
    image: "photo-1600585154340-be6161a56a0c",
    description: "Spacious villas in a relaxed residential setting with green surroundings.",
    status: "New Launch",
    possession: "Mar 2029",
    featured: true,
  },
  {
    slug: "garden-view-homes",
    name: "Garden View Homes",
    locality: "Yelahanka",
    bhk: ["1 BHK", "2 BHK", "3 BHK"],
    type: "Apartment",
    priceLabel: "₹ 78 L onwards",
    priceValue: 7800000,
    image: "photo-1600607687920-4e2a09cf159d",
    description: "Welcoming homes with practical layouts and neighbourhood conveniences.",
    status: "Ready to Move",
    possession: "Ready",
  },
];

const statuses = ["All Projects", "New Launch", "Under Construction", "Ready to Move"] as const;
type StatusTab = (typeof statuses)[number];

function photo(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;
}

const localities = ["Hebbal", "Whitefield", "Sarjapura Road", "Yelahanka"];
const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];

export default function PropertiesPage() {
  const [activeStatus, setActiveStatus] = useState<StatusTab>("All Projects");
  const [search, setSearch] = useState("");
  const [selectedLocalities, setSelectedLocalities] = useState<string[]>([]);
  const [selectedBhk, setSelectedBhk] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [maxBudget, setMaxBudget] = useState("Any budget");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => projects.filter((project) => {
    const matchesStatus = activeStatus === "All Projects" || project.status === activeStatus;
    const query = search.trim().toLowerCase();
    const matchesSearch = !query ||
      project.name.toLowerCase().includes(query) ||
      project.locality.toLowerCase().includes(query);
    const matchesLocality = selectedLocalities.length === 0 || selectedLocalities.includes(project.locality);
    const matchesBhk = selectedBhk.length === 0 || selectedBhk.some((item) => project.bhk.includes(item));
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.type);
    const budgetLimit = maxBudget === "Any budget" ? Infinity : Number(maxBudget);
    return matchesStatus && matchesSearch && matchesLocality && matchesBhk && matchesType && project.priceValue <= budgetLimit;
  }), [activeStatus, search, selectedLocalities, selectedBhk, selectedTypes, maxBudget]);

  const activeFilterCount = selectedLocalities.length + selectedBhk.length + selectedTypes.length + (maxBudget !== "Any budget" ? 1 : 0);

  function toggleValue(
    value: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    setter((currentValues) =>
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  }

  function clearFilters() {
    setSearch("");
    setSelectedLocalities([]);
    setSelectedBhk([]);
    setSelectedTypes([]);
    setMaxBudget("Any budget");
    setActiveStatus("All Projects");
  }

  const filterPanel = (
    <div className="property-filter-panel">
      <div className="property-filter-heading">
        <div>
          <span className="listing-kicker">REFINE YOUR SEARCH</span>
          <h3>Filters</h3>
        </div>
        <button type="button" className="filter-clear" onClick={clearFilters}>Clear all</button>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="property-search">Search locality or project</label>
        <input id="property-search" className="filter-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="e.g. Whitefield" />
      </div>

      <div className="filter-group">
        <p className="filter-label">Locality</p>
        {localities.map((item) => (
          <label className="filter-option" key={item}>
            <input type="checkbox" checked={selectedLocalities.includes(item)} onChange={() => toggleValue(item, setSelectedLocalities)} />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <p className="filter-label">Configuration</p>
        {bhkOptions.map((item) => (
          <label className="filter-option" key={item}>
            <input type="checkbox" checked={selectedBhk.includes(item)} onChange={() => toggleValue(item, setSelectedBhk)} />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <p className="filter-label">Property type</p>
        {["Apartment", "Villa", "Plot"].map((item) => (
          <label className="filter-option" key={item}>
            <input type="checkbox" checked={selectedTypes.includes(item)} onChange={() => toggleValue(item, setSelectedTypes)} />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="property-budget">Maximum budget</label>
        <select id="property-budget" className="filter-search" value={maxBudget} onChange={(e) => setMaxBudget(e.target.value)}>
          <option>Any budget</option>
          <option value="10000000">Up to ₹1 Cr</option>
          <option value="15000000">Up to ₹1.5 Cr</option>
          <option value="20000000">Up to ₹2 Cr</option>
          <option value="30000000">Up to ₹3 Cr</option>
        </select>
      </div>
      <p className="filter-demo-note">Illustrative demo listings. Prices and project details are sample values.</p>
    </div>
  );

  return (
    <>
      <Header />
      <main className="property-listing-page">
        <section className="property-listing-intro">
          <div className="container">
            <span className="listing-kicker">AMOGHAA PROPERTY COLLECTION</span>
            <h1>Find a home that <em>feels like you.</em></h1>
            <p>Explore considered homes across Bengaluru. Compare locations, configurations and project details in one place.</p>
            <div className="listing-trust-points">
              <span><Check size={15} /> Curated property options</span>
              <span><Check size={15} /> Personalised guidance</span>
              <span><Check size={15} /> Zero brokerage assurance</span>
            </div>
          </div>
        </section>

        <section className="container property-listing-content">
          <div className="listing-mobile-toolbar">
            <button type="button" onClick={() => setMobileFiltersOpen(true)}><SlidersHorizontal size={17} /> Filters {activeFilterCount > 0 && <b>{activeFilterCount}</b>}</button>
            <span>{filtered.length} properties</span>
          </div>

          <aside className="property-filters-desktop">{filterPanel}</aside>

          <div className="property-results">
            <div className="property-status-tabs" role="tablist" aria-label="Project status">
              {statuses.map((status) => (
                <button type="button" role="tab" aria-selected={activeStatus === status} className={activeStatus === status ? "active" : ""} key={status} onClick={() => setActiveStatus(status)}>
                  {status}
                  <span>{status === "All Projects" ? projects.length : projects.filter((p) => p.status === status).length}</span>
                </button>
              ))}
            </div>

            <div className="property-results-heading">
              <div>
                <span className="listing-kicker">HOMES WORTH LOOKING CLOSER AT</span>
                <h2>{filtered.length} {filtered.length === 1 ? "property" : "properties"} to explore</h2>
              </div>
              <span className="property-demo-label">Sample listings</span>
            </div>

            {filtered.length > 0 ? (
              <div className="property-list-cards">
                {filtered.map((project) => (
                  <article className="property-list-card" key={project.slug}>
                    <a href={`/property/${project.slug}`} className="property-list-image">
                      <img src={photo(project.image)} alt={project.name} />
                      <span className="property-status-badge">{project.status}</span>
                      {project.featured && <span className="property-featured-badge">AMOGHAA PICK</span>}
                    </a>
                    <div className="property-list-info">
                      <div className="property-card-topline"><span>{project.type}</span><span>{project.possession === "Ready" ? "Ready to move" : `Possession ${project.possession}`}</span></div>
                      <h3>{project.name}</h3>
                      <p className="property-list-location"><MapPin size={15} /> {project.locality}, Bengaluru</p>
                      <p className="property-list-description">{project.description}</p>
                      <div className="property-list-specs">
                        <span>{project.bhk.join(" · ")}</span>
                        <strong>{project.priceLabel}</strong>
                      </div>
                      <a href={`/property/${project.slug}`} className="property-view-link">VIEW PROPERTY DETAILS <ArrowUpRight size={16} /></a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="property-list-empty">
                <SearchX size={34} />
                <h3>No matching properties found</h3>
                <p>Try changing your filters or clearing your search to see all sample listings.</p>
                <button type="button" onClick={clearFilters}>Clear filters</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {mobileFiltersOpen && (
        <div className="property-filter-overlay" role="dialog" aria-modal="true" aria-label="Property filters">
          <div className="property-filter-drawer">
            <button type="button" className="filter-drawer-close" onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters"><X size={20} /></button>
            {filterPanel}
            <button type="button" className="filter-apply-button" onClick={() => setMobileFiltersOpen(false)}>Show {filtered.length} properties</button>
          </div>
        </div>
      )}
    </>
  );
}
