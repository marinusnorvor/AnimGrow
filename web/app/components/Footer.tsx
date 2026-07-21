import { Icon } from "./Icon";

const footerLinks = [
  ["Quick Links", ["How it Works", "Services", "FAQs"]],
  ["Legal", ["Terms of Service", "Privacy Policy", "Traceability Policy"]],
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Icon name="agriculture" filled /> AnimGrow
          </div>
          <p>
            Premium Goat &amp; Sheep Care-as-a-Service in Ghana. Honest growth,
            transparent health, quality you can trust.
          </p>
        </div>

        {footerLinks.map(([title, links]) => (
          <div className="footer-column" key={title as string}>
            <h5>{title}</h5>
            {(links as string[]).map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-column">
          <h5>Contact</h5>
          <p>
            Accra, Ghana
            <br />
            farm@animgrow.gh
            <br />
            +233 24 000 0000
          </p>
        </div>
      </div>
      <div className="copyright container">
        © 2024 AnimGrow. All rights reserved. Built for quality, raised with love.
      </div>
    </footer>
  );
}
