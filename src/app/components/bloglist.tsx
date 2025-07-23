'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogList() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/getallfolder')
      .then((res) => res.json())
      .then((data) => {
        setSlugs(data.slugs);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load blog folders:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id='blogs' className="p-4 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold mb-6 text-center">Blogs</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  border-pink-200">
          {slugs.map((slug, i) => (
            <motion.div
              key={slug + i}
              whileHover={{ scale: 1.1 }}
              className="rounded-xl bg-gradient-to-br from-pink-300 to-pink-600  text-white p-6 shadow-lg"
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold capitalize mb-3">{slug.replace(/[-_]/g, ' ')}</h3>
              <p className="text-sm mb-4">A short preview or summary can go here if needed.</p>
              <Link
                href={`/${slug}`}
                className="inline-block bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
