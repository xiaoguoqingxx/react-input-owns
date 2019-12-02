import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/font.css';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import _ from "lodash";
import TreeNode from './TreeNode';
import { initFontcolor } from '../config';
import { CheckIsColor } from '../common/trans';
const outer = css`${props => props.allcss}`;
const TreeClouds = styled.div`
    display: inline-block;
    min-height:${props => typeof props.minHeight === "number" ? props.minHeight + "px" : props.minHeight};
    position:relative;
    font-size:${props => typeof props.fontSize === "number" ? props.fontSize + "px" : props.fontSize};
    color: ${props => CheckIsColor(props.fontColor) ? props.fontColor : initFontcolor};
    ${outer}
`;
class TreeCloud extends Component {
    constructor(props){
        super(props);
        this.state={
            selectKeys:""
        }
    }
    componentDidMount() {
        if (this.props.expandAll){
            TweenMax.to(`.treecon`, 0.2, { height: "auto", ease: Linear.ease });
            TweenMax.to(`.ttb-nei`, 0.2, { rotation: 0, ease: Linear.ease })
        }
    }
    expandAll(){
        TweenMax.to(`.treecon`, 0.2, { height: "auto", ease: Linear.ease });
        TweenMax.to(`.ttb-nei`, 0.2, { rotation: 0, ease: Linear.ease })
    }
    clickUpgrate(value){
        this.setState({
            selectKeys: value.keys
        })
        this.props.changeSelect && this.props.changeSelect(value)
    }
    renderChildren(props) {//遍历所有子组件
        return React.Children.map(props.children, child => {
            if (child.type === TreeNode){
                const prop = _.cloneDeep(props);
                delete prop.children;
                prop.clickUpgrate = this.clickUpgrate.bind(this);
                prop.selectKeys = this.state.selectKeys;
                return React.cloneElement(child, prop)
            }else{
                return child
            }
        })
    }
    render() {
        return (
            <TreeClouds
             {...this.props}
            >
                {this.renderChildren(this.props)}
            </TreeClouds>
        );
    }
}
/**
 * mode 模式  normal 普通下拉  directory 加减图标模式  noselect 只展示不选择的
 */
TreeCloud.defaultProps = {
    theme: "blue",
    allcss: "",
    minHeight:300,
    nodeminHeight: 25,
    fontSize: 14,
    fontColor: "#333",
    gap:20,
    mode:"normal",
    switchIcon: <i className="fa fa-caret-down" aria-hidden="true"></i>,
    switchLastIcon: <i className="fa fa-file-o" aria-hidden="true"></i>,
    switchDownIcon: <i className="fa fa-minus-square-o" aria-hidden="true"></i>,
    switchUpIcon: <i className="fa fa-plus-square-o" aria-hidden="true"></i>,
    switchNSIcon: <i className="fa fa-angle-down" aria-hidden="true"></i>,
    switchIconColor:"#333",
    switchLastIconColor:"#333",
    switchIconSize:14,
    switchLastIconSize: 13,
    switchIconAnimate:true,
    hoverOpacity:15,
    activeOpacity:30,
    activeBold:500,
    expandAll:false,
    onlyHasChild:false,
    showLine:false,
    linestyle:"dashed", 
    lineColor: "#bbb",
    btnWidth:20,
};
TreeCloud.propTypes = {
    theme: PropTypes.string,
    allcss: PropTypes.string,
    minHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    nodeminHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontColor: PropTypes.string,
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    mode: PropTypes.string,
    switchIconColor: PropTypes.string,
    switchIconSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    switchLastIconColor: PropTypes.string,
    switchLastIconSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    switchIconAnimate: PropTypes.bool,
    hoverOpacity: PropTypes.number,
    acticeOpacity: PropTypes.number,
    activeBold: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    expandAll:PropTypes.bool,
    onlyHasChild: PropTypes.bool,
    showLine: PropTypes.bool,
    linestyle: PropTypes.string,
    lineColor: PropTypes.string,
    btnWidth:PropTypes.number
};
export default TreeCloud;