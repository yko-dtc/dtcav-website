"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { TouchEvent as ReactTouchEvent } from "react";
import { useEffect, useRef, useState } from "react";

type ProjectGalleryLightboxProps = {
  images: readonly string[];
  title: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "14%" : "-14%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-14%" : "14%",
    opacity: 0,
  }),
};

export function ProjectGalleryLightbox({ images, title }: ProjectGalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [navigationDirection, setNavigationDirection] = useState(1);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const showPrevious = () => {
    setNavigationDirection(-1);
    setSelectedIndex((current) =>
      current === null ? images.length - 1 : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setNavigationDirection(1);
    setSelectedIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, images.length]);

  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null || images.length < 2) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      showNext();
      return;
    }

    showPrevious();
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 text-left"
            onClick={() => {
              setNavigationDirection(1);
              setSelectedIndex(index);
            }}
            aria-label={`Open ${title} gallery image ${index + 1}`}
          >
            <div className="relative aspect-[1.05]">
              <Image
                src={image}
                alt={`${title} gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.02),rgba(2,6,23,0.32))] opacity-0 transition group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/92 p-3 backdrop-blur-md sm:p-5"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image viewer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.21, 1, 0.35, 1] }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white transition hover:bg-white/15 sm:right-6 sm:top-6"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image viewer"
            >
              X
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/15 sm:left-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label="Previous image"
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/15 sm:right-6"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  {">"}
                </button>
              </>
            ) : null}

            <motion.div
              className="relative w-full max-w-7xl touch-pan-y"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.24, ease: [0.21, 1, 0.35, 1] }}
            >
              <div className="relative aspect-[16/10] max-h-[94vh] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
                <AnimatePresence initial={false} custom={navigationDirection} mode="wait">
                  <motion.div
                    key={`${selectedIndex}-${images[selectedIndex]}`}
                    className="absolute inset-0"
                    custom={navigationDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={images[selectedIndex]}
                      alt={`${title} gallery image ${selectedIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) calc(100vw - 24px), (max-width: 1024px) calc(100vw - 40px), (max-width: 1536px) calc(100vw - 96px), 1280px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex items-center justify-between px-1 text-sm text-slate-300">
                <span>{title}</span>
                <span>
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
