import * as Types from './action-type'

const action = {
  increment () {
    return {type: Types.INCREMENT}
  },
  decrement () {
    return {type: Types.DECREMENT}
  }
}

export default action