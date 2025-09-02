"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/Loading";

export default function ClientLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoadingComplete(true);
    }
  }, []);

  const handleComplete = () => {
    setLoadingComplete(true);
    sessionStorage.setItem("hasLoaded", "true"); 
    // 🔁 change to localStorage if you want it permanent
  };

  return (
    <>
      {!loadingComplete && <Loader onComplete={handleComplete} />}
      {loadingComplete && children}
    </>
  );
}
