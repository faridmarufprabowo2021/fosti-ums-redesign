import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogsData, getBlogBySlug } from "@/data/blogs";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowLeft,
  Share2,
  Quote,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Artikel Tidak Ditemukan - FOSTI UMS",
    };
  }

  return {
    title: `${blog.title} | FOSTI UMS`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.datePublish,
      authors: [blog.author],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 selection:bg-red-500 selection:text-white dark:bg-[#09090b] dark:text-zinc-100">
      <Navbar />

      <main className="flex-1">
        {/* Article Header & Breadcrumbs */}
        <article className="border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-600 dark:text-zinc-400">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400">
                HOME
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/blogs" className="hover:text-red-600 dark:hover:text-red-400">
                BLOGS
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-red-600 dark:text-red-400 font-black truncate max-w-xs">
                {blog.slug}
              </span>
            </nav>

            {/* Stud Decorative Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-yellow-400 px-3 py-1 text-xs font-mono font-black text-black shadow-[3px_3px_0px_0px_#000] mb-4">
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-600 border border-black" />
                <span className="h-2 w-2 rounded-full bg-blue-600 border border-black" />
                <span className="h-2 w-2 rounded-full bg-emerald-500 border border-black" />
              </div>
              <span className="ml-1 uppercase">WARTA RESMI FOSTI UMS</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b-2 border-black dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black bg-red-600 text-white shadow-[2px_2px_0px_0px_#000]">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900 dark:text-white">
                    {blog.author}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {blog.authorRole || "Kontributor Warta FOSTI"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>{blog.datePublish}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-red-600" />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border-2 border-black bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-mono font-black uppercase text-zinc-900 dark:text-zinc-100 shadow-[2px_2px_0px_0px_#000]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Featured Hero Image & Article Content */}
        <div className="py-12 bg-zinc-50 dark:bg-[#09090b]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Featured Image Frame */}
            {blog.image && (
              <div className="relative h-72 sm:h-96 lg:h-[460px] w-full rounded-2xl border-4 border-black dark:border-zinc-700 overflow-hidden bg-zinc-200 dark:bg-zinc-800 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#3f3f46]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            )}

            {/* Lead Summary Callout */}
            <div className="rounded-2xl border-3 border-black dark:border-zinc-700 bg-yellow-300 dark:bg-yellow-400/90 text-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>IKHTISAR UTAMA</span>
              </div>
              <p className="text-base sm:text-lg font-bold leading-relaxed">
                {blog.description}
              </p>
            </div>

            {/* Main Article Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull-quotes Box */}
            {blog.quotes && blog.quotes.length > 0 && (
              <div className="space-y-6 pt-4">
                {blog.quotes.map((quote, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl border-4 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#27272a]"
                  >
                    <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-mono text-xs font-black uppercase">
                      <Quote className="h-5 w-5 flex-shrink-0" />
                      <span>PERNYATAAN RESMI // KUTIPAN</span>
                    </div>

                    <blockquote className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white italic leading-relaxed">
                      &ldquo;{quote.text}&rdquo;
                    </blockquote>

                    <div className="mt-4 pt-3 border-t-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        {quote.author}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {quote.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Article Footer Actions */}
            <div className="pt-8 border-t-2 border-black dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white dark:bg-zinc-800 px-5 py-2.5 text-xs font-black text-zinc-900 dark:text-zinc-100 shadow-[3px_3px_0px_0px_#000] hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#000] transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>KEMBALI KE SEMUA ARTIKEL</span>
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-zinc-500">
                  BAGIKAN WARTA:
                </span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} - Baca di: https://fostiums.org/blogs/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-black bg-emerald-500 p-2 text-white shadow-[2px_2px_0px_0px_#000] hover:bg-emerald-400 hover:translate-x-0.5 hover:translate-y-0.5"
                  title="Bagikan ke WhatsApp"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 bg-white dark:bg-zinc-950 border-t-2 border-black dark:border-zinc-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between pb-6 border-b-2 border-black dark:border-zinc-800">
                <div className="space-y-1">
                  <span className="font-mono text-xs font-black text-red-600 dark:text-red-400 uppercase">
                    BACAAN LAINNYA
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white">
                    Artikel Terkait & Rekomendasi
                  </h3>
                </div>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogs/${rel.slug}`}
                    className="group flex flex-col rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all"
                  >
                    {rel.image && (
                      <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-800 border-b-2 border-black dark:border-zinc-800">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-1 flex-col justify-between space-y-2">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[11px] text-zinc-500">
                          {rel.datePublish}
                        </span>
                        <h4 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-black text-red-600 flex items-center gap-1 pt-2">
                        <span>BACA</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
