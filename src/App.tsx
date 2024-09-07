import Sections from "@/sections";
import { createContext, useMemo, useState } from "react";
import { Theme } from "./lib/types";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
  theme: Theme.Dark,
  setTheme: function (): void {
    console.error("Set Theme function not implemented.");
  },
});
const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  useMemo(() => {
    // to add more themes
    switch (theme) {
      case Theme.Dark: {
        document.documentElement.classList.add("dark");
        break;
      }
      case Theme.Light: {
        document.documentElement.classList.remove("dark");
        break;
      }
      default: {
        return;
      }
    }
  }, [theme]);

  return (
    <main className="max-w-7xl mx-auto relative">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Sections.Navbar />
        <Sections.Hero />
        <Sections.About />
        <Sections.WorkExperience />
        <Sections.Contact />
        <Sections.Footer />
      </ThemeContext.Provider>
    </main>
  );
};

export default App;
