import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './counterActions';

class CounterContainer extends Component {
  render() {
    const { number, onIncrement } = this.props;
    return(
      <div>
        Counter value: {number}
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(increment)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
