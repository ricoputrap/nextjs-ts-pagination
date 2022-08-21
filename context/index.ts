import { useContext } from "react";
import { DepartmentContextType } from "../types/context.types";
import DepartmentContext from "./DepartmentContext";

export const useDepartmentContext = (): DepartmentContextType => {
  return useContext(DepartmentContext);
}
