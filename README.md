# diyimg
image component for React

[![npm Package](https://img.shields.io/npm/v/diyimg.svg)](https://www.npmjs.com/package/diyimg)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/xinconan/diyimg/blob/master/LICENSE)

## usage
```bash
npm i diyimg -S
```
then

```jsx
import React, { Component } from 'react';
import DiyImg from 'diyimg';

class Demo extends Component {
  render() { 
    return ( 
      <div className="x-bg">
        <DiyImg src="http://file.ituring.com.cn/SmallCover/1808a9c62d5828afd2d8"/>
        <DiyImg src="http://no.com/noexist" defaultSrc="http://file.ituring.com.cn/SmallCover/1808776dceb935954e20"/>
        <DiyImg src="http://no.com/noexist" errorSrc="http://file.ituring.com.cn/SmallCover/0100a7c5ff69a12ad680"/>
      </div>
     );
  }
}
```

## props
`src` ：图片地址  
`defaultSrc`：默认图片  
`errorSrc`：出现错误的情况下用来替换的图片  
`className`： 要添加的class类名  
