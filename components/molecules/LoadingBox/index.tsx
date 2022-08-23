import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingBox: React.FC = () => {
  return (
    <Box
      position="absolute"
      left={0}
      top={0}
      width="100vw"
      height="100vh"
      zIndex={2}
      margin="0 !important"
      background="blackAlpha.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        thickness="4px"
        size="xl"
        emptyColor='gray.200'
        color='blue.500'
      />
    </Box>
  )
}

export default LoadingBox