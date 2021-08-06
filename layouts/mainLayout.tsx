import React from 'react'
import Head from 'next/head'

interface GeneralLayout {
  children: React.ReactNode | JSX.Element | JSX.Element[] | string;
}

const MainLayout: React.FC<GeneralLayout> = ({children}: GeneralLayout) => {
  return (
    <React.Fragment>
      <Head>
        <title>Next + WC Boilerplate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main style={{ width: '100%', overflow:'hidden'}}>{children}</main>
    </React.Fragment>
  )
}

export default MainLayout
