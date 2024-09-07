import { useContext } from "react";
import { ThemeContext } from "../App";
import { Toggle } from "../components/ui/toggle";
import { Theme } from "../lib/types";

type Props = {};

const navbar = (props: Props) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="flex">
      use navigation-menu from shadcn, add new font styles and hover animations
      modify the src code for the component and adding hover animations with
      motion.
      <Toggle
        defaultPressed={false}
        onPressedChange={(pressed) => {
          setTheme(pressed ? Theme.Light : Theme.Dark);
        }}
        variant="outline"
        aria-label="Toggle dark mode"
      >
        dark
      </Toggle>
    </div>
  );
};

export default navbar;
