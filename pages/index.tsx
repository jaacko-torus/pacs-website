import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import UnderConstruction from "./UnderContruction"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PACS LLC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </>
  )
}

const UnderConstruction1: NextPage = (props: any) => <UnderConstruction {...props}/>
export default UnderConstruction1

// export default Home
