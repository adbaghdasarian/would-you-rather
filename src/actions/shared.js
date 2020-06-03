import { getInitialData } from '../api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

//initial authed ID
const AUTHED_ID = '';

export function handleInitialData () {

  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading());
      })
  }
}