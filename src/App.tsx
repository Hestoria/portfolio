import React from "react";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <main className="App">
      <div className="leftSection">
        <h1>Fixed Left Section</h1>
        <p>This section remains fixed while the right section is scrollable.</p>
      </div>
      <div className="rightSection">
        <h1>Scrollable Right Section</h1>
        <div className="scrollableContent">
          {[...Array(100).keys()].map((index) => (
            <div
              className="overlay"
              style={{ backgroundColor: index % 2 ? "red" : "blue" }}
            >
              Scrollable Content {index}
            </div>
          ))}
          {/* Overlay div */}
        </div>
      </div>
    </main>
    // <motion.div
    //   className="box"
    //   animate={{
    //     scale: [1, 1, 1, 1, 1],
    //     rotate: [0, 0, 180, 180, 0],
    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    //   }}
    //   whileHover={{
    //     scale: [null, 1.5, 1.4],
    //     rotate: 0, // Reset rotation
    //     borderRadius: "0%", // Reset border radius
    //   }}
    //   transition={{
    //     duration: 2,
    //     ease: "easeInOut",
    //     times: [0, 0.2, 0.5, 0.8, 1],
    //     repeat: Infinity,
    //     repeatDelay: 1,
    //   }}
    // />
  );
};

export default App;
