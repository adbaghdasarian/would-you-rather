import React, { Component } from 'react'

import { connect } from 'react-redux'

import UnansweredQuestion from './UnansweredQuestion.js'

class QuestionPage extends Component {


  render () {

    const {id, hasAnswered} = this.props;
    console.log(hasAnswered);

    let unanswered = !hasAnswered;
    return (
      unanswered ?
      <div className='Question'>

        <UnansweredQuestion id={id} />

      </div> :

      <div>
        Results
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, props){

  const { id } = props.match.params;
  const question = questions.id;

  let userAnswers = users[authedUser].answers;

  //will be -1 if question is unanswered
  let hasAnswered = Object.keys(userAnswers).indexOf(id);

  return {
    authedUser,
    questions,
    question,
    hasAnswered: hasAnswered >= 0,
    id
  }
}

export default connect(mapStateToProps)(QuestionPage);