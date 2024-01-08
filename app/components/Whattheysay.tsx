"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import styles from "./Whattheysay.module.css";

const reviews = [
  {
    id: "1",
    name: " Jeff Bradley",
    image:
      "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=QjqBIsnahW5txrKJeIqLq53-b1PeYuSlG-zTAD1xsu4=",
    role: "Co-Founder, HMV Homes",
    review:
      "We have had a pleasure working with Peddle Pulse. Extremely passionate and energetic from the start we have seen a huge increase in our online engagement through working alongside Peddle Pulse to create short form video content that aligns with our brand.",
  },
  {
    id: "2",
    name: "Laura Clear",
    image:
      "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=QjqBIsnahW5txrKJeIqLq53-b1PeYuSlG-zTAD1xsu4=",
    role: "Co-Owner, Clear Holdings",
    review:
      "We had a brilliant experience working with Peddle Pulse, Ridwan and his team are true professionals. The quality of their work, their ability to work towards timelines and the creative input that they offered during the entire process was above and beyond the industry norm.",
  },
  {
    id: "3",
    name: "Rachel Hemmingsway",
    image:
      "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=QjqBIsnahW5txrKJeIqLq53-b1PeYuSlG-zTAD1xsu4=",
    role: "Human Resource, Our Garden Gradens",
    review:
      "The Peddle Pulse team are so easy to work with, super supportive of your company's goals, and most importantly shoot and cut great content! Couldn't recommend more highly.",
  },
  {
    id: "4",
    name: "Codrio Sandez",
    image:
      "https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=QjqBIsnahW5txrKJeIqLq53-b1PeYuSlG-zTAD1xsu4=",
    role: "Co-Owner, Sandez Media ",
    review:
      "The best in the business. An absolute pleasure to work with, highly professional, but a lot of fun too. Cannot recommend enough.",
  },
];

function Whattheysay() {
  const [userReviewIndex, setUserReviewIndex] = useState(0);

  function reviewHandler() {
    setUserReviewIndex((prevState) => (prevState + 1) % reviews.length);
  }

  return (
    <div className={styles.container}>
      <h2>What People Are Saying About Us</h2>
      <div className={styles["review-block"]}>
        <div>
          <div className={styles.stars}>
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#ffe234" }}
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#ffe234" }}
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#ffe234" }}
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "#ffe234" }}
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              size="2xs"
              style={{ color: "	#ffe234" }}
            />{" "}
          </div>
          <p className={styles.reviews}>{reviews[userReviewIndex].review}</p>
        </div>
        <div className={styles["profile-container"]}>
          <div className={styles.icon} onClick={reviewHandler}>
            <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
          </div>
          <div className={styles.profile}>
            <div className={styles.image}>
              <img src={reviews[userReviewIndex].image} />
            </div>
            <div className={styles["user-info"]}>
              <p className={styles.bold}>{reviews[userReviewIndex].name}</p>
              <p>{reviews[userReviewIndex].role}</p>
            </div>
          </div>
          <div className={styles.icon} onClick={reviewHandler}>
            <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
          </div>
        </div>
        <div className={styles.stars}>
          {reviews.map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faCircle}
              size="2xs"
              style={{ color: index <= userReviewIndex ? "#ffe234" : "" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whattheysay;
