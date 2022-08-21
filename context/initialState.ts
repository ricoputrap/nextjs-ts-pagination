import { DepartmentContextType } from "../types/context.types";

const initalState: DepartmentContextType = {
  state: {
    departments: [],
  },
  callDispatch: (type, payload) => {}
}

export default initalState;