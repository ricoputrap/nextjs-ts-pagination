import { Department } from "./department.types"

export type DepartmentStateType = {
  departments: Department[];
}

export type DepartmentContextType = {
  state: DepartmentStateType;
  callDispatch: (type: string, payload: any) => void;
}

export type ActionType = {
  type: string;
  payload: any;
}