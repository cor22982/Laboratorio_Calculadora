import React from 'react';
import './Calculadora.css'
import Button from '../Button/Button';

const Calculadora = () => {
  return (
    <div >
      <h2 style={{color: 'white'}}>Calculadora</h2>
      <div className='calculadora'>
        <div className="display"></div>
        <div className="comands">
          <Button text='C' tipo='operador'></Button>
          <Button text='+/-' tipo='operador'></Button>
          <Button text='De' tipo='operador'></Button>
          <Button text='/' tipo='operador'></Button>
          <Button text='7' tipo='operando'></Button>
          <Button text='8' tipo='operando'></Button>
          <Button text='9' tipo='operando'></Button>
          <Button text='X' tipo='operador'></Button>
          <Button text='4' tipo='operando'></Button>
          <Button text='5' tipo='operando'></Button>
          <Button text='6' tipo='operando'></Button>
          <Button text='-' tipo='operador'></Button>
          <Button text='1' tipo='operando'></Button>
          <Button text='2' tipo='operando'></Button>
          <Button text='3' tipo='operando'></Button>
          <Button text='+' tipo='operador'></Button>
          <Button text='0' tipo='operando'></Button>
          <Button text='.' tipo='operando'></Button>
          <Button text='=' tipo='equals-operador'></Button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;