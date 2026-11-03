'use client';

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

export default function FindHomeSearch() {
  const [locality, setLocality] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (locality.trim()) params.set("locality", locality.trim());
    window.location.href = `/property?${params.toString()}`;
  }

  return (
    <form className="find-home-panel find-home-panel--simple home-reveal" onSubmit={submit}>
      <div className="search-fields search-fields--simple">
        <label className="search-field search-field--simple">
          <span className="sr-only">Search by location, project or builder</span>
          <input
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            list="locality-options"
            placeholder="Search by location, project or builder..."
            aria-label="Search by location, project or builder"
          />
          <datalist id="locality-options">
            <option value="Hebbal" />
            <option value="Yelahanka" />
            <option value="Sarjapura Road" />
            <option value="Whitefield" />
            <option value="Thanisandra" />
            <option value="Hennur" />
          </datalist>
        </label>
        <button type="submit" className="find-button find-button--simple">
          <Search size={19} aria-hidden="true" />
          <span>Find Home</span>
        </button>
      </div>
    </form>
  );
}