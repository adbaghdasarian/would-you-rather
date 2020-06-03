import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const { question } = action;
      const id = question.id;
      return {
        ...state,
        [id]: question,
      }
    case ANSWER_QUESTION:
      const {qid, answer, authedUser} = action;
      /*console.log(answer);
      console.log(qid);
      console.log(authedUser);
      console.log(state);
      console.log(state[qid]);*/

      return {
        ...state,
        [qid]:
          { ...state[qid],
            [answer]:
              { ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authedUser])
              }
          }
      }
    default :
      return state
  }
}