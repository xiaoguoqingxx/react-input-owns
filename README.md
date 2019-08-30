# react-input-owns

react-input-owns组件，我们提供三套颜色主题 blue、purple、green，可以通过给theme属性传完整的16进制颜色和rgb值自定义主题色

包括以下几种组件

一、ReactInput 输入框组件

二、Page 分页组件

三、Slide 单选下拉组件

四、Button 按钮组件

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
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，也可以传完整的16进制颜色和rgb值，使用主题后，以主题色为准
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
incss | String | "" | 完整的css代码 给input框设置
iconsize | Number、String | 14 | ×图标字体大小
eyesize | Number、String | 18 | 眼睛图标字体大小
searchsize | Number、String | 16 | 搜索图标字体大小


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
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，也可以传完整的16进制颜色和rgb值，使用主题后，以主题色为准
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
customSlide | Array |  [10,20,50,100] | 自定义下拉
slideHeight | String、Number | #333 | 下拉框高
slideActiveBgcolor | String | #1D82FE | 下拉框选项选中时的背景色
slideActiveFcolor | String | #fff | 下拉框选项选中时的字体色
slideActiveOpacity | Number | 20 | 拉框选项选中时的背景透明度 0-100
slidePosition | String | up | 下拉方向 （提供 up和down两种）
#### 2、需要传递的props方法如下：

`changeNumber(page, all)` 改变当前页

1、page 是 当前页

2、all 是 总页数

`changeEvery(value)` 改变每页显示个数

1、value 是每页显示个数


### 三、Slide参数详解

#### 1、需要传递的props参数如下：

##### 基本属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
usetheme | Boolean | false | 是否要使用主题 
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，也可以传完整的16进制颜色和rgb值，使用主题后，以主题色为准
value | String、Number | "" | 没有传空
list | Array | [] |  下拉列表选项。注意这里要求必须有id和name两个字段
width | String、Number | 200 | 组件宽度
height |  String、Number | 30 | 组件高度
field | String | "" | 当有表单时该下拉的字段名称
refresh | Boolean | false | 是否实时更新state
notEmpty | Boolean | false | 是否该字段不能为空（有没有八叉图表）
disturbInfo | String | "" | 打断下拉操作的信息

##### 样式属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
allcss | String | "" | 针对于该组件外层的css完整样式代码
borderRadius | String、Number | 2 | 组件圆角
borderWidth | Number | 1 | 组件中的边框宽度 （单位：像素）
borderColor | String | #1D82FE | 组件的边框颜色
background | String | transparent | 组件主体背景
fontSize | String、Number | 14 | 组件主体字体大小（字符串需要带单位，数字默认单位px）
fontColor | String | #333 | 组件主体字体颜色
fontPlaceholderColor | String | #757575 | 组件主体类似placeholder字体颜色
placeholder | String | 请选择一项 | 类似input的placeholder
iconColor | String | #1D82FE | × 按钮的颜色
iconSize | String、Number | 14 | × 按钮的字体大小
triangleColor | String | #333 | ↓下拉按钮的颜色
triangleSize | String、Number | 12 | ↓下拉按钮的字体大小（字符串需要带单位，数字默认单位px）

##### 下拉框样式属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
slideDirection | String | down | 上拉还是下拉 提供 up和down两种可选值
slideOptionHeight | String、Number | 25 | 下拉每个选项的高度
slideOptionNumber | Number | 7 | 下拉一屏展示多少个选项
slideBackground | String | #fff | 下拉背景色
slideBorderWidth | Number | 1 | 下拉框边框宽度
slideBorderColor | String | #1D82FE | 下拉框边框颜色
slideBoxShadow | String | none | 下拉框阴影
slideFontSize | String、Number | 12 | 下拉框选项字体颜色
slideActiveBgcolor | String | #1D82FE | 下拉框选项选中时的背景色
slideActiveFcolor | String | #fff | 下拉框选项选中时的字体色
slideActiveOpacity | Number | 20 | 拉框选项选中时的背景透明度 0-100

#### 2、需要传递的props方法如下：

`doSelect(value, name,field)` 改变当前选项

1、value 是选中那条数据的id

2、name 是选中那条数据的name

2、field 是字段名

`focus(field)` 用于取消报错

1、field 是字段名

`disturb(disturbinfo)` 当disturbinfo不为空的时候，点击打断下拉操作并将报错信息返回

### 四、Button参数详解

#### 1、需要传递的props参数如下：

##### 基本属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
usetheme | Boolean | false | 是否要使用主题 
theme | String | blue | 主题名称，目前提供 blue、purple、green 三种可选值，也可以传完整的16进制颜色和rgb值，使用主题后，以主题色为准
name | String | 搜索 | 按钮里的字
width | String、Number | 200 | 组件宽度
height |  String、Number | 30 | 组件高度

##### 样式属性

name | 类型 | 默认值 | 描述 
:-: | :-: | :-: | :-: 
allcss | String | "" | 针对于该组件外层的css完整样式代码
borderRadius | String、Number | 2 | 组件圆角
borderWidth | Number | 1 | 组件中的边框宽度 （单位：像素）
borderColor | String | #1D82FE | 组件的边框颜色
background | String | #1D82FE | 组件主体背景
fontSize | String、Number | 14 | 组件主体字体大小（字符串需要带单位，数字默认单位px）
fontColor | String | #333 | 组件主体字体颜色
cursor | String | pointer | 鼠标移到组件上的样式
boxShadow | String | none | 完整的box-shadow样式
#### 2、需要传递的props方法如下：

`doClick()` 点击事件回调

### 四、SlideAll参数详解

参数与slide组件基本一致 不同的时候  value 变成 select  类型是数组

## 引入方法与示例

```js
import { ReactInput,Page,Slide,Button } from 'react-input-owns';

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
<Slide 
    usetheme 
    theme="green" 
    field="hollo" 
    list={[{ id: 1, name: "hollo" }, { id: 2, name: "hollo123" }]}
/>
<Button usetheme theme="green" doClick={()=>setName(2)} />
```