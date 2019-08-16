import React from 'react';
import { render } from 'react-dom';
import { ReactInput} from '../../src';
const App = () => {
    let changes=(name,value)=>{
        
    };
    let focus = (name, value)=> {
        
    };
    return (
        <ReactInput focusContent={(name, value) => focus(name, value)} changeContent={(name, value) => changes(name, value)}/> 
    )
    
};
render(<App />, document.getElementById("root"));