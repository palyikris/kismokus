import { useContext } from "react";
import { DateContext } from "./datecontext";

export const useGlobalDate = () => useContext(DateContext);
