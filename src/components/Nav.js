import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { logOutUser } from '../actions/authedUser';
import { connect } from 'react-redux';

class Nav extends Component {

  state = {

    toHome: 'false',
  }

  logOut = (e) => {
      e.preventDefault()
      console.log(e);
      const{ dispatch } = this.props;
      dispatch(logOutUser());
  }

  render() {

    const { user } = this.props;

    if (!user ){
      return(<Redirect to='/' />)

    }

    return (
      <nav className='nav'>
        <ul>
          <li className='navLink'>
            <NavLink to='/' exact activeClassName='active' >
              Home
            </NavLink>
          </li>
          <li  className='navLink'>
            <NavLink to='/new' exact activeClassName='active' >
              New Question
            </NavLink>
          </li>
          <li  className='navLink'>
            <NavLink to='/leaderboard' exact activeClassName='active' >
              Leader Board
            </NavLink>
          </li>



        { user ?
        <span style={{textAlign: 'right',
                      float: 'up',
                    display: 'inline',
                    width: '1000px'}}
              className='logOut'>
          Hello, {user.name}
          <img
            className='avatar logInAvatar'
            src={user.avatarURL}
            alt={`avatar of ${user.name}`}
            style={{display: 'inline-block', margin: '20px auto'}}
          />
          <li className='navLink'>
            <NavLink to='/' exact activeClassName='active' onClick={this.logOut}>
              Log Out
            </NavLink>
          </li>

        </span> : null}


        </ul>

      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }){
  console.log(users, authedUser)
  return{
    authedUser,
    user: users[authedUser],
  }
}

export default connect(mapStateToProps)(Nav);