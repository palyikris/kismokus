"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

export default function GalleryClient({ images = [] }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const open = (i) => setOpenIndex(i);
  const close = () => setOpenIndex(-1);
  const prev = () => setOpenIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setOpenIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    function onKey(e) {
      if (openIndex === -1) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  function spanForIndex(idx) {
    const sizes = [1, 2, 3];
    const heights = [1, 2];
    const w = sizes[idx % sizes.length];
    const h = heights[(idx + Math.floor(idx / 3)) % heights.length];
    return { gridColumnEnd: `span ${w}`, gridRowEnd: `span ${h}` };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {images.map((src, idx) => {
          // consider the top images as higher priority so they load earlier
          const priorityCount = 8; // first N images load with priority
          const isPriority = idx < priorityCount;
          return (
            <button
              key={`${src}-${idx}`}
              className={styles.item}
              style={spanForIndex(idx)}
              onClick={() => open(idx)}
              aria-label={`Open image ${idx + 1}`}
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 16.6vw"
                style={{ objectFit: "cover" }}
                priority={isPriority}
                unoptimized
              />
            </button>
          );
        })}
      </div>

      {openIndex >= 0 && (
        <div className={styles.lightbox} role="dialog" aria-modal="true">
          <div className={styles.lightboxInner} onClick={close} />
          <button className={styles.close} onClick={close} aria-label="Close">
            ×
          </button>
          <button className={styles.prev} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            ‹
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[openIndex]}
              alt={`Image ${openIndex + 1}`}
              width={1200}
              height={900}
              style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              priority
              unoptimized
            />
            <div className={styles.caption} style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              color: "black"
            }}>{`${openIndex + 1} / ${images.length}`}</div>
          </div>
          <button className={styles.next} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </div>
  );
}
