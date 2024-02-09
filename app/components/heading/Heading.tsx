import styles from "./Heading.module.scss";

function Heading() {
  return (
    <div className={styles.cover} id="heading">
      <h1 className={styles.name}>Saif Azam Khan</h1>
      <h2 className={styles.profile}>UI Developer</h2>
      <h3 className={styles.description}>Portfolio</h3>
    </div>
  );
}

export default Heading;
