"use client";
import React, { useEffect, useMemo, useState } from "react";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [currentTime, setCurrentTime] = useState("");

  // Live-updating clock (updates every second)
  useEffect(() => {
    const formatTime = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

    setCurrentTime(formatTime()); // set immediately on mount
    const interval = setInterval(() => setCurrentTime(formatTime()), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-gray-200 text-gray-700">
      {/* Keep footer content aligned with your centered page column */}
      <div className="mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left */}
          <a
            href="/contact"
            className="hover:underline transition-colors duration-200 hover:text-gray-900"
          >
            Reach out →
          </a>

          {/* Center (desktop) */}
          <div className="hidden sm:block text-center">
            <span>Made by Lana</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>© {currentYear}</span>
          </div>

          {/* Right */}
          <div className="text-base sm:text-lg text-gray-900 font-light tabular-nums w-[7.5rem] text-right">
            {currentTime}
          </div>
        </div>

        {/* Center (mobile) */}
        <div className="sm:hidden mt-3 text-center">
          <span>Made by Lana</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
