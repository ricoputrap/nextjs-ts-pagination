import ACTION_TYPES from "../context/action-types";
import { Department } from "./department.types"

export type DepartmentStateType = {
  departments: Department[];
}

export type DepartmentContextType = {
  state: DepartmentStateType;
  callDispatch: (type: ACTION_TYPES, payload: any) => void;
}