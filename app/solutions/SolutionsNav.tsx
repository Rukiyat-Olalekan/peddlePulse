"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./SolutionsNav.module.css";

// const companies = [
//   "Check the componies we've worked for",
//   "see what they are saying about us",
// ];

function SolutionsNav() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenuOptions(!showMenuOptions);
    if (showMenuOptions) {
      setMenuIsActive(true);
    } else {
      setMenuIsActive(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
      setShowMenuOptions(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className={styles.menu}>
          <button onClick={handleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              style={{ color: "white" }}
              className={styles.icon}
            />
          </button>
          {showMenuOptions && (
            <ul
              className={`${styles.options} ${
                menuIsActive ? styles["menu-active"] : ""
              }`}
            >
              <li>
                <Link href="/solutions">solutions</Link>
              </li>
              <li>
                <Link href="/blog">blog</Link>
              </li>
              <li>
                <Link href="/about">about us</Link>
              </li>
            </ul>
          )}
        </div>
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
