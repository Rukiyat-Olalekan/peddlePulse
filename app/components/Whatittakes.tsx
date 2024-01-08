import Link from "next/link";
import styles from "./Whatittakes.module.css";

function Whatittakes() {
  return (
      <div className={styles.contact}>
        <h2>We have what it takes</h2>
        <p>Let's work together</p>
        <button>
          <Link href="/work">Contact?</Link>
        </button>
      </div>
  );
}

export default Whatittakes;
