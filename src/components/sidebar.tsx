"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, FolderOpen, User, Mail, Star, Linkedin, Github, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
};

const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/skills", label: "Skills", icon: Star },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/lana-duke" },
  { label: "GitHub", href: "https://github.com/lduke72" },
  { label: "Instagram", href: "https://www.instagram.com/lanalu_72/" },
];

const roles = ["Full Stack",
  "Data Engineer",
  "ML Enthusiast",
  "Product-Minded", "Matcha Lover"];

export default function Sidebar() {
  const pathname = usePathname();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        // Delete one character
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else {
        // Type one character
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-100 px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img src="/Headshot.ico" alt="Lana's headshot" className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <div className="text-lg font-semibold leading-tight">Lana</div>
          <div className="text-sm text-zinc-500 flex items-center h-5">
            <span className="inline-block min-w-[80px]">
              {displayedText}
              <span className="inline-block w-0.5 h-3.5 bg-black ml-0.5 animate-blink translate-y-0.5"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-10 space-y-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition",
                active ? "bg-black text-white" : "text-zinc-700 hover:bg-zinc-200",
              ].join(" ")}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Connect */}
      <div className="mt-10">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Connect
        </div>

        <div className="space-y-2">
          {socials.map((s) => {
            const Icon = socialIcons[s.label as keyof typeof socialIcons];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200 transition"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="hover:underline">{s.label}</span>
                </div>
                <span className="text-zinc-400">↗</span>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </aside>
  );
}