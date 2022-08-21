import { Context, createContext } from "react";
import { DepartmentContextType } from "../types/context.types";

import initalState from "./initialState";

const DepartmentContext: Context<DepartmentContextType> = createContext<DepartmentContextType>(initalState);

export default DepartmentContext;