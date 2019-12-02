import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/font.css';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { color, initIconcolor, initLinecolor } from '../config';
import { CheckIsColor, addOpacity } from '../common/trans';
import _ from "lodash";
import { TweenMax, Linear } from 'gsap';
const outer = css`${props => props.allcss}`;
const TreeNodes = styled.div.attrs(props=>({
    className:`treenode treenode${props.keys}`
}))`
    box-sizing:border-box;
    ${props => props.nodewidth ? `width:${typeof props.nodewidth === "number" ? props.nodewidth + "px" : props.nodewidth};`:""};
    ${props => props.nodeheight ? `width:${typeof props.nodeheight === "number" ? props.nodeheight + "px" : props.nodeheight};` : ""};
    min-height:${props => typeof props.nodeminHeight === "number" ? props.nodeminHeight + "px" : props.nodeminHeight};
    position:relative;
    cursor:pointer;
    white-space: nowrap;
    
    ul{
       list-style: none; 
    }
    ${outer}
    .tree-title{
        padding:3px 0;
        button{
            background:transparent;
            outline:none;
            border:none;
        }
        &:hover{
            background: ${props => {
                if (props.mode === "noselect") {
                    if (CheckIsColor(props.theme)) {
                        return addOpacity(props.theme, props.hoverOpacity)
                    } else {
                        return color[props.theme] ? addOpacity(color[props.theme], props.hoverOpacity) : addOpacity(props.theme, hoverOpacity)
                    }
                }
                return "transparent"
            }}; 
        }
    }
    .tt-btn{
        display:inline-block;
        margin:0;
        padding:0;
        width:${props => props.btnWidth + "px"};
        text-align:center;
        .ttb-nei{
            transform:rotate(-90deg); 
        }
        i,span{
            color:${props => CheckIsColor(props.switchIconColor) ? props.switchIconColor : initIconcolor};
            cursor:pointer;
            font-size:${props => props.switchIconSize === "number" ? props.switchIconSize + "px" : props.switchIconSize};
        }
        span:before{
            color:${props => CheckIsColor(props.switchIconColor) ? props.switchIconColor : initIconcolor};
            font-size:${props => props.switchIconSize === "number" ? props.switchIconSize + "px" : props.switchIconSize};
        }
    }
    .tt-btn-no{
        display:inline-block;
        margin:0;
        padding:0;
        width:${props => props.btnWidth + "px"};
        text-align:center;
        i,span{
            color:${props => CheckIsColor(props.switchLastIconColor) ? props.switchLastIconColor : initIconcolor};
            cursor:pointer;
            font-size:${props => props.switchLastIconSize === "number" ? props.switchLastIconSize + "px" : props.switchLastIconSize};
        }
        span:before{
            color:${props => CheckIsColor(props.switchLastIconColor) ? props.switchLastIconColor : initIconcolor};
            font-size:${props => props.switchLastIconSize === "number" ? props.switchLastIconSize + "px" : props.switchLastIconSize};
        }
    }
    .tt-titlesome{
        display:inline-block;
        cursor:pointer;
        transition:all 0.2s;
        padding:0 5px;
        line-height: ${props => typeof props.nodeminHeight === "number" ? props.nodeminHeight + "px" : props.nodeminHeight};
    }
    .tt-title{
        display:inline-block;
        cursor:pointer;
        line-height: ${props => typeof props.nodeminHeight === "number" ? props.nodeminHeight + "px" : props.nodeminHeight};
        padding:0 5px;
        transition:all 0.2s ease;
        &:hover{
            background: ${props => {
                const opacitys = props.keys === props.selectKeys ? props.activeOpacity : props.hoverOpacity;
                if (CheckIsColor(props.theme)) {
                    return addOpacity(props.theme, opacitys)
                } else {
                    return color[props.theme] ? addOpacity(color[props.theme], opacitys) : addOpacity(props.theme, opacitys)
                }
            }}; 
        }
        
    }
    .ttt-active{
        background: ${props => {
            if (CheckIsColor(props.theme)) {
                return addOpacity(props.theme, props.activeOpacity)
            } else {
                return color[props.theme] ? addOpacity(color[props.theme], props.activeOpacity) : addOpacity(props.theme, props.activeOpacity)
            }
        }};
        font-weight:${props => props.activeBold}
    }
    
    .treecon{
        padding-left:${props => typeof props.gap === "number" ? props.gap + "px" : props.gap};
        height:0;
        overflow:hidden;
    }
    ${props => props.showLine ?`&:not(:last-child)::before{
        position: absolute;
        left: ${props.btnWidth/2+1 + "px"};
        width: 1px;
        height: 100%;
        height: calc(100% - 22px);
        margin: 24px 0 0;
        border-left: 1px ${props.linestyle} ${CheckIsColor(props.lineColor) ? props.lineColor : initLinecolor};
        content: ' ';
    }`:""}
    
`;
class TreeNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: false,
            selectKeys: props.selectKeys
        }
    }
    UNSAFE_componentWillReceiveProps(prop){
        this.setState({
            selectKeys: prop.selectKeys
        })
    }
    componentWillMount() {
        if (this.props.expandAll){
            this.setState({
                slide:true
            })
        }
    }
    renderChildren(props) {//遍历所有子组件
        return React.Children.map(props.children, child => {
            if (child.type === TreeNode) {
                const prop = _.cloneDeep(props);
                const newprop = _.cloneDeep(child.props);
                delete prop.children;
                delete newprop.children;
                Object.assign(prop, newprop);
                return React.cloneElement(child, prop)
            } else {
                return child
            }
        })
    }
    clickNormalSlide(domone,domtwo,e){
        e.stopPropagation()
        const height = document.getElementsByClassName(domtwo)[0].offsetHeight;
        if (height===0){
            this.setState({
                slide:true
            })
            TweenMax.to(`.${domtwo}`,0.3,{height:"auto",ease:Linear.ease});
            this.props.mode !== "directory" && this.props.switchIconAnimate && TweenMax.to(`.${domone}`, 0.3, { rotation: 0, ease: Linear.ease })
        }else{
            this.setState({
                slide: false
            })
            TweenMax.to(`.${domtwo}`, 0.3, { height: 0, ease: Linear.ease });
            this.props.mode !== "directory" && this.props.switchIconAnimate && TweenMax.to(`.${domone} `, 0.3, { rotation: "-90deg", ease: Linear.ease })
        }
    }
    clickUpgrate(e){
        e.stopPropagation()
        if (e.button === 0 && this.props.keys!==this.state.selectKeys){
            if (this.props.onlyHasChild){
                if (!this.props.children || this.props.children.length === 0){
                    this.setState({
                        selectKeys: this.props.keys
                    })
                    this.props.clickUpgrate(this.props) 
                }
            }else{
                this.setState({
                    selectKeys: this.props.keys
                })
                this.props.clickUpgrate(this.props) 
            }    
        }
        
    }
    empty(){

    }
    render() {
        const { mode, keys} = this.props
        return (
            <TreeNodes
             {...this.props}
            >
                <div className="tree-title" onClick={mode === "noselect" ? this.clickNormalSlide.bind(this, `ttb-nei${this.props.keys}`, `treecon${this.props.keys}`) : this.empty()}>
                    {
                        mode === "normal" && this.props.children && this.props.children.length !== 0 &&
                        <span className={`tt-btn`} onClick={this.clickNormalSlide.bind(this, `ttb-nei${this.props.keys}`, `treecon${this.props.keys}`)}>
                            <button className={`ttb-nei ttb-nei${keys}`}>{this.props.switchIcon}</button>
                        </span>
                    }
                    {
                        mode === "directory" && this.props.children && this.props.children.length !== 0 &&
                        <span className={`tt-btn`} onClick={this.clickNormalSlide.bind(this, `ttb-nei${this.props.keys}`, `treecon${this.props.keys}`)}>
                            <button className={`ttb-nei ttb-nei${keys}`}>{!this.state.slide ? this.props.switchUpIcon : this.props.switchDownIcon}</button>
                        </span>
                    }
                    {
                        mode === "noselect" && this.props.children && this.props.children.length !== 0 &&
                        <span className={`tt-btn`} >
                            <button className={`ttb-nei ttb-nei${keys}`}>{this.props.switchNSIcon}</button>
                        </span>
                    }
                    {
                        (!this.props.children || this.props.children.length === 0) &&
                        <button className="tt-btn-no">
                            {this.props.switchLastIcon}
                        </button>
                    }

                    {
                        mode !== "noselect" &&
                        <span
                            className={this.state.selectKeys === keys ? `tt-title ttt-active` : "tt-title"}
                            onClick={this.clickUpgrate.bind(this)}>
                            {this.props.content}
                        </span>
                    }
                    {
                        mode === "noselect" &&
                        <span className="tt-titlesome">
                            {this.props.content}
                        </span>
                    }
                </div>
                
                {
                    this.props.children && this.props.children.length !== 0 &&
                    <div className={`treecon treecon${keys}`}>
                        {this.renderChildren(this.props)}
                    </div>
                }
                
            </TreeNodes>
        );
    }
}

TreeNode.defaultProps = {
    allcss:"",
    keys: _.uniqueId("node"),
};
TreeNode.propTypes = {
    nodewidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    nodeheight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    allcss: PropTypes.string,
    keys: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};
export default TreeNode;