import React, { Component } from 'react'
import UserCard from './UserCard.js';


import { connect } from 'react-redux'
/*import { object } from 'prop-types';*/

class LeaderBoard extends Component {


  render(){
    const { userIDs, getScore } = this.props;
    return(
      <div id='leaderboard'>

      {userIDs.map((userID) => ( <UserCard userID={userID} getScore={getScore} />))}

      </div>

    )

  }
}

function mapStateToProps({ users }){


  function getScore(user) {
    return user.questions.length + Object.keys(user.answers).length;
  }

  return {
    userIDs: Object.keys(users).sort(
      (a,b) => getScore(users[b])- getScore(users[a])
    ),
    getScore,
  }
}

export default connect(mapStateToProps)(LeaderBoard);


