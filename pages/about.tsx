import type { Metadata } from 'next';
import Image from "next/image";
import { avatar } from "../lib/info";
import styles from '../styles/Home.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about me.',
};

export default function AboutPage() {
  return (
    <section className={styles.main}>
      <h1 className="font-bold text-5xl font-serif mb-5">About Me</h1>
      <div className={styles.about}>
        <section className='grid grid-rows-7 w-1/2'>
          <h1 className='font-bold text-4xl font-mono pb-4'>Hello, World!</h1>
          <p className="mb-5">
            My name is Antonio and I enjoy creating things that live on the internet. My interest in web development is driven by curiosity and passion. I thoroughly enjoy a challenge and want the end result to be stimulating.
          </p>
          <p className="mb-5">
            I’ve had the privilege of working with multiple agencies, allowing me to expand my skill set. From creating full-stack applications and websites to mentoring junior engineers, I’ve loved my time as a software engineer.
          </p>
          <p className="mb-5">
            My current focus is building accessible, interactive digital experiences for businesses, including a design studio, mailing service, and printing company.
          </p>
          <div className="mb-5">
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className='pt-5 grid grid-cols-2'>
              <li>- JavaScript (ES6+)</li>
              <li>- TypeScript</li>
              <li>- React</li>
              <li>- Next.js</li>
              <li>- Node.js</li>
              <li>- Python</li>
            </ul>
          </div>
        </section>
        <Image
          alt='Antonio Jesus Ayala'
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={500}
          priority
        />
      </div>
    </section >
  );
}
