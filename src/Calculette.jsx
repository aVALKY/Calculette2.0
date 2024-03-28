import React, { useState } from 'react'
import './style.css';


const Calculette = () => {
const [total, setTotal] = useState("");


const caracterToAdd = (e) => {
    console.log(e.target.innerHTML)
    setTotal(total+e.target.innerHTML)
}

const calc = () => {
    if (total !== ""){
        setTotal(eval(total));
    }
}



    return <>

        <link rel="stylesheet" href="style.css" />
        <h1> Calculatrice 2.0 </h1>
        <div className="calculator card">

            <input type="text" className="calculator-screen z-depth-1" value={total} disabled />

            <div className="calculator-keys">

                <button type="button" className="operator btn btn-info " onClick={caracterToAdd} value="+">+</button>
                <button type="button" className="operator btn btn-info " onClick={caracterToAdd} value="-">-</button>
                <button type="button" className="operator btn btn-info " onClick={caracterToAdd} value="*">*</button>
                <button type="button" className="operator btn btn-info " onClick={caracterToAdd} value="/">/</button>

                <button type="button" value="7" className="btn waves-effect chiffre " onClick={caracterToAdd}>7</button>
                <button type="button" value="8" className="btn waves-effect chiffre " onClick={caracterToAdd}>8</button>
                <button type="button" value="9" className="btn waves-effect chiffre " onClick={caracterToAdd}>9</button>


                <button type="button" value="4" className="btn waves-effect chiffre " onClick={caracterToAdd}>4</button>
                <button type="button" value="5" className="btn waves-effect chiffre " onClick={caracterToAdd}>5</button>
                <button type="button" value="6" className="btn waves-effect chiffre " onClick={caracterToAdd}>6</button>


                <button type="button" value="1" className="btn waves-effect chiffre " onClick={caracterToAdd}>1</button>
                <button type="button" value="2" className="btn waves-effect chiffre " onClick={caracterToAdd}>2</button>
                <button type="button" value="3" className="btn waves-effect chiffre " onClick={caracterToAdd}>3</button>


                <button type="button" value="0" className="btn waves-effect " onClick={caracterToAdd}>0</button>
                <button type="button" className="decimal function btn btn-secondary" onClick={caracterToAdd}  value=".">.</button>
                <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" >AC</button>

                <button  type="button" className="equal-sign operator btn btn-default" value="=" onClick={calc} >=</button>
            </div>
        </div>
    </>
}

export default Calculette;