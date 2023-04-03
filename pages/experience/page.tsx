import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn more about my past experience.',
};

export default async function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif mb-5">Experience</h1>
      <p>create a new component to reuse for all experiences</p>
      <p>this can be looped through if desired/needed</p>
    </section>
  );
}
