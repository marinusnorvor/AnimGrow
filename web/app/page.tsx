"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Icon, type IconName } from "./components/Icon";

const problemItems: [IconName, string, string][] = [
  ["unknown_document", "Unknown Origin", "No history of where the animal was sourced or its vaccination records."],
  ["no_accounts", "Lack of Oversight", "Zero professional monitoring or health checks prior to sale at market."],
  ["coronavirus", "Health Risk", "Unchecked animals are more likely to carry diseases that affect your family."],
];
const steps: [IconName, string, string, boolean?][] = [
  ["shopping_cart", "Buy", "Purchase a healthy kid goat or lamb from our verified stock."],
  ["inventory", "Choose Plan", "Select a recurring feeding package that funds ongoing care."],
  ["visibility", "Monitor", "Follow health updates and request live video calls anytime."],
  ["done_all", "Release", "When ready, we deliver or prepare the meat professionally.", true],
];
const pillars: [IconName, string, string, string][] = [
  ["qr_code_2", "Traceability", "Know exactly which animal is yours. Access a digital passport containing its full age, breed, and verified care history from day one.", "mint"],
  ["health_and_safety", "Health Assurance", "Ongoing professional monitoring by resident vets removes the guesswork. We track vaccinations, weight gain, and general wellbeing daily.", "green"],
  ["handyman", "Convenience", "Outsource the entire burden of rearing. No need for your own land, infrastructure, labor, or farming knowledge. We handle it all.", "gray"],
  ["videocam", "Transparency", "Verify the animal's condition yourself. Log in anytime to see daily reports or request a live video call directly with the farm staff.", "mint"],
];
const services = [
  ["1", "Animal Purchase", "The initial cost to buy your kid goat or sheep. Listings include age, breed, and photos so you know exactly what you're buying."],
  ["2", "Feeding Plan", "A recurring package (daily, weekly, or monthly) that funds your animal's nutrition, professional labor, and high-standard care."],
  ["3", "Release Fee", "A fixed fee covering our custodial and rearing service, charged only when you are ready to have the animal released to you."],
  ["4", "Delivery Fee", "Need the animal at your door? We facilitate safe transportation via our 3rd party logistics partners for a standard fee."],
  ["5", "Butcher/Dressing", "Choose to have your animal professionally slaughtered and prepared. We deliver meat chilled and packed to your specifications."],
];
const faqs = [
  ["Can I visit the farm in person?", "Absolutely. We encourage it! To maintain strict biosecurity for the animals, visits must be scheduled in advance through your dashboard. Come meet your goat or sheep and see our standards for yourself."],
  ["What payment methods do you accept?", "We accept all major Ghanaian payment methods, including Mobile Money (MTN, Telecel, AT) and Debit/Credit cards. You can pay for animal purchases upfront and set up recurring payments for your feeding plans."],
  ["Can I own more than one animal?", "Yes! Many of our clients manage a small herd through the platform. You can purchase and track multiple goats or sheep under a single account, each with its own feeding plan and health dashboard."],
  ["What happens when the animal is ready?", "The choice is yours. We can deliver the live animal to your location, you can pick it up yourself, or we can handle professional butchering and deliver chilled, prepared meat directly to your kitchen."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      ".hero-content > div, .eyebrow, .section-head, main h2, .intro, .card, .step, .assurance-copy, .assurance > img, .service-card, .start-card, .faq-item, .final-cta, .footer-grid > *, .hero-actions"
    ));
    targets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 40, 220)}ms`);
    });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.18, rootMargin: "0px 0px -10%" }
    );
    targets.forEach((target) => observer.observe(target));

    const hero = document.querySelector<HTMLElement>(".hero");
    let animationFrame = 0;
    let x = 0;
    let y = 0;
    const onMove = (event: MouseEvent) => {
      if (!hero || window.innerWidth < 801 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const bounds = hero.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
      y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 4;
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        hero.style.setProperty("--hero-x", `${x}px`);
        hero.style.setProperty("--hero-y", `${y}px`);
        animationFrame = 0;
      });
    };
    const resetHero = () => {
      hero?.style.setProperty("--hero-x", "0px");
      hero?.style.setProperty("--hero-y", "0px");
    };
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
      root.style.setProperty("--scroll-progress", `${progress}`);
    };

    updateScrollProgress();
    hero?.addEventListener("mousemove", onMove);
    hero?.addEventListener("mouseleave", resetHero);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => {
      observer.disconnect();
      hero?.removeEventListener("mousemove", onMove);
      hero?.removeEventListener("mouseleave", resetHero);
      window.removeEventListener("scroll", updateScrollProgress);
      window.cancelAnimationFrame(animationFrame);
      root.style.removeProperty("--scroll-progress");
      root.classList.remove("motion-ready");
    };
  }, []);
  useEffect(() => {
    const finishLoading = () => window.setTimeout(() => setIsLoading(false), 280);
    if (document.readyState === "complete") finishLoading();
    else window.addEventListener("load", finishLoading, { once: true });
    return () => window.removeEventListener("load", finishLoading);
  }, []);
  return <div id="top"><div className="scroll-progress" aria-hidden="true" /><div className={`page-loader ${isLoading ? "" : "page-loader-hidden"}`} aria-hidden="true"><div className="loader-mark"><Icon name="agriculture" filled /></div><span>AnimGrow</span><i /></div><Header /><main>
    <section className="hero">
      <Image src="/hero-pasture.jpg" alt="Lush Ghanaian pasture with healthy sheep and goats grazing" fill priority sizes="100vw" /><div className="hero-overlay" />
      <div className="container hero-content"><div><h1>Know exactly what you&apos;re eating, before it&apos;s even ready.</h1><p>We raise healthy goats and sheep for you, so you never have to guess where your meat comes from. Premium Ghanaian livestock care, delivered with total honesty.</p><div className="hero-actions"><a className="gold-button" href="https://docs.google.com/forms/d/e/1FAIpQLSemoAjvyPABsaS9Z8dtIGXwmPyw54IOCf080nM0Ip3iSikZjg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Get Early Access <Icon name="arrow_forward" /></a><a href="https://youtu.be/03FYZHWnfIM" target="_blank" rel="noopener noreferrer">How it Works</a></div></div></div>
    </section>

    <section className="section soft-bg"><div className="container narrow centered"><span className="eyebrow terracotta">The Problem</span><h2>The Uncertainty of the Market</h2><p className="intro left">Meat sold in open markets in Ghana passes through very little oversight. A buyer generally has no way of knowing how the animal was raised, what it was fed, whether it received veterinary attention, or even if it died of natural causes before reaching the market. Animals are often sourced from unknown locations with no records. For families who value health, this uncertainty is an avoidable risk.</p><div className="three-grid">{problemItems.map(([icon, title, text]) => <article className="card" key={title}><span className="icon-box error"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section" id="how-it-works"><div className="container"><div className="section-head"><span className="eyebrow green-text">Our Solution</span><h2>Livestock Care-as-a-Service</h2><p>We&apos;ve built a &quot;care-as-a-service&quot; model. You purchase a young goat or sheep and outsource the farming burden to us. We handle infrastructure, labor, and specialized feeding, while you stay informed through our digital platform.</p></div><div className="steps">{steps.map(([icon, title, text, gold]) => <div className="step" key={title}><span className={`step-icon ${gold ? "gold" : ""}`}><Icon name={icon} filled={gold} /></span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

    <section className="section light-bg" id="trust"><div className="container"><h2 className="centered">The Four Pillars of AnimGrow</h2><div className="four-grid">{pillars.map(([icon, title, text, tone]) => <article className="card" key={title}><span className={`icon-box ${tone}`}><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section"><div className="container assurance"><div className="assurance-copy"><span className="policy"><Icon name="verified_user" /> Livestock Assurance Policy</span><h2>Honesty, Even When Things Go Wrong</h2><p>Farming involves risks, and we believe in complete honesty. If your animal becomes sick, it is logged immediately by our veterinary staff and reported to your dashboard. You are never kept in the dark.</p><p>In the rare event an animal dies, <strong>we take the hit.</strong> We provide a replacement kid goat or sheep at no extra purchase cost. We also cover the feeding costs for the replacement until it reaches the same stage your original animal was at.</p><div className="assurance-note"><Icon name="check_circle" filled /><strong>Your investment is protected by our assurance policy.</strong></div></div><Image src="/vet-goat.jpg" alt="Professional veterinarian inspecting a healthy goat" width={1200} height={1200} sizes="(max-width: 800px) 100vw, 50vw" /></div></section>

    <section className="section pricing" id="services"><div className="container"><div className="centered pricing-head"><h2>Clear, Service-Based Pricing</h2><p>You only pay for the specific services you choose to use. No hidden fees, just transparent costs for quality care.</p></div><div className="service-grid">{services.map(([n, title, text]) => <article className="service-card" key={n}><h3>{n}. {title}</h3><p>{text}</p></article>)}<article className="start-card"><h3>Start Your Journey</h3><button>Create Account <Icon name="arrow_forward" /></button></article></div></div></section>

    <section className="section"><div className="container faq"><h2 className="centered">Common Questions</h2>{faqs.map(([q, a], i) => <article className={`faq-item ${openFaq === i ? "faq-open" : ""}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><Icon name="expand_more" /></button><div className="faq-answer"><p>{a}</p></div></article>)}</div></section>

    <section className="final-section"><div className="container"><div className="final-cta"><h2>Start your journey to better quality meat today.</h2><p>Join hundreds of Ghanaian families who have stopped guessing and started knowing exactly what&apos;s on their plate.</p><button className="gold-button">Create Your Account</button></div></div></section>
  </main>
  <Footer />
  </div>;
}
