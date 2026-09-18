"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { Camera, Sparkles, X, ZoomIn } from "lucide-react";
import { GalleryItem } from "@/types";

export function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 lg:py-28 border-t-2 border-black dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            {/* Stud Bar Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-yellow-400 px-3 py-1.5 text-xs font-mono font-black text-black shadow-[3px_3px_0px_0px_#000]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-600 border border-black" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-600 border border-black" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black" />
              </div>
              <span className="ml-1 tracking-wider uppercase">DOKUMENTASI KEGIATAN</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Life at <span className="bg-red-600 text-white px-2 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#000] inline-block -rotate-1">FOSTI UMS</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
              Momen kebersamaan, riset intensif, hackathon, seminar teknologi, serta kehangatan silaturahmi seluruh anggota dan alumni lintas generasi.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 rounded-lg shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span>Klik gambar untuk memperbesar</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => {
            const studColor =
              index % 3 === 0
                ? "bg-red-500"
                : index % 3 === 1
                ? "bg-blue-600"
                : "bg-emerald-500";

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#27272a] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] dark:hover:shadow-[6px_6px_0px_0px_#52525b]"
              >
                {/* Image Viewport */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Category Stud Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md border-2 border-black bg-white px-2.5 py-1 text-[11px] font-mono font-black text-black shadow-[2px_2px_0px_0px_#000]">
                    <span className={`h-2 w-2 rounded-full border border-black ${studColor}`} />
                    <span>{item.category}</span>
                  </div>

                  {/* Zoom Icon indicator */}
                  <div className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-yellow-400 text-black shadow-[2px_2px_0px_0px_#000] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-4 text-white z-10 space-y-1">
                    <h4 className="font-black text-base sm:text-lg leading-snug tracking-tight group-hover:text-yellow-300 transition-colors drop-shadow-md">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-200 font-medium line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl border-4 border-black bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#27272a] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-black dark:border-zinc-800 bg-yellow-400 p-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-600 border border-black" />
                  <span className="h-3 w-3 rounded-full bg-blue-600 border border-black" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500 border border-black" />
                </div>
                <span className="font-mono font-black text-xs text-black uppercase tracking-wider ml-1">
                  PREVIEW DOKUMENTASI // {activeItem.category}
                </span>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-red-600 text-white shadow-[2px_2px_0px_0px_#000] hover:bg-red-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative h-80 sm:h-[480px] w-full bg-black">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 space-y-2 border-t-2 border-black dark:border-zinc-800">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-50">
                {activeItem.title}
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
