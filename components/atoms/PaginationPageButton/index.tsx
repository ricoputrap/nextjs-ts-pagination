import { Button } from '@chakra-ui/react';
import React, { useMemo } from 'react'

type Props = {
  num: number;
  isActive: boolean;
}

const PaginationPageButton: React.FC<Props> = ({ num, isActive }) => {
  const backgroundColor = useMemo(() => {
    return isActive ? "cyan.300" : "cyan.100"
  }, [isActive])

  return (
    <Button background={ backgroundColor }>
      { num }
    </Button>
  )
}

export default PaginationPageButton