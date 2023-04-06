import type { Metadata } from 'next';
import Form from './contact/form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in contact with me.',
};

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <section className='w-6xl'>
      <h1 className="font-bold text-5xl font-serif mb-5">Contact</h1>
      <p>include phone number for easy access</p>
      <Form />
    </section>
  );
}
