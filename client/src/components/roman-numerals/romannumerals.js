import React from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';
import { PropTypes } from 'prop-types';
import { loadRomaNumerals } from './roman-numerals-actions';
import { connect } from 'react-redux';

class RomanNumerals extends React.Component {

  componentDidMount() {
    if(!this.props.isFetched) {
      this.props.dispatch(loadRomaNumerals());
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }

  render() {
    const listStyle = {
      listStyle: 'none',
    };

    return (<ul style={listStyle}>
      {
        this.props.data &&
        this.props.data.map((item, idx) => {
          return <li> {idx+1}  =>  {item}</li>
        })
      }

    </ul>);
  }
}

RomanNumerals.propTypes = {
    isFetching: PropTypes.bool,
    isFetched: PropTypes.bool,
    isFailed: PropTypes.bool,
    data: PropTypes.array
  }

RomanNumerals.defaultProps = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: [],
};

const mapStateToProps = (state) => {
  return {
    isFetched: state.romanNumerals.isFetched,
    isFetching: state.romanNumerals.isFetching,
    isFailed: state.romanNumerals.isFailed,
    data: state.romanNumerals.data,
  }
}

export default connect(mapStateToProps)(RomanNumerals);
