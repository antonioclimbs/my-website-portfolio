import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h4 className={styles.description}>
          Hi, my name is
        </h4>
        <br></br>
        <h1 className='text-5xl font-mono font-bold pb-8'>
          Antonio Jesus Ayala
        </h1>
        <h2 className='text-3xl font-medium font-serif'>
          I build your applications and websites
        </h2>
        <br></br>
        <h3 className={styles.description}>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, interactive applications and websites for companies to promote business.
        </h3>
      </div>

      <div className={styles.grid}>
        <Link
          href="/about"
          className={styles.card}
        >
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn a little about me and some of the technologies that I've been working with recently.
          </p>
        </Link>
        <Link
          href="/experience"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Experience <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            See what projects I've worked on, the different tech I've used, and how I've contributed to the company.
          </p>
        </Link>
        <Link
          href="/contact"
          className={styles.card}
        >
          <h2 className={inter.className}>
            Contact <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Get in contact with me and let's discuss how we can work together towards creating something exciting.
          </p>
        </Link>
        {/*
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </a>*/}
      </div>
    </main >
  )
}
