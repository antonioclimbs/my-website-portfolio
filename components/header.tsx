'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/experience': {
    name: 'Experience',
  },
  '/contact': {
    name: 'Contact',
  },
};

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.mainheader}>
        <Link href='/' className='flex'>
          <p className='text-xl font-medium'>
            Antonio Jesus Ayala
          </p>
        </Link>
        <span>
          Software Engineer and Web Developer
        </span>
      </div>

      <section className=''>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className=""
            >
              <span className={styles.paths}>
                {name}
              </span>
            </Link>
          );
        })}
      </section>
    </nav >
  );
}