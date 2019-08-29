import React, { useState} from 'react';
import { render } from 'react-dom';
import "./main.css";
import { ReactInput, Page, Slide, Button, SlideAll} from '../../src';

const App = () => {
    const [name,setName]= useState(1);
    const [select, setSelect] = useState([]);
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
    const doSelectAll = (value,field) => {
        setSelect(value)
        console.log("当前多选择的是：", value)
    };
    return (
        <React.Fragment>
            <ReactInput type="password" haseye focusContent={(name, value) => focus(name, value)} changeContent={(name, value) => changes(name, value)} /> 
            <Page
                usetheme
                theme="var(--bgcolor)"
                customSlide={[8,10,20,50,100]}
                allNumber
                jumpNumber
                selectNumber
                nowpage={1}
                allPage={300}
                everyPage={10}
                changeEvery={(num)=>changeEvery(num)}
                changeNumber={(page, all) => getPages(page, all)}
            />
            <Slide field="hollo" refresh value={name} doSelect={(value, name, field) => doSelect(value, name, field)} list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]} />
            <SlideAll field="hollos" refresh select={select} doSelect={(value,field) => doSelectAll(value, field)} list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]} />
            <Button icon={<span className="icon-cha"></span>} usetheme theme="var(--bgcolor)" doClick={()=>setName(2)} />
        </React.Fragment>
        
    )
    
};
render(<App />, document.getElementById("root"));