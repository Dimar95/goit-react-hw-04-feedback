// import React, { Component } from 'react';
import {ButtonStyled} from './Feedback.styled.jsx';
import PropTypes from 'prop-types';

const Feedback = ({options, onLeaveFeedback}) => {
   const button = options.map(option => {return( <ButtonStyled type="button" value={option} key={option} onClick={onLeaveFeedback}>
     {option} </ButtonStyled>)
   })
  return button
  }

export default Feedback;

Feedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}
