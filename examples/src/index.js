import React, { useState} from 'react';
import { render } from 'react-dom';
import "./main.css";
import { ReactInput, Page, Slide,Button} from '../../src';
const App = () => {
    const [name,setName]= useState(1)
    let changes=(name,value)=>{
        
    };
    let focus = (name, value)=> {
        
    };
    let getPages=(page,all)=>{
        console.log("当前页，总页数：",page, all)
    };
    let changeEvery=(num)=>{
        console.log("每页显示：",num) 
    };
    const doSelect=(value,name,field)=>{
        setName(value)
        console.log("当前选择的是：",value,name) 
    };
    return (
        <React.Fragment>
            <ReactInput type="password" haseye focusContent={(name, value) => focus(name, value)} changeContent={(name, value) => changes(name, value)} /> 
            <Page
                // usetheme
                // theme="#ff0000"
                allNumber
                jumpNumber
                selectNumber
                nowpage={1}
                allPage={300}
                everyPage={10}
                changeEvery={(num)=>changeEvery(num)}
                changeNumber={(page, all) => getPages(page, all)}
            />
            <Slide field="hollo" refresh value={name} doSelect={(value,name,field)=>doSelect(value,name,field)} list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]}/>
            <Button usetheme theme="var(--bgcolor)" doClick={()=>setName(2)} />
        </React.Fragment>
        
    )
    
};
render(<App />, document.getElementById("root"));