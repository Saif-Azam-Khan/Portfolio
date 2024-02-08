"use client";
import styles from "./Skills.module.scss";

const SKILLS = [
  { name: "React JS", proficiency: 90 },
  { name: "Node.js", proficiency: 85 },
  { name: "Express", proficiency: 80 },
  { name: "MySQL", proficiency: 75 },
  { name: "SQL", proficiency: 70 },
  { name: "JavaScript", proficiency: 95 },
  { name: "API", proficiency: 85 },
  { name: "Redux Library", proficiency: 80 },
  { name: "Python", proficiency: 85 },
  { name: "HTML and CSS", proficiency: 90 },
  { name: "Bootstrap CSS Framework", proficiency: 80 },
  { name: "MaterialUI", proficiency: 75 },
  { name: "MongoDB", proficiency: 85 },
  { name: "Next JS", proficiency: 80 },
  { name: "Unit testing (RTL/Jest)", proficiency: 85 },
  { name: "Accessibility", proficiency: 80 },
  { name: "NPM", proficiency: 90 },
  { name: "Yarn", proficiency: 85 },
  { name: "Bitbucket", proficiency: 80 },
  { name: "Thunk", proficiency: 75 },
  { name: "Saga", proficiency: 70 },
];

function Skills() {
  return (
    <div className={styles.container}>
      <ul>
        <h2>SKILLS</h2>
        {SKILLS.map((e, index) => (
          <>
            <li key={index} className={styles.skills}>
              {e.name}
            </li>
            <li
              key={e.name}
              className={styles.percentage}
              style={{ width: `${e.proficiency}%` }}
            >
              {e.proficiency}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
