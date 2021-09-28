import React from 'react';
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

export default Buttons;
