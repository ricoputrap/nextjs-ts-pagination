import { Box, Heading, Stack } from '@chakra-ui/react'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import DepartmentTable from '../components/organisms/DepartmentTable '
import { ResponseMultiple } from '../types/response.types'

type Props = {
  data: ResponseMultiple
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Box>
      <Head>
        <title>Departments</title>
        <meta name="description" content="A simple way of displaying data using server-side pagination fully coded in Next JS, TypeScript, and Chakra UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Box
          width={{ base: "660px", lg: "764px" }}
          background="gray.100"
          paddingX="20px"
          paddingY="40px"
          borderRadius="10px"
        >
          <Stack>
            <Heading size="lg" textAlign="center" marginBottom="20px">
              Data Table using Pagination + useSWR
            </Heading>
            <DepartmentTable data={ data } />
          </Stack>
        </Box>
      </main>

      <footer>
        
      </footer>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const HOST: string = process.env.NEXT_PUBLIC_HOST || "";
  const URL: string = HOST + "/api/departments";
  const res: Response = await fetch(URL);
  const data: ResponseMultiple = await res.json();

  const props: Props = {
    data
  }

  return { props }
}

export default Home
