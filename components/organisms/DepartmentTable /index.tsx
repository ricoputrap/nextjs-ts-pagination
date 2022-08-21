import React from 'react'
import useDepartmentTable from '../../../hooks/useDepartmentTable';
import MainTable from '../MainTable'

const DepartmentTable: React.FC = () => {
  const { departments } = useDepartmentTable();

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
      />
    </>
  )
}

export default DepartmentTable 