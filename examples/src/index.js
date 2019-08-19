import React from 'react';
import { render } from 'react-dom';
import { ReactInput, Page} from '../../src';
const App = () => {
    let changes=(name,value)=>{
        
    };
    let focus = (name, value)=> {
        
    };
    let getPages=(page,all)=>{
        console.log("当前页，总页数：",page, all)
    };
    let changeEvery=(num)=>{
        console.log("每页显示：",num) 
    }
    return (
        <React.Fragment>
            <ReactInput focusContent={(name, value) => focus(name, value)} changeContent={(name, value) => changes(name, value)} /> 
            <Page
                // usetheme
                // theme="green"
                allNumber
                jumpNumber
                selectNumber
                nowpage={1}
                allPage={300}
                everyPage={10}
                changeEvery={(num)=>changeEvery(num)}
                changeNumber={(page, all) => getPages(page, all)}
            />
        </React.Fragment>
        
    )
    
};
render(<App />, document.getElementById("root"));