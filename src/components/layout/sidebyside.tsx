import Particle from "@/components/ui/particles";
import React from "react";

interface SideBySideLayoutProps {
  leftSession: React.ReactNode;
  rightSession: React.ReactNode;
}

export const SideBySideLayout: React.FC<SideBySideLayoutProps> = ({
  leftSession,
  rightSession,
}) => {
  return (
    <>
      <div className="flex-1 relative h-screen">
        <Particle />
        <div className="absolute inset-0 flex justify-center items-center z-10">
          {leftSession}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scroll-smooth scroll-snap-y">
        {rightSession}
      </div>
    </>
  );
};

export default SideBySideLayout;
