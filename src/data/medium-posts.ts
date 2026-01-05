export interface MediumPost {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  isExternal?: boolean;
}

export const mediumPosts: MediumPost[] = [
  {
    title:
      "How I Built a Multiplayer Guessing Game Using React, Supabase & Next.js",
    url: "https://medium.com/@yogeshrana2301/how-i-built-a-multiplayer-guessing-game-using-react-supabase-next-js-a39a94c7825a",
    publishedAt: "2025-04-12",
    summary:
      "A step-by-step guide on creating a real-time multiplayer guessing game with React, Supabase, and Next.js, covering setup, authentication, and game logic.",
    tags: ["React", "Supabase", "Next.js", "Guide"],
    isExternal: true,
  },
  {
    title: "India’s Cosmic Journey : The ISRO Analytics Dashboard",
    url: "https://medium.com/@yogeshrana2301/indias-cosmic-journey-the-isro-analytics-dashboard-eb5a00dcba06",
    publishedAt: "2025-07-28",
    summary:
      "An in-depth analysis of ISRO's remarkable achievements in space exploration, presented through an interactive analytics dashboard.",
    tags: ["India", "Space", "Technology", "Analysis"],
    isExternal: true,
  },
];

export function getMediumPosts(): MediumPost[] {
  return mediumPosts;
}
