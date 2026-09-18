"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react";

export function BlogSection() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const tagTabs = [
    { label: "Semua Kategori", val: "ALL" },
    { label: "Prestasi", val: "achievement" },
    { label: "Program Kerja", val: "program" },
    { label: "Ristek", val: "ristek" },
  ];

  const filteredBlogs = blogsData.filter(
    (b) => selectedTag === "ALL" || b.tags.includes(selectedTag)
  );

  return (
    <section className="py-20 lg:py-28 border-t-2 border-black dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-emerald-500 px-3 py-1.5 text-xs font-mono font-black text-white shadow-[3px_3px_0px_0px_#000]">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="tracking-wider uppercase">FOSTI JOURNAL & WARTA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Artikel & <span className="bg-blue-600 text-white px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block -rotate-1">Warta Terbaru</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
              Liputan capaian kompetisi, publikasi kegiatan edukasi pemrograman, serta dokumentasi riset teknologi mahasiswa.
            </p>
          </div>

          {/* Tag Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {tagTabs.map((t) => (
              <button
                key={t.val}
                type="button"
                onClick={() => setSelectedTag(t.val)}
                className={`rounded-lg border-2 border-black px-3.5 py-1.5 text-xs font-mono font-black transition-all ${
                  selectedTag === t.val
                    ? "bg-yellow-400 text-black shadow-[3px_3px_0px_0px_#000] translate-x-0.5 translate-y-0.5"
                    : "bg-white text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 shadow-[2px_2px_0px_0px_#000]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, idx) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#52525b]"
            >
              {/* Blog Image */}
              {blog.image && (
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b-2 border-black dark:border-zinc-800">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-black bg-yellow-400 px-2 py-0.5 text-[10px] font-mono font-black uppercase text-black shadow-[1px_1px_0px_0px_#000]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Blog Content */}
              <div className="flex flex-1 flex-col p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-blue-600" />
                    <span>{blog.datePublish}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-red-600" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-zinc-50 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium line-clamp-3 flex-1">
                  {blog.description}
                </p>

                <div className="pt-4 border-t-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5 font-bold font-mono">
                    <User className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{blog.author}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono font-black text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                    <span>BACA</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-yellow-400 px-6 py-3 text-sm font-black text-black shadow-[4px_4px_0px_0px_#000] hover:bg-yellow-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all"
          >
            <span>JELAJAHI ARSIP BLOG LENGKAP</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
