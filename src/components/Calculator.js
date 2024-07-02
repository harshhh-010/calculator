import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setValue, clearValue, deleteValue, evaluateValue } from '../redux/action';

function Calculator() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
      <form action="">
        <div className='display'>
          <input type="text" value={value} />
        </div>
        <div>
          <input type="button" value="AC" onClick={() => dispatch(clearValue())} />
          <input type="button" value="DE" onClick={() => dispatch(deleteValue())} />
          <input type="button" className='digit' value="." onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" classname='operators' value="/" onClick={(e) => dispatch(setValue(e.target.value))} />
        </div>
        <div>
          <input type="button" className='digit' value="7" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="8" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="9" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" classname='operators' value="*" onClick={(e) => dispatch(setValue(e.target.value))} />
        </div>
        <div>
          <input type="button" className='digit' value="4" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="5" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="6" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" classname='operators' value="+" onClick={(e) => dispatch(setValue(e.target.value))} />
        </div>
        <div>
          <input type="button" className='digit' value="1" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="2" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="3" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" classname='operators' value="-" onClick={(e) => dispatch(setValue(e.target.value))} />
        </div>
        <div>
          <input type="button" className='digit' value="00" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" className='digit' value="0" onClick={(e) => dispatch(setValue(e.target.value))} />
          <input type="button" value="=" className='equal' onClick={() => dispatch(evaluateValue())} />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
