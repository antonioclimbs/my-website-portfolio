import Image from "next/image";
import { avatar } from "../lib/info";
import styles from '../styles/Home.module.css';

export default function AboutPage() {
  return (
    <section className={styles.main}>
      <h1 className="font-bold text-5xl font-serif">About Me</h1>
      <br></br>
      <p className="my-5">
        My name is Antonio and I enjoy creating things that live on the internet. My interest in web development is driven by curiosity and passion. I thoroughly enjoy a challenge and want the end result to be stimulating.
        <br></br>
        <br></br>
        I’ve had the privilege of working with multiple agencies, allowing me to expand my skill set. From creating full-stack applications and websites to mentoring junior engineers, I’ve loved my time as a software engineer.
        <br></br>
        <br></br>
        My current focus is building accessible, interactive digital experiences for businesses, including a design studio, mailing service, and printing company.
      </p>
      <Image
        alt='Antonio Jesus Ayala'
        className="rounded-full"
        src={avatar}
        placeholder="blur"
        width={500}
        priority
      />
      <br></br>
    </section>
  );
}
