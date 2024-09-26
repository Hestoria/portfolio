"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { ReactLogo } from "@styled-icons/fa-brands";
import { Electron, Qt, Tauri, Threedotjs } from "@styled-icons/simple-icons";
import { AnimatedBeam } from "../ui/animated-beam";
import Circle from "../ui/circle";

// TODO: to be refactored
const SkillsFE = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactLogoRef = useRef<HTMLDivElement>(null);
  const qtLogoRef = useRef<HTMLDivElement>(null);
  const ElectronLogoRef = useRef<HTMLDivElement>(null);
  const ThreedotjsLogoRef = useRef<HTMLDivElement>(null);
  const tauriLogoRef = useRef<HTMLDivElement>(null);
  const desktopLogoRef = useRef<HTMLDivElement>(null);
  const webLogoRef = useRef<HTMLDivElement>(null);
  const phoneLogoRef = useRef<HTMLDivElement>(null);
  const userLogoRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl bg-dot-white/[0.2]"
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg ">
        {/* row1 */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={reactLogoRef}>
            <ReactLogo className="h-8 w-8" />
          </Circle>
          <Circle ref={ThreedotjsLogoRef}>
            <Threedotjs className="h-8 w-8" />
          </Circle>
          <Circle ref={ElectronLogoRef}>
            <Electron className="h-8 w-8" />
          </Circle>
          <Circle ref={tauriLogoRef}>
            <Tauri className="h-8 w-8" />
          </Circle>
          <Circle ref={qtLogoRef}>
            <Qt className="h-8 w-8" />
          </Circle>
        </div>
        {/* row2 */}
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={webLogoRef} className="size-16">
            <Icons.web />
          </Circle>
          <Circle ref={desktopLogoRef} className="size-16">
            <Icons.desktop />
          </Circle>
          <Circle ref={phoneLogoRef} className="size-16">
            <Icons.phone />
          </Circle>
        </div>
        {/* row3 */}
        <div className="flex flex-col justify-center">
          <Circle ref={userLogoRef}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={reactLogoRef}
        toRef={webLogoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={ThreedotjsLogoRef}
        toRef={webLogoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={ElectronLogoRef}
        toRef={desktopLogoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={tauriLogoRef}
        toRef={phoneLogoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={tauriLogoRef}
        toRef={desktopLogoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={qtLogoRef}
        toRef={phoneLogoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={qtLogoRef}
        toRef={desktopLogoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={webLogoRef}
        toRef={userLogoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={phoneLogoRef}
        toRef={userLogoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={desktopLogoRef}
        toRef={userLogoRef}
      />
    </div>
  );
};

const Icons = {
  web: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
      stroke="#FFF"
      fill="#FFF"
      viewBox="0 0 412.997 412.997"
    >
      <path d="M143.531 158.403h-.764a6.5 6.5 0 0 0-6.17 4.455l-11.943 36.043-11.998-36.051a6.501 6.501 0 0 0-6.168-4.447h-1.1a6.5 6.5 0 0 0-6.17 4.455l-11.943 36.043-11.998-36.051a6.501 6.501 0 0 0-6.168-4.447h-.764a6.498 6.498 0 0 0-6.156 8.588l18.432 54.355a6.497 6.497 0 0 0 6.154 4.411h.426c.029 0 .059-.005.088-.006.029.001.059.006.088.006h.344a6.5 6.5 0 0 0 6.16-4.426l12.084-35.878 12.027 35.869a6.506 6.506 0 0 0 6.164 4.435h.424c.029 0 .059-.005.088-.006.029.001.059.006.088.006h.344a6.5 6.5 0 0 0 6.156-4.411l18.43-54.355a6.497 6.497 0 0 0-6.155-8.588zM233.688 158.403h-.765a6.5 6.5 0 0 0-6.17 4.455l-11.942 36.043-11.999-36.051a6.501 6.501 0 0 0-6.168-4.447h-1.1a6.5 6.5 0 0 0-6.17 4.455l-11.943 36.043-11.998-36.051a6.501 6.501 0 0 0-6.168-4.447h-.764a6.498 6.498 0 0 0-6.156 8.588l18.432 54.355a6.497 6.497 0 0 0 6.154 4.411h.426c.029 0 .059-.005.088-.006.029.001.059.006.088.006h.344a6.5 6.5 0 0 0 6.16-4.426l12.084-35.878 12.027 35.869a6.507 6.507 0 0 0 6.165 4.435h.425c.028 0 .059-.005.088-.006.028.001.059.006.088.006h.344a6.5 6.5 0 0 0 6.156-4.411l18.43-54.355c.674-1.984.351-4.172-.871-5.875s-3.19-2.713-5.285-2.713zM323.844 158.403h-.766a6.501 6.501 0 0 0-6.17 4.455l-11.941 36.043-11.998-36.051a6.501 6.501 0 0 0-6.168-4.447h-1.102a6.5 6.5 0 0 0-6.17 4.455l-11.941 36.043-11.999-36.051a6.5 6.5 0 0 0-6.168-4.447h-.764c-2.098 0-4.063 1.01-5.283 2.713s-1.545 3.891-.873 5.875l18.433 54.355a6.497 6.497 0 0 0 6.154 4.411h.426c.029 0 .06-.005.088-.006.029.001.06.006.089.006h.344a6.5 6.5 0 0 0 6.16-4.426l12.084-35.878 12.026 35.869a6.507 6.507 0 0 0 6.164 4.435h.424c.029 0 .06-.005.089-.006.028.001.059.006.088.006h.344a6.5 6.5 0 0 0 6.156-4.411L330 166.991a6.497 6.497 0 0 0-6.156-8.588z" />
      <path d="M28.283 348.743V105.026h335.621v139.452c6.733-5.787 15.211-8.953 24.182-8.953 1.381 0 2.748.082 4.102.229V44.311c0-12.996-10.571-23.568-23.563-23.568H23.568C10.57 20.743 0 31.315 0 44.311v309.147c0 12.994 10.57 23.568 23.568 23.568h224.848c-5.428-8.517-9.375-18.062-11.441-28.283H28.283zM338.025 60.319a8.702 8.702 0 0 1 8.702-8.703h8.703a8.701 8.701 0 0 1 8.701 8.703v9.863a8.702 8.702 0 0 1-8.701 8.701h-8.703a8.7 8.7 0 0 1-8.702-8.701v-9.863zm-40.464 0a8.702 8.702 0 0 1 8.701-8.703h8.703a8.7 8.7 0 0 1 8.701 8.703v9.863a8.702 8.702 0 0 1-8.701 8.701h-8.703a8.702 8.702 0 0 1-8.701-8.701v-9.863zm-40.467 0a8.702 8.702 0 0 1 8.703-8.703h8.701a8.702 8.702 0 0 1 8.701 8.703v9.863a8.702 8.702 0 0 1-8.701 8.701h-8.701a8.702 8.702 0 0 1-8.703-8.701v-9.863z" />
      <path d="M416.703 285.536c0-4.586-1.785-8.896-5.029-12.141L398.83 260.55c-3.242-3.241-7.553-5.026-12.137-5.026s-8.896 1.785-12.14 5.028l-19.604 19.601c-10.469-7.506-23.303-11.928-37.168-11.928-35.273 0-63.868 28.596-63.868 63.868 0 35.271 28.595 63.867 63.868 63.867 35.272 0 63.867-28.598 63.867-63.867a63.75 63.75 0 0 0-.146-4.255l30.166-30.166a17.03 17.03 0 0 0 5.035-12.136zm-18.969 3.816-61.427 61.428a6.902 6.902 0 0 1-4.881 2.021h-.002a6.91 6.91 0 0 1-4.883-2.022l-28.467-28.51a6.907 6.907 0 0 1 .006-9.759l5.479-5.479a6.903 6.903 0 0 1 9.755-.006l18.104 18.057 51.021-51.02a6.902 6.902 0 0 1 9.762 0l5.529 5.53a6.896 6.896 0 0 1 .004 9.76z" />
    </svg>
  ),
  desktop: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
      stroke="#FFF"
      fill="#FFF"
      viewBox="0 0 412.997 412.997"
    >
      <path d="M392.997 28.338H20c-11.046 0-20 8.954-20 20v234c0 11.046 8.954 20 20 20h139.499v45.32h-54.283c-10.201 0-18.5 8.299-18.5 18.5s8.299 18.5 18.5 18.5h202.566c10.201 0 18.5-8.299 18.5-18.5s-8.299-18.5-18.5-18.5h-54.283v-45.32h139.498c11.047 0 20-8.954 20-20v-234c0-11.046-8.953-20-20-20zm-10 244H30v-214h352.997v214z" />
      <path d="M62.999 146.276h287a5 5 0 0 0 5-5V86.269a5 5 0 0 0-5-5h-287a5 5 0 0 0-5 5v55.008a4.999 4.999 0 0 0 5 4.999zM349.999 165.164H285.28a3.966 3.966 0 0 0-3.966 3.966v76.333a3.965 3.965 0 0 0 3.966 3.966h64.719a3.965 3.965 0 0 0 3.966-3.966V169.13a3.965 3.965 0 0 0-3.966-3.966zM251.78 165.164H62.999a3.967 3.967 0 0 0-3.967 3.966v76.333a3.967 3.967 0 0 0 3.967 3.966H251.78a3.965 3.965 0 0 0 3.965-3.966V169.13a3.964 3.964 0 0 0-3.965-3.966zm-9.389 74.28h-170v-64.296h170v64.296z" />
    </svg>
  ),
  phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={24}
      height={24}
      stroke="#FFF"
      fill="#FFF"
      viewBox="0 0 420 420"
    >
      <path d="M314.606 357.373c-.001 0-.001 0 0 0-8.693 0-17.603-1.004-26.636-2.98H46.729V65.608h261.426v129.624c6.477-3.025 12.809-5.099 18.956-6.181a59.134 59.134 0 0 1 2.472-.382V32.139C329.582 14.418 315.164 0 297.441 0h-240c-17.722 0-32.14 14.418-32.14 32.139v355.722c0 17.722 14.418 32.139 32.14 32.139h240c17.723 0 32.141-14.417 32.141-32.139v-31.519c-2.211.305-4.438.558-6.681.725-2.73.203-5.521.306-8.295.306zm-137.165 39.571c-7.544 0-13.659-6.115-13.659-13.659 0-7.543 6.115-13.659 13.659-13.659s13.659 6.116 13.659 13.659c.001 7.544-6.115 13.659-13.659 13.659z" />
      <path d="M393.479 269.643c-4.186-22.562-18.546-43.424-26.732-53.854-11.107-14.149-25.206-19.83-41.9-16.89-11.922 2.1-24.878 8.59-38.51 19.293-9.634 7.563-16.907 15.135-20.124 18.657-8.085-6.964-30.66-30.226-41.743-43.343-5.566-6.587-19.921-20.595-30.631-10.925-11.529 11.206 5.359 29.516 5.798 30.045l67.749 82.93c-.273.369-.58.688-.933.961-6.497 5.104-25.458-4.272-33.11-9.334-6.997-4.625-18.777-4.588-24.723.078-2.381 1.87-3.698 4.411-3.714 7.155-.02 3.951 2.566 8.036 7.674 12.129.056.046.158.138.307.263 7.55 6.47 28.028 22.58 55.071 32.496 17.335 6.358 34.224 8.979 50.201 7.791 19.817-1.478 38.287-8.832 54.888-21.864 17.808-13.984 24.682-32.688 20.432-55.588zM225.338 127.975c3.351 4.39 9.626 5.232 14.017 1.881 4.392-3.351 5.232-9.626 1.881-14.016-25.26-33.092-72.731-39.463-105.823-14.203-33.091 25.26-39.463 72.733-14.203 105.824 3.351 4.391 9.625 5.232 14.016 1.881s5.233-9.626 1.882-14.017c-18.569-24.326-13.885-59.222 10.44-77.791 24.325-18.568 59.222-13.885 77.79 10.441z" />
      <path d="M181.218 161.646c4.389-3.35 10.685-2.504 14.035 1.883 3.351 4.39 9.626 5.232 14.016 1.881 4.391-3.351 5.232-9.626 1.88-14.016-10.041-13.154-28.913-15.688-42.066-5.646-13.154 10.041-15.687 28.912-5.646 42.067 3.351 4.39 9.626 5.232 14.017 1.881s5.232-9.627 1.881-14.017c-3.35-4.387-2.505-10.683 1.883-14.033z" />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

export default SkillsFE;
