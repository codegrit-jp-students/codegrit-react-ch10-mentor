/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled/macro';
import css from '@emotion/css/macro';
import { jsx } from '@emotion/core';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '30px',
  alignItems: 'center'
})

const Selections = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})

const QuizItemWrapper = styled.div({
  marginRight: 20,
  cursor: 'pointer',
  padding: '20px',
  backgroundColor: '#faf7ff',
  maxWidth: '200px',
  border: '2px solid #f9f9f9',
  borderRadius: '10px',
  ':hover': {
    border: '2px solid #B296F5'
  }
}, ({ selected }) => {
  const styles = [];
  if (selected) styles.push({ border: '2px solid #B296F5', })
  return styles
})

const QuizSelectorItem = ({ quizId, quiz, selected, selectQuiz }) => {
  return (
    <QuizItemWrapper 
      selected={selected}
      onClick={(e) => selectQuiz(quizId, e)}>
      <h4 css={{ fontSize: '1.1em', fontWeight: 'bold' }}>
        {quiz.title}
      </h4>
    </QuizItemWrapper>
  );
}

const QuizSelector = ({ quizzes, chosenQuizId, selectQuiz }) => {
  const quizSelectorItems = Object.keys(quizzes)
    .map((quizId) => {
      return <QuizSelectorItem 
        key={`quiz-selector-${quizId}`}
        quizId={quizId} 
        quiz={quizzes[quizId]}
        selected={quizId === chosenQuizId}
        selectQuiz={selectQuiz} />
    })
  return (
    <Wrapper>
      <h3 css={{ marginBottom: 20 }}>クイズを選んでください</h3>
      <Selections>
        {quizSelectorItems}
      </Selections>
    </Wrapper>
  );
}

export default QuizSelector;

