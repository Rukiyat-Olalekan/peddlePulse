"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

function layout() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [showMenuOptions, setShowMenuOptions] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenuOptions(!showMenuOptions);
    console.log("clicked!!!")
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${scrolling ? styles.active : ""}`}>
      <h1>
        <Link href="/">peddlepulse</Link>
      </h1>
      <ul>
        <li>
          <Link href="/solutions">solutions</Link>
        </li>
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
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        {showMenuOptions && (
          <ul className={styles.options}>
            <li>solutions</li>
            <li>blog</li>
            <li>about us</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default layout;
