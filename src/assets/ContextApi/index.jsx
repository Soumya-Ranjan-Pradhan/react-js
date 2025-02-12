// 1st step

import { createContext } from "react";

export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "Rahul";
  const myBioData = "Angul";
  return (
    <BioContext.Provider value={{ myName, myBioData }}>
      {children}
    </BioContext.Provider>
  );
};
