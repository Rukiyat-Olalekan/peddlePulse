"use client";
import Link from "next/link";
import styles from "./BlogNav.module.css";

function layout() {
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
          <Link href="/about">about us</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/work">work with us</Link>
        </li>
      </ul>
    </header>
  );
}

export default layout;
