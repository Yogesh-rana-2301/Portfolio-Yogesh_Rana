"use client";

import { ProjectCard } from "@/components/project-card2";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { TableOfContents } from "@/components/table-of-contents";

const BLUR_FADE_DELAY = 0.04;

// All Projects - Add your projects here
const ALL_PROJECTS = [
  {
    title: "ChefsShell",
    href: "https://github.com/Yogesh-rana-2301/ChefsShell",
    dates: "2025 - Present",
    active: true,
    description:
      "ChefsShell is a functional command-line interpreter that supports built-in commands, process creation, command execution, and memory-optimized operation. It serves as a practical tool for Unix-like systems.",
    technologies: ["C", "Unix", "Shell"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/ChefsShell",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://chefsshell.onrender.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/chefsshell.png",
    video: "",
  },
  {
    title: "AWS EBS Stale Snapshot Cleaner",
    href: "https://github.com/Yogesh-rana-2301/AWS-EBS-Stale-Snapshot-Cleaner",
    dates: "2025 Aug - 2025 Sep",
    active: true,
    description:
      "A Python AWS Lambda function that automatically deletes stale EBS snapshots—snapshots with no active EC2 instance or volume. Built with Boto3, it helps reduce AWS costs by cleaning up unused resources.",
    technologies: ["Python", "AWS", "Boto3", "Lambda"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/AWS-EBS-Stale-Snapshot-Cleaner",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/aws-ebs.png",
    video: "",
  },
  {
    title: "EventHive",
    href: "https://github.com/Yogesh-rana-2301/EventHive",
    dates: "2025 Oct - 2025 Dec",
    active: true,
    description:
      "EventHive is the first-of-its-kind platform that combines interactive map-based event discovery with real-time community chat, designed specifically for India. We're building bridges between local communities and creating connections across the nation through immersive event experiences.",
    technologies: ["TypeScript", "NestJS", "Supabase", "Zustand", "PostgreSQL"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/EventHive",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://event-hive-sepia.vercel.app/landing_page/index.html",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/eventhive.png",
    video: "",
  },
  {
    title: "SecureCloudX - A Hybrid AES-Blockchain-ECC Storage System",
    href: "https://github.com/Yogesh-rana-2301/SecureCloudX-A-Hybrid-AES-Blockchain-ECC-Storage-System",
    dates: "2025 Nov - 2025 Dec",
    active: true,
    description:
      "A secure cloud storage backend that combines Dynamic AES-256 encryption, a custom blockchain ledger, and ECC (Elliptic Curve Cryptography) for secure key sharing.",
    technologies: ["Python", "Flask", "AES", "Blockchain", "ECC"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/SecureCloudX-A-Hybrid-AES-Blockchain-ECC-Storage-System",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://securecloudx.onrender.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/securecloudx.png",
    video: "",
  },
  {
    title: "Sleep Stage Analysis (College Project)",
    href: "https://github.com/Yogesh-rana-2301/sleep-stage-analysis",
    dates: "2025 Apr - 2025 Aug",
    active: true,
    description:
      "This project analyzes EEG data from 10 subjects—including 5 normal, 3 insomniacs, and 2 narcoleptic—sourced from the CAP Sleep Database. We focus on extracting, visualizing, and comparing sleep stage patterns using EEG signal processing and various analysis techniques.",
    technologies: ["Python", "Numpy", "Pandas", "Matplotlib", "SciPy"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/sleep-stage-analysis",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://github.com/Yogesh-rana-2301/sleep-stage-analysis",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/sleep-stage-analysis.png",
    video: "",
  },
  {
    title: "Reel-fling-game",
    href: "https://github.com/Yogesh-rana-2301/reel_fling_game",
    dates: "2025 Feb - 2025 Apr",
    active: true,
    description:
      "Reel Fling is an interactive movie guessing game built with Next.js, React, Tailwind CSS, and Supabase.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Supabase"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/reel_fling_game",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://reel-fling-game.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/reel-fling-game.png",
    video: "",
  },
  {
    title: "Pig-game",
    href: "https://github.com/Yogesh-rana-2301/PiG-Game",
    dates: "2024 Dec - 2024 Dec",
    active: true,
    description:
      "A two-player dice game where players take turns rolling and holding points. First to reach the 100 points wins! Built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/Yogesh-rana-2301/PiG-Game",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://pig-game-sigma-one.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/pig-game.png",
    video: "",
  },
];

// Open Source Contributions
const OPEN_SOURCE = [
  {
    title: "WhatsApp-analysis",
    href: "https://github.com/joyboy1812/whats-app-analysis",
    dates: "2025 - Present",
    active: true,
    description:
      "Contributing to improvements and bug fixes for the analysis of WhatsApp chat data. Helps users gain insights into their chat patterns through data visualization.",
    technologies: ["Python", "ML"],
    links: [
      {
        type: "Source",
        href: "https://github.com/joyboy1812/whats-app-analysis",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Globaleaks-whistleblowing-software",
    href: "https://github.com/globaleaks-whistleblowing-software",
    dates: "2025 - Present",
    active: true,
    description:
      "Working on enhancements and bug fixes for Globaleaks, an open-source whistleblowing software platform that enables secure and anonymous reporting.",
    technologies: ["JavaScript", "Python", "Typescript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/globaleaks/globaleaks",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];

export default function ProjectsPage() {
  const sections = [
    { id: "projects", label: "My Projects" },
    { id: "open-source", label: "Open Source" },
  ];

  return (
    <>
      <TableOfContents sections={sections} />
      <main className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <div className="space-y-12">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h1>
                <p className="text-muted-foreground text-lg max-w-[700px]">
                  A collection of personal projects I've built to explore new
                  technologies and solve real-world problems.
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {ALL_PROJECTS.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Contributions Section */}
        <section id="open-source" className="mb-24">
          <div className="space-y-12">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="flex flex-col space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Open Source Contributions
                </h2>
                <p className="text-muted-foreground text-lg max-w-[700px]">
                  Contributing to open source projects and giving back to the
                  community that has helped me grow as a developer.
                </p>
              </div>
            </BlurFade>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {OPEN_SOURCE.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
