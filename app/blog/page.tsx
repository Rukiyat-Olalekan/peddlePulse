import styles from "./page.module.css";
import Link from "next/link";
import BlogNav from "./BlogNav";
import { pageData } from "../libs/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function page() {
  return (
    <section className={styles.blog}>
      <BlogNav />
      <div className={styles["blog-div"]}>
        <div className={styles["blog-lists"]}>
          <h3 className={styles.pulse}>Peddle pulse blog</h3>
          <ul className={styles["data-lists"]}>
            {pageData.map((data) => {
              return (
                <li className={styles["data-list"]} key={data.id}>
                  <div className={styles.image}>
                    <img src={data.imageUrl} />
                  </div>
                  <div className={styles.container}>
                    <h3>{data.title}</h3>
                    <div className={styles["author-container"]}>
                      <p className={styles.author}>
                        By {data.author} ▪︎ 24 Nov 2023
                      </p>
                      <p className={styles.description}>{data.article}</p>
                    </div>
                    <button className={styles.button}>
                      <p className={styles["article-para"]}>
                        <Link href={data.links}>Read Article</Link>
                        <span className={styles.space}>
                          <FontAwesomeIcon
                            icon={faGreaterThan}
                            className={styles["article-icon"]}
                          />
                          <FontAwesomeIcon
                            icon={faGreaterThan}
                            className={styles["article-icon"]}
                          />
                        </span>
                      </p>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.search}>
          <div className={styles["search-container"]}>
            <input type="text" placeholder="Search the Blog" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <h3>Browse by Topic</h3>
          <ul>
            <li>
              <Link href="/blog/blog-post-one">Social Media</Link>
            </li>
            <li>
              <Link href="/blog/blog-post-one">Search Engine Optimization</Link>
            </li>
            <li>
              <Link href="/blog/blog-post-one">Marketing</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default page;
