import { Icons } from "@/components/icons";
import {
  CodeIcon,
  HomeIcon,
  NotebookIcon,
  PenBoxIcon,
  SparklesIcon,
} from "lucide-react";

export const DATA = {
  name: "Yogesh Rana",
  initials: "YR",
  url: "https://yogeshrana.me",
  location: "Chandigarh, India",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  description:
    "A 3rd Year Computer Science student based in Chandigarh, India, who loves building clean, minimal software that actually helps people. I’ve shipped work trusted by teams across major open-source communities.",
  summary:
    "Yogesh is a Computer Science engineer based in Chandigarh. From an early age, he was fascinated by technology, and His favorite pastime was prying tech products, which he loves to do until the present days. For him, few things are more pleasuring than seeing his ideas become functional code and enter people's lives, and help people. It’s his way of shaping the future. He is captivated by the elegance of logic and its structures, the fusion of algorithms and creativity, and the endless possibilities within each line of code. He has always been driven by curiosity, eager to explore the world and immerse himself in different languages and cultures. His journey led him to study Computer Science at PEC Chandigarh, where he hones his skills and deepens his understanding of creating impactful software solutions. Since 2023, Yogesh has been living in Chandigarh, INDIA, embracing a new environment that helps him expand his cultural horizons. He spends his time immersed in coding, continuously learning and refining the skills required to excel in software development.",
  avatarUrl: "/yogesh.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: SparklesIcon, label: "Projects" },
    { href: "/blog", icon: CodeIcon, label: "Blog" },
    /*{ href: "/showcase", icon: PenBoxIcon, label: "Showcase" },*/

    { href: "/pics", icon: NotebookIcon, label: "Pics" },
  ],
  contact: {
    email: "hi.yogeshrana@gmail.com",
    tel: "+91 9896441647",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yogesh-rana-2301",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yogesh-rana-sde",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Y_Rana2004",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@SameerRana-2004",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:yogeshrana2301@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  /*
  technicalExperience: [
    {
      company: "Google DeepMind",
      href: "https://deepmind.com",
      badges: [],
      location: "Remote",
      title:
        "Open Source Software Developer\nGoogle Summer of Code Participant",
      logoUrl: "/deepmind.jpg",
      start: "May 2025",
      end: "Present",
      bullets: [
        "Engineered a scalable model evaluation platform using Python, PyTorch, and Docker, which improved benchmarking efficiency by 15% and supported parallel execution across 5+ academic test suites (e.g., MMLU, HumanEval)",
        "Designed and deployed a fully automated CI/CD pipeline with GitHub Actions to enforce 95% unit test coverage, guaranteeing reproducible, production-ready builds for a system",
      ],
    }
  ],
  */
  education: [
    {
      school: "Punjab Engineering College, Chandigarh",
      href: "https://www.pec.ac.in",
      degree:
        "Bachelor of Technology in Computing Science with Specialization in Data Science Engineering \nCGPA: 8.64/10 (Till 6th Semester)",
      logoUrl: "/pec.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Karnal International School, Haryana",
      href: "https://karnalinternationalschool.edu.in",
      degree: "12th Grade CBSE\nScored 94.4% in PCM with Computer Science",
      logoUrl: "/karnal-international-school.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Dyal Singh Public School, Karnal",
      href: "https://www.dsps7karnal.com/",
      degree: "10th Grade CBSE\nScored 97.2% Overall",
      logoUrl: "/dyal-singh-public-school.jpeg",
      start: "2019",
      end: "2020",
    },
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      issuer: "Oracle",
      href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3D96E0CAC41234EA23004FDD0C77705DEB55DFA07014CF941B7C9F86B7FA1BD5",
      logoUrl: "/oracle.png",
      date: "Oct 2025",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9152D06587AF7289853080FA5C849B134CA06459CD31CA6CAE0E1B0A32720A0B",
      logoUrl: "/oracle.png",
      date: "Oct 2025",
    },
    {
      name: "Google Level 3: Developer Essentials",
      issuer: "Google Cloud Skills Boost",
      href: "https://www.cloudskillsboost.google/public_profiles/9bc42b14-d00f-4d70-824d-27b51046acea/badges/18667047",
      logoUrl: "/gcsb.png",
      date: "Sep 2025",
    },
    {
      name: "Improving Communication Skills",
      issuer: "University of Pennsylvania",
      href: "https://www.coursera.org/account/accomplishments/records/0OXFMUCQQLSD",
      logoUrl: "/penn.png",
      date: "Oct 2025",
    },

    {
      name: "Data Structure Problem Solving",
      issuer: "Hackerrank",
      href: "https://www.hackerrank.com/certificates/fff75ae52c92",
      logoUrl: "/hackerrank.png",
      date: "Sep 2025",
    },
    {
      name: "Rest API (Intermediate)",
      issuer: "Hackerrank",
      href: "https://www.hackerrank.com/certificates/62d58e4209b8",
      logoUrl: "/hackerrank.png",
      date: "Sep 2025",
    },
    {
      name: "C++ Programming - Beginner to Advance",
      issuer: "Udemy",
      href: "https://www.udemy.com/certificate/UC-e11162b5-6a08-4ef7-ab87-51098cbc22e0/",
      logoUrl: "/udemy.png",
      date: "Aug 2025",
    },
    {
      name: "Postman API Student Expert",
      issuer: "Postman",
      href: "https://api.badgr.io/public/assertions/VJozhiVJQrOZk2nZpAlBuw",
      logoUrl: "/postman.png",
      date: "Aug 2025",
    },
  ],
  projects: [
    {
      title: "ChefsShell",
      href: "https://github.com/Yogesh-rana-2301/ChefsShell",
      dates: "2025 - Present",
      active: true,
      description:
        "ChefsShell is a functional command-line interpreter that supports built-in commands, process creation, command execution, and memory-optimized operation. It serves as  a practical tool for Unix-like systems.",
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
      dates: "2025",
      active: true,
      description:
        "EventHive is the first-of-its-kind platform that combines interactive map-based event discovery with real-time community chat, designed specifically for India. We're building bridges between local communities and creating connections across the nation through immersive event experiences.",
      technologies: [
        "TypeScript",
        "NestJS",
        "Supabase",
        "Zustand",
        "PostgreSQL",
      ],
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
  ],
  books: [
    {
      theme: "Films & Media",
      books: [
        {
          title: "Forrest Gump",
          author: "A reminder that consistency beats everything.",
          number: 1,
        },
        {
          title: "3 Idiots",
          author: "I mean who doesn't love this movie?",
          number: 2,
        },
        {
          title: "The Shawshank Redemption",
          author:
            "Patience, resilience, and long-term escape through discipline.",
          number: 3,
        },
      ],
    },
    {
      theme: "Books on Philosophy & Thought",
      books: [
        {
          title: "How to Win Friends and Influence People",
          author: "Understanding people with clarity and empathy.",
          number: 4,
        },
        {
          title: "Ikigai",
          author:
            "Building a life of purpose through small, intentional choices.",
          number: 5,
        },
        {
          title: "Atomic Habits",
          author: "The power of systems, not motivation.",
          number: 6,
        },
      ],
    },
    {
      theme: "History & Global Affairs Books",
      books: [
        {
          title: "The Second World War",
          author: "Antony Beevor",
          number: 7,
        },
        {
          title: "Understanding Global Conflict and Cooperation",
          author: "David A. Welch and Joseph S. Nye, Jr.",
          number: 8,
        },
      ],
    },
    {
      theme: "YouTube Channels",
      books: [
        {
          title: "Chris Willx",
          author:
            "Modern reflections on discipline, identity, and self-improvement.",
          number: 9,
        },
        {
          title: "MrBeast",
          author: "Just for fun, why not?",
          number: 10,
        },
        {
          title: "TEDx",
          author: "Ideas that challenge how I see the world.",
          number: 11,
        },
        {
          title: "TechWorld with Nana",
          author: "Devops God for me",
          number: 12,
        },
        {
          title: "Nikhil Kamath",
          author: "Elon's podcast was the best.",
          number: 13,
        },
      ],
    },
  ],
} as const;
