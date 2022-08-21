import { useCallback, useReducer } from "react";
import DepartmentContext from "./context";
import departmentReducer from "./reducer";
import initialState from "./initialState";

type ProviderProps = {
  children: React.ReactNode;
}

const DepartmentProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const callDispatch = useCallback((type: string, payload: any = {}) => {
    dispatch({ type, payload });
  }, []);

  const value: any = { state, callDispatch }

  return (
    <DepartmentContext.Provider value={ value }>
      { children }
    </DepartmentContext.Provider>
  )
}

export default DepartmentProvider;