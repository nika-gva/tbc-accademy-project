import React, { useRef, useState } from "react";
import styles from "./questions.module.scss";
import { Link, useLocation } from "react-router-dom/dist";
import Question from "../../containers/Question";

const Questions = ({data, count}) => {
  const [active, setActive] = useState(null);

  const currentRoute = useLocation();

  return (
    <section className={styles.questions}>
      <div className={styles.container}>
        <h1>ხშირად დასმული კითხვები</h1>
        <div className={styles.questionContainer}>
          {data.map((questions,index) => {
            const { question, answer } = questions;
            const formattedText = answer.replace(/\n/g, "<br />");

            if(count === "all"){
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
            }else{
              if(index < 3){
                return(
                  <Question
                  key={index}
                  question={question}
                  styles={styles}
                  index={index}
                  answer={formattedText}
                  active={active}
                  setActive={setActive}
                />
                )
              }
            }
          })}
        </div>

        {currentRoute.pathname !== "/usaid-faq" && <Link to="/usaid-faq">ყველა კითხვა</Link>}
      </div>
    </section>
  );
};

export default Questions;
