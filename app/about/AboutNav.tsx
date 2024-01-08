
import Link from "next/link";
import styles from "./AboutNav.module.css";

function AboutNav() {
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
      </ul>
      <ul>
        <li><Link href="/work">work with us</Link></li>
      </ul>
    </header>
  );
}

export default AboutNav;