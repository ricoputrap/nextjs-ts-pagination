import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { TableColumnType } from '../../../types/table.types';
import TablePagination from '../../molecules/TablePagination';

type Props = {
  columns: TableColumnType[];
  data: any[];
  page: number;
  pageTotal: number;
  seeNextPage: () => void;
  seePrevPage: () => void;
  seePage: (pageNum: number) => void;
}

const MainTable: React.FC<Props> = ({ 
  columns, data, page, pageTotal,
  seePrevPage, seeNextPage, seePage
}) => {
  return (
    <Box>
      <TableContainer borderRadius="10px">
        <Table variant="simple">
          <Thead background="cyan.100">
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

          <Tbody background="white">
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

      <TablePagination
        page={ page }
        pageTotal={ pageTotal }
        seeNextPage={ seeNextPage }
        seePrevPage={ seePrevPage }
        seePage={ seePage }
      />
    </Box>
  )
}

export default MainTable