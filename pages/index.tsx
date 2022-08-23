import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import DepartmentTable from '../components/organisms/DepartmentTable '
import useDepartmentTable from '../hooks/useDepartmentTable'
import { ResponseMultiple } from '../types/response.types'

type Props = {
  data: ResponseMultiple
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Departments</title>
        <meta name="description" content="A simple way of displaying data using server-side pagination fully coded in Next JS, TypeScript, and Chakra UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DepartmentTable data={ data } />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const HOST: string = process.env.HOST || "";
  const URL: string = HOST + "/api/departments";
  const res: Response = await fetch(URL);
  const data: ResponseMultiple = await res.json();

  const props: Props = {
    data
  }

  return { props }
}

export default Home
