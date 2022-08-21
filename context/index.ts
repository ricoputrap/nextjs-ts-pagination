import { useContext } from "react";
import { DepartmentContextType } from "../types/context.types";
import DepartmentContext from "./context";

export const useDepartment = (): DepartmentContextType => {
  return useContext(DepartmentContext);
}
