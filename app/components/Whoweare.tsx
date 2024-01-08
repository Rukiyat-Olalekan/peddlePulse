"use client";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import styles from "./Whoweare.module.css";

const intros = [
  {
    id: "1",
    title: "seo",
    description:
      "The secret to higher search engine rankings is pretty cut-and-dry: a consistent SEO strategy. Our combined, high-quality SEO services - keyword analysis and content startegy, On-Site SEO and Off-Site SEo - will assure a long-lasting growth of your site's traffic",
    list: ["Organic Search", "Credibility and Trust", "Better User Experience", "Cost Effective", "More Traffic"],
  },
  {
    id: "2",
    title: "Paid media",
    description:
      "It is a rapid and effficient method to target exactly those who are looking for your goods or services. Whether your focus is to reach large audiences or those based on precise criteria - PeddlePulse is a one-stop-shop for your fast online growth.",
    list: ["Reach Larger Audience", "Target Ideal Customers", "Gain New Customers", "Promote Quality Contents"],
  },
  {
    id: "3",
    title: "content management",
    description:
      "Our exceptional content writing services stand on the fundamentals of quality, professionalism, experience and affordability. Creating SEO friendly evergreen content for your blog and building links in popular websites with your unique content is a cost-effective way to boost your traffic and gain new leads.",
    list: ["Collect Content", "Create Content", "Edit Content", "Publish Content", "Manage Content"],
  },
  {
    id: "4",
    title: "digital strategy development",
    description:
      "Whatever stage your business is at, PeddlePulse professionals will meet you there. With years of experience we have the resources and know-how to help companies of any size. Work directly with digital marketing experts to craft the strategy that's best suited for your business.",
    list: ["Product Improvement", "Large Market Share", "Positive Customer Response"],
  },
];

function Whoweare() {
  const [hoveredPages, setHoveredPages] = useState(Array(intros.length).fill(false));

  const handleHover = (index: number) => {
    const updatedHoveredPages = [...hoveredPages];
    updatedHoveredPages[index] = true;
    setHoveredPages(updatedHoveredPages);
  };

  const handleLeave = (index: number) => {
    const updatedHoveredPages = [...hoveredPages];
    updatedHoveredPages[index] = false;
    setHoveredPages(updatedHoveredPages);
  };

  return (
    <div className={styles.whoweare}>
      <h2>The PeddlePulse Way</h2>
      <ul className={styles.introduction}>
        {intros.map((intro, index) => {
          return (
            <li
              className={`${styles.intro} ${hoveredPages[index] ? styles.active : ""}`}
              key={intro.id}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              {hoveredPages[index] ? (
                <div className={styles["intro-list"]}>{intro.list.map(item => <div key={item}><FontAwesomeIcon icon={faCircleDot} style={{color: "black"}} size="2xs" /> {item}</div>)}</div>
              ) : (
                <div className={styles.details}>
                  <h4>{intro.title}</h4>
                  <p>{intro.description}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Whoweare;