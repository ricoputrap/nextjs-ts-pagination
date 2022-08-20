import type { NextApiRequest, NextApiResponse } from 'next'
import DepartmentService from '../../backend/services/DepartmentService'
import { Department, DepartmentFilter } from '../../types/department.types';
import { Params } from '../../types/parameter.types';
import { ResponseMultiple } from '../../types/response.types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const service = new DepartmentService();

  try {
    const params: Params = req.query;
    const page: number = params["page"] || 1;
    const limit: number = params["limit"] || 5;
    const filter: DepartmentFilter = params["filter"] 
      ? JSON.parse(params["filter"])
      : {};

    const totalItems: number = service.getTotalDepartments();
    const totalPages = Math.ceil(totalItems / limit);

    const departments: Department[] = service.getDepartments();
    
    const response: ResponseMultiple = {
      data: departments,
      totalItems,
      totalPages
    }

    res.status(200).json(response);
  }
  catch (e: any) {
    return res.status(500).json({
      error: e.message
    })
  }
}