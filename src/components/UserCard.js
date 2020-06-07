import React, { Component } from 'react';
import { connect } from 'react-redux';


import icons from './wyr-icons/index.js';

class UserCard extends Component {

  render() {
    const { user, getScore } = this.props;
    const numOfAnswers = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;

    const image = user.avatarURL;
    return (
      <div id='user-card'>
        <img
          src={icons[image]}
          alt={`avatar of ${user.name}`}
          className='avatar'
          style={{width: '120px', height: '80px', marginTop: '20px'}}
        />
        <div id='user-info'>
          <h3>{user.name}</h3>
          <div className='user-questions answered-questions'>
            Answered Questions     {numOfAnswers}
          </div>
          <div className='user-questions answered-questions'>
             Asked Questions     {numOfQuestions}
          </div>
        </div>
        <div id='score-card' style={{border: "1px solid", float: "inline-start"}}>
          <div id='score'> Score </div>
          <div id='score-number'>{getScore(user)}</div>
        </div>

      </div>
    );
  }
}

function mapStateToProps({users}, {userID, getScore}){
  /* getScore is passed from leaderboard component,
     accepts a user and calculates score*/
  return {
    user: users[userID],
    getScore,
  }
}

export default connect(mapStateToProps)(UserCard);

