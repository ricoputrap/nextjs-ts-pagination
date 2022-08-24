import React, { useCallback, useEffect } from 'react'
import useSWR, { Fetcher } from 'swr';
import { useDepartmentContext } from '../../context';
import ACTION_TYPES from '../../context/action-types';
import { ResponseMultiple } from '../../types/response.types';

const fetcher: Fetcher<ResponseMultiple, string> = (url: string): Promise<ResponseMultiple> => {
  const HOST: string = process.env.NEXT_PUBLIC_HOST || "";
  const URL: string = HOST + url;

  return fetch(URL).then(res => res.json());
}

const { SET_DEPARTMENTS_DATA, SET_PAGE } = ACTION_TYPES;

const useDepartments = () => {
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

  const setData = useCallback((response: ResponseMultiple, page: number = 1) => {
    const { data: departments, totalPages, next, prev } = response;

    callDispatch(SET_DEPARTMENTS_DATA, {
      departments,
      page,
      pageTotal: totalPages,
      nextPage: next,
      prevPage: prev
    });

  }, []);

  const seeNextPage = useCallback(() => {
    if (!nextPage) return;

    callDispatch(SET_PAGE, nextPage.page);
  }, [nextPage]);

  const seePrevPage = useCallback(() => {
    if (!prevPage) return;

    callDispatch(SET_PAGE, prevPage.page);
  }, [prevPage]);

  const seePage = (pageNum: number) => {
    callDispatch(SET_PAGE, pageNum);
  }

  const { data, error } = useSWR<ResponseMultiple, Error>(`/api/departments?page=${page}`, fetcher);
  useEffect(() => {
    if (error || !data) return;

    setData(data, page);
  }, [data, error]);


  return { 
    departments, page, pageTotal,
    setData, seeNextPage, seePrevPage, seePage,
    isLoading: !error && !data,
    error
  }
}

export default useDepartments