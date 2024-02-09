import styles from "./page.module.css";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Heading />
      <br></br>
      <br></br>
      <About />
      <br></br>
      <br></br>
      <Skills />
      <br></br>
      <br></br>
      <Experience />
    </main>
  );
}
