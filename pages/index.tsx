import type { NextPage } from 'next'
import Head from 'next/head'
import MainTable from '../components/organisms/MainTable'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Departments</title>
        <meta name="description" content="A simple way of displaying data using server-side pagination fully coded in Next JS, TypeScript, and Chakra UI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainTable />
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
