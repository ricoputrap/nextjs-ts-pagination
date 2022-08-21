import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { TableColumnType, TableDataType } from '../../../types/table.types';

type Props = {
  columns: TableColumnType[];
  data: any[];
}

const MainTable: React.FC<Props> = ({ columns, data }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              { columns.map((col: any) => (
                <Th 
                  key={ col.id }
                  textAlign="center"
                >
                  { col.label }
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {data.map((item: any) => (
              <Tr key={ item.id }>
                { columns.map(col => {
                  return (
                    <Td
                      key={ col.id }
                      textAlign="center"
                    >
                      { item[col.id] }
                    </Td>
                  )
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MainTable