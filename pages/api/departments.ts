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
    const HOST = req.headers.host;
    const PROTOCOL: string = process.env.PROTOCOL || "";
    const URL = PROTOCOL + HOST + "/api/departments";

    const params: Params = req.query;
    const page: number = params["page"] || 1;
    const limit: number = params["limit"] || 5;
    const filter: DepartmentFilter = params["filter"] 
      ? JSON.parse(params["filter"])
      : {};

    const totalItems: number = service.getTotalDepartments(filter);
    const totalPages = Math.ceil(totalItems / limit);

    // page not found
    if (page > totalPages)
      throw new Error(`Page not found. Page ${page} is requested, only ${totalPages} pages are available.`);

    const departments: Department[] = service.getDepartments(page, limit, filter);
    
    const response: ResponseMultiple = {
      data: departments,
      totalItems,
      totalPages
    }

    // next page data node
    if (page < totalPages) {
      const nextPage = +page + 1;
      response.next = {
        page: nextPage,
        url: `${URL}?page=${nextPage}&limit=${limit}`
      }
    }

    // previous page data node
    if (page > 1) {
      const prevPage = page - 1;
      response.prev = {
        page: prevPage,
        url: `${URL}?page=${prevPage}&limit=${limit}`
      }
    }

    res.status(200).json(response);
  }
  catch (e: any) {
    return res.status(500).json({
      error: e.message
    })
  }
}