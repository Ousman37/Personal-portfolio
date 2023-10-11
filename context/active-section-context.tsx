"use client" //🚀

// Import necessary types and libraries
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// Define props for the ActiveSectionContextProvider component
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

// Define the shape of the active section context
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create a context to manage the active section and click time
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// Create a component that provides the context to its children
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  // Initialize state for the active section and time of last click
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Create a custom hook for accessing the active section context
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  // Throw an error if the hook is used outside of the context provider
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
