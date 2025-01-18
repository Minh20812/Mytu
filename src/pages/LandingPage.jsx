import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MainPage from "./MainPage";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [setTimeSkip, setSetTimeSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      setTimeSkip ? 300 : 21000
    );

    return () => clearTimeout(timer);
  }, [setTimeSkip]);

  return (
    // <>{isLoading ? <Loading setTimeSkip={setSetTimeSkip} /> : <MainPage />}</>
    <MainPage />
  );
};

export default LandingPage;
