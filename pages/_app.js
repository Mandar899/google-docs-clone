import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import '../styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
      {/* <div class='fixed z-50 bottom-2 right-2 bg-blue-100 text-blue-700 text-center font-semibold rounded-full py-2 w-20'>
        <span class='block md:hidden'>sm</span>
        <span class='hidden md:block lg:hidden'>md</span>
        <span class='hidden lg:block xl:hidden'>lg</span>
        <span class='hidden xl:block 2xl:hidden'>xl</span>
        <span class='hidden 2xl:block'>2xl</span>
      </div> */}
    </>
  );
}

export default MyApp;

//  "firebase": "^8.6.2"
