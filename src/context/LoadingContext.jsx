"use client";
import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <LoadingContext.Provider value={{ isFinished, setIsFinished }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
