"use client";

import Link from "next/link";
import Slider from "../components/slider";

export default function Home() {
  return (
    <div className=" dark:bg-slate-900 isolate">
      <main className="dark:text-gray-50">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 dark:ring-gray-300/10 hover:ring-gray-900/20">
                  <span className="text-gray-600 dark:text-gray-400">
                    Projects I am proud of{" "}
                    <Link
                      href="/projects"
                      className="font-semibold text-indigo-600 dark:text-indigo-500"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      /projects
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-6xl font-bold tracking-tight sm:text-center">
                  <span className="text-3xl sm:text-6xl sm:pt-0">
                    {"Hi, I'm "}
                  </span>
                  <br className="block sm:hidden" />
                  {"Bibek Aryal!"}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-center">
                  Skilled IT professional with experience in networking,
                  security, and programming. Seeking an entry-level position to
                  utilize my technical skills and continue learning in the
                  field.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center">
                  <a
                    href="mailto:contact@bibeka.com.np?subject=Let's collobrate!"
                    className="w-max inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    contact@bibeka.com.np
                  </a>
                  <Slider />
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
