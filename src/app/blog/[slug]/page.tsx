import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { blogs } from '@/data/blogs';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Bravio FSM',
    };
  }

  return {
    title: `${post.title} | Bravio Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Bravio Team'],
    },
  };
}

export function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <article className={styles.article}>
          <div className="container">
            <div className={styles.header}>
              <Link href="/blog" className={styles.backLink}>
                &larr; Back to Blog
              </Link>
              <div className={styles.meta}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.divider}>•</span>
                <span className={styles.author}>By Bravio Team</span>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
              
              <div className={styles.tags}>
                {post.keywords.map((keyword, idx) => (
                  <span key={idx} className={styles.tag}>{keyword}</span>
                ))}
              </div>
            </div>

            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </article>

        <section className={styles.ctaWrapper}>
          <CTABanner />
        </section>
      </main>

      <Footer />
    </>
  );
}
