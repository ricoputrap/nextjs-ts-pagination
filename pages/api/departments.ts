import type { NextApiRequest, NextApiResponse } from 'next'
import DepartmentService from '../../backend/services/DepartmentService'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const service = new DepartmentService();

  try {
    const departments = service.getDepartments();
    
    const response = {
      data: departments
    }

    res.status(200).json(response);
  }
  catch (e: any) {
    return res.status(500).json({
      error: e.message
    })
  }
}