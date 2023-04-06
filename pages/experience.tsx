import type { Metadata } from 'next';
import Job from 'components/job';
import jobs from '../lib/descriptions.json'
import styles from '../styles/Home.module.css';
import Header from 'components/header';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn more about my past experience.',
};

export default function ExperiencePage() {
  const allJobs = [] as JSX.Element[];
  for (let i = 0; i < jobs.length; i++) {
    allJobs.push(Job(jobs[i]))
  }
  return (
    <>
      {/* <Head>
        <title>Antonio Jesus Ayala</title>
        <meta name="description" content="My experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <section className={styles.main}>
        <Header />
        <h1 className="font-bold text-5xl font-serif mb-5">Experience</h1>
        {allJobs}
      </section>
    </>
  );
}
