import React, { useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import "./main.css";
import { ReactInput, Page, Slide, Button, SlideAll, SearchInput, TreeCloud, TreeNode} from '../../src';
import { treenode } from './datas';
import _ from "lodash";
function App(){
    const cloud=useRef(null)
    const [name,setName]= useState(1);
    const [select, setSelect] = useState([]);
    const [list, setlist] = useState(treenode);
    useEffect(() => {
      setTimeout(()=>{
          const nre = _.cloneDeep(list)
          nre.push({
              "id": _.uniqueId("somesa"),
              "name": "127.0.0.1",
              "field_group_id": "277188557894513526",
              "field_name": "URL",
              "children": [
                  {
                      "id": _.uniqueId("hollo"),
                      "name": "http://127.0.0.1:80",
                      "field_group_id": "277188557894513526",
                      "field_name": "URL",
                      "children": []
                  }
              ]
          })
          setlist(nre)
          cloud.current.expandAll()
      },5000)
    },[])
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
    const getTree = (t) => {
        let ret = []
        t.forEach((val, k) => {
            ret.push(
                <TreeNode data={val} key={val.id} keys={val.id} content={val.name}>
                    {getTree(val.children)}
                </TreeNode>
            )
        })
        return ret;
    };
    const changeSelect=(value)=>{
        console.log(value)
    };
    return (
        <React.Fragment>
            <h2>树结构</h2>
            <div className="trees-my">
                <TreeCloud ref={cloud} changeSelect={(value) => changeSelect(value)} expandAll onlyHasChild mode="noselect">
                    {getTree(list)}
                </TreeCloud>
            </div>
            <div className="trees-my">
                <TreeCloud expandAll onlyHasChild mode="directory" showLine>
                    <TreeNode keys="first" content="这是第一层这是第一层这是第一层这是第一层这是第一层这是第一层这是第一层这是第一层这是第一层这是第一层">
                        <TreeNode keys="second" content="这是第二层">
                            <TreeNode keys="third" content="这是第三层这认为儿科文科王可可王可可可可看看王可可味可可可客人看看我">
                               
                            </TreeNode>
                        </TreeNode>
                        <TreeNode keys="secondtwo" content="这是第二层第二个">
                            <TreeNode keys="four" content="这是第二层第二个的下一层">
                                
                            </TreeNode>
                        </TreeNode>
                    </TreeNode>
                    <TreeNode keys="nextfirst" content="这是第一层这是第一层">

                    </TreeNode>
                </TreeCloud>
            </div>
            <h2>输入框</h2>
            <ReactInput type="password" haseye focusContent={(name, value) => focus(name, value)} changeContent={(name, value) => changes(name, value)} />
            <h2>搜索框</h2>
            <SearchInput />  
            <h2>分页</h2>
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
            <h2>单选下拉</h2>
            <Slide field="hollo" refresh value={name} doSelect={(value, name, field) => doSelect(value, name, field)} list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]} />
            <h2>多选下拉</h2>
            <SlideAll field="hollos" onlyid={false} refresh select={select} doSelect={(value,field) => doSelectAll(value, field)} list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]} />
            <h2>按钮</h2>
            <Button icon={<span className="icon-cha"></span>} usetheme theme="#7059ef" />
        </React.Fragment>
        
    )
    
};
ReactDOM.render(<App />, document.getElementById("root"));