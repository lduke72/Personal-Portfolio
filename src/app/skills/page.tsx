"use client";

import React, { useState } from 'react';

const skills = [
  // Languages
  {
    name: "Python",
    category: "Language",
    icon: "🐍",
    color: "bg-yellow-100",
    customIconPath: "./Python-logo.png"
  },
  {
    name: "SQL",
    category: "Language",
    icon: "🗄️",
    color: "bg-blue-100",
    customIconPath: "./sql-logo.png"
  },
  {
    name: "Java",
    category: "Language",
    icon: "☕",
    color: "bg-red-100",
    customIconPath: "./java-logo.png"
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "🟨",
    color: "bg-yellow-100",
    customIconPath: "./javascript-logo.png"
  },
  {
    name: "R",
    category: "Language",
    icon: "📊",
    color: "bg-indigo-100",
    customIconPath: "./r-logo.png"
  },
  {
    name: "C / C++",
    category: "Language",
    icon: "⚙️",
    color: "bg-gray-200",
    customIconPath: "./c-logo.png"
  },

  // Machine Learning & Data
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    icon: "📦",
    color: "bg-orange-100",
    customIconPath: "./scikit-logo.png"
  },
  {
    name: "PyTorch",
    category: "Machine Learning",
    icon: "🔥",
    color: "bg-red-100",
    customIconPath: "./pytorch-logo.png"
  },
  {
    name: "Pandas",
    category: "Data Analysis",
    icon: "🐼",
    color: "bg-gray-100",
    customIconPath: "./pandas-icon-logo.png"
  },
  {
    name: "NumPy",
    category: "Data Analysis",
    icon: "🔢",
    color: "bg-blue-100",
    customIconPath: "./numpy-logo.png"
  },

  // NLP / AI
  {
    name: "Hugging Face Transformers",
    category: "NLP",
    icon: "🤗",
    color: "bg-yellow-100",
    customIconPath: "./hugging-face-logo.png"
  },
  {
    name: "Transformer Architectures",
    category: "NLP",
    icon: "🧠",
    color: "bg-purple-100",
    customIconPath: "./transformer-logo.png"
  },
  {
    name: "LLM Inference",
    category: "NLP",
    icon: "⚡",
    color: "bg-indigo-100",
    customIconPath: "./llm-logo.png"
  },

  // Web & Frontend
  {
    name: "React",
    category: "Web",
    icon: "⚛️",
    color: "bg-blue-100",
    customIconPath: "./react-logo.png"
  },
  {
    name: "Next.js",
    category: "Web",
    icon: "▲",
    color: "bg-gray-100",
    customIconPath: "./next-js-logo.png"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "💨",
    color: "bg-cyan-100",
    customIconPath: "./tailwind-css-logo.png"
  },
  {
    name: "HTML / CSS",
    category: "Web",
    icon: "🌐",
    color: "bg-gray-100",
    customIconPath: "./html-logo.png"
  },

  // Analytics & Visualization
  {
    name: "Tableau",
    category: "Data Visualization",
    icon: "📉",
    color: "bg-blue-100",
    customIconPath: "./tableau-logo.png"
  },
  {
    name: "Alteryx",
    category: "Analytics",
    icon: "🧩",
    color: "bg-teal-100",
    customIconPath: "./alteryx-logo.png"
  },
  {
    name: "Excel",
    category: "Analytics",
    icon: "📘",
    color: "bg-green-100",
    customIconPath: "./excel-logo.png"
  },

  // Tools & Workflow
  {
    name: "Firebase",
    category: "Backend / Platform",
    icon: "🔥",
    color: "bg-orange-100",
    customIconPath: "./firebase-logo.png"
  },
  {
    name: "Git / GitHub",
    category: "Version Control",
    icon: "🐙",
    color: "bg-orange-100",
    customIconPath: "./git-logo.png"
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: "🐳",
    color: "bg-blue-100",
    customIconPath: "./docker-logo.png"

  },
  {
    name: "Jira",
    category: "Project Management",
    icon: "📋",
    color: "bg-blue-100",
    customIconPath: "./jira-logo.png"

  },
  {
    name: "VS Code",
    category: "Developer Tools",
    icon: "🧠",
    color: "bg-indigo-100",
    customIconPath: "./vscode-logo.png"
  },
  {
    name: "IntelliJ",
    category: "Developer Tools",
    icon: "💡",
    color: "bg-red-100",
    customIconPath: "./intellij-logo.png"
  }
];

type Skill = typeof skills[0] & { customIconPath?: string };

function SkillCard({ skill }: { skill: Skill }) {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [transform, setTransform] = useState('');
  const [shadow, setShadow] = useState('');
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance < 150) {
      const strength = 1 - distance / 150;
      const moveDistance = 30 * strength;
      const angle = Math.atan2(deltaY, deltaX);
      const moveX = -Math.cos(angle) * moveDistance;
      const moveY = -Math.sin(angle) * moveDistance;
      setTransform(`translate(${moveX}px, ${moveY}px)`);
      
      // Shadow moves in opposite direction (towards the cursor)
      const shadowX = Math.cos(angle) * moveDistance * 0.5;
      const shadowY = Math.sin(angle) * moveDistance * 0.5;
      setShadow(`${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.15)`);
    } else {
      setTransform('');
      setShadow('0px 4px 12px rgba(0, 0, 0, 0.1)');
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Determine which image path to use
  const getImagePath = () => {
    if (skill.customIconPath) {
      return skill.customIconPath;
    }
    return `/images/tools/${skill.name.toLowerCase().replace(/\s+/g, '-')}-optimized.webp`;
  };

  return (
    <div className="perspective-distant transform-3d">
      <div 
        ref={cardRef}
        className="relative rounded-2xl transition-all duration-200 ease-out" 
        style={{
          boxShadow: shadow || '0px 4px 12px rgba(0, 0, 0, 0.1)',
          transform: transform
        }}
      >
        <div className="flex cursor-pointer flex-row items-center justify-start space-y-2 p-2 sm:p-3 rounded-md gap-3 border border-gray-300 hover:border-gray-100 dark:border-gray-800 dark:hover:border-white dark:hover:bg-gray-700 hover:bg-gray-100 dark:hover:bg-charleston">
          {/* Icon */}
          {imageLoaded ? (
            <img
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-md object-cover"
              src={getImagePath()}
              alt={skill.name}
              onError={() => setImageLoaded(false)}
            />
          ) : (
            <div className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center text-2xl ${skill.color} rounded-md`}>
              {skill.icon}
            </div>
          )}

          {/* Text */}
          <div>
            <h1 className="text-md text-gray-900 dark:text-white sm:text-lg">
              {skill.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {skill.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 relative md:p-8 rounded-2xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-5xl font-medium text-gray-900 dark:text-white">
          Skills
        </h1>
        <h3 className="text-lg text-gray-600 md:mt-4">
          Technologies and tools I&apos;ve worked with.
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="text-sm pt-6 grid grid-cols-3 gap-4 sm:gap-6 md:gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}