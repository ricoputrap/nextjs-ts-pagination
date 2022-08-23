import React, { useCallback, useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr';
import { Department } from '../../types/department.types';
import { OtherPage, ResponseMultiple } from '../../types/response.types';

const fetcher: Fetcher<ResponseMultiple, string> = (url: string): Promise<ResponseMultiple> => {
  const HOST: string = process.env.NEXT_PUBLIC_HOST || "";
  const URL: string = HOST + url;

  return fetch(URL).then(res => res.json());
}

const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [nextPage, setNextPage] = useState<OtherPage>();
  const [prevPage, setPrevPage] = useState<OtherPage>();

  const initData = useCallback((response: ResponseMultiple) => {
    const { data: departments, totalPages, next, prev } = response;
    setDepartments(departments);
    setPageTotal(totalPages);
    setNextPage(next);
    setPrevPage(prev);
  }, []);

  const seeNextPage = useCallback(() => {
    if (!nextPage) return;

    setPage(nextPage.page);
  }, [nextPage]);

  const seePrevPage = useCallback(() => {
    if (!prevPage) return;

    setPage(prevPage.page);
  }, [prevPage]);

  const seePage = (pageNum: number) => {
    setPage(pageNum);
  }

  const { data, error } = useSWR<ResponseMultiple, Error>(`/api/departments?page=${page}`, fetcher);
  useEffect(() => {
    if (error || !data) return;

    const { data: departments, totalPages, next, prev } = data;

    setDepartments(departments);
    setPageTotal(totalPages);
    setNextPage(next);
    setPrevPage(prev);
  }, [data, error]);


  return { 
    departments, page, pageTotal,
    initData, seeNextPage, seePrevPage, seePage,
    isLoading: !error && !data,
    error
  }
}

export default useDepartments