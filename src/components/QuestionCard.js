import React, { Component } from 'react'

import { connect } from 'react-redux'

import { formatQuestion }  from '../utils/_DATA'

class QuestionCard extends Component {
  render() {
    //console.log(this.props)
    const { question, author} = this.props;

    if (question === null) {
      return <p> This Question doesn't exist </p>
    }

    console.log(author.avatarURL);
    return (
      <div className='question-card'>
        <div className='qcard-header'>
          {author.name} asks:
        </div>
        <img
          src={author.avatarURL}
          alt={`avatar of ${author.name}`}
          className='avatar'
        />
        <div className='question-summary'>
          <strong> Would You Rather</strong>
          <br/>
          <span>...{question.optionOne.text.slice(0,15)}...</span>
          <br/>
          <button> View Poll</button>
        </div>

      </div>
    )


  }
}


function mapStateToProps ({authedUser, users, questions}, {id}) {

  let userAnswers = users[authedUser].answers
  console.log(userAnswers);
  //will be -1 if question is unanswered
  let exists = Object.keys(userAnswers).indexOf(id);

  console.log(questions[id])
  return {
    authedUser,
    question: questions[id]
              ? questions[id]
              : null,
    answered: exists,
    author: users[questions[id].author],
  }

}
export default connect(mapStateToProps)(QuestionCard);