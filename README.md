# react-input-owns


我的react-input-owns组件，提供三套颜色主题，提供常见的两种表单type（password,text）

# Install

`yarn add react-input-owns`或者`npm install react-input-owns`

# 参数详解

### 需要传递的props参数如下表：

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
width | String、Number | 200 | 输入框长度（数字默认单位：像素），字符串示例："200px"、"100%"
height | String、Number | 30 | 输入框高度（数字默认单位：像素），字符串示例："30px"、"100%"、"2vw"
issearch | Boolean | false | 是否要呈现搜索框
usetheme | Boolean | false | 是否要使用主题 
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，使用主题后
name | String | "" | 表单name值
type | String | text | 表单类型，目前在样式上提供 password、text 两种可选值
defaultValue | String、Number | "" | 表单默认值、受控制input需要传值
refresh | Boolean | false | 当有编辑功能需要该字段
borderradius | Number | 2 | 圆角（单位：像素）
borderwidth | Number | 1 | 边框宽度 （单位：像素）
bordercolor | String | #1890FF | 边框颜色，16进制、rgb值、或者其他颜色设置，不要边框可以设置此字段为 transparent
boxshadow | String | none | 完整的box-shadow css样式
activeboxshadow | String | none | 获得焦点时完整的box-shadow css样式
background | String | transparent | 输入框背景
fontsize | Number、String | 14 | 字体大小（数字默认单位：像素），可以传字符串，字符串必须带单位如 "1rem"
fontcolor | String | #333 | 输入框里字的颜色，16进制、rgb值、或者其他颜色设置
readonly | Boolean | false | 是否只读 
placeholder | String | 请输入内容 | 输入框的placeholder
maxlength | Number | 200 | 输入框可输入最大长度
iconcolor | String | #1890FF | 输入框里图标的颜色，16进制、rgb值、或者其他颜色设置
haseye | Boolean | false | 当type是password时有效 设置要不要眼睛
eyecolor | String | #1890FF | 输入框里眼睛图标的颜色，16进制、rgb值、或者其他颜色设置
pattern | Object | null | 正则
allcss | String | "" | 完整的css代码 字符串

### 需要传递的props方法如下表：

`changeContent(value,name)`

1、name 是 input name值

2、value 是 输入框里的内容

`focusContent(value,name)` 用于取消报错

1、name 是 input name值

2、value 是 ""


# 引入方法

```js
import { ReactInput } from 'react-input-owns';

<ReactInput type="password" haseye/>
```