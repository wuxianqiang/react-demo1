import * as Types from './action-type'
const initState = {number: 0}
export default function reducer(state=initState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return {number: state.number + 1}
    case Types.DECREMENT:
      return {number: state.number = 1}
    default:
      return state
  }
}