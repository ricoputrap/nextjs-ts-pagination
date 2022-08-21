import React, { useCallback, useState } from 'react'
import { useDepartmentContext } from '../../context';
import ACTION_TYPES from '../../context/action-types';
import { ResponseMultiple } from '../../types/response.types';

const useDepartmentTable = () => {
  const {
    state: { departments },
    callDispatch
  } = useDepartmentContext();

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [nextPageURL, setNextPageURL] = useState<string | undefined>("");
  const [prevPageURL, setPrevPageURL] = useState<string | undefined>("");

  const initData = useCallback((response: ResponseMultiple) => {
    const { data, totalPages, next, prev } = response;

    setTotalPages(totalPages);
    setNextPageURL(next?.url);
    setPrevPageURL(prev?.url);
    callDispatch(ACTION_TYPES.SET_DEPARTMENTS, data);
  }, []);

  return {
    departments, page, totalPages,
    initData
  }
}

export default useDepartmentTable;