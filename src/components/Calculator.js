import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper.js';
import Screen from '../components/Screen';
import ButtonBox from '../components/ButtonBox.js';
import NumberFormat from 'react-number-format';
import '../../src/Button.css';

const Calculator = () => {
  const [pre, setPre] = useState('');
  const [current, setCurrent] = useState('');
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const onHandleClick = (event) => {
    if (current.includes('.') && event.target.innerText === '.') return;

    current
      ? setCurrent((i) => i + event.target.innerText)
      : setCurrent(event.target.innerText);
  };

  useEffect(() => {
    setInput(current);
  }, [current]);

  useEffect(() => {
    setInput('0');
  }, []);
  const onHandlePercent = () => {
    const precent = current / 100;
    setCurrent(precent);
  };

  const onHandleMinusPlus = (event) => {
    if (event.target.innerText === '0' || event.target.innerText === '-')
      return;
    const opposite = current * -1;
    setCurrent(opposite);
  };

  const onHandleOperatorType = (event) => {
    setOperator(event.target.innerText);
    if (current === '') return;
    if (pre !== '') {
      onHandleEquals();
    } else {
      setPre(current);
      setCurrent('');
    }
  };

  const onHandleEquals = (event) => {
    if (event.target.innerText === '=') {
    }
    let calculate;
    switch (operator) {
      case '/':
        calculate = String(parseFloat(pre) / parseFloat(current));
        break;
      case 'x':
        calculate = current * pre;
        break;
      case '-':
        calculate = String(parseFloat(pre) - parseFloat(current));
        break;
      case '+':
        calculate = String(parseFloat(pre) + parseFloat(current));
        break;
      default:
        return;
    }
    setInput(calculate);
    setPre('');
  };

  const onHandleClear = () => {
    setPre('');
    setCurrent('');
    setInput('0');
  };
  return (
    <Wrapper>
      <Screen
        value={
          input !== '' || input === '0' ? (
            <NumberFormat
              value={input}
              displayType={'text'}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={pre}
              displayType={'text'}
              thousandSeparator={true}
            />
          )
        }
      />
      <ButtonBox>
        <button onClick={onHandleClear}>Clear</button>
        <button onClick={onHandleMinusPlus}>+ -</button>
        <button onClick={onHandlePercent}>%</button>
        <button onClick={onHandleOperatorType}>/</button>
        <button onClick={onHandleClick}>7</button>
        <button onClick={onHandleClick}>8</button>
        <button onClick={onHandleClick}>9</button>
        <button onClick={onHandleOperatorType}>x</button>
        <button onClick={onHandleClick}>4</button>
        <button onClick={onHandleClick}>5</button>
        <button onClick={onHandleClick}>6</button>
        <button onClick={onHandleOperatorType}>-</button>
        <button onClick={onHandleClick}>1</button>
        <button onClick={onHandleClick}>2</button>
        <button onClick={onHandleClick}>3</button>
        <button onClick={onHandleOperatorType}>+</button>
        <button onClick={onHandleClick}>0</button>
        <button onClick={onHandleClick}>.</button>
        <button className="equals" onClick={onHandleEquals}>
          =
        </button>
      </ButtonBox>
    </Wrapper>
  );
};

export default Calculator;

// const valuesForBtn = [
//   ['C', '+-', '%', '/'],
//   [7, 8, 9, 'X'],
//   [4, 5, 6, '-'],
//   [1, 2, 3, '+'],
//   [0, '.', '='],
// ];

{
  /* {valuesForBtn.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              Name={btn === '=' ? 'equals' : ''}
              value={btn}
              Click={() => {
                
              }}
            />
          );
        })} */
}
