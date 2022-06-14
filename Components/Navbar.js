// NEXT
import Link from "next/link";

// CSS
import styles from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">🏡 Home</Link>
        </li>
        <li>
          <Link href="/misc">🎈 Misc</Link>
        </li>
      </ul>
    </nav>
  );
}
