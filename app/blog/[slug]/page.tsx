import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import AdBanner from '@/components/AdBanner';
import SocialShare from '@/components/SocialShare';
import { formatDate } from '@/lib/utils';

interface Params { slug: string }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post not found' };
  const description = post.excerpt.slice(0, 155);
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      images: [{ url: post.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
            {post.readTime ? <span>{post.readTime} min read</span> : null}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        </header>

        <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-lg mb-6" />

        {/* In-article Ad after first paragraph */}
        <div className="my-6"><AdBanner /></div>

        <div className="prose prose-lg max-w-none prose-headings:mt-8 prose-p:text-gray-700">
          {post.content.map((block, idx) => {
            if (block.type === 'p') return <p key={idx}>{block.text}</p>;
            if (block.type === 'h2') return <h2 key={idx}>{block.text}</h2>;
            if (block.type === 'h3') return <h3 key={idx}>{block.text}</h3>;
            if (block.type === 'ul') return (
              <ul key={idx}>
                {block.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            );
            return null;
          })}
        </div>

        {/* Middle Ad */}
        <div className="my-8"><AdBanner /></div>

        <div className="mt-10 p-5 border rounded-lg bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900">Explore the latest jobs</h3>
            <p className="text-sm text-gray-600">Find roles matched to your skills and interests.</p>
          </div>
          <Link href="/jobs"><Button>Browse Jobs</Button></Link>
        </div>

        {/* End Ad */}
        <div className="my-8"><AdBanner /></div>

        <section className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">Share this article</h4>
          <SocialShare title={post.title} />
        </section>

        <div className="mt-10">
          <h4 className="font-semibold text-gray-900 mb-4">Related Articles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug && (p.category === post.category || (p.tags || []).some((t) => (post.tags || []).includes(t))))
              .slice(0, 4)
              .map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex gap-3">
                    <img src={rel.image} alt={rel.title} className="w-24 h-16 object-cover rounded" />
                    <div>
                      <p className="font-medium hover:text-blue-600">{rel.title}</p>
                      <p className="text-xs text-gray-500">{formatDate(rel.date)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
