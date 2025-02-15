// pagefor: creating a context for the whole application that decides that on the reservation page which apartman section should be open

import { createContext, useContext, useState } from "react";

// idea: create the context and pass the functions and variables in it
export const ApartmanContext = createContext({
  isDreamHouseOpen: false,
  isDreamApartmanOpen: false,
  isDreamTopartOpen: false,
  setIsDreamHouseOpen: () => {},
  setIsDreamApartmanOpen: () => {},
  setIsDreamTopartOpen: () => {}
});

export default function GlobalContextProvider({ children }) {
  // prompt: determining the variables and function for the context
  let [isDreamHouseOpen, setIsDreamHouseOpen] = useState(false);
  let [isDreamApartmanOpen, setIsDreamApartmanOpen] = useState(false);
  let [isDreamTopartOpen, setIsDreamTopartOpen] = useState(false);

  // prompt: making the contents of the context accessible for the whole application
  return (
    <ApartmanContext.Provider
      value={{
        isDreamHouseOpen: isDreamHouseOpen,
        isDreamApartmanOpen: isDreamApartmanOpen,
        isDreamTopartOpen: isDreamTopartOpen,
        setIsDreamHouseOpen: setIsDreamHouseOpen,
        setIsDreamApartmanOpen: setIsDreamApartmanOpen,
        setIsDreamTopartOpen: setIsDreamTopartOpen
      }}
    >
      {children}
    </ApartmanContext.Provider>
  );
}
