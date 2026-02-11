"use client";

import { useState, useEffect } from "react";
import { ANIMATION } from "@/lib/constants";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolledToTop(currentScrollY < ANIMATION.navScrollThreshold);

      if (currentScrollY > lastScrollY && currentScrollY > ANIMATION.navHeight) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollDirection, scrolledToTop };
}
