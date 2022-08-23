import { Button, Flex } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import PaginationPageButton from '../../atoms/PaginationPageButton';

type Props = {
  page: number;
  pageTotal: number;
  seeNextPage: () => Promise<void>;
  seePrevPage: () => Promise<void>;
}

const TablePagination: React.FC<Props> = ({ 
  page, pageTotal, 
  seeNextPage, seePrevPage
}) => {
  const pageNumbers: number[] = useMemo(() => {
    const pages: number[] = new Array<number>(pageTotal);
    for (let i = 0; i < pageTotal; i++) {
      pages[i] = i + 1;
    }

    return pages;
  }, [pageTotal]);

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
          {pageNumbers.map(num => (
            <PaginationPageButton key={num} num={num} />
          ))}
        </Flex>
        <Button onClick={ seeNextPage }>Next</Button>
      </Flex>
    </Flex>
  )
}

export default TablePagination