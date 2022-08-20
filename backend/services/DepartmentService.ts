import { Department } from "../../types/department.types";
import departmentData from "../data/departments.json";

class DepartmentService {
  public getTotalDepartments(): number {
    const departments: Department[] = departmentData.data;
    return departments.length;
  }

  public getDepartments(): Department[] {
    const departments: Department[] = departmentData.data;

    return departments;
  }
}

export default DepartmentService;