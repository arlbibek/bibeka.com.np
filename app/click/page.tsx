import type { Metadata } from "next";
import ClickClient from "./ClickClient";
import { getGlobalClickCount } from "../../lib/click/actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Click | Bibek Aryal",
  description:
    "A single button that counts real mouse clicks. No text, no tricks—just a tiny fun counter.",
};

export default async function ClickPage() {
  const initialCount = await getGlobalClickCount();

  return (
    <div className="dark:bg-slate-900 isolate min-h-screen">
      <main className="dark:text-gray-50">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#clickGradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="clickGradient"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#60A5FA" />
                <stop offset={1} stopColor="#A78BFA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-24 pb-24 sm:pt-40">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                Click.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                One button. Mouse only. That’s the whole page.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-md">
                <ClickClient initialCount={initialCount} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

