import dynamic from "next/dynamic"
import Head from "next/head"
import { Fragment } from "react"

const Pages = dynamic(() => import('@/containers/index'), {ssr: false})

export default function Home(){
  return(
    <Fragment>
      <Head>
        <title>About Me</title>
      </Head>
      <Pages/>
    </Fragment>
  )
}