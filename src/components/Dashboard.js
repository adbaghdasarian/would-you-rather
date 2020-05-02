import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard.js'

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <h3 className='center'> Your Questions</h3>
        <ul className='dashboard-list'>
          {this.props.questionIds.map((id) => (
              <li key={id}>
                <QuestionCard id={id} />
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return{
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}
export default connect(mapStateToProps)(Dashboard);