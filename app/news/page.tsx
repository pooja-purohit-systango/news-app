'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">News Page</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id} className="border border-black dark:border-white rounded overflow-hidden">
            <Link href={`/news/${newsItem.slug}`}>
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  width={200}
                  height={150}
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-semibold mt-2 px-4">{newsItem.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
