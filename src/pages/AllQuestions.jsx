import React, { useState } from "react";
import Questions from "../components/questions/Questions";
import data from "../../questions.json"

const AllQuestions = () => {
  return (
    <Questions data={data} count="all"/>
  );
};

export default AllQuestions;
