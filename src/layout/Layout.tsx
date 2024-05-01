import React from "react";

interface LayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ left, right }) => {
  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};
