import React, { useEffect, useRef, useState } from "react";
import "./LazyLoadGallery.style.css";
const LazyLoadGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef();
  const containerRef = useRef();

  const IMAGE_LIMIT = 500;
  const BATCH_SIZE = 10;

  // Load more images (10 at a time)
  const loadImages = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    setTimeout(() => {
      const newImages = Array.from({ length: BATCH_SIZE }, () => {
        const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        return {
          id,
          src: `https://picsum.photos/seed/${id}/600/400`,
        };
      });

      setImages((prev) => {
        const updated = [...prev, ...newImages];
        if (updated.length >= IMAGE_LIMIT) {
          setHasMore(false);
        }
        return updated;
      });

      setIsLoading(false);
    }, 800);
  };

  // Lazy load observer
  useEffect(() => {
    const imgObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            obs.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" }
    );

    const lazyImages = containerRef.current?.querySelectorAll("img[data-src]");
    lazyImages?.forEach((img) => imgObserver.observe(img));

    return () => imgObserver.disconnect();
  }, [images]);

  // Observe loader to trigger more image loads
  useEffect(() => {
    if (!hasMore) return;

    const loaderObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          loadImages();
        }
      },
      { rootMargin: "300px" }
    );

    const loader = loaderRef.current;
    if (loader) loaderObserver.observe(loader);

    return () => {
      if (loader) loaderObserver.unobserve(loader);
    };
  }, [images, hasMore]);

  // Initial load
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-title">Gallery.com</div>
      <div className="gallery" ref={containerRef}>
        {images.map((img) => (
          <img
            key={img.id}
            data-src={img.src}
            width="400"
            height="300"
            alt={`Lazy ${img.id}`}
          />
        ))}
      </div>

      {isLoading && <div className="spinner">Loading...</div>}

      {!hasMore && (
        <button className="load-more" onClick={loadImages}>
          Load More
        </button>
      )}

      {hasMore && <div ref={loaderRef} className="observer-loader"></div>}
    </div>
  );
};

export default LazyLoadGallery;
