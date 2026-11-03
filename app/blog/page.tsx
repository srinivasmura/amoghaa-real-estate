"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, BookOpen, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./blog.module.css";

type BlogPost = {
  slug: string;
  href: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
};

const posts: BlogPost[] = [
  {
    slug: "why-indian-investors-are-leading-buyers-in-dubai-properties",
    href: "https://amoghar.com/why-indian-investors-are-leading-buyers-in-dubai-properties/",
    category: "GLOBAL REAL ESTATE",
    date: "November 11, 2025",
    title: "Why Indian Investors Are Leading Buyers in Dubai Properties",
    excerpt:
      "Explore the factors shaping Indian buyer interest in Dubai real estate, from international connectivity to lifestyle and investment considerations.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    slug: "the-advantage-of-buying-primary-real-estate-in-dubai",
    href: "https://amoghar.com/the-advantage-of-buying-primary-real-estate-in-dubai/",
    category: "BUYER GUIDANCE",
    date: "September 2, 2025",
    title: "The Advantage of Buying Primary Real Estate in Dubai",
    excerpt:
      "Understand how buying directly from a developer can offer clear pricing, launch opportunities, modern designs and other benefits.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85",
  },
  {
    slug: "why-dubai-is-the-top-choice-for-international-real-estate-investors",
    href: "https://amoghar.com/why-dubai-is-the-top-choice-for-international-real-estate-investors/",
    category: "MARKET INSIGHTS",
    date: "September 2, 2025",
    title: "Why Dubai Is the Top Choice for International Real Estate Investors",
    excerpt:
      "A closer look at why Dubai continues to attract international property interest and the considerations buyers should explore.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1100&q=85",
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const otherPosts = posts.slice(1);
  useEffect(() => {
    const elements = document.querySelectorAll(
      `.${styles.reveal}, .${styles.revealLeft}, .${styles.revealRight}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={`${styles.hero} ${styles.reveal}`}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>
              <Sparkles size={14} /> THE AMOGHAA JOURNAL
            </span>
            <h1>
              Insights for <em>smarter</em>
              <br /> property decisions.
            </h1>
            <p>
              Thoughtful perspectives, market insights and practical guidance
              to help you make confident real estate decisions.
            </p>
            <div className={styles.heroRule} />
            <span className={styles.heroNote}>KNOW MORE. CHOOSE WELL. FEEL AT HOME.</span>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.heroImage} />
            <div className={styles.heroImageCaption}>A considered approach to real estate</div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.eyebrow}>FROM OUR JOURNAL</span>
              <h2>Ideas worth <em>exploring.</em></h2>
            </div>
            <p>Browse our latest articles and perspectives.</p>
          </div>

          <article className={`${styles.featuredCard} ${styles.reveal}`}>
            <Link href={featured.href} target="_blank" rel="noopener noreferrer" className={styles.featuredImageLink} aria-label={`Read ${featured.title}`}>
              <img src={featured.image} alt="Dubai skyline and modern city architecture" />
              <span className={styles.imageLabel}>FEATURED ARTICLE</span>
            </Link>
            <div className={styles.featuredCopy}>
              <div className={styles.meta}>
                <span>{featured.category}</span>
                <span><CalendarDays size={13} /> {featured.date}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <Link className={styles.readLink} href={featured.href} target="_blank" rel="noopener noreferrer">
                READ ARTICLE <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>

          <div className={styles.gridHeading}>
            <h2>More perspectives</h2>
            <span>{otherPosts.length.toString().padStart(2, "0")} ARTICLES</span>
          </div>

          <div className={styles.grid}>
            {otherPosts.map((post) => (
              <article
                className={`${styles.card} ${styles.reveal}`}
                key={post.slug}
                style={{ transitionDelay: `${otherPosts.indexOf(post) * 140}ms` }}
              >
                <Link href={post.href} target="_blank" rel="noopener noreferrer" className={styles.cardImage}>
                  <img src={post.image} alt="" />
                  <span className={styles.cardArrow}><ArrowUpRight size={19} /></span>
                </Link>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{post.category}</span>
                    <span><CalendarDays size={13} /> {post.date}</span>
                  </div>
                  <h3><Link href={post.href} target="_blank" rel="noopener noreferrer">{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <Link className={styles.readLink} href={post.href} target="_blank" rel="noopener noreferrer">
                    READ ARTICLE <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={`${styles.bottomNote} ${styles.reveal}`}>
            <BookOpen size={20} />
            <p>Good property decisions begin with clear information and the right guidance.</p>
            <Link href="/property">EXPLORE PROPERTIES <ArrowUpRight size={16} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
