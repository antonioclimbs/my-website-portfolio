'use client';

import { usePathname } from 'next/navigation';
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
  let pathname = usePathname() || '/';
  return (
    <div className="lg:sticky lg:top-20">
      <nav
        className="relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className={styles.description}>
          <Link href='/'>
            <p className='text-xl font-medium'>
              Antonio Jesus Ayala
              {/* <span className='text-l'> and </span>
            <code className={styles.code}>Software Engineer</code> */}
            </p>
          </Link>
          <div>
            Software Engineer and Web Developer
          </div>
        </div>

        <div className="w-full space-x-0 pr-10 mb-2 mt-2 md:mt-0">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                href={path}
                className={styles.description}
              >
                <span className="relative py-[5px] px-[10px]">
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav >
    </div >
  );
}