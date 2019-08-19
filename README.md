# react-input-owns

react-input-owns组件，包括以下几种组件

一、ReactInput 输入框组件

二、Page 分页组件

我们提供三套颜色主题 blue、purple、green

## Install

`yarn add react-input-owns`或者`npm install react-input-owns`

### 一、ReactInput参数详解

#### 1、需要传递的props参数如下表：

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
width | String、Number | 200 | 输入框长度（数字默认单位：像素），字符串示例："200px"、"100%"
height | String、Number | 30 | 输入框高度（数字默认单位：像素），字符串示例："30px"、"100%"、"2vw"
issearch | Boolean | false | 是否要呈现搜索框
usetheme | Boolean | false | 是否要使用主题 
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，使用主题后，以主题色为准
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

#### 2、需要传递的props方法如下表：

`changeContent(value,name)`

1、name 是 input name值

2、value 是 输入框里的内容

`focusContent(value,name)` 用于取消报错

1、name 是 input name值

2、value 是 ""

### 二、Page参数详解

#### 1、需要传递的props参数如下：

##### 基本属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
usetheme | Boolean | false | 是否要使用主题 
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，使用主题后，以主题色为准
upDown | Boolean | true | 是否有上下页
pageNumber | Boolean | true |  是否有页码list
allNumber | Boolean | false | 是否有共多少页
jumpNumber | Boolean | false | 是否有跳到多少页
selectNumber | Boolean | false | 是否有选择每页显示多少个
nowpage | Number | 1 | 当前页（必传）
allPage | Number | 0 | 总数据条数（必传）
everyPage | Number | 10 | 每页显示多少个 

##### 样式属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
allcss | String | "" | 针对于该组件外层的css完整样式代码
allHeight | String、Number | 20 | 组件中数字按钮、输入框、下拉的高度（字符串需要带单位，数字默认单位px）
allBorderWidth | Number | 1 | 组件中数字按钮、输入框、下拉的边框宽度 （单位：像素）
allBorderColor | String | #1D82FE | 组件中数字按钮、输入框、下拉的边框颜色
allActiveBgcolor | String | #1D82FE | 组件中数字按钮选中时的背景色
allActiveFcolor | String | #fff | 组件中数字按钮选中时的字体色
borderRadius | String、Number | 2 | 组件中数字按钮、输入框、下拉的圆角 （字符串需要带单位，数字默认单位px）
componentHeight | String、Number | 30 | 整个组件的高度（字符串需要带单位，数字默认单位px）
buttonFontSize | String、Number | 12 | 数字按钮的字体大小（字符串需要带单位，数字默认单位px）
buttonBgcolor | String | transparent | 数字按钮的背景色
buttonFontColor | String | #333 | 数字按钮的字体色
buttonGap | Number | 5 | 数字按钮的间隔
disabledBgcolor | String | #bbb | 不可点击的上下一页按钮的背景色
disabledFontColor | String | #bbb | 不可点击的上下一页按钮的字体色
otherFontSize | String、Number | 12 | 除数字按钮外其他小组件字体大小（字符串需要带单位，数字默认单位px）
otherColor | String | #333 | 除数字按钮外其他小组件字体颜色
inputWidth | String、Number | 50 | 输入框宽度（字符串需要带单位，数字默认单位px）
inputColor | String | #333 | 输入框字体颜色
slideWidth | String、Number | 50 | 下拉框宽度（字符串需要带单位，数字默认单位px）
slideBgcolor | String | #fff | 下拉框背景颜色
slideColor | String | #333 | 下拉框字体颜色

#### 2、需要传递的props方法如下：

`changeNumber(page, all)` 改变当前页

1、page 是 当前页

2、all 是 总页数

`changeEvery(value)` 改变每页显示个数

1、value 是每页显示个数


## 引入方法与示例

```js
import { ReactInput,Page } from 'react-input-owns';

<ReactInput />
<Page
    usetheme
    theme="green"
    allNumber
    jumpNumber
    selectNumber
    nowpage={1}
    allPage={300}
    everyPage={10}
    changeEvery={(num)=>changeEvery(num)}
    changeNumber={(page, all) => getPages(page, all)}
/>
```