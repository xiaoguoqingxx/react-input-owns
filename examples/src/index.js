import React from 'react';
import { render } from 'react-dom';
import { ReactInput} from '../../src';
const App = () => {
    let changes=(name,value)=>{
        console.log(name, value)
    };
    return (
        <ReactInput refresh name="hollo" defaultValue={"12345676"} onChange={(name, value) => changes(name, value)}/> 
    )
    
};
render(<App />, document.getElementById("root"));