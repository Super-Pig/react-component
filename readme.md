# 一个基于 monorepo 的 react 组件库

# Lerna
## 初始化 package.json
`yarn init -y`

## 初始化 lerna
`npx lerna@latest init`

## 创建组件
`lerna create input`

## 安装依赖包
```
lerna add react
lerna add react-dom
```

## 打包构建

### 安装工具
```
lerna add webpack --dev
lerna add webpack-cli --dev
lerna add babel-loader --dev
lerna add @babel/core --dev
lerna add @babel/preset-env --dev
lerna add @babel/preset-react --dev
yarn
```

### 配置构建命令
```
// packages/input/package.json

{
    ...
    "scripts": {
        "build": "webpack"
    }
}
```

### 配置 webpack
```
// packages/input/webpack.config.js

module.exports = {
    entry: './lib/input.js',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        }]
    }
}
```

### 运行构建命令
`npx lerna run build`

## 发布
```
npx lerna version --no-private
npx lerna publish --no-private
```


# storybook

## 初始化
`npx storybook init`

## 添加 story
```
// stories/Input.stories.jsx
import React from 'react'
import Input from '../packages/input/lib/input'

export default {
    title: 'Example/Input',
    component: Input
}


export const Primary = <Input />
```

## 打开页面
`yarn storybook`

## 构建
`yarn build-storybook --docs`


