"use client";
import React from "react";

const Loader = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-1000 cubic-bezier(0.77, 0, 0.175, 1) ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* SVG Drawing Logo */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          className="mb-8 overflow-visible"
        >
          {/* Defs for Masking */}
          <defs>
            <clipPath id="pan-mask">
              {/* Horizontal Pan Mask */}
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                className="animate-[panWidth_0.8s_linear_1.8s_forwards]"
                style={{ width: "0%" }}
              />
            </clipPath>
          </defs>

          {/* 
             Outer Brackets:
             - Top-Left Bracket: Covers Left and Top corners.
             - Bottom-Right Bracket: Covers Right and Bottom corners.
             - Gaps: Upper-Right edge and Lower-Left edge.
          */}
          <g
            fill="none"
            stroke="#FF7A00"
            strokeWidth="7"
            strokeLinecap="square"
            strokeLinejoin="miter"
          >
            {/* Top-Left Bracket: Starts TR edge, goes T, L, ends BL edge */}
            <path
              d="M 65,25 L 50,10 L 10,50 L 25,65"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-[draw_1.5s_ease-out_forwards]"
            />

            {/* Bottom-Right Bracket: Starts BL edge, goes B, R, ends TR edge */}
            <path
              d="M 35,75 L 50,90 L 90,50 L 75,35"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-[draw_1.5s_ease-out_forwards]"
            />
          </g>

          {/* Inner Solid Diamond with Pan Animation */}
          <g clipPath="url(#pan-mask)">
            {/* 
               Inner diamond size calculation:
               Outer center-to-edge dist: 28.28
               Stroke extends 3.5 inward -> 24.78.
               Gap of ~5px -> 19.78.
               Rect half-width ~19.
               width = 38?
               Let's Use width="38" height="38" centered at 50,50
               x = 31, y = 31
            */}
            <rect
              x="31"
              y="31"
              width="38"
              height="38"
              transform="rotate(45 50 50)"
              fill="#FF7A00"
            />
          </g>
        </svg>

        {/* Text Fade-in */}
        <div className="overflow-hidden">
          <p className="text-white/30 text-[10px] font-medium tracking-[0.5em] uppercase opacity-0 animate-[fadeUp_1s_ease-out_2.2s_forwards]">
            Remitout
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes panWidth {
          to {
            width: 100%;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
