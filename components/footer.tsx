// import {
//   ArrowIcon,
//   GitHubIcon,
// } from 'components/icons';

import { GoMarkGithub } from "react-icons/go";
import { FiMail } from "react-icons/fi"
import { BsInstagram, BsLinkedin } from "react-icons/bs"

export default function Footer() {
  return (
    <div className='footer'>


      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/antonioclimbs"
            className="flex items-center gap-2"
          >
            <GoMarkGithub size={20} />
            {/* <p className="h-7">checkout my github</p> */}
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/antonio-jesus-ayala/"
          >
            <BsLinkedin size={20} />
            {/* <p className="h-7">email me</p> */}
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/ayala.photographs/"
          >
            <BsInstagram size={21} />
            {/* <p className="h-7">follow me on instagram</p> */}
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:ayala.antonio.jesus@gmail.com"
          >
            <FiMail size={22} />
            {/* <p className="h-7">email me</p> */}
          </a>
        </li>
      </ul>
    </div>
  )
}