import { Button } from '@chakra-ui/react';
import React from 'react'

type Props = {
  num: number;
  isActive: boolean;
  seePage: (pageNum: number) => Promise<void>;
}

const PaginationPageButton: React.FC<Props> = ({ 
  num, isActive, seePage 
}) => (
  <Button
    background="cyan.100"
    isActive={ isActive }
    onClick={() => seePage(num)}
  >
    { num }
  </Button>
)

export default PaginationPageButton