import React from "react";
import { useReducer } from "react";
import { contadorInit, contadorInitialState, contadorReducer } from "./reducers/contadorReducer";
import { TYPES } from "./actions/contadorActions";
const Contador = () => {

	//reduer es la funcion q va tener la logica para nuestro estado
	const initialState = {contador: 0}
	const init = (initialState) => {
		return {
			contador: initialState.contador + 100
		}
	}
	
	
	const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit)
  // const [count, setCount] = React.useState(0);
	const sumar = () => dispatch({type: TYPES.INCREMENT}) 
	const sumar5 = () => dispatch({type: TYPES.INCREMENT_5, payload:5}) 
	const restar = () => dispatch({type: TYPES.DECREMENT}) 
	const restar5 = () => dispatch({type: TYPES.DECREMENT_5, payload:5}) 
	const reset = () => dispatch({type: TYPES.RESET})
	// const restar = () => setCount(count - 1) 
	return (
    <div style={{textAlign: "center"}}>
      <h1>Contador</h1>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h1>{state.contador}</h1>
    </div>
  );
};

export { Contador };
