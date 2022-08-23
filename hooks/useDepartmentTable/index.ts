import React, { useCallback, useState } from 'react'
import { useDepartmentContext } from '../../context';
import ACTION_TYPES from '../../context/action-types';
import { OtherPage, ResponseMultiple } from '../../types/response.types';

const useDepartmentTable = () => {
  const {
    state: { departments },
    callDispatch
  } = useDepartmentContext();

  const [page, setPage] = useState<number>(1);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [nextPage, setNextPage] = useState<OtherPage>();
  const [prevPage, setPrevPage] = useState<OtherPage>();

  const initData = useCallback((response: ResponseMultiple) => {
    const { data, totalPages, next, prev } = response;
    setPageTotal(totalPages);
    setNextPage(next);
    setPrevPage(prev);
    callDispatch(ACTION_TYPES.SET_DEPARTMENTS, data);
  }, [])


  const seeNextPage = async () => {
    if (!nextPage) return;
    try {
      const res: Response = await fetch(nextPage.url);
      const data: ResponseMultiple = await res.json();

      setPage(nextPage.page);
      setPageTotal(data.totalPages);
      setNextPage(data.next);
      setPrevPage(data.prev);
      callDispatch(ACTION_TYPES.SET_DEPARTMENTS, data.data);
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

      setPage(prevPage.page);
      setPageTotal(data.totalPages);
      setNextPage(data.next);
      setPrevPage(data.prev);
      callDispatch(ACTION_TYPES.SET_DEPARTMENTS, data.data);
    }
    catch (e) {
      console.error(e)
    }
  }

  return {
    departments, 
    page,
    pageTotal,
    initData,
    seeNextPage,
    seePrevPage
  }
}

export default useDepartmentTable;