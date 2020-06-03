import React, { Component } from 'react'

import { connect } from 'react-redux'

import { formatQuestion }  from '../utils/_DATA'

import { Link } from 'react-router-dom'

class QuestionCard extends Component {
  render() {
    //console.log(this.props)
    const { question, author, id} = this.props;

    if (question === null) {
      return <p> This Question doesn't exist </p>
    }

    console.log(author.avatarURL);
    return (
      <Link to={`/question/${id}`} style={{textDecoration: 'none',}} className='question-card'>

        <div className='question-header'>
          {author.name} asks:
        </div>

        <img
          className='avatar'
          src={author.avatarURL}
          alt={`avatar of ${author.name}`}
        />

        <div className='question-summary'>
          <strong> Would You Rather</strong>
          <br/>
          <span>...{question.optionOne.text.slice(0,15)}...</span>
          <br/>
          <button> View Poll</button>
        </div>

      </Link>
    )


  }
}


function mapStateToProps ({authedUser, users, questions}, {id}) {

  let userAnswers = users[authedUser].answers
  //will be -1 if question is unanswered
  let hasAnswered = Object.keys(userAnswers).indexOf(id);

  return {
    authedUser,
    question: questions[id]
              ? questions[id]
              : null,
    hasAnswered,
    author: users[questions[id].author],
    id,
  }

}
export default connect(mapStateToProps)(QuestionCard);