import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.cover}>
      <div className={styles.content}>
        <h2>ABOUT</h2>
        <p>
          I am a motivated and result-driven engineer with 3+ years of
          experience and having a logical sense of approach to any problem, I am
          seeking a better opportunity where my skills can be applied and where
          I can grow professionally.
        </p>
        <h2 className={styles.resume}>Download Resume</h2>
      </div>
    </div>
  );
}

export default About;
