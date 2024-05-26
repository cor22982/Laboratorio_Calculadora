'use client';
import React from 'react';
import './Calculadora.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Display from '../Display/Display';

const Calculadora = () => {
  const [showdisplay, setShowdisplay] = useState('');
  const [formState, setFormState] = useState({ prevalue: '', operador: '', nowvalue: '' });

  console.log(formState);
  const setValue = (name, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: typeof value === 'function' ? value(prevFormState[name]) : value,
    }));
  };

  const deleteall = () => {
    setShowdisplay('');
    setFormState({ operador: '', prevalue: '', nowvalue: '' });
  };

  const append = (item) => {
    if (formState.operador.length === 0) {
      setShowdisplay((prev) => prev + item);
      setValue('prevalue', (prev) => prev + item);
    } else {
      if (formState.nowvalue.length === 0) {
        setShowdisplay('');
      }
      setValue('nowvalue', (prev) => prev + item);
      setShowdisplay((prev) => prev + item);
    }
  };

  const deleteone = () => {
    if (showdisplay.length > 0) {
      setShowdisplay(showdisplay.slice(0, -1));
      if (formState.operador.length === 0) {
        setValue('prevalue', formState.prevalue.slice(0, -1));
      } else {
        setValue('nowvalue', formState.nowvalue.slice(0, -1));
      }
    }
  };

  const operar = (item) => {
   
    if (formState.nowvalue.length > 0) {
      evauluar()
    }
    setValue('operador', item);
  };

  const deletenow = () => {
    setValue('nowvalue','')
    setShowdisplay('')
  }

  const evauluar = () => {
    const expr = formState.operador;
    const numero1 = parseFloat(formState.prevalue);
    const numero2 = parseFloat(formState.nowvalue);
    let resultado = 0;
    switch (expr) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '/':
        resultado = numero1 / numero2;
        break;
      case 'X':
        resultado = numero1 * numero2;
        break;
      default:
        resultado = numero2
        return;
      
      
    }
    if (resultado > 999999999.0) {
      setShowdisplay('ERROR');    
    }else if (resultado < 0) {
      setShowdisplay('ERROR')
    }
    else {
      setShowdisplay(resultado.toString());
      setFormState({ prevalue: resultado.toString(), operador: '', nowvalue: '' });
    }
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Calculadora</h2>
      <div className='calculadora'>
        <div className="display">
          <Display text={showdisplay}></Display>
        </div>
        <div className="comands">
          <Button text='De' tipo='operador' onClick={deleteall}></Button>
          <Button text='C' tipo='operador' onClick={deletenow}></Button>
          <Button text='⌫' tipo='operador' onClick={deleteone}></Button>
          <Button text='+/-' tipo='operador'></Button>
          <Button text='7' tipo='operando' onClick={() => append('7')}></Button>
          <Button text='8' tipo='operando' onClick={() => append('8')}></Button>
          <Button text='9' tipo='operando' onClick={() => append('9')}></Button>
          <Button text='/' tipo='operador' onClick={() => operar('/')}></Button>
          <Button text='4' tipo='operando' onClick={() => append('4')}></Button>
          <Button text='5' tipo='operando' onClick={() => append('5')}></Button>
          <Button text='6' tipo='operando' onClick={() => append('6')}></Button>
          <Button text='X' tipo='operador' onClick={() => operar('X')}></Button>
          <Button text='1' tipo='operando' onClick={() => append('1')}></Button>
          <Button text='2' tipo='operando' onClick={() => append('2')}></Button>
          <Button text='3' tipo='operando' onClick={() => append('3')}></Button>
          <Button text='-' tipo='operador' onClick={() => operar('-')}></Button>
          <Button text='0' tipo='operando' onClick={() => append('0')}></Button>
          <Button text='.' tipo='operando' onClick={() => append('.')}></Button>
          <Button text='=' tipo='equals-operador' onClick={evauluar}></Button>
          <Button text='+' tipo='operador' onClick={() => operar('+')}></Button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
