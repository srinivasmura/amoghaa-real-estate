"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "https://amoghar.com/wp-content/uploads/2025/08/Amogha-logo-final-Golden-png-scaled.png";

const links = [
  { label: "HOME", href: "/" },
  { label: "FIND HOME", href: "/property" },
  { label: "PROPERTIES", href: "/property", dropdown: true },
  { label: "LOCATIONS", href: "/#locations" },
  { label: "BUILDERS", href: "/#builders" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="/" className="brand" aria-label="Amoghaa Real Estate home">
          <img className="brand-logo" src={LOGO_URL} alt="Amoghaa Real Estate" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" && activeHash === ""
                : link.href.startsWith("/#")
                  ? pathname === "/" && activeHash === link.href.substring(1)
                  : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <a
                key={link.label}
                href={link.href}
                className={isActive ? "nav-active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        <a href="/#contact" className="nav-cta">BOOK A VISIT <ArrowUpRight size={16} /></a>
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation-overlay"
        >
          <Menu size={27} />
        </button>
      </div>

      {open && (
        <div className="mobile-overlay" id="mobile-navigation-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-overlay-head">
            <a href="/" className="brand" onClick={() => setOpen(false)} aria-label="Amoghaa home">
              <img className="brand-logo brand-logo-mobile" src={LOGO_URL} alt="Amoghaa Real Estate" />
            </a>
            <button className="mobile-close" type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu">
              <X size={26} />
            </button>
          </div>
          <p className="mobile-eyebrow">YOUR HOME JOURNEY STARTS HERE</p>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/" && activeHash === ""
                  : link.href.startsWith("/#")
                    ? pathname === "/" && activeHash === link.href.substring(1)
                    : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={isActive ? "mobile-nav-active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="mobile-link-index">0{index + 1}</span>
                  <span>{link.label}</span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              );
            })}
          </nav>

          <a href="/#contact" className="button button-light mobile-cta" onClick={() => setOpen(false)}>
            BOOK A SITE VISIT <ArrowUpRight size={18} />
          </a>
          <div className="mobile-overlay-footer">AMOGHAA REAL ESTATE<span>Thoughtful property guidance.</span></div>
        </div>
      )}
    </header>
  );
}