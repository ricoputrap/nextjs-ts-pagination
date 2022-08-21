import { Department } from "../types/department.types";
import ACTION_TYPES from "./action-types";

type SET_DEPARTMENTS = {
  type: ACTION_TYPES.SET_DEPARTMENTS
  payload: Department[];
}

type ACTION = {
  type: number;
  payload: any;
}

type ACTIONS = SET_DEPARTMENTS | ACTION;

export default ACTIONS;