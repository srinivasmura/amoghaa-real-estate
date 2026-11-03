
import styles from "./AboutAmoghaa.module.css";

const AMOGHAA_LOGO =
  "https://amoghar.com/wp-content/uploads/2025/08/Amogha-logo-final-Golden-png-scaled.png";

export default function AboutAmoghaa() {
  return (
    <section className={styles.aboutSection} id="about-amoghaa">
      <div className={styles.aboutContainer}>
        {/* Left: Original transparent Amoghaa logo */}
        <div className={styles.logoWrapper}>
          <img src={AMOGHAA_LOGO} alt="Amoghaa - Build Right, Invest Smart" className={styles.logo} />
        </div>

        {/* Right: About Amoghaa content */}
        <div className={styles.content}>
          <h2 className={styles.title}>About Amoghaa</h2>

          <h3 className={styles.subtitle}>
            Your North Bengaluru Property Advisor
          </h3>

          <p className={styles.description}>
            Amoghaa Real Estate is a North Bengaluru-focused real estate
            advisory firm assisting buyers in locations such as Hebbal,
            Yelahanka, Thanisandra, Jakkur, Hennur, Bagalur, and Devanahalli.
          </p>

          <p className={styles.description}>
            We provide structured guidance on pricing, builder credibility,
            micro-location analysis, and long-term suitability – ensuring
            buyers avoid rushed or emotional decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
