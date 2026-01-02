"use client";
import React, { useState, useEffect } from "react";
import Loader from "./common/Loader";
import { useLoading } from "../context/LoadingContext";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { setIsFinished } = useLoading();

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
      setIsFinished(true);
      document.body.style.overflow = "unset";
      return;
    }

    const handleLoad = () => {
      // Reduce artificial delay from 3500ms to 800ms
      setTimeout(() => {
        setIsExiting(true);
        sessionStorage.setItem("hasVisited", "true");

        // Wait for removal animation (1000ms)
        setTimeout(() => {
          setIsLoading(false);
          setIsFinished(true);
          document.body.style.overflow = "unset";
        }, 1000);
      }, 1000);
    };

    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const timeout = setTimeout(handleLoad, 3000); // Safety fallback
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, [setIsFinished]);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
      <main className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </main>
    </>
  );
}
