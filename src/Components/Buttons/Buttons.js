import React from 'react';
import style from './Buttons.module.css';

const Buttons = ({ addFeedback }) => {
  return (
    <>
      <button className={style.btn} type="button" name="good" onClick={addFeedback}>
        Good
      </button>
      <button className={style.btn} type="button" name="neutral" onClick={addFeedback}>
        Neutral
      </button>
      <button className={style.btn} type="button" name="bad" onClick={addFeedback}>
        Bad
      </button>
    </>
  );
};

export default Buttons;
