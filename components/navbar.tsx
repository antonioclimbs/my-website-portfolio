'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/experience': {
    name: 'experience',
  },
  '/contact': {
    name: 'contact',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/experience/')) {
    pathname = '/experience';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-col md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                // className={clsx(
                //   'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                //   {
                //     'text-neutral-500': !isActive,
                //     'font-bold': isActive,
                //   }
                // )}
                >
                  <span className="relative py-[5px] px-[10px]">
                    {name}
                    {/* {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null} */}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
        {/* </LayoutGroup> */}
      </div>
    </aside>
  );
}
