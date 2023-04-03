'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { BsTextarea } from 'react-icons/bs';
const to_email = process.env.TO_EMAIL;

export default function Form() {
  /*
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.namedItem('name') as HTMLInputElement;

    name.value = '';

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }
  */
  return (
    <div className="md:w-auto text-l text-black">
      <form target="_blank" action={`https://formsubmit.co/${to_email}`} method="POST">
        <div className='grid md:w-auto'>
          <div className='mb-5 flex'>
            <input
              type="text"
              name="name"
              className="border-solid border-orange-100 bg-orange-50 p-2 px-2 rounded mr-10 w-1/2"
              placeholder="Full Name"
              required>
            </input>
            <input
              type="email"
              name="email"
              className="border-solid border-orange-100 bg-orange-50 p-2 px-2 rounded text-black-800 w-1/2"
              placeholder="Email" required>
            </input>
          </div>
          <textarea
            placeholder="Your Message"
            rows={8}
            className="border-solid border-orange-100 bg-orange-50 p-2 px-2 rounded resize"
            name="message"
            required>
          </textarea>
        </div>
        <button
          type="submit"
          className='mt-5 border-solid border-2 border-orange-100 bg-orange-100 p-5 px-8 rounded text-black text-xl font-medium'>
          Submit Form
        </button>
      </form>
    </div >
  )
  /*
  return (
    <form
      style={{ opacity: !isMutating ? 1 : 0.7 }}
      className="relative max-w-[500px] text-sm"
      onSubmit={onSubmit}
    >
      <input
        aria-label="Your email"
        placeholder="Your email..."
        disabled={isPending}
        name="email"
        type="email"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <input
        aria-label="Your message"
        placeholder="Your message..."
        disabled={isPending}
        name="entry"
        type="text"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={isMutating}
        type="submit"
      >
        Sign
      </button>
    </form>
  );
  */
}
