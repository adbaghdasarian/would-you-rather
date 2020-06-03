import { _saveQuestion as saveQuestion } from '../_DATA.js'
import { _saveQuestionAnswer as saveAnswer } from '../_DATA.js'
import { showLoading, hideLoading } from 'react-redux-loading'

import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION} from './types.js';




export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


function answerQuestion({ qid, authedUser, answer}){

  return{
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function handleAnswerQuestion(qid, answer){

  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveAnswer({
      authedUser,
      qid,
      answer
    }).then(() => dispatch(answerQuestion({qid, authedUser, answer})))
      .then(() => dispatch(hideLoading()));
  }
}



function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}


export function handleAddQuestion (text1, text2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    //console.log(text1, text2);

    return saveQuestion({
      optionOneText: text1,
      optionTwoText: text2,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}