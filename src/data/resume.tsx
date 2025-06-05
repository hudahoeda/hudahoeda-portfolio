import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmad Miftahul Huda",
  initials: "Hoo-Dah",
  url: "https://hudahoeda.tech",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/malang",
  description:
    "Lifelong learner who currently help other people to learn and grow.",
  summary:
    "Start working on 2023 in [Grab](https://grab.com/id) as Administration Support Specialist, and now working at [RevoU](https://revou.co) as a Jr. System Development and Automation Executive, supporting people to learn and grow.",
  avatarUrl: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741859689/huda_rcz9ds.jpg",
  skills: [
    "Python",
    "Streamlit",
    "Postgres",
    "Docker",
    "Coolify",
    "Flowise",
    "Git",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "NextJS",
    "Typescript",
    "TailwindCSS",
    "React",
    "Supabase",
    "N8N",
    "Airtable",
    "Coda",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmadmiftahulhuda@outlook.com",
    tel: { text: "+6283848491195", href: "https://wa.me/6283848491195" },
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hudahoeda",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hudahoeda/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "IG",
        url: "https://instagram.com/hudahoeda",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ahmadmiftahulhuda@outlook.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "RevoU",
      href: "https://revou.co",
      badges: [],
      location: "Remote",
      title: "Jr. System Development and Automation Executive",
      logoUrl: "https://cdn.prod.website-files.com/61af164800e38c4f53c60b4e/61af164800e38c11efc60b6d_RevoU.svg",
      start: "Jun 2024",
      end: "Present",
      description:
        "Supporting internal process to help student learning journey and growth. Built automation to help internal process and data management. Developed an AI-powered CV builder platform utilizing OpenAI Assistant API and streamlit to help students create professional resumes.",
    },
    {
      company: "Grab",
      badges: [],
      href: "https://grab.com/id",
      location: "On-Site",
      title: "Administration Support Specialist",
      logoUrl: "https://cdn.worldvectorlogo.com/logos/grab.svg",
      start: "Sep 2023",
      end: "Jun 2024",
      description:
        "Implemented automation using Python to process phone screenshots and extract information through image processing to help internal processes. Built Python-based automation tools for data processing and checking validity of internal PDF documents.",
    },
    {
      company: "PLN",
      href: "https://pln.co.id",
      badges: [],
      location: "Hybrid",
      title: "Internship",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_PLN.svg",
      start: "May 2023",
      end: "Jun 2023",
      description:
        "Architected and build pipeline to identify remote building that need access to electricity by utilizing machine learning result from Open Building Dataset and geospatial data. Able to identify 10.000+ building in Malang that need access to electricity.",
    },
],
  education: [
    {
      school: "Institut Teknologi Sepuluh Nopember",
      href: "https://its.ac.id",
      degree: "Bachelor's Degree of Engineering Physics",
      logoUrl: "https://www.its.ac.id/wp-content/uploads/2020/07/Logo-ITS-1-300x185.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Bangkit Academy",
      href: "https://grow.google/intl/id_id/bangkit/",
      degree: "Machine Learning",
      logoUrl: "https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg",
      start: "2023",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "Kalibra Resumetrics",
      href: "https://resumetrics.kalibra.onemoment.tech/",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "Developed a platform for Company to analyze the resume of the candidate and provide insights to the company using the help of AI. The platform allows company to analyze the resume and select the best candidate. The platform built using NextJS, Typescript, TailwindCSS, React, Supabase, Shadcn, Docker, and Coolify.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "OpenAI API",
        "Langchain",
        "React",
        "Supabase",
        "Shadcn",
        "Docker",
        "Coolify"
      ],
      links: [
        {
          type: "Website",
          href: "https://resumetrics.kalibra.onemoment.tech/",
          icon: <Icons.globe className="size-3" />,
        }
       ],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741858834/9445aaba-5b6b-4d42-b7f0-bee1d904e41c.png",
      video:
        "",
    },
    {
      title: "AI Interview Platform",
      href: "https://interview.mydigitalacademy.co.id",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Developed an AI-Powered Interview Platform that helps My Digital Academy select the best candidate for the job. Using NEXT.js as the front end and FastAPI as the backend. The platform allows candidates to answer questions and receive feedback from AI. The feedback then used to determine candidate's score and rank.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "React",
        "FastAPI",
        "OpenAI API",
        "Docker",
        "Coolify"
      ],
      links: [
        {
          type: "Website",
          href: "https://interview.mydigitalacademy.co.id",
          icon: <Icons.globe className="size-3" />,
        }
       ],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741858287/c6082f34-87a1-42d3-948b-5ee2219140c0.png",
      video:
        "",
    },
    {
      title: "HTML2PDF",
      href: "https://github.com/hudahoeda/html2pdf-fastapi",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Developed a platform to convert HTML to PDF using FastAPI and Python. A FastAPI-based service that converts HTML content to PDF using Selenium and Chrome headless browser. This service provides high-fidelity PDF generation with support for modern web features, custom styling, and various output options.",
      technologies: [
        "FastAPI",
        "Python",
        "Chromium",
        "Selenium",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hudahoeda/html2pdf-fastapi",
          icon: <Icons.github className="size-3" />,
        }
       ],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741860440/0dc36c77-3c30-4ff9-bedb-56068d4d8d40.png",
      video:
        "",
    },
    {
      title: "Certificate Verification Platform",
      href: "https://certificates.revou.tech",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Developed a platform to verify the authenticity of certificates issued by RevoU. The platform allows verification through certificate ID and name lookup. The dashboard displays comprehensive student scores and tracks the verification process status, providing insights into certificate authenticity and academic performance.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "React",
        "Supabase",
        "Shadcn",
        "Docker",
        "Coolify"
      ],
      links: [
        {
          type: "Website",
          href: "https://certificates.revou.tech",
          icon: <Icons.globe className="size-3" />,
        }
       ],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741860045/73daa645-f952-480d-b592-328ea07adc3e.png",
      video:
        "",
    },
    {
      title: "Revo AI Coach",
      href: "https://ai.revou.tech",
      dates: "Jul 2024 - Present",
      active: true,
      description:
        "An AI-powered career development platform with specialized AI agents for resume building, career guidance, and personal branding. The platform helps students optimize their job applications and develop professional skills through tailored feedback from each AI agent.",
      technologies: [
        "Streamlit",
        "Airtable",
        "OpenAI Assistant API",
        "Docker",
        "Coolify"
      ],
      links: [
        {
          type: "Website",
          href: "https://ai.revou.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hudahoeda/revou-ai-coach",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dx3b3otna/video/upload/v1741860121/RevoAI_20Coach_yjfb1i.mp4",
    },
    {
      title: "DALA (Data Analytics Learning Assistant)",
      href: "https://dala.revou.tech",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "A data analytics and learning assistant that helps students to learn and grow. Developed using Flowise as Backend and Streamlit as the front end, student can chat to the AI Agent to help them to learn and grow.",
      technologies: [
        "Flowise",
        "Streamlit",
        "OpenAI API",
        "Langfuse",
        "Docker",
        "Coolify"
      ],
      links: [
        {
          type: "Website",
          href: "https://dala.revou.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hudahoeda/data-assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dx3b3otna/video/upload/v1741860175/DALA.mp4_oyfnd4.mp4",
    },
    {
      title: "RevoU Job Tracker",
      href: "https://revou-job-tracker.softr.app/",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Developed a job tracker for RevoU students to help them to track their job application process. Beside the main feature, also the develop the automation to aggregate job application data from various sources and provide insights to the students email reminder using N8N.",
      technologies: [
        "Softr",
        "Airtable",
        "N8N",
      ],
      links: [
        {
          type: "Website",
          href: "https://revou-job-tracker.softr.app/",
          icon: <Icons.globe className="size-3" />,
        }
       ],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741860201/Job_20Tracker.png_oghxew.png",
      video: "",
    },
    {
      title: "RAG Pipeline",
      href: "",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Built a document processing pipeline that converts internal documents (PDF, DOCX, PPTX, TXT) into vector embeddings for storage in a vector database. This enables AI assistants to accurately retrieve and reference information from our internal knowledge base when responding to queries using Retrieval Augmented Generation (RAG).",
      technologies: [
        "Pinecone",
        "Flowise",
        "N8N",
        "Python",
        "OpenAI API",
        "Docling"
      ],
      links: [],
      image: "https://res.cloudinary.com/dx3b3otna/image/upload/v1741860232/n8n_20logo.jpg_sly4ey.jpg",
      video:
        "",
    }
  ]
} as const;
