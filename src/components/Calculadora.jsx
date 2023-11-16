import React, { useState } from 'react'

function Calculadora() {
  const [numero, setNumero] = useState('')

  const handleCalcular = (event)=>{
    console.log('numero: ', numero);
    const ultimoCaracter = numero.slice(-1);
    console.log('ultimoCaracter: ', ultimoCaracter);
    if ('*/+-'.includes(ultimoCaracter) && '*/+-'.includes(event.target.value)) {
      console.log('Error: Dos operadores consecutivos.');
      return; // No hagas nada si hay dos operadores consecutivos
    }
    setNumero((numero || '').concat(event.target.value));
  }

  const clearInput = ()=>{
    setNumero('')
  }

  const calcular = ()=>{
    setNumero(eval(numero).toString())
  }
  return (
    <div className='calculator'>
      <div>
        <h1>Calculadora React</h1>
        <p> <b>By</b>  Jeferson Delgado</p>
      </div>
      <div>
        <input type="text" name="valor" id="txtValor" placeholder='0' value={numero}/>
      </div>
      <div className='botones'>
        <div><input type="button" value="1" onClick={handleCalcular}/></div>
        <div><input type="button" value="2" onClick={handleCalcular}/></div>
        <div><input type="button" value="3" onClick={handleCalcular}/></div>
        <div><input type="button" value="+" onClick={handleCalcular}/></div>
        <div><input type="button" value="4" onClick={handleCalcular}/></div>
        <div><input type="button" value="5" onClick={handleCalcular}/></div>
        <div><input type="button" value="6" onClick={handleCalcular}/></div>
        <div><input type="button" value="-" onClick={handleCalcular}/></div>
        <div><input type="button" value="7" onClick={handleCalcular}/></div>
        <div><input type="button" value="8" onClick={handleCalcular}/></div>
        <div><input type="button" value="9" onClick={handleCalcular}/></div>
        <div><input type="button" value="*" onClick={handleCalcular}/></div>
        <div><input type="button" value="0" onClick={handleCalcular}/></div>
        <div><input type="button" value="/" onClick={handleCalcular}/></div>
        <div><input type="button" value="=" onClick={calcular} /></div>
        <div><input type="button" value="DEL" onClick={clearInput} /></div>

      </div>
    </div>
  )
}

export default Calculadora