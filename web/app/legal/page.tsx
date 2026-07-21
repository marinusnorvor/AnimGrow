import Header from "../components/Header";
import Footer from "../components/Footer";

const legalLinks: [string, string][] = [
  ["/", "Home"],
  ["#terms", "Terms of Service"],
  ["#privacy", "Privacy Policy"],
];

export default function LegalPage() {
  return (
    <div className="legal-page">
      <Header links={legalLinks} />

      <section className="legal-hero">
        <div className="legal-hero-inner container">
          <span className="legal-eyebrow">Legal Framework</span>
          <h1>AnimGrow Platform Terms of Service and Privacy Policy</h1>
          <p>Last Updated: July 2026</p>
          <div className="legal-divider" />
        </div>
      </section>

      <main className="legal-main container">
        <section className="legal-section" id="terms">
          <div className="legal-section-heading">
            <h2>Part 1: Terms of Service</h2>
            <div className="legal-rule" />
          </div>

          <article className="legal-card">
            <h3>1. Introduction</h3>
            <p>Welcome to AnimGrow. By accessing our platform, you agree to these legally binding terms. AnimGrow provides a managed livestock marketplace where clients can purchase, track, and eventually process livestock through a managed care-as-a-service model in Ghana.</p>
          </article>

          <article className="legal-card">
            <h3>2. Eligibility</h3>
            <p>To use our services, you must be at least 18 years of age and possess the legal authority to enter into binding agreements. You are responsible for ensuring that your use of AnimGrow complies with all local and international laws applicable to your jurisdiction.</p>
          </article>

          <article className="legal-card">
            <h3>3. Asset Ownership</h3>
            <p>Upon full payment for an animal, the title of the specific livestock asset transfers to the Client. AnimGrow acts as a bailee and service provider, maintaining the asset on its managed farms until the animal reaches maturity or the client requests processing/sale.</p>
          </article>

          <article className="legal-card">
            <h3>4. Financial Terms &amp; Billing Framework</h3>
            <p>AnimGrow utilizes a multi-tiered billing structure designed to cover the entire lifecycle of livestock management. Our pricing is determined by current market valuations and operational overheads at the time of invoicing.</p>
            <div className="legal-detail-grid">
              <div className="legal-detail-item">
                <h4>Animal Purchase Fee</h4>
                <p>The initial capital cost required to acquire the specific livestock asset and transfer legal title to the client.</p>
              </div>
              <div className="legal-detail-item">
                <h4>Feeding Plan Subscription</h4>
                <p>A recurring management fee covering high-quality nutritional feed, specialized labor, and ongoing veterinary monitoring.</p>
              </div>
              <div className="legal-detail-item">
                <h4>Release Fee</h4>
                <p>Administrative and logistical costs associated with transferring the asset from the managed farm to the client or a third-party processor.</p>
              </div>
              <div className="legal-detail-item">
                <h4>Butcher &amp; Dressing Fee</h4>
                <p>Covers professional slaughtering, hygienic dressing, and preparation of meat cuts at approved facilities.</p>
              </div>
              <div className="legal-detail-item">
                <h4>Delivery Fee</h4>
                <p>Calculated based on distance and cold-chain requirements for transporting processed goods to the client's specified location.</p>
              </div>
            </div>
          </article>

          <article className="legal-card legal-card-highlight success">
            <h3>5. Abandonment Policy</h3>
            <p>AnimGrow prides itself on the humane treatment of animals. If a client fails to pay management fees for a specified period, the asset is considered "Abandoned." AnimGrow reserves the right to liquidate the asset to recover outstanding costs and reallocate farm space. Prior to liquidation, multiple written notices will be sent via the platform and registered email.</p>
          </article>

          <article className="legal-card legal-card-highlight danger">
            <h3>6. Mortality Compensations</h3>
            <p>In the unfortunate event of livestock mortality, AnimGrow provides a "Livestock Assurance" coverage:</p>
            <ul className="legal-list">
              <li><span className="material-symbols-outlined legal-list-icon">check_circle</span>Deaths due to negligence by farm staff are compensated based on fair market value or animal replacement.</li>
              <li><span className="material-symbols-outlined legal-list-icon">check_circle</span>Deaths due to natural causes are covered by the Insurance Pool at a percentage of the initial purchase cost.</li>
              <li><span className="material-symbols-outlined legal-list-icon">check_circle</span>Clients must be notified promptly of any health crisis or mortality event.</li>
            </ul>
          </article>

          <article className="legal-card">
            <h3>7. Video Rules</h3>
            <p>Livestream and recorded video access is provided as a transparency tool. Recording or broadcasting AnimGrow farm footage for commercial purposes without written consent is strictly prohibited. Misuse of farm imagery to misrepresent livestock conditions will result in immediate account termination.</p>
          </article>

          <article className="legal-card">
            <h3>8. Meat Processing</h3>
            <p>Processing and slaughtering are conducted at approved facilities. AnimGrow ensures the highest standards of food safety and traceability from farm to gate. Delivery of processed meat is subject to third-party logistics availability and cooling chain integrity.</p>
          </article>

          <article className="legal-card">
            <h3>9. Force Majeure</h3>
            <p>AnimGrow shall not be held liable for failure to perform its obligations if such failure is as a result of Acts of God (including fire, flood, earthquake, storm, hurricane or other natural disaster), war, invasion, act of foreign enemies, or national outbreaks of livestock disease beyond reasonable veterinary control.</p>
          </article>
        </section>

        <section className="legal-section" id="privacy">
          <div className="legal-section-heading secondary">
            <h2>Part 2: Privacy Policy</h2>
            <div className="legal-rule secondary-rule" />
          </div>

          <article className="legal-card">
            <p>At AnimGrow, we respect your privacy and are committed to protecting your personal data. This policy outlines how we handle your information when you use our platform.</p>
            <h3>Data Collection</h3>
            <p>We collect information you provide directly to us, such as your name, contact details, payment information, and delivery addresses. We also collect telemetry data regarding how you interact with our livestock monitoring system.</p>
            <h3>How We Use Your Data</h3>
            <ul className="legal-bullet-list">
              <li>To manage your livestock assets and provide health updates.</li>
              <li>To facilitate secure financial transactions.</li>
              <li>To optimize farm operations and veterinary response times.</li>
              <li>To comply with regulatory requirements for food safety tracking.</li>
            </ul>
            <h3>Data Security</h3>
            <p>We implement industry-standard encryption and security protocols to protect your data. We do not sell your personal information to third parties. Data is only shared with essential partners, such as veterinary services and logistics providers, necessary to fulfill our service commitment to you.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
