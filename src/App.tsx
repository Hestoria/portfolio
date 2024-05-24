import SideBySideLayout from "@/components/layout/sidebyside";
import React from "react";

import Hero from "@/components/session/hero";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <main className="xl:flex xl:overflow-hidden h-screen">
      <SideBySideLayout
        leftSession={<Hero />}
        rightSession={
          <div className="scrollableContent">
            {[...Array(20).keys()].map((index) => (
              <div
                key={index}
                className="sticky h-screen"
                style={{
                  backgroundColor: index % 2 ? "red" : "blue",
                }}
              >
                Scrollable Content {index}
              </div>
            ))}
          </div>
        }
      />
    </main>
  );
};

export default App;
