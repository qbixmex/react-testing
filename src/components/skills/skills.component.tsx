import { useEffect, useState } from "react";
import { type SkillsProps } from "./skills";

const Skills = ({ skills }: SkillsProps) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  
  return (
    <>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>

      {
        isLoggedIn ? (
          <p>You're logged in!</p>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }

    </>
  );
};

export default Skills;