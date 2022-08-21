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
  const { initData } = useDepartmentTable();

  useEffect(() => {
    if (!!data) initData(data);
  }, [data, initData]);

  return (
    <div>
      <Head>
        <title>Departments</title>
        <meta name="description" content="A simple way of displaying data using server-side pagination fully coded in Next JS, TypeScript, and Chakra UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DepartmentTable />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const HOST: string = "https://nextjs-ts-pagination.vercel.app"
  const URL: string = HOST + "/api/departments";
  const res: Response = await fetch(URL);
  const data: ResponseMultiple = await res.json();

  const props: Props = {
    data
  }

  return { props }
}

export default Home
