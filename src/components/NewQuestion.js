import React, { Component } from 'react';

import { connect } from 'react-redux';

import {handleAddQuestion} from '../actions/questions';

class NewQuestion extends Component {
  state = {
    text1: '',
    text2: ''
  }

  handleChange1 = (e) => {
    const text1 = e.target.value

    this.setState(() => ({
      text1
    }))
  }

  handleChange2 = (e) => {
    const text2 = e.target.value

    this.setState(() => ({
      text2
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text1, text2 } = this.state;
    const { dispatch } = this.props;

    console.log(
      'New Question: ', text1, 'or', text2
      );
    dispatch(handleAddQuestion(text1, text2));


    this.setState(() => ({
      text1: '',
      text2: ''
    }))
  }
  render() {
    const { text1, text2 } = this.state

    return (

      <div id='new-question-container'>
        <h3 className='center create-new-question-header'> Create New Question</h3>
        <br/>
        <h1> Complete the Question:</h1>
        <br />
        <h2 style={{fontWeight: 'bold'}}> Would you rather ...</h2>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Enter Option One Text Here"
            value={text1}
            onChange={this.handleChange1}
            className='textarea'
            maxLength={280}
          />
          <span style={{fontWeight: 'bold'}}> OR </span>
          <textarea
            placeholder="Enter Option One Text Here"
            value={text2}
            onChange={this.handleChange2}
            className='textarea'
            maxLength={280}
          />
          <br/>
          <button
            className='btn'
            type='submit'
            disabled={text1 === text2 === ''}>
              Submit
          </button>

        </form>
      </div>
    )
  }

}


function mapStateToProps({authedUser}) {
  return ({ authedUser });
}

export default connect(mapStateToProps)(NewQuestion);