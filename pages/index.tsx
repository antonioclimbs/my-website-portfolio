import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { name, about, bio, tagline, avatar } from '../lib/info';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Antonio Jesus Ayala</title>
        <meta name="description" content="Software developer and website designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`antialiased max-w-4xl mb-40 flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto`}>
        <section>
          <p className="max-w-[600px] textxl pb-3">
            Hi, my name is
          </p>
          <h1 className="font-bold text-5xl font-serif">{name}</h1>
          <h2 className="font-bold text-2xl mb-3 mt-4 max-w-[600px]">
            {tagline()}
          </h2>
          <h3 className="font-bold my-3 max-w-[460px] text-xl">
            {about()}
          </h3>
          <p className="my-5 w-full text-xl">
            {bio()}
          </p>
          <div className='text-xl font-medium'>
            <Link className={''} href='/about'>
              <button className='mr-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>About</button>
            </Link>
            <Link className={''} href='/experience'>
              <button className='m-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>Experience</button>
            </Link>
            <Link className={''} href='/contact'>
              <button className='m-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded'>Contact</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

