"use client";

import Link from "next/link";

export default function Underdev(props) {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-slate-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl mb-8 font-semibold md:text-3xl">
            the page is under development.
          </p>
          <Link
            href={props.backto? props.backto : "/"}
            className="px-8 py-3 font-semibold rounded bg-violet-500 text-white  dark:text-gray-900"
          >
            Back to {props.backto? props.backto : "home"}
          </Link>
        </div>
      </div>
    </section>
  );
}
