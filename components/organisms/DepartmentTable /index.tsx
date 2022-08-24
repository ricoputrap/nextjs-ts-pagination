import React, { useEffect } from 'react'
import useDepartments from '../../../hooks/useDepartments';
import { ResponseMultiple } from '../../../types/response.types';
import LoadingBox from '../../molecules/LoadingBox';
import MainTable from '../MainTable'

type Props = {
  data: ResponseMultiple;
}

const DepartmentTable: React.FC<Props> = ({ data }) => {
  const { 
    departments, page, pageTotal,
    setData, seeNextPage, seePrevPage, seePage,
    isLoading
  } = useDepartments();

  useEffect(() => {
    if (!!data) setData(data);
  }, [data]);

  const columns = [
    { id: "name", label: "Name" },
    { id: "pic", label: "PIC" },
    { id: "supervisor", label: "Supervisor" },
    { id: "members", label: "Members" },
  ];

  return (
    <>
      {isLoading && <LoadingBox />}
      <MainTable
        columns={ columns }
        data={ departments }
        page={ page }
        pageTotal={ pageTotal }
        seeNextPage={ seeNextPage }
        seePrevPage={ seePrevPage }
        seePage={ seePage }
      />
    </>
  )
}

export default DepartmentTable 