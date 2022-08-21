import { Department, DepartmentFilter } from "../../types/department.types";
import departmentData from "../data/departments.json";

class DepartmentService {
  public getTotalDepartments(filter: DepartmentFilter): number {
    const filterTotal: number = Object.keys(filter).length;
    if (filterTotal === 0)
      return departmentData.data.length;

    const departments: Department[] = this.getFilteredDepartments(filter);
    return departments.length;
  }

  public getDepartments(page: number, limit: number, filter: DepartmentFilter): Department[] {
    const departments: Department[] = this.getFilteredDepartments(filter);

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = startIndex + +limit;
    const data = departments.slice(startIndex, endIndex);

    return data;
  }

  private getFilteredDepartments(filter: any): Department[] {
    const filterKeys: string[] = Object.keys(filter);
    const data: Department[] = departmentData.data;
    
    return data.filter((dept: any) => {
      let isIncluded: boolean = true;
      filterKeys.some((key: string) => {
        if (dept[key])
          isIncluded = dept[key] == filter[key];
        
        if (!isIncluded) return true;
      })

      return isIncluded;
    });
  }
}

export default DepartmentService;