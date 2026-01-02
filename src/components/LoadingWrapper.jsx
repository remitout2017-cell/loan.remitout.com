"use client";
import React, { useState, useEffect } from "react";
import Loader from "./common/Loader";
import { useLoading } from "../context/LoadingContext";

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { setIsFinished } = useLoading();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);

        setTimeout(() => {
          setIsLoading(false);
          setIsFinished(true);
          document.body.style.overflow = "unset";
        }, 1000);
      }, 3500);
    };

    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const timeout = setTimeout(handleLoad, 5000);
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