"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogsData } from "@/data/blogs";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  ChevronRight,
  User,
  Quote,
} from "lucide-react";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("ALL");

  const tags = [
    { label: "Semua", val: "ALL" },
    { label: "Prestasi", val: "achievement" },
    { label: "Program Kerja", val: "program" },
    { label: "Riset & Tech", val: "ristek" },
    { label: "Inovasi Global", val: "international" },
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesTag =
      selectedTag === "ALL" || blog.tags.includes(selectedTag);
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredPost = blogsData[0];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-red-500 selection:text-white dark:bg-[#09090b] dark:text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* 1. Page Header & Breadcrumb */}
        <section className="relative overflow-hidden border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400">
                HOME
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-red-600 dark:text-red-400 font-black">BLOGS</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-4">
                {/* Stud Header Badge */}
                <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-yellow-400 px-3 py-1.5 text-xs font-mono font-black text-black shadow-[3px_3px_0px_0px_#000]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-600 border border-black" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600 border border-black" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black" />
                  </div>
                  <span className="ml-1 tracking-wider uppercase">JOURNAL & WARTA RESMI</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Warta & Liputan <span className="bg-red-600 text-white px-3 py-0.5 border-2 border-black shadow-[4px_4px_0px_0px_#000] inline-block -rotate-1">FOSTI UMS</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                  Dokumentasi resmi pencapaian kompetisi internasional, rilis program kerja riset, edukasi pemrograman open source, dan kabar komunitas mahasiswa Teknik Informatika.
                </p>
              </div>

              {/* Search Box */}
              <div className="w-full lg:w-80">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari artikel, nama penulis..."
                    className="w-full rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 pl-11 text-sm font-medium text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-500" />
                </div>
              </div>
            </div>

            {/* Tag Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.val}
                  type="button"
                  onClick={() => setSelectedTag(tag.val)}
                  className={`rounded-lg border-2 border-black px-4 py-1.5 text-xs font-mono font-black transition-all ${
                    selectedTag === tag.val
                      ? "bg-red-600 text-white shadow-[3px_3px_0px_0px_#000] translate-x-0.5 translate-y-0.5"
                      : "bg-white text-zinc-800 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 shadow-[2px_2px_0px_0px_#000]"
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Featured Article Banner */}
        {selectedTag === "ALL" && !searchQuery && featuredPost && (
          <section className="py-12 bg-zinc-100 dark:bg-zinc-900/50 border-b-2 border-black dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-xs font-black uppercase text-red-600 dark:text-red-400 tracking-wider">
                  ★ ARTIKEL PILIHAN UTAMA
                </span>
              </div>

              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-2xl border-4 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#3f3f46] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all"
              >
                {/* Image */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[300px] w-full bg-zinc-100 dark:bg-zinc-800 border-b-2 lg:border-b-0 lg:border-r-2 border-black dark:border-zinc-800">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-md border border-black bg-yellow-400 px-3 py-1 text-xs font-mono font-black uppercase text-black shadow-[2px_2px_0px_0px_#000]">
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-blue-600" />
                        <span>{featuredPost.datePublish}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-red-600" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed line-clamp-3">
                      {featuredPost.description}
                    </p>

                    {featuredPost.quotes && featuredPost.quotes.length > 0 && (
                      <div className="rounded-xl border-2 border-black bg-yellow-100 dark:bg-yellow-950/40 p-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 italic space-y-1">
                        <div className="flex items-center gap-1 text-yellow-600 font-bold">
                          <Quote className="h-3.5 w-3.5" />
                          <span>Kutipan:</span>
                        </div>
                        <p>&ldquo;{featuredPost.quotes[0].text}&rdquo;</p>
                        <span className="block font-bold not-italic text-zinc-700 dark:text-zinc-300 font-mono text-[11px] pt-1">
                          — {featuredPost.quotes[0].author} ({featuredPost.quotes[0].role})
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{featuredPost.author}</span>
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-red-600 px-4 py-2 text-xs font-black text-white shadow-[2px_2px_0px_0px_#000] group-hover:bg-red-500">
                      <span>BACA SELENGKAPNYA</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* 3. Grid of All Filtered Articles */}
        <section className="py-16 lg:py-24 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-6 border-b-2 border-black dark:border-zinc-800">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white">
                Daftar Artikel ({filteredBlogs.length})
              </h2>
              <span className="font-mono text-xs text-zinc-500 font-bold">
                FORMAT: NEXT.JS STATIC EXPORT
              </span>
            </div>

            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="text-lg font-bold text-zinc-500">
                  Tidak ditemukan artikel yang sesuai dengan kriteria pencarian &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag("ALL");
                  }}
                  className="rounded-lg border-2 border-black bg-yellow-400 px-4 py-2 font-mono text-xs font-black"
                >
                  RESET PENCARIAN
                </button>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
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

                      <div className="pt-4 border-t-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
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
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
