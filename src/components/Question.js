import React, { Component } from 'react'

import { connect } from 'react-redux'

class Question extends Component {


  render () {
    return (
    <div className='Question'>


    </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, {id}){
  return {
    authedUser,
    questions,
    id
  }
}

export default connect(mapStateToProps)(Question);