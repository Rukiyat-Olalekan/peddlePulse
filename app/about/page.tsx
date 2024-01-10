import AboutNav from "./AboutNav";
import Whatittakes from "../components/Whatittakes";
import styles from "./page.module.css";

const headers = ["Diverse", "Experienced", "Ambitious"];

function page() {
  return (
    <>
      <AboutNav />
      <section className={styles.about}>
        <div className={styles["about-intro"]}>
          <div className={styles.header}>
            <ul>
              {headers.map((header, index) => {
                return (
                  <li key={index} className={styles["header-list"]}>
                    {header}
                  </li>
                );
              })}
            </ul>
            <p className={styles.para}>
              We are an award-winning agency trusted by ambitious brands for our
              results-driven approach and creative thinking.
            </p>
          </div>
          <div className={styles["video-div"]}>
            {" "}
            <video
              width="700"
              height="360"
              controls
              autoPlay
              className={styles.video}
            >
              <source
                src="https://media.istockphoto.com/id/1399089176/video/businessman-explains-project-ideas-during-virtual-event.mp4?s=mp4-640x640-is&k=20&c=dw06uRMHNqTvrC8luDtYZ8pmaCr_d0YS6n3G9Wjm3Wo="
                type=""
              />
              Your browser does not support the vidoe tag.
            </video>
          </div>
        </div>
        <Whatittakes />
      </section>
    </>
  );
}

export default page;
