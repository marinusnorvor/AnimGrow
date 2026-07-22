"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon, IconName } from "./Icon";

const defaultNavLinks: [string, string][] = [
  ["#how-it-works", "How it Works"],
  ["#services", "Services"],
  ["#trust", "Trust"],
];

export default function Header({
  links = defaultNavLinks,
}: {
  links?: [string, string][];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="nav container">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Icon name="agriculture" filled />
          </span>
          <span>AnimGrow</span>
        </a>

        <div className="desktop-nav">
          {links.map(([href, label]) =>
            label === "Home" ? (
              <Link href="/" key={href}>
                {label}
              </Link>
            ) : (
              <a href={href} key={href}>
                {label}
              </a>
            )
          )}
          <button className="sign-in">Sign In</button>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        {links.map(([href, label]) =>
          label === "Home" ? (
            <Link href="/" onClick={() => setOpen(false)} key={href}>
              {label}
            </Link>
          ) : (
            <a href={href} onClick={() => setOpen(false)} key={href}>
              {label}
            </a>
          )
        )}
        <button onClick={() => setOpen(false)}>Sign In</button>
      </div>
    </header>
  );
}
