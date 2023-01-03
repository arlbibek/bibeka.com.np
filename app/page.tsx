"use client";

import Image from "next/image";
import plants from "../public/images/plants.png";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen grid place-items-center text-center font-serif">
      <div className="transition-all duration-300">
        <Header />
        <Status />
        <Social />
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <header className="title grid place-items-center m-4 p-2">
      <Image
        className="pb-5"
        src={plants}
        alt="picture of a plant"
        width={100}
        height={100}
      />
      <h1 className="bg-gradient-to-r from-white to-my-yellow text-transparent bg-clip-text min-w-max text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="block py-4 text-2xl md:inline sm:text-3xl md:text-7xl lg:text-8xl">
          {"Hi, I'm "}
        </span>
        {"Bibek Aryal!"}
      </h1>
    </header>
  );
};

const Status = () => {
  const status = ["Making a world a better place with technology."];
  return (
    <div className="status text-xl md:text-2xl lg:text-3xl m-4 p-2">
      {status.map((item, index) => (
        <p key={index} className="py-2">
          <mark className="px-1 text-my-yellow bg-my-yellow/10 hover:bg-my-yellow/20 transition duration-300 rounded-md">
            {item}
          </mark>
        </p>
      ))}
    </div>
  );
};
const Social = () => {
  const links = [
    {
      title: "contact@bibeka.com.np",
      url: "mailto:contact@bibeka.com.np?subject=Hi, Bibek!",
    },
  ];
  return (
    <div className="social flex flex-wrap align-middle justify-center m-4 p-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url ? link.url : link.title}
          className="underline text-gray-400 px-2"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
