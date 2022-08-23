import { DepartmentStateType } from "../types/context.types";
import ACTION_TYPES from "./action-types";

type SET_DEPARTMENTS_DATA = {
  type: ACTION_TYPES.SET_DEPARTMENTS_DATA;
  payload: DepartmentStateType;
}

type ACTION = {
  type: number;
  payload: any;
}

type ACTIONS = SET_DEPARTMENTS_DATA | ACTION;

export default ACTIONS;