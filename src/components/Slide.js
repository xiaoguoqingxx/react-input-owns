import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/font.css';
import styled, {css} from 'styled-components';
import { TweenMax, Linear } from 'gsap';
import PropTypes from 'prop-types';
import { color, initcolor } from '../config';
import { CheckIsColor, addOpacity } from '../common/trans';
import _ from "lodash";

const outer = css`${props => props.allcss}`;
const Slidecss = styled.div.attrs(props => ({
    id: props.sign
}))`
    width:${props => typeof props.width === "number" ? props.width - props.borderWidth * 2 + "px" : props.width};
    height:${props => typeof props.height === "number" ? props.height - props.borderWidth*2 + "px" : props.height};
    border: ${props => props.borderWidth}px solid ${props => {
        if (props.usetheme) {
            if (CheckIsColor(props.theme)) {
                return props.theme
            } else {
                return color[props.theme] || props.borderColor
            }
        } else {
            return props.borderColor
        }
    }};
    border-radius:${props => typeof props.borderRadius === "number" ? props.borderRadius + "px" : props.borderRadius};
    background:${props => props.background};
    position:relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    transition:all 0.2s;
    ${outer}
    .slidebox{
        cursor:pointer;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        font-size:${props => typeof props.fontSize === "number" ? props.fontSize + "px" : props.fontSize};
        width:calc(100% - 30px);
        height:100%;
        position: relative;
        .slideselect{
            width:${props => !props.notEmpty ? "calc(100% - 10px)":"calc(100% - 26px)"};
            padding-left:10px;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .cha{
            cursor:pointer;
            font-size:${props => typeof props.iconSize === "number" ? props.iconSize + "px" : props.iconSize};
            color:${props => {
                if (props.usetheme) {
                    if (CheckIsColor(props.theme)) {
                        return props.theme
                    } else {
                        return color[props.theme] || props.iconColor
                    }
                } else {
                    return props.iconColor
                }
            }};
            &:before{
                color:${props => {
                    if (props.usetheme) {
                        if (CheckIsColor(props.theme)) {
                            return props.theme
                        } else {
                            return color[props.theme] || props.iconColor
                        }
                    } else {
                        return props.iconColor
                    }
                }}
            }
        }
    }
    .triangle{
        font-size:${props => typeof props.triangleSize === "number" ? props.triangleSize + "px" : props.triangleSize};
        text-align:center;
        width:30px;
        cursor:pointer;
        color: ${props => props.triangleColor}
    }
    .xialas{
        width:calc(100% - ${props => props.slideBorderWidth}px);
        max-height:0;
        opacity:0;
        box-shadow:${props => props.slideBoxShadow};
        position:absolute;
        left: 0;
        border: ${props => props.slideBorderWidth}px solid ${props => {
            if (props.usetheme) {
                if (CheckIsColor(props.theme)) {
                    return props.theme
                } else {
                    return color[props.theme] || props.slideBorderColor
                }
            } else {
                return props.slideBorderColor
            }
        }};
        background:${props => props.slideBackground};
        z-index:200;
        ${props => {
            return { 
                "up":`bottom:${parseFloat(props.height)}px;`, 
                "down":`top:${parseFloat(props.height)}px;` 
            }[props.slideDirection]||`top:${parseFloat(props.height)}px;`;
        }}
        div{
            .xiala-cube{
                padding-left:10px;
                padding-right:10px;
                height:${props => typeof props.slideOptionHeight === "number" ? props.slideOptionHeight + "px" : props.slideOptionHeight};
                line-height:${props => typeof props.slideOptionHeight === "number" ? props.slideOptionHeight + "px" : props.slideOptionHeight};
                font-size:${props => typeof props.slideFontSize === "number" ? props.slideFontSize + "px" : props.slideFontSize};
                transition:all 0.2s ease;
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;
                cursor:pointer;
                .iconname{
                    word-break: keep-all;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .icons{
                    margin-right:10px;
                    color:var(--fontcolor)
                }
                &:hover{
                     background: ${props => {
                        if (props.usetheme) {
                            if (CheckIsColor(props.theme)) {
                                return addOpacity(props.theme, props.slideActiveOpacity)
                            } else {
                                return color[props.theme] ? addOpacity(color[props.theme], props.slideActiveOpacity) : addOpacity(props.slideActiveBgcolor, props.slideActiveOpacity)
                            }
                        } else {
                            return addOpacity(props.slideActiveBgcolor, props.slideActiveOpacity)
                        }
                    }};
                    color:${props => props.slideActiveFcolor};
                }
            }
            .active{
                font-weight:bold;
                color:${props => props.slideActiveFcolor};
                background: ${props => {
                    if (props.usetheme) {
                        if (CheckIsColor(props.theme)) {
                            return addOpacity(props.theme, props.slideActiveOpacity)
                        } else {
                            return color[props.theme] ? addOpacity(color[props.theme], props.slideActiveOpacity) : addOpacity(props.slideActiveBgcolor, props.slideActiveOpacity)
                        }
                    } else {
                        return addOpacity(props.slideActiveBgcolor, props.slideActiveOpacity)
                    }
                }};
            }
        }
    }
`;
class Slide extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            select: props.value === "" ? "" : props.value,
            selectname: this.getDefault(props.list, props.value),
            show:false,
            randomnum: _.uniqueId()
        };
        this.showDown = this.showDown.bind(this);
        this.hideDown = this.hideDown.bind(this);
        
    } 
    UNSAFE_componentWillReceiveProps(props) {
        if (props.refresh) {
            this.setState({
                select: props.value === "" ? "" : props.value,
                selectname: this.getDefault(props.list, props.value),
            })
        }
    }
    componentDidMount() {
        
        document.addEventListener('click', this.onClicks.bind(this), false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.onClicks.bind(this), false);
        this.setState = (state, callback) => {
            return;
        };
    }
    getDefault(list,value){
        let ops = list.find(val => {
            return val.id === value;
        })
        if (ops){
            return ops.name;
        }else{
            return ""
        }
    }
    onClicks(ev) {
        var e = ev || window.event; //浏览器兼容性 
        var elem = e.target || e.srcElement;
        while (elem) { //循环判断至跟节点，防止点击的是div子元素
            if (elem.id === `select${this.state.randomnum}`) {
                return;
            }
            elem = elem.parentNode;
        }
        this.hideDown()  
    }
    handleClick(e){
        e.stopPropagation();
        let show=this.state.show;
        if (!show){
            if (this.props.disturbInfo!==""){
                return this.props.disturb && this.props.disturb(this.props.disturbInfo)
            }
            this.showDown();
            this.props.focus && this.props.focus(this.props.field)
        }else{ 
            this.hideDown();
        }
    }
    showDown(){
        this.setState({
            show: true
        }, () => {
            TweenMax.set(`.xiala${this.state.randomnum}`, {
                overflow: "hidden",
                opacity: 1
            })
            TweenMax.to(`.xiala${this.state.randomnum}`, 0.1, {
                maxHeight: this.props.slideOptionHeight * this.props.slideOptionNumber,
                ease: Linear.easeIn,
                onComplete: () => {
                    TweenMax.set(`.xiala${this.state.randomnum}`, {
                        overflow: "auto"
                    })
                }
            })
        })
    }
    hideDown(){
        TweenMax.set(`.xiala${this.state.randomnum}`, {
            overflow: "hidden"
        })
        TweenMax.to(`.xiala${this.state.randomnum}`, 0.1, {
            maxHeight: 0,
            ease: Linear.easeOut,
            onComplete: () => {
                this.setState({
                    show: false
                });
                TweenMax.set(`.xiala${this.state.randomnum}`, {
                    opacity: 0
                })
            }
        })
    }
    empty(e){
        e.stopPropagation();
        this.setState({
            select:"",
            selectname: "",
        })
        this.hideDown();
        this.props.doSelect && this.props.doSelect("", "",this.props.field)
    }
    selectOne(value){
        this.setState({
            select: value.id,
            selectname: value.name,
        })
        this.hideDown();
        this.props.doSelect && this.props.doSelect(value.id, value.name, this.props.field)
    }
    render() {
        const list=this.props.list;
        const value = this.props.value;
        return (
            <Slidecss 
                {...this.props}
                sign={`select${this.state.randomnum}`}
            >
                <div className="slidebox"
                    title={this.state.selectname !== "" ? this.state.selectname : ""}
                    onClick={this.handleClick.bind(this)}
                >

                    <div className="slideselect" style={this.state.select !== "" ? { color: this.props.fontColor } : { color: this.props.fontPlaceholderColor }}>
                        {
                            this.state.selectname !== "" ? this.state.selectname : this.props.placeholder
                        }
                    </div>
                    {
                        (!this.props.notEmpty && this.state.select !== "") &&
                        <span className="cha icon-cha" onClick={this.empty.bind(this)}></span>
                    }
                </div>
                <span className="triangle" onClick={this.handleClick.bind(this)}><i className="fa fa-angle-down"></i></span>
                {this.state.show && list.length!==0 &&
                    <div className={`xialas xiala${this.state.randomnum}`}>
                        {
                            list && 
                            list.map((val,k)=>{
                                return <div key={"key"+k}>
                                    <span
                                    title={val.name} 
                                    onClick={this.selectOne.bind(this,val)}
                                     className={
                                         this.state.select === val.id ? "active xiala-cube" : "xiala-cube"
                                    }>
                                        {
                                            this.props.hasimage &&
                                                this.props.hasimageCon[val[this.props.hasimageField]] ? this.props.hasimageCon[val[this.props.hasimageField]]:""
                                        }
                                        <span style={this.props.hasimage?{width:"calc(100% - 24px)"}:{width:"100%"}} className="iconname">{val.name}</span>
                                    </span>
                                </div>
                            })
                        }
                    </div>
                }
            </Slidecss>
        );
    }
}
Slide.defaultProps = {
    usetheme: false,
    theme: "blue",
    value: "",
    list:[],
    width: 200,
    height: 30,
    field:"",//当有表单是下拉的时候的字段名称
    refresh: false,
    notEmpty: false,
    disturbInfo:"",

    allcss: "",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: initcolor,

    background: "transparent",
    fontSize: 14,
    fontColor: "#333333", 
    fontPlaceholderColor: "#757575",
    placeholder: "请选择一项",
    iconColor: initcolor,
    iconSize:14,
    triangleColor: "#333",
    triangleSize: 14,
    
    slideDirection:"down",
    slideOptionHeight:25,
    slideOptionNumber: 7,
    slideBackground:"#ffffff",
    slideBorderWidth:1,
    slideBorderColor: initcolor,
    slideBoxShadow: "none",
    slideFontSize:12,
    slideActiveBgcolor: initcolor,
    slideActiveFcolor: "#333333",
    slideActiveOpacity: 20,
};
Slide.propTypes = {
    usetheme: PropTypes.bool,
    theme: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    list: PropTypes.array,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    field: PropTypes.string,
    disturbInfo: PropTypes.string,
    allcss: PropTypes.string,
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    background: PropTypes.string,
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontColor: PropTypes.string,
    placeholder: PropTypes.string,
    fontPlaceholderColor: PropTypes.string,
    refresh: PropTypes.bool,
    notEmpty: PropTypes.bool,
    iconColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    triangleColor: PropTypes.string,
    triangleSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    slideDirection: PropTypes.string,
    slideOptionHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    slideOptionNumber: PropTypes.number,
    slideBackground: PropTypes.string,
    slideBorderWidth: PropTypes.number,
    slideBorderColor: PropTypes.string,
    slideBoxShadow: PropTypes.string,
    slideFontSize:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    slideActiveBgcolor: PropTypes.string,
    slideActiveFcolor: PropTypes.string,
    slideActiveOpacity: PropTypes.number
};
export default Slide;