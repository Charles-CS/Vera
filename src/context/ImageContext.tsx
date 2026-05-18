"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ImageContextType {
  sharedImageUrl: string | null;
  setSharedImageUrl: (url: string | null) => void;
}

const ImageContext = createContext<ImageContextType>({
  sharedImageUrl: null,
  setSharedImageUrl: () => {},
});

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [sharedImageUrl, setSharedImageUrl] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ sharedImageUrl, setSharedImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
