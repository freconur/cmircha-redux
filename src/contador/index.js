import React from "react";
import { useReducer } from "react";
const Contador = () => {

	//reduer es la funcion q va tener la logica para nuestro estado
	const initialState = {contador: 0}
	
	function reducer (state, action) {
		switch(action.type){
			case "INCEMENT":
			return {contador: state.contador + 1};
			case "DECREMENT":
			return {contador: state.contador - 1};
			default:
			return state
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)
  // const [count, setCount] = React.useState(0);
	const sumar = () => dispatch({type:"INCEMENT"}) 
	const restar = () => dispatch({type:"DECREMENT"}) 
	// const restar = () => setCount(count - 1) 
	return (
    <div style={{textAlign: "center"}}>
      <h1>Contador</h1>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h1>{state.contador}</h1>
    </div>
  );
};

export { Contador };
