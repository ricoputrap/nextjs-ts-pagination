import {  ActionType, DepartmentContextType} from "../types/context.types";
import { SET_DEPARTMENTS } from "./actionTypes";

const departmentReducer = (state: DepartmentContextType, action: ActionType) => {
  switch (action.type) {
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload
      }
    
    default:
      return state;
  }
}

export default departmentReducer;