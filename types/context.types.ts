import ACTION_TYPES from "../context/action-types";
import { Department } from "./department.types"
import { OtherPage } from "./response.types";

export type DepartmentStateType = {
  departments: Department[];
  page: number;
  pageTotal: number;
  nextPage?: OtherPage;
  prevPage?: OtherPage;
}

export type DepartmentContextType = {
  state: DepartmentStateType;
  callDispatch: (type: ACTION_TYPES, payload: any) => void;
}