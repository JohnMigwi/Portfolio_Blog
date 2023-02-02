import React,{ useEffect, useState } from 'react';
import { layout } from '../components';
import '../styles/globals.scss';

import Layout from '../components/layout';




function MyApp({ Component, pageProps } ) {
  return(
    <Layout>
      <Component {...pageProps} />
      </Layout>

  ) 
}

export default MyApp
