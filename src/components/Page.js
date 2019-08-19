import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import '../css/font-awesome.min.css';
import { TweenMax, Linear } from 'gsap';
import _ from "lodash";
import PropTypes from 'prop-types';
import { color, initcolor } from '../config';
const outer = css`${props => props.allcss}`;
const Pagecss = styled.div`
    text-align: center;
    height: ${props => typeof props.componentHeight === "number" ? props.componentHeight + "px" : props.componentHeight};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    ${outer}
    .pagenum{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        .active {
            background:${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.allActiveBgcolor
                } else {
                    return props.allActiveBgcolor
                }
            }};
            color:${props => props.allActiveFcolor};
        }
    }
    .allnum,
    .jumpnum{
        margin:0 10px;
        color:${props => props.otherColor};
        font-size: ${props => typeof props.otherFontSize === "number" ? props.otherFontSize + "px" : props.otherFontSize};    
    }
    .every{
        margin-left:10px;
        color:${props => props.otherColor};
        font-size: ${props => typeof props.otherFontSize === "number" ? props.otherFontSize + "px" : props.otherFontSize};    
        #everyxia{
            display: inline-block;
            margin:0 5px;
            width: ${props => typeof props.slideWidth === "number" ? props.slideWidth + "px" : props.slideWidth};
            height:${props => typeof props.allHeight === "number" ? props.allHeight + "px" : props.allHeight};
            border:${props => props.allBorderWidth}px solid ${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.allBorderColor
                } else {
                    return props.allBorderColor
                }
            }};
            border-radius:${props => typeof props.borderRadius === "number" ? props.borderRadius + "px" : props.borderRadius};
            position: relative;
            span {
                display: block;
                height: ${props => typeof props.allHeight === "number" ? props.allHeight + "px" : props.allHeight};
                line-height: ${props => typeof props.allHeight === "number" ? props.allHeight + "px" : props.allHeight};
                text-align: left;
                padding-left: 10px;
                position: relative;
                cursor: pointer;
                color:${props => props.slideColor};
                transition:all 0.2s;
                i{
                    position: absolute;
                    color:${props => props.slideColor};
                    right:4px;
                    top:3px;
                }
                
            }
            .active{
                background:${props => {
                    if (props.usetheme) {
                        return color[props.theme] || props.allActiveBgcolor
                    } else {
                        return props.allActiveBgcolor
                    }
                }};
                color:${props => props.allActiveFcolor};
            }
        }
        #e-xiala{
            width:100%;
            background: ${props => props.slideBgcolor};
            position: absolute;
            left:-1px;
            top:21px;
            border:${props => props.allBorderWidth}px solid ${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.allBorderColor
                } else {
                    return props.allBorderColor
                }
            }};
            overflow: hidden;
            z-index:10;
            height:0;
            opacity:0;
            overflow:hidden;
            span{
                &:hover{
                    background:${props => {
                        if (props.usetheme) {
                            return color[props.theme] || props.allActiveBgcolor
                        } else {
                            return props.allActiveBgcolor
                        }
                    }};
                    color:${props => props.allActiveFcolor};
                }
            }
        }
    }
    .jumpnum
        input{
            width:${props => typeof props.inputWidth === "number" ? props.inputWidth + "px" : props.inputWidth};
            height:${props => typeof props.allHeight === "number" ? props.allHeight+2 + "px" : props.allHeight+2};
            border:${props => props.allBorderWidth}px solid ${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.allBorderColor
                } else {
                    return props.allBorderColor
                }
            }};
            text-align: center;
            border-radius:${props => typeof props.borderRadius === "number" ? props.borderRadius + "px" : props.borderRadius};
            background: transparent;
            margin:0 5px;
            color:${props => props.inputColor};
            transition:all 0.2s;
            outline:none;
        }
    }
    button{
        cursor:pointer;
        background:${props =>props.buttonBgcolor};
        height:${props => typeof props.allHeight === "number" ? props.allHeight + "px" : props.allHeight};
        border:${props => props.allBorderWidth}px solid ${props => {
            if (props.usetheme) {
                return color[props.theme] || props.allBorderColor
            } else {
                return props.allBorderColor
            }
        }};
        padding:0 5px;
        margin:0 ${props => props.buttonGap/2}px;
        outline:none;
        border-radius:${props => typeof props.borderRadius === "number" ? props.borderRadius + "px" : props.borderRadius};
        display: flex;
        font-size:${props => typeof props.buttonFontSize === "number" ? props.buttonFontSize + "px" : props.buttonFontSize};
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        color:${props => props.buttonFontColor};
        &:hover{
            transition: all 0.1s;
            background:${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.allActiveBgcolor
                } else {
                    return props.allActiveBgcolor
                }
            }};
            color:${props => props.allActiveFcolor};
        }
        
    }
    .disabled{
        background: ${props => props.disabledBgcolor};
        border:1px solid ${props => props.disabledBgcolor};
        color:${props => props.disabledFontColor};
        cursor: not-allowed;
        font-weight:600;
        &:hover{
            background: ${props => props.disabledBgcolor};
            border:1px solid ${props => props.disabledBgcolor};
            color:${props => props.disabledFontColor};
        }
    }
`;
class Pagenum extends Component{
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }
    buttonClick(){
        this.props.onClick(this.props.pagenum);
    }
    render(){
        return(
            <button 
               className={this.props.pagenum === this.props.nowpage?'active':''} 
               onClick={this.buttonClick}>{this.props.pagenum}</button>
        )
    }
}
function getPageArr(num, howpage) {
    let start, end, newArr = [];
    if (howpage.whatpage <= howpage.pagenums) {
        start = 0; end = howpage.whatpage;
    } else {
        if (num <= howpage.step) {
            start = 0; end = start + howpage.pagenums;
                    }
        if (num > howpage.step) {
            start = num - howpage.step-1; end = num + howpage.step;
                    }
        if (num >= howpage.whatpage - howpage.step) {
            start = howpage.whatpage - howpage.pagenums; end = howpage.whatpage
        }
    }
    for (let i = start; i < end; i++) {
        newArr.push(i + 1);
    }
    return newArr;
}
function getInitDate(allpage, everypage, pagenum) {
    const paged = Math.ceil(allpage / everypage);
    let pageArr = [];
    if (paged >= pagenum) {
        for (let i = 1; i <= pagenum; i++) {
            pageArr.push(i)
        }
    } else {
        for (let i = 1; i <= paged; i++) {
            pageArr.push(i)
        }
    }
    return [paged, pageArr];
}
class Page extends Component {
    constructor(props) {
        super(props);
        // 数据初始化处理
        const pagenum = 5;
        this.state={
            forever:{
                pagenums:5,
                step: (pagenum-1)/2,
                whatpage: getInitDate(props.allPage, props.everyPage, pagenum)[0],
            },
            nowpage:props.nowpage,
            totalPage: getInitDate(props.allPage, props.everyPage, pagenum)[1],
            controls:{
                headEnd: props.headEnd,
                upDown: props.upDown,
                pageNumber: props.pageNumber,
                allNumber: props.allNumber,
                nowNumber: props.nowNumber,
                jumpNumber: props.jumpNumber,
                selectNumber: props.selectNumber,
                conye: props.conye,
            },
            everypage: props.everyPage,
            randomnum: _.uniqueId()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this.onClicks.bind(this), false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.onClicks.bind(this), false);
    }
    onClicks(ev) {
        let e = ev || window.event; //浏览器兼容性 
        let elem = e.target || e.srcElement;
        while (elem) { //循环判断至跟节点，防止点击的是div子元素
            if (elem.className === `everyxia`) {
                return;
            }
            elem = elem.parentNode;
        }
        TweenMax.to(`.e-xiala${this.state.randomnum}`, 0.1, {
            height: 0,
            opacity: 0,
            ease: Linear.easeOut
        })

    }
    UNSAFE_componentWillReceiveProps(prop){
        let pagenum = 5;
        this.setState({
            forever: {
                pagenums: 5,
                step: (pagenum - 1) / 2,
                whatpage: getInitDate(prop.allPage, prop.everyPage, pagenum)[0],
            },
            nowpage: prop.nowpage,
            totalPage: getPageArr(prop.nowpage, {
                pagenums: 5,
                step: (pagenum - 1) / 2,
                whatpage: getInitDate(prop.allPage, prop.everyPage, pagenum)[0],
            }),
            everypage: prop.everyPage
        });
    }
    handleChange(event){
        // 判断输入框里只能输数字
        let value = String(event.target.value).replace(/[^\d]/g, '');
        if (Number(value) >= 1 && Number(value) <= this.state.forever.whatpage){
            this.setState({
                nowpage: Number(value)
            });
            this.setState({
                totalPage: getPageArr(Number(value), this.state.forever)
            });
            this.props.changeNumber && this.props.changeNumber(Number(value), this.state.forever.whatpage);
        }else{
            this.setState({
                nowpage: ""
            });
        }
    }
    handleClick(num){
        
        this.setState({
            nowpage: num
        });
        this.setState({
            totalPage: getPageArr(num, this.state.forever)
        });
        this.props.changeNumber && this.props.changeNumber(num, this.state.forever.whatpage);
    }
    everyClick(){
        let dom = document.getElementsByClassName(`e-xiala${this.state.randomnum}`)[0].offsetHeight;
        if (dom === 2) {
            TweenMax.to(`.e-xiala${this.state.randomnum}`, 0.1, {
                height:80,
                opacity: 1,
                ease: Linear.easeIn
            })
        } else {
            TweenMax.to(`.e-xiala${this.state.randomnum}`, 0.1, {
                height: 0,
                opacity: 0,
                ease: Linear.easeOut
            })
        }
    }
    clickevery(num){
        TweenMax.to(`.e-xiala${this.state.randomnum}`, 0.1, {
            height: 0,
            opacity: 0,
            ease: Linear.easeOut
        })
        this.setState({
            everypage:num
        })
        this.props.changeEvery && this.props.changeEvery(num)
    }
    render() {
        let initpage = this.state.nowpage;
        const nowpage = this.state.nowpage;
        const totalPage = this.state.totalPage;
        const forever = this.state.forever;
        const controls = this.state.controls;
        return (
            <Pagecss {...this.props}>
                {controls.allNumber && forever.whatpage>1 &&
                    <span className="allnum" style={{marginRight:"10px"}}>共 {forever.whatpage} 页</span>
                }
                {controls.nowNumber && forever.whatpage>1 &&
                    <span className="allnum">当前第 <span style={{color:"#666"}}>{this.state.nowpage}</span> 页</span>
                }
                {controls.headEnd && forever.whatpage>1 &&
                    <button 
                    className={nowpage <= 1 ? 'disabled' : ''} 
                    onClick={this.handleClick.bind(this, 1)}>首页</button>
                }
                {controls.upDown && forever.whatpage > 1 &&
                    <button 
                    className={nowpage <= 1 ? 'disabled' : ''} 
                    disabled={nowpage <= 1 ? true : false} 
                    onClick={this.handleClick.bind(this, initpage-1)}>
                    <i className="fa fa-angle-left"></i>
                    </button>
                }
                {
                    controls.conye && forever.whatpage > 1 &&
                    <span className="jumpnum" style={{margin:"0 5px"}}>
                        <input type="text" style={{height: "22px"}} name="page" value={nowpage} onChange={this.handleChange}/>
                    </span>
                }
                {
                    controls.pageNumber && this.props.allPage > this.props.everyPage &&
                    <span className="pagenum">
                        {(nowpage - forever.step) >= 3 && forever.whatpage > forever.pagenums+1 &&
                            <React.Fragment>
                                <button onClick={this.handleClick.bind(this,1)}>1</button>
                                <span className="etc">…</span>
                            </React.Fragment>
                        }
                        {
                            totalPage.map((val)=>{
                                return <Pagenum
                                    key={"key"+ val}
                                    pagenum={val}
                                    nowpage={nowpage}
                                    onClick={this.handleClick}
                                />
                            })
                        }
                        {nowpage < (forever.whatpage - forever.step) && forever.whatpage > forever.pagenums + 1 &&
                            <React.Fragment>
                                <span className="etc">…</span>
                                <button onClick={this.handleClick.bind(this, forever.whatpage)}>{forever.whatpage}</button>
                            </React.Fragment>
                        }
                    </span>
                }
                {controls.upDown && forever.whatpage > 1 &&
                    <button 
                    className={nowpage >= forever.whatpage ? "disabled" : ""} 
                    disabled={nowpage >= forever.whatpage ? true : false} onClick={this.handleClick.bind(this, initpage+1)}>
                       <i className="fa fa-angle-right"></i>
                    </button>
                }
                {controls.headEnd && forever.whatpage > 1 &&
                    <button 
                    className={nowpage >= forever.whatpage ? "disabled" : ""} 
                    onClick={this.handleClick.bind(this, forever.whatpage)}>尾页</button>
                }
                
                {controls.jumpNumber && forever.whatpage > 1 &&
                    <span className="jumpnum">
                        跳到 <input type="text" style={{boxSizing: "border-box"}} name="page" value={nowpage} onChange={this.handleChange}/> 页
                    </span>
                }
                {
                    controls.selectNumber && this.props.allPage > 10 &&
                    <span className="every">
                        每页最多显示
                        <span id="everyxia" className={`everyxia`}>
                            <span onClick={this.everyClick.bind(this)}>{this.state.everypage} <i className="fa fa-caret-down"></i></span>
                            <div id="e-xiala" className={`e-xiala e-xiala${this.state.randomnum}`}> 
                                <span onClick={this.clickevery.bind(this,10)} className={this.state.everypage===10?"active":""}>10</span>
                                <span onClick={this.clickevery.bind(this,20)} className={this.state.everypage===20?"active":""}>20</span>
                                <span onClick={this.clickevery.bind(this,50)} className={this.state.everypage===50?"active":""}>50</span>
                                <span onClick={this.clickevery.bind(this,100)} className={this.state.everypage===100?"active":""}>100</span>
                            </div>
                        </span>
                        条
                    </span>
                }
            </Pagecss>
        )
    }
}
Page.defaultProps = {
    usetheme: false,//是否使用主题
    theme: "blue",//blue 蓝色 purple 紫色 green 绿色
    upDown:true,
    pageNumber:true,
    allNumber:false,
    jumpNumber:false,
    selectNumber:false,
    nowpage:1,
    allPage:0,
    everyPage:10,
    allcss: "",//针对于该组件外层的css完整样式代码
    allHeight: 20,
    allBorderWidth: 1,//button 的边框
    allBorderColor: initcolor,
    allActiveBgcolor: initcolor,
    allActiveFcolor: "#fff",
    borderRadius: 2,
    componentHeight:30,//组件高度
    buttonFontSize:12,
    buttonBgcolor: "transparent",
    buttonFontColor:"#333",
    buttonGap:5,
    disabledBgcolor: "#bbb",
    disabledFontColor:"#000",
    otherFontSize: 12,
    otherColor: "#333",
    inputWidth: 50,
    inputColor: "#333",
    slideWidth:50,
    slideBgcolor:"#fff",
    slideColor:"#333"
};
Page.propTypes = {
    usetheme: PropTypes.bool,
    theme: PropTypes.string,
    upDown: PropTypes.bool,
    pageNumber: PropTypes.bool,
    allNumber: PropTypes.bool,
    jumpNumber: PropTypes.bool,
    selectNumber: PropTypes.bool,
    nowpage: PropTypes.number.isRequired,
    allPage: PropTypes.number.isRequired,
    everyPage: PropTypes.number,
    allcss: PropTypes.string,
    allHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    allBorderWidth: PropTypes.number,
    allBorderColor: PropTypes.string,
    allActiveBgcolor: PropTypes.string,
    allActiveFcolor: PropTypes.string,
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    componentHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttonFontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttonBgcolor: PropTypes.string,
    buttonFontColor: PropTypes.string,
    buttonGap: PropTypes.number,
    disabledBgcolor: PropTypes.string,
    disabledFontColor: PropTypes.string,
    otherFontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    otherColor:PropTypes.string,
    inputWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    inputHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    inputColor: PropTypes.string,
    slideWidth:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    slideBgcolor: PropTypes.string,
    slideColor: PropTypes.string,
};
export default Page;