import '../styles/globals.scss'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/client';
import React from "react";

const MyApp:React.FC<AppProps> = (props:AppProps) => {
  const { Component, pageProps} = props;
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
  
}

export default MyApp
