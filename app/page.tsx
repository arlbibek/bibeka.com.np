"use client";

import Link from "next/link";

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
              <div className="sm:mb-8 sm:flex sm:justify-center">
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
                  A cybersecurity and GRC-focused IT professional with a strong
                  foundation in networking and information security. Making
                  world a better place with technology.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center">
                  <a
                    href="mailto:bibek@bibeka.com.np?subject=Let's collaborate!"
                    className="w-max inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    bibek@bibeka.com.np
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bibeknaryal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#0077B5] px-4 py-1.5 text-base font-semibold text-[#0077B5] transition hover:bg-[#0077B5] hover:text-white"
                  >
                    {/* LinkedIn Logo (SVG) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.898 1.637-1.848 3.367-1.848 3.6 0 4.265 2.368 4.265 5.451v6.288zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.144 0 2.07.927 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>

                    <span>bibeknaryal</span>
                  </a>
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
