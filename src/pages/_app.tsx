import { AppProps } from 'next/app';
import React, { FC } from 'react';
import '../styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default App;
