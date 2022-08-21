import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import DepartmentTable from '../components/organisms/DepartmentTable '

type Props = {
  data: any
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
  const HOST = "https://nextjs-ts-pagination.vercel.app"
  const URL = HOST + "/api/departments";
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: {
      data: data.data
    }
  }
}

export default Home
