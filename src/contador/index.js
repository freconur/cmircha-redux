import React from "react";
import { useReducer } from "react";
const Contador = () => {

	//reduer es la funcion q va tener la logica para nuestro estado
	const initialState = {contador: 0}
	
	const TYPES = {
		INCREMENT : "INCREMENT",
		INCREMENT_5 : "INCREMENT_5",
		DECREMENT : "DECREMENT",
		DECREMENT_5 : "DECREMENT_5",
		RESET: "RESET"
	}
	function reducer (state, action) {
 
		switch(action.type){
			case TYPES.INCREMENT:
				return {contador: state.contador + 1};
			case TYPES.INCREMENT_5:
				return {contador: state.contador + action.payload};
			case TYPES.DECREMENT:
				return {contador: state.contador - 1};
			case TYPES.DECREMENT_5:
				return {contador: state.contador - action.payload};
			case TYPES.RESET:
				return initialState
			default:
			return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)
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
