// NEXT
import Image from "next/image";
import Link from "next/link";

// Custom Components
import plants from "../public/plants.png";
import Head from "../Components/Head";

// CSS
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head />
      <div className={styles.main}>
        <header style={{ display: "none" }}>Bibek Aryal</header>
        <article>
          <Title />
          <Status />
          <Social />
        </article>
      </div>
    </>
  );
}

// HEADER

const Title = () => {
  return (
    <div className={styles.title}>
      <Image alt="plants" src={plants} width="100px" height="100px" />
      <h1 className="colorful">
        <span>{"Hi, I'm "}</span>
        {"Bibek Aryal!"}
      </h1>
    </div>
  );
};

// STATUS

const Status = () => {
  return (
    <div className={styles.status}>
      <div>
        <p>
          <mark>Making the world a better place with technology.</mark>
        </p>
      </div>
    </div>
  );
};

// SOCIAL

const SocialLink = (props) => {
  return (
    <div className={styles.link}>
      <Link href={props.href}>
        <a target={props.target} rel="noreferrer" title={props.title}>
          {props.name}
        </a>
      </Link>
    </div>
  );
};
const Social = () => {
  return (
    <div className={styles.social}>
      {/* <SocialLink
        name="GitHub"
        href="/github"
        title="Watch me on GitHub: arlbibek 👨‍💻"
        target="_blank"
      /> */}
      <SocialLink
        name="contact@bibeka.com.np"
        href="mailto:contact@bibeka.com.np?subject=Let's collaborate!&body= "
        title="Let's collaborate! 🤝"
      />
      {/* <SocialLink
        name="Misc"
        href="/misc"
        title="A Miscellaneous page with all kinds stuff 🙈"
      /> */}
    </div>
  );
};
