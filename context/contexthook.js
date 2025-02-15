import { useContext } from "react";
import { ApartmanContext } from "./globalcontext";

export const useApartman = () => useContext(ApartmanContext);
