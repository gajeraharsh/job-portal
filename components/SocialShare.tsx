"use client";

import { useEffect, useState } from 'react';
import { Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function SocialShare({ title }: { title: string }) {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-50"
      >
        <Facebook className="w-4 h-4" /> Facebook
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-50"
      >
        <Linkedin className="w-4 h-4" /> LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-50"
      >
        <Twitter className="w-4 h-4" /> Twitter
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-50"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>
    </div>
  );
}
