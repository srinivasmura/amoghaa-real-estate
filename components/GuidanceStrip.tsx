import {
  ArrowRight,
  FileCheck2,
  House,
  IndianRupee,
  UsersRound,
  SearchCheck,
  Building2,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const benefits = [
  {
    icon: House,
    title: "Curated properties",
    description:
      "Thoughtfully selected homes and investment options from our property partners.",
  },
  {
    icon: IndianRupee,
    title: "Choices for your budget",
    description:
      "Explore homes across locations, configurations and price ranges.",
  },
  {
    icon: UsersRound,
    title: "Personal guidance",
    description:
      "Get helpful support from your first shortlist through your site visit.",
  },
  {
    icon: FileCheck2,
    title: "A transparent process",
    description:
      "Clear information and verified details to help you make informed decisions.",
  },
];

const diligenceSteps = [
  {
    icon: SearchCheck,
    title: "Document Verification",
    description:
      "We verify approvals, titles and investment details to help you make a safe, informed choice.",
  },
  {
    icon: Building2,
    title: "Builder & Project Assessment",
    description:
      "We assess the builder's track record, project details and construction quality.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk Check",
    description:
      "We review regulatory compliance, project permissions and important risk factors.",
  },
  {
    icon: ClipboardCheck,
    title: "Final Recommendations",
    description:
      "We share clear insights and practical recommendations to help you decide confidently.",
  },
];

export default function GuidanceStrip() {
  return (
    <>


      <section className="due-diligence" aria-labelledby="due-diligence-title">
        <div className="due-diligence__inner">
          <header className="due-diligence__heading">
            <p className="due-diligence__eyebrow">OUR PROCESS</p>
            <h2 id="due-diligence-title">Our Due Diligence Plan</h2>
            <p>
              A structured approach to help you make informed, confident
              decisions.
            </p>
          </header>

          <div className="due-diligence__steps">
            {diligenceSteps.map(({ icon: Icon, title, description }) => (
              <article className="due-diligence__step" key={title}>
                <span className="due-diligence__icon">
                  <Icon size={27} strokeWidth={1.55} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
