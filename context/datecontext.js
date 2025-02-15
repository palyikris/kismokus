import { createContext, useContext, useState } from "react";

export const DateContext = createContext({
  arrDate: "",
  depDate: "",
  setArrDate: () => {},
  setDepDate: () => {}
});

export default function GlobalDateContextProvider({ children }) {
  let [arrDate, setArrDate] = useState();
  let [depDate, setDepDate] = useState();

  return (
    <DateContext.Provider
      value={{
        arrDate: arrDate,
        depDate: depDate,
        setArrDate: setArrDate,
        setDepDate: setDepDate
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
