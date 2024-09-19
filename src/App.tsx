import MainPage from "@/components/pages/mainPage";
import { useState } from "react";
import LoadingBanner from "@/components/ui/loading-banner";

const App = () => {
  const [showBanners, setShowBanners] = useState(true);

  return (
    <main className="relative">
      {showBanners ? (
        <LoadingBanner
          showBanners={showBanners}
          setShowBanners={setShowBanners}
        />
      ) : (
        <MainPage />
      )}
    </main>
  );
};

export default App;
