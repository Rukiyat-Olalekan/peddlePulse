import Link from "next/link";
import styles from "./SolutionsNav.module.css";

// const companies = [
//   "Check the componies we've worked for",
//   "see what they are saying about us",
// ];

function SolutionsNav() {
  return (
    <header className={styles.header}>
      <nav className={styles["solution-header"]}>
        <h3>
          <Link href="/">peddlePulse</Link>
        </h3>
        <ul className={styles["middle-header"]}>
          <li>
            {" "}
            <Link href="/blog">blog</Link>
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
      </nav>
      {/* <p>
        {companies.map((index, company) => {
          return <p key={index}>{company}</p>;
        })}
      </p> */}
    </header>
  );
}

export default SolutionsNav;
