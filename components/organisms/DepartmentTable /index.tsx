import React from 'react'
import MainTable from '../MainTable'

type Props = {
  data: any
}

const DepartmentTable: React.FC<Props> = (data) => {
  const columns = [
    { id: "name", label: "Name" },
    { id: "pic", label: "PIC" },
    { id: "supervisor", label: "Supervisor" },
    { id: "members", label: "Members" },
  ];

  const items = data.data;

  return (
    <>
      <MainTable
        columns={ columns }
        data={ items }
      />
    </>
  )
}

export default DepartmentTable 