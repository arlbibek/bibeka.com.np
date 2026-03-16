import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibek Aryal | Information Security & GRC Professional",
  description:
    "Information Security and GRC professional with 4+ years of experience in ISO/IEC 27001 implementation, cyber risk management, and security operations.",
  openGraph: {
    title: "Bibek Aryal | Information Security & GRC Professional",
    description:
      "Information Security and GRC professional with 4+ years of experience in ISO/IEC 27001 implementation, cyber risk management, and security operations.",
    url: "https://bibeka.com.np",
    type: "website",
  },
};

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
                  Information Security and GRC professional with{" "}
                  <span className="text-violet-400">4+ years</span> of
                  experience in ISO/IEC 27001 implementation, cyber risk
                  management, and security operations.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-center">
                  {/* Email */}
                  <a
                    href="mailto:bibek@duck.com?subject=Let%27s%20collaborate%21"
                    className="flex items-center gap-1.5 w-max rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    <span>bibek@duck.com</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/bibeknaryal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max inline-flex items-center gap-1.5 rounded-lg border border-indigo-500 px-3 py-1.5 text-sm font-semibold text-indigo-500 transition hover:bg-indigo-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.028-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.898 1.637-1.848 3.367-1.848 3.6 0 4.265 2.368 4.265 5.451v6.288zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.144 0 2.07.927 2.07 2.07 0 1.143-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                    <span>/ bibeknaryal</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/arlbibek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max inline-flex items-center gap-1.5 rounded-lg border border-indigo-500 px-3 py-1.5 text-sm font-semibold text-indigo-500 transition hover:bg-indigo-500 hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M12 0C5.371 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404 11.53 11.53 0 0 1 3.003.404c2.291-1.552 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.803 5.625-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.015 2.903-.015 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                    </svg>
                    <span>/ arlbibek</span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
            </div>
          </div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Bibek Aryal",
            url: "https://bibeka.com.np",
            jobTitle: "Information Security Officer",
            sameAs: [
              "https://www.linkedin.com/in/bibeknaryal",
              "https://github.com/arlbibek",
            ],
            email: "bibek@duck.com",
          }),
        }}
      />
    </div>
  );
}
