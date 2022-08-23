import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
  seeNextPage: () => Promise<void>;
  seePrevPage: () => Promise<void>;
}

const TablePagination: React.FC<Props> = ({ seeNextPage, seePrevPage }) => {
  
  return (
    <Flex justifyContent="center">
      <Flex
        columnGap="20px"
        background="cyan.50"
        padding="8px"
        marginTop="8px"
        borderRadius="4px"
      >
        <Button onClick={ seePrevPage }>Prev</Button>
        <Flex columnGap="4px">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </Flex>
        <Button onClick={ seeNextPage }>Next</Button>
      </Flex>
    </Flex>
  )
}

export default TablePagination