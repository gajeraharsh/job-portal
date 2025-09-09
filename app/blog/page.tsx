'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, Folder, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts, blogCategories } from '@/lib/blog';

export default function BlogPage() {
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState<string | 'All'>('All');

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const inCat = category === 'All' ? true : p.category === category;
      const inText = term
        ? p.title.toLowerCase().includes(term.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(term.toLowerCase()) ||
          (p.tags || []).some((t) => t.toLowerCase().includes(term.toLowerCase()))
        : true;
      return inCat && inText;
    });
  }, [term, category]);

  const popular = useMemo(() => blogPosts.filter((p) => p.popular).slice(0, 5), []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Career Blog – Tips & Resources for Job Seekers</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay updated with the latest career advice, interview preparation tips, and job market insights to boost your career journey.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Search and categories */}
          <div className="bg-white border rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-3 items-stretch">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                <Button
                  variant={category === 'All' ? 'default' : 'outline'}
                  onClick={() => setCategory('All')}
                >
                  All
                </Button>
                {blogCategories.map((c) => (
                  <Button
                    key={c}
                    variant={category === c ? 'default' : 'outline'}
                    onClick={() => setCategory(c)}
                    className="whitespace-nowrap"
                  >
                    {c}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {filtered.map((p) => (
              <Card key={p.slug} className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.01] border-0 shadow-md">
                <Link href={`/blog/${p.slug}`}>
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{p.category}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors text-2xl">{p.title}</CardTitle>
                    <CardDescription className="mt-2">{p.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1"><User className="w-4 h-4" />{p.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{new Date(p.date).toLocaleDateString()}</span>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="link" className="text-blue-600 p-0">Read More <ChevronRight className="w-4 h-4 ml-1" /></Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 h-12"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Popular Posts</h3>
            <div className="space-y-4">
              {popular.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                  <div className="flex gap-3">
                    <img src={p.image} alt={p.title} className="w-20 h-16 object-cover rounded" />
                    <div>
                      <p className="font-medium group-hover:text-blue-600 transition-colors leading-snug">{p.title}</p>
                      <p className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((c) => (
                <Badge
                  key={c}
                  variant={category === c ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setCategory(c)}
                >
                  {c}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Get weekly career tips</h3>
            <p className="text-sm text-gray-600 mb-3">Join our newsletter for curated jobs and career advice.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="h-10" />
              <Button className="h-10">Subscribe</Button>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
