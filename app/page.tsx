// ...existing code...
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

import profilePic from "../assets/asdf.png";
import logo from "../assets/default.png";
import aby from "../assets/default3.png";
import sece from "../assets/default2.png";
import peng from "../assets/pen.png";
import fca_logo from "../assets/fca_logo.png";
import { SlSocialReddit, SlSocialLinkedin } from "react-icons/sl";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { MdOutlineBrightness2 } from "react-icons/md";
/* Skill logos */
import pythonLogo from "../assets/Python.png";
import javaLogo from "../assets/Java.png";
import tscriptLogo from "../assets/TypeScript.png";
import cLogo from "../assets/C.png";
import reactLogo from "../assets/React.png";
import bootstrapLogo from "../assets/Bootstrap.svg";
import tailwindLogo from "../assets/TailwindCSS.svg";
import fastapiLogo from "../assets/FastAPI.png";
import numpyLogo from "../assets/NumPy.png";
import pandasLogo from "../assets/Pandas.png";
import mongoLogo from "../assets/MongoDB.png";
import mysqlLogo from "../assets/MySQL.png";
import jupyterLogo from "../assets/Jupyter.png";
import insomniaLogo from "../assets/Insomnia.png";
import gitLogo from "../assets/Git.png";
import linuxLogo from "../assets/Linux.png";
import circuitLogo from "../assets/circuit_logo.png";



const IconButton = ({ children, onClick, className = "" }: any) => (
  <button onClick={onClick} className={`p-2 rounded-md ${className}`} aria-label="icon">
    {children}
  </button>
);

function ScrollReveal({ as: Component = "div", children, className = "", ...props }: any) {
  const ref = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      tabIndex={Component === "div" ? 0 : undefined}
      className={`animate-scroll ${visible ? "in-view" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

const Card = ({ children, className = "" }: any) => (
  <ScrollReveal className={`p-4 rounded-lg shadow-sm ${className}`}>
    {children}
  </ScrollReveal>
);

/* Drawer used on mobile */
function MobileSheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} aria-hidden />
      <aside
        role="dialog"
        aria-modal="true"
        className="fixed right-0 top-0 bottom-0 w-72 bg-white z-50 shadow-lg p-4 overflow-y-auto dark:bg-gray-900"
      >
        <div className="flex items-center justify-between mb-4">{children}</div>
      </aside>
      </>
  );
}

/* Theme constants (kept for reference) */
const THEME_CLASSES = {
  dark: {
    root: "bg-gray-900 text-gray-100",
    muted: "text-gray-300",
    accent: "text-amber-400",
    card: "bg-gray-800/60 border border-gray-700",
    nav: "bg-black/50 border-b border-gray-800",
    bottomNavBg: "bg-black/60",
  },
  light: {
    root: "bg-white text-gray-900",
    muted: "text-gray-600",
    accent: "text-amber-600",
    card: "bg-white border border-gray-200",
    nav: "bg-white border-b border-gray-200 text-white-100",
    bottomNavBg: "bg-white/90",
  },
};

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const t = THEME_CLASSES[theme];

  // Use matchMedia to mirror Tailwind's md breakpoint and avoid 768px edge-case
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsMobile(!mq.matches);
    handler();
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const toggleTheme = () => setTheme((s) => (s === "dark" ? "light" : "dark"));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contacts", label: "Contacts" },
  ];

  const [sheetOpen, setSheetOpen] = useState(false);

  // Use explicit conditional class strings so Tailwind picks them up reliably
  const rootClass = theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const navClass = theme === "dark" ? "bg-black/50 border-b border-gray-800" : "bg-white border-b border-gray-200";
  const accentClass = theme === "dark" ? "text-amber-400" : "text-amber-600";
  const cardClass = theme === "dark" ? "bg-gray-800/60 border border-gray-700" : "bg-white border border-gray-200";
  const mutedClass = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const bottomNavBg = theme === "dark" ? "bg-black/60" : "bg-white/90";

  return (
    <div className={`min-h-screen w-full ${rootClass}`}>
      <header className={`fixed inset-x-0 top-0 z-50 ${navClass} backdrop-blur-sm animate-fade-in-down`}>
        <nav className="max-w-5xl mx-auto flex items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            {/* use width/height on next/image to avoid fill/absolute layout surprises */}
            <Image src={logo} alt="logo" width={40} height={40} className="rounded-full object-cover" />
            <button className="font-semibold text-lg" onClick={() => scrollTo("home")}>
              Peniel
            </button>
          </div>

          <div className="ml-auto hidden md:flex items-center gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.id} className={`px-3 py-1 rounded-md hover:bg-gray-200/5 ${mutedClass}`} onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
            <IconButton onClick={toggleTheme} className="ml-1">
              <MdOutlineBrightness2 className={accentClass} size={20} />
            </IconButton>
          </div>

          {/* mobile: simple sheet trigger */}
          {/* <div className="ml-auto md:hidden">
            <Button onClick={() => setSheetOpen(true)} className="px-2 py-1">
              ☰
            </Button>
          </div> */}
        </nav>
      </header>

      <div className="h-16" />

      <main className="max-w-5xl mx-auto px-4 pb-24">
        {/* HOME */}
        <ScrollReveal as="section" id="home" className="scroll-mt-24 flex flex-col md:flex-row items-center gap-6 min-h-screen py-8">
          <div className="flex-1">
            <h1 className={`text-4xl md:text-5xl font-extrabold ${accentClass}`}>HI, I am Peniel</h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed">
              Software developer with a strong interest in solving optimization problems through well-designed computer programs
and web solutions. I work across the stack using tools like React (Next.js) for the frontend and FastAPI, Django,
NestJS, or Node.js for the backend, along with MongoDB and MySQL for data storage. Python is my primary
language, especially for building machine learning pipelines using libraries , such as pandas & NumPy, and frameworks
like scikit-learn and Langchain. I’m looking for opportunities where I can apply these skills to develop mathematical
models, tackle machine learning tasks, and contribute to LLM-driven systems and agent-based workflows.
            </p>
            <div className="mt-4 flex gap-3">
              <Button onClick={() => scrollTo("projects")}>View projects</Button>
              <Button variant="outline" onClick={() => scrollTo("skills")}>Skills</Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-zoom-in animation-delay-100">
            <Image
              src={profilePic}
              alt="Profile"
              width={isMobile ? 160 : 240}
              height={isMobile ? 160 : 240}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </ScrollReveal>

        <hr className="my-6 border-gray-700/50" />

        {/* EXPERIENCE */}
        <ScrollReveal as="section" id="experience" className="scroll-mt-24 min-h-screen py-6">
          <h2 className={`text-2xl font-bold text-center ${accentClass} mb-6`}>Experience</h2>

          <div className="grid gap-6">
            <Card className={`${cardClass} focus-zoom-out`}>
              <h3 className="text-xl text-amber-400">Junior Software Engineer — iCog-Labs</h3>
              <div className="text-sm text-gray-400 mt-1">Mar 2025 – Present • Addis Ababa</div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-lg">
                <li>Designed and modeled problem structures for QUBO-based implementations, targeting concept lattice analysis
and other pattern extraction use cases</li>
                <li>Implemented and validated QPFS models in collaboration with quantum research teams.</li>
                <li>Worked on feasibility analysis using Dirac-3 quantum hardware.</li>
              </ul>
            </Card>

            <Card className={`${cardClass} focus-zoom-out`}>
              <h3 className="text-xl text-amber-400">Machine Learning Intern — iCog-Labs</h3>
              <div className="text-sm text-gray-400 mt-1">Nov 2024 – Mar 2025 • Addis Ababa</div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-lg">
                <li>Researched optimization problems suitable for QUBO mapping.</li>
                <li>Contributed to QPFS model experiments for quantum-based feature selection.</li>
                <li>Built data-processing utilities supporting QUBO research tasks.</li>
              </ul>
            </Card>
          </div>
        </ScrollReveal>

        <hr className="my-6 border-gray-700/50" />

        {/* PROJECTS */}
        <ScrollReveal as="section" id="projects" className="scroll-mt-24 py-6">
          <h2 className={`text-2xl font-bold text-center ${accentClass} mb-6`}>Projects</h2>

          <div className="space-y-4">
          <Card className={`${cardClass} focus-zoom-out flex flex-col md:flex-row items-start gap-4`}>
              <Image src={circuitLogo} alt="Circuit" width={96} height={96} className="rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Hierarchical MARL Placer</h3>
                <p className="mt-2 text-lg">The Hierarchical MARL Chip Placement project implements a two-level Reinforcement Learning (RL) framework designed to optimize the physical placement of macros on a silicon chip. By leveraging Graph Neural Networks (GNNs) and Hierarchical Multi-Agent Reinforcement Learning (MARL) concepts, the system aims to minimize Half-Perimeter Wire Length (HPWL) and congestion while satisfying physical constraints.</p>
                <p className="mt-2 text-sm">GitHub: <a href="https://github.com/Pequanta/hierarchical-marl-chip-placement.git" className="underline">Pequanta/MARL-placer</a></p>
                <p className="mt-1 text-sm"><strong>Tools & algorithms:</strong> Reinforcement Learning, Graph Neural Network , Pytorch , PytorchGeometric, Gymansium</p>
              </div>
            </Card>

            <Card className={`${cardClass} focus-zoom-out flex flex-col md:flex-row items-start gap-4`}>
              <Image src={aby} alt="Abyssinian" width={96} height={96} className="rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Abyssinian</h3>
                <p className="mt-2 text-lg">A transformer-powered web platform with the intention of creating a corpus of chats with their emotive label with bert-transformer assisted classification</p>
                <p className="mt-2 text-sm">GitHub: <a href="https://github.com/Pequanta/Abyssinian" className="underline">Pequanta/Abyssinian</a></p>
                <p className="mt-1 text-sm"><strong>Tools:</strong> FastAPI, React, MongoDB, Transformers, Pandas</p>
             </div>
            </Card>
            <Card className={`${cardClass} focus-zoom-out flex flex-col md:flex-row items-start gap-4`}>
              <Image src={fca_logo} alt="Fca" width={90} height={90} className="rounded-full" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">FCA lib</h3>
                <p className="mt-2 text-lg">A lightweight Python library for Formal Concept Analysis (FCA), offering essential FCA tools and examples
via a simple command-line interface.</p>
                <p className="mt-2 text-sm">GitHub: <a href="https://github.com/Pequanta/fca_lib" className="underline">Pequanta/fca_lib</a></p>
                <p className="mt-1 text-sm"><strong>Tools:</strong> python, numpy , scikit, pandas, qci-client</p>
              </div>
            </Card>


            <Card className={`${cardClass} focus-zoom-out flex flex-col md:flex-row items-start gap-4`}>
              <Image src={sece} alt="SECE" width={96} height={96} className="rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">SECE — Community Platform</h3>
                <p className="mt-2 text-lg">Academic insight-sharing platform built for students and staff.</p>
                <p className="mt-2 text-sm">GitHub: <a href="https://github.com/Pequanta/communityPlatform-0.0.1" className="underline">Community Platform</a></p>
                <p className="mt-1 text-sm"><strong>Tools:</strong> Java EE, MySQL, Servlets</p>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <hr className="my-6 border-gray-700/50" />

        {/* SKILLS */}
        <ScrollReveal as="section" id="skills" className="scroll-mt-24 min-h-screen py-6">
          <h2 className={`text-2xl font-bold text-center ${accentClass} mb-6`}>Skills</h2>
          <div className="flex justify-center mb-6 animate-zoom-in animation-delay-100">
            <Card className={`${cardClass} text-center`}>
              <div className="mx-auto mt-3 w-32 h-32 relative">
                <Image src={linuxLogo} alt="Linux" width={120} height={120} />
              </div>
            </Card>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Card className={`${cardClass}`}>
              <h4 className="font-semibold">Programming Languages</h4>
              <div className="flex gap-3 flex-wrap mt-3">
                <Image src={pythonLogo} alt="Python" width={48} height={48} />
                <Image src={javaLogo} alt="Java" width={48} height={48} />
                <Image src={tscriptLogo} alt="TypeScript" width={48} height={48} />
                <Image src={cLogo} alt="C" width={48} height={48} />
              </div>
            </Card>

            <Card className={`${cardClass}`}>
              <h4 className="font-semibold">Frameworks & Libraries</h4>
              <div className="mt-3">
                <div className="text-sm text-gray-400">Frontend</div>
                <div className="flex gap-3 mt-2">
                  <Image src={reactLogo} alt="React" width={40} height={40} />
                  <Image src={bootstrapLogo} alt="Bootstrap" width={40} height={40} />
                  <Image src={tailwindLogo} alt="Tailwind" width={40} height={40} />
                </div>
                <div className="text-sm text-gray-400 mt-3">Backend & ML</div>
                <div className="flex gap-3 mt-2">
                  <Image src={fastapiLogo} alt="FastAPI" width={40} height={40} />
                  <Image src={numpyLogo} alt="NumPy" width={40} height={40} />
                  <Image src={pandasLogo} alt="Pandas" width={40} height={40} />
                </div>
              </div>
            </Card>

            <Card className={`${cardClass}`}>
              <h4 className="font-semibold">Databases & Tools</h4>
              <div className="flex gap-3 mt-3 items-center">
                <Image src={mongoLogo} alt="MongoDB" width={40} height={40} />
                <Image src={mysqlLogo} alt="MySQL" width={40} height={40} />
                <Image src={insomniaLogo} alt="Insomnia" width={40} height={40} />
                <Image src={jupyterLogo} alt="Jupyter" width={40} height={40} />
                <Image src={gitLogo} alt="Git" width={40} height={40} />
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <hr className="my-6 border-gray-700/50" />

        {/* CONTACTS */}
        <ScrollReveal as="section" id="contacts" className="scroll-mt-24 py-6 text-center">
          <h2 className={`text-2xl font-bold ${accentClass} mb-4`}>Reach Out to Me</h2>

          <div className="mx-auto w-40 mb-4 relative h-40">
            <Image src={peng} alt="penguin" fill style={{ objectFit: "contain" }} />
          </div>

          <div className="text-start text-lg space-y-1 max-w-xl mx-auto">
            <p>• Full-stack web development</p>
            <p>• Machine learning pipelines & modeling</p>
            <p>• Optimization algorithms</p>
            <p>• LLM-based systems and agents</p>
            <p>• <strong className="text-amber-400">Especially</strong> Linux</p>
          </div>

          <div className="mt-6 flex justify-center gap-6 text-2xl">
            <a href="https://www.github.com/Pequanta" aria-label="GitHub"><FaGithub className="text-info" /></a>
            <a href="https://www.linkedin.com/in/penielyohannes" aria-label="LinkedIn"><SlSocialLinkedin className="text-info" /></a>
            <a href="https://t.me/degute_r" aria-label="Telegram"><FaTelegram className="text-info" /></a>
            <a href="https://www.reddit.com/user/quantaPdegute/" aria-label="Reddit"><SlSocialReddit className="text-info" /></a>
          </div>
        </ScrollReveal>
      </main>

      {/* Mobile bottom nav */}
      {isMobile && (
        <nav className={`fixed bottom-3 left-4 right-4 z-50 rounded-xl p-2 flex justify-between items-center ${bottomNavBg} shadow-lg`}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="flex-1 text-sm font-semibold">
              {l.label}
            </button>
          ))}
        </nav>
      )}

      {/* Mobile sheet content */}
      <MobileSheet open={sheetOpen} onClose={() => setSheetOpen(false)}>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={36} height={36} className="rounded-full object-cover" />
            <div>
              <div className="font-semibold">Peniel</div>
              <div className="text-sm text-gray-500">Portfolio</div>
            </div>
          </div>

        </div>

        {/* <div className="mt-4 w-full">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  scrollTo(l.id);
                  setSheetOpen(false);
                }}
                className="text-left w-full py-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-gray-800/60 text-white-100"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <IconButton onClick={() => { toggleTheme(); }}>
              <MdOutlineBrightness2 className={accentClass} size={18} />
            </IconButton>

          </div>
        </div> */}
      </MobileSheet>
    </div>
  );
}
