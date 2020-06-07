import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard.js'


class Dashboard extends Component {
  state = {
    toggleAnswered: false,
  }
  toggleAnswered = (e) => {
    e.preventDefault();

    if(!this.state.toggleAnswered){

      this.setState(() => ({
        toggleAnswered: !this.state.toggleAnswered,
      }))
    }
  }

  toggleUnanswered = (e) => {
    e.preventDefault();


    if (this.state.toggleAnswered) {
      this.setState(() => ({
        toggleAnswered: !this.state.toggleAnswered,
      }))
    }
  }


  render() {

    const { toggleAnswered } = this.state;
    return (
      <div className='dashboard'>
        <h3 className='dashboard-title'> Your Questions</h3>
        <nav className='dashboard-nav-bar'>
          <span style={{backgroundColor: !toggleAnswered ? 'cyan' : 'grey',
                        color: !toggleAnswered ? 'orchid' : 'black'}}
                 onClick={this.toggleUnanswered}
                 id='unanswered-nav'
                 className="dashboard-nav">

            Unanswered Questions
          </span>
          <span style={{backgroundColor: toggleAnswered ?  'cyan' : 'grey',
                        color: toggleAnswered ? 'orchid' : 'black'}}
                  onClick={this.toggleAnswered}
                  id='answered-nav'
                  className="dashboard-nav">

            Answered Questions
          </span>
        </nav>
        {toggleAnswered ?
            <ul className='dashboard-list'>
              {this.props.answeredQuestionIds.map((id) => (
                  <li key={id} className="question-card-container">
                    <QuestionCard id={id} />
                  </li>
                ))}
            </ul>   :
            <ul className='dashboard-list'>
              {this.props.unansweredQuestionIds.map((id) => (
                <li key={id} className="question-card-container">
                  <QuestionCard id={id} />
                </li>
              ))}
            </ul>
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {


  //sort by timestamp
  const questionIds =  Object.keys(questions)
  .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  const authedUserAnswers = Object.keys(users[authedUser].answers);

  const answeredQuestionIds = [];

  const unansweredQuestionIds = [];


  //sorts questions into answered and unanswered arrays
  questionIds.map((id) => {
    if(authedUserAnswers.includes(id)){
      answeredQuestionIds.push(id);
      return id;
    }
    else {
      unansweredQuestionIds.push(id);
      return id;
    }
  })


  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds,
    unansweredQuestionIds,

  }
}
export default connect(mapStateToProps)(Dashboard);