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
    <div className={styles.navbar}>
      <nav
        className=""
        id="nav"
      >
        <div className={styles.mainheader}>
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

        <div className="">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = path === pathname;
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
        </div>
      </nav >
    </div >
  );
}