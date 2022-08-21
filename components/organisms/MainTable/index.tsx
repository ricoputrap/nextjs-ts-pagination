import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const MainTable: React.FC = () => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">PIC</Th>
              <Th textAlign="center">Supervisor</Th>
              <Th textAlign="center">Members</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td textAlign="center">Engineering</Td>
              <Td textAlign="center">Alex</Td>
              <Td textAlign="center">Rico</Td>
              <Td textAlign="center">12</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MainTable