import { DepartmentStateType } from "../types/context.types";
import ACTION_TYPES from "./action-types";
import ACTIONS from "./actions";

const departmentReducer = (
  state: DepartmentStateType,
  action: ACTIONS
): DepartmentStateType => {
  switch (action.type) {
    case ACTION_TYPES.SET_DEPARTMENTS_DATA:
      return action.payload;

    case ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state;
  }
}

export default departmentReducer;