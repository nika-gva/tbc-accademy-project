import React, { useRef, useState } from "react";
import styles from "./questions.module.scss";
import questionsData from "../../../questions.json";
import { Link } from "react-router-dom/dist";
import Question from "../../containers/Question";

const Questions = () => {
  const [questions, setQuestons] = useState(questionsData);

  const [active, setActive] = useState(null);

  return (
    <section className={styles.questions}>
      <div className={styles.container}>
        <h1>ხშირად დასმული კითხვები</h1>
        <div className={styles.questionContainer}>
          {[0, 1, 2].map((index) => {
            const { question, answer } = questions[index];
            const formattedText = answer.replace(/\n/g, "<br />");

            return (
              <Question
                key={index}
                question={question}
                styles={styles}
                index={index}
                answer={formattedText}
                active={active}
                setActive={setActive}
              />
            );
          })}
        </div>

        <Link to="/usaid-faq">ყველა კითხვა</Link>
      </div>
    </section>
  );
};

export default Questions;
