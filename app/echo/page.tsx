import type { Metadata } from "next";
import EchoCreateClient from "./create/EchoCreateClient";

export const metadata: Metadata = {
  title: "Echo | Anonymous burn-after-reading message",
  description:
    "Create an anonymous, burn-after-reading message and share a one-time link. Optional blur/caution overlay and view/time expiration.",
};

export default function EchoHomePage() {
  return (
    <div className="dark:bg-slate-900 isolate">
      <main className="dark:text-gray-50">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#echoGradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="echoGradient"
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
          <div className="mx-auto max-w-3xl pt-16 pb-24 sm:pt-24">
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 dark:ring-gray-300/10 hover:ring-gray-900/20">
                <span className="text-gray-600 dark:text-gray-400">
                  Anonymous messages • burn-after-reading
                </span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                Echo
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Write a message, get a unique link, and share it. The reader can
                reveal it (consumes views) or destroy it without reading.
              </p>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Tip: Enable <span className="font-semibold">Blur with caution</span>{" "}
                  to show a warning overlay before the message is revealed.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <EchoCreateClient />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

