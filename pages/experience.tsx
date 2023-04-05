import type { Metadata } from 'next';
import Job from 'components/job';
import jobs from '../lib/descriptions.json'
import styles from '../styles/Home.module.css';

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
    <section className={styles.description}>
      <h1 className="font-bold text-5xl font-serif mb-5">Experience</h1>
      {allJobs}
    </section>
  );
}
