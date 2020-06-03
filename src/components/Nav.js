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
      <nav className='nav'
      style={{display: 'flex',
              backGroundColor: 'grey'}}>
        <ul style={{display: 'flex',}}>
          <li
            className='navLink'>
            <NavLink to='/' exact activeClassName='active'>
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


        <span style={{textAlign: 'right',
                    display: 'inline',
                    flex: 6,
                    width: '1000px',
                  }}
              className='logOut'>
          <div style={{display: 'inline', marginRight: '100px'}}>
          Hello, {user.name}
          </div>
          <img
            className='avatar logInAvatar'
            src={user.avatarURL}
            alt={`avatar of ${user.name}`}
            style={{display: 'inline-block',
                    margin: '50px auto'}}
          />
          <li className='navLink' style={{marginLeft: '40px'}}>
            <NavLink to='/' exact activeClassName='active' onClick={this.logOut}>
              Log Out
            </NavLink>
          </li>

        </span>


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