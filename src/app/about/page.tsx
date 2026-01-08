"use client";
import React, { useState } from 'react';

const skills = [
  "Python",
  "React",
  "PyTorch",
  "Hugging Face",
  "SQL",
  "Docker",
];

const carouselImages = [
  { src: "/meinspain.jpg", alt: "Me in Spain" },
  { src: "/meandbuzz.JPEG", alt: "Me and Buzz" },
  { src: "/friends1.jpg", alt: "Friends 1" },
  { src: "/sagradafamilia.jpg", alt: "Me and friend at Sagrada Familia" },
  { src: "/friends3.jpg", alt: "Friends 3" },
  { src: "/gtbasketball.jpg", alt: "GT Basketball" },
  { src: "/meoncruise.jpg", alt: "Me on Cruise" },
  { src: "/venice.jpg", alt: "Me in Venice" },
  { src: "/princeton1.jpg", alt: "Friends" },
  { src: "/stonemountain.jpg", alt: "Me in Car" },
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  // Auto-rotate every 7 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="max-w-4xl mx-auto px-4 relative md:p-8 rounded-2xl">
      <div className="absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] pointer-events-none z-0">
        <svg className="pointer-events-none absolute z-0 h-full w-full" width="100%" height="100%" viewBox="0 0 696 316" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl md:text-5xl font-medium text-gray-900 dark:text-white mt-4">
          Lana Duke
        </h1>

        <h3 className="text-sm uppercase tracking-wide text-gray-500 mt-2 mb-4">
         Software Engineer • Data & AI • Product Strategy • Travel • Music
        </h3>

        {/* Skills pills */}
        <ul className="flex flex-wrap gap-1 md:gap-2 mt-4 mb-6">
          {skills.map((skill, index) => (
            <li key={index} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
              {skill}
            </li>
          ))}
        </ul>

        {/* Who I Am section */}
        <section className="md:space-y-1">
          <h4 className="md:text-lg font-semibold">Who I Am</h4>
          <p className="text-sm leading-relaxed">
            Hey there! I'm Lana, a full-stack developer passionate about building intelligent systems that make a difference. With a background in Computer Science and Economics, along with concentrations in AI and Information Networks at Georgia Tech, I enjoy combining technical skills with strategic thinking to create impactful solutions. I recently graduated and am continuing to build projects focused on ML systems and product experimentation. 
          </p>
        </section>

        {/* What I'm Exploring */}
        <section className="mt-4 md:space-y-1">
          <h4 className="md:text-lg font-semibold">What I'm Exploring</h4>
          <p className="text-sm leading-relaxed">
           I'm exploring data engineering and applied ML systems, with a focus on NLP-driven applications. Recent projects include an AI-backed TikTok data aggregation tool and SmartBrief, a platform that centralizes financial news and enables LLM-based querying to support financial literacy and investment analysis.
           <br></br>
            <br></br>
           <i>Currently open to new grad roles in software engineering, data, product management, and quant-adjacent teams.</i>
          </p>
        </section>

         <section className="mt-8 md:space-y-1">
          <h4 className="md:text-lg font-semibold"><i>A bit of life outside of work...</i></h4>
          </section>

        {/* Photo Carousel */}
        <section className="mt-8 mb-8">
          <div className="relative max-w-2xl mx-auto flex items-center gap-4">
            {/* Previous button */}
            <button
              onClick={prevImage}
              className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main image container */}
            <div className="flex-1 flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-md">
                <img
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-gray-900' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Beyond Code section */}
        <section className="mt-4 md:space-y-1">
          <p className="text-sm leading-relaxed">
            Outside of work, I enjoy working out, running, karate, and anything to do with music — whether that's playing piano or guitar, singing karaoke, or going to concerts. I'm also an avid traveler, adrenaline junkie, and a huge foodie, so if you share any of these interests, I'm always happy to chat!
          </p> 
        </section>

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-4">
          <a href="/contact">
            <button className="rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black border border-gray-900 transition-colors duration-200 flex items-center gap-2">
              Get in Touch
            </button>
          </a>
          
          <a href="mailto:ldlulu085@gmail.com">
            <button className="group rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black border border-gray-900 transition-colors duration-200 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white group-hover:text-black transition-colors"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M22 6L12 13L2 6" />
              </svg>
              E-Mail
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}