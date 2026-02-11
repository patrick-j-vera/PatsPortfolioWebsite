// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

// Animation timings
export const ANIMATION = {
  staggerChildren: 0.15,
  delayChildren: 0.6,
  scrollStagger: 0.1,
  duration: 0.5,
  fadeUpDistance: 20,
  navHeight: 80,
  navScrollThreshold: 50,
} as const;

// Section IDs
export const SECTION_IDS = {
  hero: "hero",
  myStory: "my-story",
  impact: "impact",
  initiatives: "initiatives",
  contributions: "contributions",
  connect: "connect",
} as const;
