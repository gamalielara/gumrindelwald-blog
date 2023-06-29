import { useEffect, useRef, useState } from "react";
import { BLOG_CARDS_COUNT, LG_SCREEN_WIDTH } from "../utils/vars";

export default () => {
  const [hoveredBlogIndex, setHoveredBlogIndex] = useState<number | null>(null);
  const [maxBlogCardHeight, setMaxBlogCardHeight] = useState(0);

  const blogSectionGridRef = useRef<HTMLElement>(null);
  const blogCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let h = 0;

    // Not working in small devices (phone until tablet)
    if (window.innerWidth < 768) return;

    blogCardsRef.current.forEach((el) => {
      if (h < el.clientHeight) h = el.clientHeight;

      const blogGroups: number[][] = [];
      const columnCount = window.innerWidth >= LG_SCREEN_WIDTH ? 3 : 2;

      // Add one because the index always start from 0 to the length - 1
      [...Array(BLOG_CARDS_COUNT + 1).keys()].forEach((e) => {
        if (!blogGroups[Math.ceil(e / columnCount)]) {
          blogGroups[Math.ceil(e / columnCount)] = [];
        }

        blogGroups[Math.ceil(e / columnCount)].push(e);
      });

      el.onmouseenter = () => {
        const idx = Number(el.className.match(/.*-(\d+)/)?.[1]);
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
      sectionGrid.style.gridTemplateRows = `repeat(${Math.ceil(
        blogCardsRef.current.length / 3
      )}, ${maxBlogCardHeight}px)`;
    }
  }, [maxBlogCardHeight, blogSectionGridRef.current]);

  return { blogSectionGridRef, blogCardsRef };
};
