import React from 'react';
import { render } from 'react-dom';
import { ReactInput} from '../../src';
const App = () => {
    let changes=(name,value)=>{
        console.log(name, value)
    };
    return (
        <ReactInput eyecolor="#00ff00" iconcolor="#ff0000" haseye type="password" boxshadow="0 0 5px #00f" refresh onChange={(name, value) => changes(name, value)}/> 
    )
    
};
render(<App />, document.getElementById("root"));