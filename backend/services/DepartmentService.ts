import { Department } from "../../types/departments.types";
import deparmentData from "../data/departments.json";

class DepartmentService {
  public getDepartments(): Department[] {
    const departments: Department[] = deparmentData.data;

    return departments;
  }
}

export default DepartmentService;