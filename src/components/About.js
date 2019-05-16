import React, { Component } from 'react';
import {connect} from 'react-redux'
import action from '../store/action';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        {this.props.number}
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {number: state.number}
}

export default connect(mapStateToProps, action)(About);