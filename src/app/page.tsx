'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [resumeDownloaded, setResumeDownloaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [raindrops, setRaindrops] = useState<Array<{id: number, left: number, duration: number}>>([]);

  useEffect(() => {
    // Mark animation as complete after 2 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Generate random raindrops
    const generateRaindrop = () => {
      const id = Math.random();
      const left = Math.random() * 100; // Random position from 0-100%
      const duration = 1.5 + Math.random() * 1; // 1.5-2.5 seconds fall time (faster)
      
      setRaindrops(prev => [...prev, { id, left, duration }]);
      
      // Remove raindrop after animation completes (including splash duration)
      setTimeout(() => {
        setRaindrops(prev => prev.filter(drop => drop.id !== id));
      }, (duration + 1.5) * 1000); // Reduced to 1.5 seconds for splash
    };

    // Generate raindrops at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance each interval
        generateRaindrop();
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full relative w-full overflow-hidden min-h-full">
      {/* Raindrops */}
      {raindrops.map(drop => (
        <div key={drop.id}>
          <div
            className="absolute top-20 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent pointer-events-none"
            style={{
              left: `${drop.left}%`,
              animation: `fall ${drop.duration}s linear forwards`,
              height: '56px'
            }}
          />
          {/* Impact glow at bottom - more subtle */}
          <div
            className="absolute w-8 h-2 bg-indigo-300 rounded-full pointer-events-none blur-sm"
            style={{
              left: `${drop.left}%`,
              bottom: '0',
              transform: `translateX(-50%)`,
              animation: `impactGlow ${drop.duration}s ease-out forwards`
            }}
          />
          
          {/* Splash container */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${drop.left}%`,
              bottom: '0',
              transform: `translateX(-50%)`
            }}
          >
            {/* Multiple splash particles spreading upward and outward - densely packed */}
            {Array.from({ length: 40 }).map((_, i) => {
              // Create random variations for each particle
              const randomX = (Math.random() - 0.5) * 40; // -20px to +20px
              const randomY = -15 - Math.random() * 25; // -15px to -40px upward
              const size = 1 + Math.random() * 1.5; // 1px to 2.5px
              const delay = Math.random() * 0.05; // Small random delay
              
              return (
                <span
                  key={i}
                  className="absolute rounded-full bg-indigo-400"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    animation: `splashParticleFill 1.5s ${drop.duration - 0.7 + delay}s ease-out forwards`,
                    '--target-x': `${randomX}px`,
                    '--target-y': `${randomY}px`
                  } as React.CSSProperties}
                />
              );
            })}
          </div>
        </div>
      ))}

      <div className="mx-auto max-w-3xl px-6 md:-translate-x-8">
        {/* Main heading with photo on right */}
        {/* Commented out headshot - can restore later
        <div className="md:float-right md:ml-6 md:mb-4 flex justify-center md:justify-end mb-6 md:mb-0">
          <div 
            className="profile-image w-48 h-48 md:w-64 md:h-64"
            style={{
              backgroundImage: 'url(/Headshot.ico)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              boxShadow: 'inset 0 0 0 9px rgb(255 255 255 / 30%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'profile__animate 8s ease-in-out infinite'
            }}
          />
        </div>
        */}
        
        {/* Tech Tower grad photo on right */}
        <div className="md:float-right md:-ml-24 md:mb-4 flex justify-center md:justify-end mb-6 md:mb-0 translate-x-32">
          <img 
            src="/techtower-grad.jpg" 
            alt="Georgia Tech Tech Tower Graduation"
            className="w-64 h-80 md:w-100 md:h-[34rem] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold leading-tight text-gray-900 sm:text-6xl whitespace-nowrap">
            Hey, I&apos;m{' '}
            <span className="relative inline-block">
              <span className="relative z-10 px-1">Lana</span>
              <div 
                className="pointer-events-none absolute inset-0 z-0" 
                style={{
                  opacity: 1, 
                  transform: 'none', 
                  transformOrigin: '0% 0% 0px',
                  top: '2px',
                  left: '0px'
                }}
              >
                <div 
                  className="absolute border bg-neutral-200 border-neutral-300" 
                  style={{
                    animation: 'growBox 2s ease-in-out forwards',
                    width: '0px',
                    height: '0px'
                  }}
                />
                <div 
                  className="pointer-events-none absolute" 
                  style={{
                    animation: 'moveCursor 2s ease-in-out forwards'
                  }}
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500"
                    style={{transform: 'scaleX(-1)'}}
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .006-.916l12.186 8.652a.5.5 0 0 1 1.375 1.828 5.731 7.613h-2.21-4.699-6.287z" />
                  </svg>
                </div>
              </div>
            </span>
          </h1>
          <div className="mt-2 flex items-center">
            <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl whitespace-nowrap">
              CS + Econ @ Georgia Tech
              <span className="ml-2 inline-block"></span>
            </h2>
          </div>
        </div>

        {/* Bio section */}
        <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-700">
          <p>
            I enjoy building systems at the intersection of data, AI, and product strategy.{" "}
            My past <a href="/experience" className="font-medium text-gray-900 underline">
              experiences
            </a>{" "} focus on leveraging  <span className="font-semibold text-gray-900">AI {" "}</span>
          to simplify processes, surface meaningful insights, and drive  <span className="font-semibold text-gray-900">product decisions</span> in finance and data-intensive environments.
          </p>

          <p>
            I love to work  <span className="font-semibold text-gray-900">end to end</span>, from shaping an idea and designing the system to building, iterating, and shipping.
            I'm always happy to talk about{" "}
            <span className="font-semibold text-gray-900">
              AI, new ideas, travel, or anything else
            </span>{" — "}
            so feel free to reach out or stick around and explore my site!
          </p>

          <p className="text-gray-600">
            Thanks for stopping by! 😊
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-3" id="cta-buttons">
          <a href="/Lana_Duke_Resume.pdf" download="Lana_Duke_Resume.pdf" onClick={() => { setResumeDownloaded(true); setTimeout(() => setResumeDownloaded(false), 2000); }}>
            <button className={`rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black border ${resumeDownloaded ? 'border-green-500' : 'border-gray-900'} transition-colors duration-200 flex items-center gap-2`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 group-hover:text-black transition-colors"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {resumeDownloaded ? 'Downloaded!' : 'Download my Resume'}
            </button>
          </a>
          <a href="/contact">
            <button className="rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black border border-gray-900 transition-colors duration-200 flex items-center gap-2">
              Contact
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes profile__animate {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }

        @keyframes moveCursor {
          0% {
            transform: translateX(-5px) translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateX(150px) translateY(72px) rotate(0deg);
          }
        }

        @keyframes growBox {
          0% {
            width: 0px;
            height: 0px;
          }
          100% {
            width: 150px;
            height: 70px;
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(-200px);
          }
          100% {
            transform: translateY(calc(100vh - 100px));
          }
        }

        @keyframes impactGlow {
          0%, 99% {
            opacity: 0;
            transform: translateX(-50%) scaleX(0.5);
          }
          99.5% {
            opacity: 0.4;
            transform: translateX(-50%) scaleX(1.2);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scaleX(1.5);
          }
        }

        @keyframes splashParticleFill {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          5% {
            opacity: 1;
            transform: translate(0, 0);
          }
          100% {
            opacity: 0;
            transform: translate(var(--target-x), var(--target-y));
          }
        }
      `}</style>
    </div>
  );
}