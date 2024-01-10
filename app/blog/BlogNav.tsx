"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./BlogNav.module.css";

function layout() {
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
      </ul>{" "}
      <div className={styles.menu}>
        <button onClick={handleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
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
            <li>
                <Link href="/work">work with us</Link>
              </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default layout;
