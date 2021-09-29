import React from 'react';
import PropTypes from 'prop-types';
import style from './Buttons.module.css';

const Buttons = ({ addFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button className={style.btn} type="button" name={option} onClick={addFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

Buttons.propTypes = {
  addFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Buttons;
