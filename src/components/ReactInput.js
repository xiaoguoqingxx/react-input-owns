import React, { Component } from 'react';
import '../css/font.css';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
let color={
    "blue":"#1D82FE",
    "purple": "#E44CF9",
    "green": "#11BE73"
};
const outer = css`${props => props.allcss}`;
const Inputcss = styled.div`
    width:${props => typeof props.width === "number" ? props.width + "px" : props.width};
    height:${props => typeof props.height === "number" ? props.height + "px" : props.height};
    position:relative;
    ${outer}
    input{
        display:block;
        width:100%;
        box-sizing:border-box;
        padding-right:${(props) =>{
            if(props.issearch){
                return "20px"
            } else if (props.type==="password"){
                if (props.haseye){
                    return "50px"
                }else{
                    return "20px"
                }
            }else{
                return "20px"
            }
        }};
        outline:none;
        padding-left:10px;
        height:100%;
        position:relative;
        border:${props => props.borderwidth}px solid ${props => {
            if (props.usetheme) {
                return color[props.theme] || props.bordercolor
            } else {
                return props.bordercolor
            }
        }};
        background:${props => props.background};
        font-size:${props => typeof props.fontsize === "number" ? props.fontsize + "px" : props.fontsize};
        color:${props => props.fontcolor};
        box-shadow:${props => props.boxshadow}
        transition:all 0.2s;
        &:focus{
            box-shadow:${props => props.activeboxshadow}
        }
    }
    span{
        color:${props => {
            if (props.usetheme) {
                return color[props.theme] || props.iconcolor
            } else {
                return props.iconcolor
            }
        }}
        &:before{
            color:${props => {
                if (props.usetheme) {
                    return color[props.theme] || props.iconcolor
                } else {
                    return props.iconcolor
                }
            }}
        }
    }
    .cha{
        position:absolute;
        right:4px;
        top:50%;
        z-index:10;
        margin-top:-7px;
        cursor:pointer;
        font-size:14px;
    }
    .yan{
        position: absolute;
        font-size:18px;
        right: 24px;
        top: 50%;
        z-index: 40;
        margin-top: -9px;
        cursor: pointer;
    }
    .yanclose{
        position: absolute;
        font-size:18px;
        right: 24px;
        top: 50%;
        z-index: 40;
        margin-top: -9px;
        cursor: pointer;
    }
    .search{
        position: absolute;
        font-size:16px;
        right: 2px;
        top: 50%;
        z-index: 40;
        margin-top: -8px;
        cursor: pointer;
    }
`;
class ReactInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: props.defaultValue || "",
            showcha:false,
            type: props.type || "text"
        }
    }
    UNSAFE_componentWillReceiveProps(props) {
        if (props.refresh) {
            this.setState({
                value: props.defaultValue,
                type: props.type
            })
        }
    }
    handleChange(event){
        let value = event.target.value.replace(/(^\s*)|(\s*$)/g, "");
        if (this.props.pattern) {
            value = event.target.value.replace(this.props.pattern, "");
        }
        this.setState({
            value: value
        });
        this.props.onChange && this.props.onChange(this.props.name,value)
    }
    handleFocus(){
        this.setState({
            showcha: true
        })
        this.props.onFocus && this.props.onFocus(this.props.name,"")
    }
    clickClear(){
        let type="";
        if (!this.props.issearch && this.props.type==="password"){
            type ="password"
        }
        this.setState({
            value: "",
            type: type
        },()=>{
            
        });
        this.props.onChange && this.props.onChange(this.props.name,"")
    }
    changeType(str) {
        this.setState({
            type: str
        })
    }
    render() {
        return (
            <Inputcss
                {...this.props}
            >
                <input
                    type={this.props.issearch?"text":this.state.type}
                    name={this.props.name}
                    autoComplete="new-password"
                    readOnly={this.props.readonly}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    maxLength={this.props.maxlength}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                />
                {
                    !this.props.issearch &&this.state.showcha && this.state.value !== "" &&
                    <span className="cha icon-cha" onClick={this.clickClear.bind(this)}></span>
                }
                {
                    !this.props.issearch && this.props.type==="password" && this.props.haseye && this.state.value !== "" &&
                    (this.state.type==="text" ?
                    <span className="yanclose icon-yanclose" onClick={this.changeType.bind(this,"password")}></span> :
                    <span className="yan icon-yan" onClick={this.changeType.bind(this, "text")}></span>)
                }
                {
                    this.props.issearch &&
                    <span className="search icon-search"></span>
                }
            </Inputcss>
        );
    }
}
ReactInput.defaultProps = {
    issearch:false,//是否是直接输入就搜索的框
    usetheme:false,//是否使用主题
    type: "text",//表单类型
    defaultValue: "",//默认值字符串
    theme: "blue",//blue 蓝色 purple 紫色 green 绿色
    width: 200,//数字 
    height: 30,//数字 
    borderradius: 2,//数字 单位像素
    borderwidth: 1,//数字 单位像素
    bordercolor: "#1D82FE",//字符串 16进制的 或者rgb值
    boxshadow: "none",//完整的box-shadow 样式 字符串
    background:"transparent",//字符串 16进制的 或者rgb值 或者完整的background
    fontsize:14,//数字
    allcss: "",//字符串类型的css 代码
    readonly:false,//是否可读 bool值
    placeholder: "请输入内容",//字符串
    maxlength: 200,//数字 最大长度
    name:"",//表单默认的值
    fontcolor:"#333",
    refresh: false,//是否刷新state bool值
    haseye:false,
    iconcolor: "#1D82FE",
    activeboxshadow:"none",
    pattern:null,//外部正则
};
ReactInput.propTypes={
    issearch: PropTypes.bool,
    usetheme: PropTypes.bool,
    type: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    theme: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    borderradius: PropTypes.number,
    borderwidth: PropTypes.number,
    bordercolor: PropTypes.string,
    boxshadow: PropTypes.string,
    background: PropTypes.string,
    fontsize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    allcss: PropTypes.string,
    readonly: PropTypes.bool,
    placeholder: PropTypes.string,
    maxlength: PropTypes.number,
    name: PropTypes.string,
    fontcolor: PropTypes.string,
    refresh: PropTypes.bool,
    haseye: PropTypes.bool,
    iconcolor: PropTypes.string,
    pattern: PropTypes.object
};
export default ReactInput;