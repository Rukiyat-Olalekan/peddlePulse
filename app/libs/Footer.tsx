import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const icons = [faTwitter, faLinkedin, faInstagram, faFacebook];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}><Link href="/">PeddlePulse</Link></div>
      <div className={styles.icons}>
        {icons.map((icon, index) => {
          return <FontAwesomeIcon key={index} icon={icon} size="2x" />;
        })}
      </div>
    </footer>
  );
}

export default Footer;
