import React, { Component } from 'react';
import {connect} from 'react-redux'
import action from '../store/action';

class About extends Component {
  constructor(props) {
    console.log(props, '参数')
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        {this.props.number}
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.goHome()}>Home</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {number: state.counter.number}
}

export default connect(mapStateToProps, action)(About);