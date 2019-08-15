# react-input
自定义react-input组件

参数如下
issearch:false,//是否是直接输入就搜索的框
type: "text",//表单类型
defaultValue: "",//默认值字符串
theme: "blue",//blue 蓝色 purple 紫色 green 绿色
width: 200,//数字 
height: 30,//数字 
borderradius: 2,//数字 单位像素
borderwidth: 1,//数字 单位像素
bordercolor: "#1890FF",//字符串 16进制的 或者rgb值
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
iconcolor: "#1890FF",
activeboxshadow:"none",
pattern:null,//外部正则

onChange(name,value)
onFocus(name,value)