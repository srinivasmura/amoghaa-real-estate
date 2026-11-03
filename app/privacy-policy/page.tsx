
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import "./privacy-policy.css";

const sections = [
  {
    title: "1. Information you choose to share",
    body: (
      <>
        <p>
          When you contact Amoghar, request property information, or submit an
          enquiry, you may choose to provide details such as your name, phone
          number, email address, preferred location, property requirements,
          budget range, and the message you send us.
        </p>
        <p>
          Please share only information relevant to your property enquiry.
          Do not submit passwords, payment-card details, identity documents,
          or other sensitive information through a general enquiry form.
        </p>
      </>
    ),
  },
  {
    title: "2. How we use your information",
    body: (
      <ul>
        <li>To respond to your questions and property enquiries.</li>
        <li>To understand your stated property preferences and requirements.</li>
        <li>To arrange a requested call, site visit, or follow-up.</li>
        <li>To provide relevant information about properties or services you ask about.</li>
        <li>To maintain enquiry records, protect the website, and improve our service.</li>
      </ul>
    ),
  },
  {
    title: "3. When information may be shared",
    body: (
      <p>
        We may use service providers who help us operate, host, secure, or
        support the website and respond to enquiries. Where necessary to
        fulfil a property enquiry you have made, relevant details may also
        be shared with a property developer, builder, or other property
        partner. We aim to limit sharing to information relevant to your
        request. Specific providers and partner arrangements should be
        confirmed by Amoghar before publication.
      </p>
    ),
  },
  {
    title: "4. Cookies and similar technologies",
    body: (
      <p>
        The website or its hosting and security services may use essential
        cookies or similar technologies to support site operation, security,
        and preferences. If analytics, advertising, or other non-essential
        tracking tools are enabled, this policy should be updated to identify
        those tools and explain the choices available to visitors.
      </p>
    ),
  },
  {
    title: "5. Data retention and security",
    body: (
      <p>
        We keep enquiry information only as long as reasonably needed to
        respond to you, provide the requested service, maintain appropriate
        business records, resolve disputes, and meet applicable legal
        requirements. We use reasonable technical and organisational
        measures intended to protect information. No website or electronic
        storage method can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "6. Your choices and privacy requests",
    body: (
      <p>
        Subject to applicable law, you may request access to, correction of,
        or deletion of personal information you have provided, or raise a
        concern about how it is handled. To make a request, use our{" "}
        <Link href="/#contact">contact section</Link> and mention
        "Privacy Request". We may need to verify your identity before acting.
      </p>
    ),
  },
  {
    title: "7. Children’s privacy",
    body: (
      <p>
        Our property enquiry services are intended for adults. Please do not
        knowingly submit a child’s personal information through the website.
        A parent or guardian who believes a child has provided information
        may contact us and request that we review it.
      </p>
    ),
  },
  {
    title: "8. Third-party websites",
    body: (
      <p>
        Our website may contain links to third-party websites or services.
        Those services operate under their own privacy notices and practices.
        Please review their policies before providing them with personal
        information.
      </p>
    ),
  },
  {
    title: "9. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy when our website, services, or data
        practices change. The updated version will be posted on this page
        with a revised "Last updated" date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="amg-privacy">
      <div className="amg-privacy__topline" />

      <div className="amg-privacy__container">
        <Link href="/" className="amg-privacy__back">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to home
        </Link>

        <header className="amg-privacy__hero">
          <span className="amg-privacy__icon">
            <ShieldCheck size={25} strokeWidth={1.5} aria-hidden="true" />
          </span>

          <p className="amg-privacy__eyebrow">YOUR PRIVACY MATTERS</p>
          <h1>Privacy Policy</h1>

          <p className="amg-privacy__intro">
            How Amoghar handles the information you share when exploring
            properties and contacting our team.
          </p>

          <p className="amg-privacy__updated">
            Last updated: 30 October 2026
          </p>
        </header>

        <div className="amg-privacy__layout">
          <aside className="amg-privacy__aside">
            <p className="amg-privacy__aside-title">A clear approach</p>
            <p>
              We aim to use enquiry information thoughtfully, keep it
              relevant to your request, and explain how you can contact us
              with privacy questions.
            </p>

            <Link href="/#contact" className="amg-privacy__contact">
              Contact Amoghar <span>→</span>
            </Link>
          </aside>

          <article className="amg-privacy__content">
            <p className="amg-privacy__opening">
              This Privacy Policy applies to your use of the Amoghar website.
              It explains the types of information you may choose to provide,
              how that information may be used, and the choices available to
              you.
            </p>

            {sections.map((section) => (
              <section
                className="amg-privacy__section"
                key={section.title}
              >
                <h2>{section.title}</h2>
                {section.body}
              </section>
            ))}

            <section className="amg-privacy__section amg-privacy__section--contact">
              <h2>10. Contact us</h2>
              <p>
                For questions or requests relating to this Privacy Policy,
                please contact Amoghar through our website’s contact section
                and include "Privacy Request" in your message.
              </p>

              <Link href="/#contact" className="amg-privacy__button">
                Contact Amoghar <span>→</span>
              </Link>
            </section>
          </article>
        </div>

        <footer className="amg-privacy__footer">
          <span>
            © {new Date().getFullYear()} Amoghar. All rights reserved.
          </span>
          <Link href="/">Return to Amoghar</Link>
        </footer>
      </div>
    </main>
  );
}
