import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { blogs } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Blog | Bravio FSM',
  description: 'Insights, guides, and best practices for biomedical field service management, CMMS, and asset management.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.title}>Bravio Blog</h1>
            <p className={styles.subtitle}>
              Expert insights on medical equipment maintenance, field service efficiency, and ISO compliance.
            </p>
          </div>
        </section>

        <section className={styles.gridSection}>
          <div className="container">
            <div className={styles.grid}>
              {blogs.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                  <div className={styles.cardContent}>
                    <div className={styles.date}>{post.date}</div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <div className={styles.excerpt}>{post.excerpt}</div>
                    
                    <div className={styles.tags}>
                      {post.keywords.slice(0, 3).map((keyword, idx) => (
                        <span key={idx} className={styles.tag}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.readMore}>
                    Read Article <span>&rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      
      <Footer />
    </>
  );
}
