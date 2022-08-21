import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import DepartmentProvider from '../context/DepartmentProvider';

const theme = extendTheme({
  fonts: {
    heading: `'Fira Code', monospace`,
    body: `'Fira Code', monospace`
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ theme }>
      <DepartmentProvider>
        <Component {...pageProps} />
      </DepartmentProvider>
    </ChakraProvider>
  )
}

export default MyApp
