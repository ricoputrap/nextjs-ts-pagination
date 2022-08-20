import { Department } from "../../types/department.types";
import departmentData from "../data/departments.json";

class DepartmentService {
  public getTotalDepartments(): number {
    const departments: Department[] = departmentData.data;
    return departments.length;
  }

  public getDepartments(page: number, limit: number): Department[] {
    const departments: Department[] = departmentData.data;

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + +limit;
    const data = departments.slice(startIndex, endIndex);

    return data;
  }
}

export default DepartmentService;