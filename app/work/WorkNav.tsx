
import Link from "next/link";
import styles from "./WorkNav.module.css";

function WorkNav() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">peddlepulse</Link>
      </h1>
      <ul>
        <li>
          <Link href="/solutions">solutions</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </header>
  );
}

export default WorkNav;