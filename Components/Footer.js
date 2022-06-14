// NEXT Components
import Link from "next/link";
import Image from "next/image";

// My Components
import favicon from "../public/favicon.png";

// CSS
import styles from "./Footer.module.css";

function ScrollToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.scroll}>
      <a title="Scroll back to top" onClick={() => scrollTop()}>
        back to top
      </a>
    </div>
  );
}

const NavLink = (props) => {
  return (
    <li>
      <Link href={props.href}>
        <a
          title={props.title}
          target={props._blank ? "_blank" : "_self"}
          rel={props._blank && "noreferrer"}
        >
          {props.children}
        </a>
      </Link>
    </li>
  );
};

function FooterNav() {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <NavLink href="/" title="Home">
            Home
          </NavLink>
          <NavLink href="/misc" title="Misc">
            Misc
          </NavLink>
          <NavLink href="/github" _blank title="Watch me on github: arlbibek">
            GitHub
          </NavLink>
          <NavLink href="/youtube" _blank title="Youtube">
            YouTube
          </NavLink>
          <li>
            <a
              href="mailto:contact@bibeka.com.np?subject=Let's collaborate!"
              className={styles.sup}
              title="Let's collaborate!"
            >
              contact@bibeka.com.np
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      {props.scroll && <ScrollToTop />}
      {!props.nologo && (
        <div className={styles.main}>
          <Image
            alt="Yellow Swastika 🦢"
            src={favicon}
            width="50rem"
            height="50rem"
          />
          <p>&copy;{new Date().getFullYear()} Bibek Aryal</p>
          <center></center>
        </div>
      )}
      {props.nav && <FooterNav />}
      {props.madeby && <MadeBy />}
    </footer>
  );
}

const MadeBy = () => {
  return (
    <>
      <hr />
      <div style={{ padding: ".5rem" }}>
        Made with ❤️ by <a href="https://bibeka.com.np/">Bibek Aryal</a>.
      </div>
    </>
  );
};
