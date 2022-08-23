import React, { useEffect } from 'react'
import useDepartmentTable from '../../../hooks/useDepartmentTable';
import { ResponseMultiple } from '../../../types/response.types';
import MainTable from '../MainTable'

type Props = {
  data: ResponseMultiple;
}

const DepartmentTable: React.FC<Props> = ({ data }) => {
  const {
    departments, page, pageTotal,
    initData, seeNextPage, seePrevPage
  } = useDepartmentTable();

  useEffect(() => {
    initData(data);
  }, [data]);

  const columns = [
    { id: "name", label: "Name" },
    { id: "pic", label: "PIC" },
    { id: "supervisor", label: "Supervisor" },
    { id: "members", label: "Members" },
  ];

  return (
    <>
      <MainTable
        columns={ columns }
        data={ departments }
        page={ page }
        pageTotal={ pageTotal }
        seeNextPage={ seeNextPage }
        seePrevPage={ seePrevPage }
      />
    </>
  )
}

export default DepartmentTable 