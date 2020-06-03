
import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_USERS } from '../actions/types'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      const { question } = action;
      const id = question.id;
      const author = question.author;
      const oldUserInfo = state[author];
      return {
        ...state,
        [author]:
          {
            ...oldUserInfo,
            questions: oldUserInfo.questions.concat([id]),
          }
      }
    case ANSWER_QUESTION :
      const {qid, answer, authedUser} = action;
      return {
        ...state,
        [authedUser]:
          { ...state[authedUser],
            answers:
              {...state[authedUser].answers,
                [qid]: answer,
              }
          }
      }
    default :
      return state
  }
}