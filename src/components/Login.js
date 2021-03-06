import React, { Component } from 'react';

import { connect } from 'react-redux';

import {setAuthedUser} from '../actions/authedUser';


import icons from './wyr-icons/index.js'

class Login extends Component {


  state = {
    value: '',
  }

  handleChange = e => {
    console.log(e.target);
    this.setState({value: e.target.value})
  }


  logIn = (e) => {
    e.preventDefault();

    const { value } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(value))

  }

  render(){

    const { users, loading } = this.props;

    console.log(Object.entries(users));


    return(
      loading ? null
        : <div className='log-in'>
            <div className='log-in-header'>
              <h2>Welcome to the would you rather App!</h2>
              <h4> Please sign in to continue</h4>
            </div>
            <img
              className='avatar'
              src={icons.morpheus}
              alt={`Morpheus`}
              style={{display: 'block',
                      margin: '0px auto',
                      width: '50%',
                      height: '50%',
                    }}
            />
            <form onSubmit={this.logIn}>
              <label>
                <h3 style={{color: 'DarkTurquoise'}}>
                  Log In
                </h3>
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  defaultValue=''
                  style={{width: '150px'}}>
                  <option value={''}></option>
                  {Object.values(users).map((user) =>
                    <option value={user.id}>
                      {user.name}
                    </option>
                  )}
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
    )
  }
}

function mapStateToProps({users}){
  return {
    users,
    loading: Object.entries(users).length === 0
  }
}

export default connect(mapStateToProps)(Login);