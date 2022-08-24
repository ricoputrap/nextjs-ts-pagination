import { Context, createContext } from "react";
import { DepartmentContextType } from "../types/context.types";
import ACTION_TYPES from "./action-types";

import initalState from "./initialState";

const DepartmentContext: Context<DepartmentContextType> = createContext<DepartmentContextType>({
  state: initalState,
  callDispatch: (type: ACTION_TYPES, payload: any = {}) => {}
});

export default DepartmentContext;