import React, { useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Question = ({ question, answer, index , active,setActive, styles }) => {
  const answerHeight = useRef(null);
  const [openAnswerHeight, setOpenAnswerHeight] = useState("0px");

  const handleQuestion = (idx) => {
    setOpenAnswerHeight(answerHeight.current.offsetHeight + 60 + "px");
    if(active === idx){
      setActive(null)
    }else{
      setActive(idx)
    }
  };
  return (
    <div key={index} className={styles.question}>
      <div onClick={() => handleQuestion(index)}>
        <h1>{question}</h1>
        <MdArrowForwardIos
          className={styles.arrow}
          style={{
            rotate: active === index && "-90deg",
          }}
        />
      </div>
      <div
        className={styles.answer}
        style={{
          height: active===index && openAnswerHeight,
        }}
      >
        <p ref={answerHeight} dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
    </div>
  );
};

export default Question;
