import InitPage from "@/components/pages/initPage";
import MainPage from "@/components/pages/mainPage";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export enum PageState {
  INIT,
  INIT_EXITING,
  MAIN,
}

const App = () => {
  const [pageState, setPageState] = useState<PageState>(PageState.MAIN);

  return (
    <main className="relative">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setPageState(PageState.MAIN);
        }}
      >
        {pageState == PageState.INIT && (
          <InitPage setPageState={setPageState} />
        )}
        {pageState == PageState.MAIN && <MainPage />}
      </AnimatePresence>
    </main>
  );
};

export default App;
