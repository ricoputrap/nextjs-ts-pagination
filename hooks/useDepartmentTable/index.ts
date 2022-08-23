import React, { useCallback } from 'react'
import { useDepartmentContext } from '../../context';
import ACTION_TYPES from '../../context/action-types';
import { ResponseMultiple } from '../../types/response.types';

const useDepartmentTable = () => {
  const {
    state: {
      departments,
      page,
      pageTotal,
      prevPage,
      nextPage
    },
    callDispatch
  } = useDepartmentContext();

  const initData = useCallback((response: ResponseMultiple) => {
    const { data, totalPages, next, prev } = response;
    callDispatch(ACTION_TYPES.SET_DEPARTMENTS_DATA, {
      departments: data,
      pageTotal: totalPages,
      nextPage: next,
      prevPage: prev,
      page,
    });
  }, [])


  const seeNextPage = async () => {
    if (!nextPage) return;
    try {
      const res: Response = await fetch(nextPage.url);
      const data: ResponseMultiple = await res.json();
      const { data: departments, totalPages, next, prev } = data;

      callDispatch(ACTION_TYPES.SET_DEPARTMENTS_DATA, {
        departments,
        pageTotal: totalPages,
        nextPage: next,
        prevPage: prev,
        page: nextPage.page,
      });
    }
    catch (e) {
      console.error(e)
    }
  }

  const seePrevPage = async () => {
    if (!prevPage) return;
    try {
      const res: Response = await fetch(prevPage.url);
      const data: ResponseMultiple = await res.json();
      const { data: departments, totalPages, next, prev } = data;

      callDispatch(ACTION_TYPES.SET_DEPARTMENTS_DATA, {
        departments,
        pageTotal: totalPages,
        nextPage: next,
        prevPage: prev,
        page: prevPage.page,
      });
    }
    catch (e) {
      console.error(e)
    }
  }

  const seePage = async (pageNum: number) => {
    try {
      const HOST: string = process.env.NEXT_PUBLIC_HOST || "";
      const URL: string = HOST + "/api/departments?page=" + pageNum;
      const res: Response = await fetch(URL);
      const data: ResponseMultiple = await res.json();
      const { data: departments, totalPages, next, prev } = data;

      callDispatch(ACTION_TYPES.SET_DEPARTMENTS_DATA, {
        departments,
        pageTotal: totalPages,
        nextPage: next,
        prevPage: prev,
        page: pageNum
      });
    }
    catch (e) {
      console.error(e);
    }
  }

  return {
    departments, 
    page,
    pageTotal,
    nextPage,
    prevPage,
    initData,
    seeNextPage,
    seePrevPage,
    seePage
  }
}

export default useDepartmentTable;