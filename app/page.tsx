import Link from "next/link";
import { pageData } from "./libs/data";
import Navbar from "./libs/Navbar";
import Whoweare from "./components/Whoweare";
import Whattheysay from "./components/Whattheysay";
import Whatittakes from "./components/Whatittakes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./page.module.css";

const links = [
  {
    id: "1",
    link: "/solutions",
    content: "all",
  },
  {
    id: "2",
    link: "/solutions",
    content: "marketing trends",
  },
  {
    id: "3",
    link: "/solutions",
    content: "content",
  },
  {
    id: "4",
    link: "/solutions",
    content: "social media",
  },
  {
    id: "5",
    link: "/solutions",
    content: "seo",
  },
  {
    id: "6",
    link: "/solutions",
    content: "email marketing",
  },
  {
    id: "7",
    link: "/solutions",
    content: "branding",
  },
  {
    id: "8",
    link: "/solutions",
    content: "case studies",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>categories</div>
        <div className={styles.lists}>
          <ul className={styles["content-lists"]}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.link}>{link.content}</Link>
                </li>
              );
            })}
          </ul>
          <ul className={styles["data-lists"]}>
            {pageData.map((data) => {
              return (
                <li className={styles["data-list"]} key={data.id}>
                  <Link href={data.link}>
                    <img src={data.imageUrl} />
                    <p className={styles.title}>{data.title}</p>
                    <div className={styles["author-container"]}>
                      <p>
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "rgb(147, 144, 144)", fontSize: 13 }}
                        />
                        <span>by {data.author}</span>
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faTag}
                          style={{ color: "rgb(147, 144, 144)", fontSize: 13 }}
                        />{" "}
                        <span>{data.description}</span>
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Whoweare />
        <Whattheysay />
        <Whatittakes />
      </main>
    </>
  );
}
