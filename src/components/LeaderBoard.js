import React, { Component } from 'react';


import { connect } from 'react-redux'

class LeaderBoard extends Component {


  render(){
    return(
      <div> LeaderBoard</div>

    )

  }
}

function mapStateToProps({ users }){
  return {
    users,
  }
}

export default connect(mapStateToProps)(LeaderBoard);

