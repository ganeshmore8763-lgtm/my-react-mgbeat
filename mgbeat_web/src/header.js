import { useState } from "react";
import "./header.css";

const LEFT_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/peter_808_/",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/7620106244",
    external: true,
  },
];

const RIGHT_LINKS = [
  { label: "Home", href: "#home", external: false },
  { label: "Beats", href: "#beats", external: false },
  { label: "Music", href: "#credits", external: false },
  { label: "Contact", href: "#contact", external: false },
];

const MOBILE_LINKS = [...RIGHT_LINKS, ...LEFT_LINKS];

function linkProps(link) {
  if (link.external) {
    return {
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return {};
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick(link, event) {
    if (!link.external) {
      event.preventDefault();
      const target = document.querySelector(link.href);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", link.href);
      }
    }

    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-group nav-left">
          {LEFT_LINKS.map((link) => (
            <a
              key={link.label}
              className="nav-link"
              href={link.href}
              onClick={(event) => handleLinkClick(link, event)}
              {...linkProps(link)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="brand"
          href="#home"
          aria-label="MGBeat home"
          onClick={(event) => handleLinkClick({ href: "#home", external: false }, event)}
        >
          <img
            alt="MgBeat"
            className="brand-logo"
            src="/images/mgbeat-header-logo.png"
          />
        </a>

        <div className="nav-group nav-right">
          {RIGHT_LINKS.map((link) => (
            <a
              key={link.label}
              className="nav-link"
              href={link.href}
              onClick={(event) => handleLinkClick(link, event)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} id="mobile-nav">
        {MOBILE_LINKS.map((link) => (
          <a
            key={`mobile-${link.label}`}
            className="mobile-link"
            href={link.href}
            onClick={(event) => handleLinkClick(link, event)}
            {...linkProps(link)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
