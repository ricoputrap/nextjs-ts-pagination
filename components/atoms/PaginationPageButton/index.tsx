import { Button } from '@chakra-ui/react';
import React from 'react'

type Props = {
  num: number;
}

const PaginationPageButton: React.FC<Props> = ({ num }) => {
  return (
    <Button>{ num }</Button>
  )
}

export default PaginationPageButton