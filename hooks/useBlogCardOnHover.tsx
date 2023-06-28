import { useEffect, useRef, useState } from "react";

export default () => {
  const [hoveredBlogIndex, setHoveredBlogIndex] = useState<number | null>(null);
  const [maxBlogCardHeight, setMaxBlogCardHeight] = useState(0);

  const blogSectionGridRef = useRef<HTMLElement>(null);
  const blogCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let h = 0;

    // Not working in small devices (phone until tablet)
    console.info(window.innerWidth, window.innerWidth < 790);
    if (window.innerWidth < 790) return;

    blogCardsRef.current.forEach((el) => {
      if (h < el.clientHeight) h = el.clientHeight;

      const blogGroups = [
        null,
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
      ];

      el.onmouseenter = () => {
        const idx = Number(el.className.match(/.*-(\d+)/)?.[1]) ?? null;
        const group = Math.ceil(idx / 3);
        const blogIdxs = blogGroups[group];

        blogIdxs?.forEach((ix) => {
          if (ix !== idx) {
            blogCardsRef.current[ix - 1].className += " blog-card-hidden";
          }
        });

        setHoveredBlogIndex(idx);
      };

      el.onmouseleave = () => {
        setHoveredBlogIndex(null);
        blogCardsRef.current.forEach(
          (el) => (el.className = el.className.replace("blog-card-hidden", ""))
        );
      };
    });

    setMaxBlogCardHeight(h);
  }, [blogCardsRef.current, blogCardsRef.current.length]);

  useEffect(() => {
    const sectionGrid = blogSectionGridRef.current;
    if (maxBlogCardHeight > 0 && sectionGrid) {
      sectionGrid.style.gridTemplateRows = `repeat(5, ${maxBlogCardHeight}px)`;
    }
  }, [maxBlogCardHeight, blogSectionGridRef.current]);

  return { blogSectionGridRef, blogCardsRef };
};
