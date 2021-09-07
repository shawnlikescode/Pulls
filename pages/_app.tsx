import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    return (
        <SessionProvider session={session}>
            <Navbar />
            <Component {...pageProps} />
            <Toaster />
        </SessionProvider>
    );
};

export default App;
