import * as Types from './action-type'
import { push } from 'connected-react-router';

const action = {
  increment () {
    return {type: Types.INCREMENT}
  },
  decrement () {
    return {type: Types.DECREMENT}
  },
  goHome () {
    return push('/')
  }
}

export default action