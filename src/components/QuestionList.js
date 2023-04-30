import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, setQuestions }) {

  const questionsList = questions.map(question => <QuestionItem key={question.id} 
                                                                          question={question} 
                                                                          onDeleteQuestion={onDeleteQuestion}
                                                                          setQuestions={setQuestions}
                                                                          questions={questions}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
