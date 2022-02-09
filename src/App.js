import { useState, useEffect } from "react";
import { useScreenFixedProvider } from "./contexts/ScreenFixedProvider";
import Home from "./views/Home";
import Loader from "./components/common/Loader";
import AOS from "aos";

function App() {
  const { showOverlay } = useScreenFixedProvider();
  const [loading, setLoading] = useState(true);

  // FOR FULL SCREEN LOADING
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // INTITIALZE AOS
  AOS.init({ once: true });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`${showOverlay ? "fix-screen-mobile" : ""}`}>
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
