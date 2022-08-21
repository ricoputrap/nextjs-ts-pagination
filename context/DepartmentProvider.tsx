import { useCallback, useReducer } from "react";
import ACTION_TYPES from "./action-types";
import DepartmentContext from "./DepartmentContext";
import departmentReducer from "./departmentReducer";
import initalState from "./initialState";

type ProviderProps = {
  children: React.ReactNode;
}

const DepartmentProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(departmentReducer, initalState);

  const callDispatch = useCallback((type: ACTION_TYPES, payload: any = {}) => {
    dispatch({ type, payload });
  }, []);

  return (
    <DepartmentContext.Provider value={{ state, callDispatch }}>
      { children }
    </DepartmentContext.Provider>
  )
}

export default DepartmentProvider;