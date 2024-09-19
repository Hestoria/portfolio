import MainPage from "@/components/pages/mainPage";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import InitPage from "@/components/pages/initPage"
const App = () => {
  const [init, setInit] = useState(true);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {init && (
          <div>
            <InitPage
              setInit={setInit}
            />
          </div>)
        }
      </AnimatePresence>
      {!init && (
        <MainPage />
      )}
    </main>
  );
};

export default App;
