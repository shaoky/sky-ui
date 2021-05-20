# sky-ui

## 启动
```
npm run dev
```

## 目录

<pre>
├── packages                        // 组件包
├── lib                             // 组件打包后的目录
├── build                           // 组件打包后的目录
│   ├── rollup.config.js            // 单个组件打包（暂时不使用，采用统一打包）
│   ├── rollup.config.bundle.js     // 组件打包
├── README.md           
├── package.json       // 项目配置文件
├── src                // 组件展示，后续改为storybook
│   ├── api            // api接口
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── config         // 配置
│   ├── router         // 配置路由
│   ├── store          // vuex状态管理
│   ├── views          // 各种页面
|   ├── mixins         // 混合通用方法
|   ├── utils          // 工具库
│   └── main.js        // Webpack 预编译入口
</pre>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 命令

1. build -> 项目初始化
1. build:lib-full -> 生成index.full.js
2. build:esm-bundle -> 生成每个Index.d.ts
3. build:type -> 文件夹加sky-
4. build:utils -> 编译package/utils
5. build:theme -> 编译css

### TODO
1. vuePress 还未支持vue3
2. storybook 还未支持vue3

### 提交规则

格式：前缀 + 英文冒号: + 1个空格 + 描述

1. feat: 新功能（feature）
2. fix: 修补bug
3. docs: 文档（documentation）
4. style: 格式（不影响代码运行的变动）
5. refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
6. build: 生产环境改动
7. test: 增加测试
8. chore: 构建过程或辅助工具的变动
9. release: 发布
10. deletl: 删除文件

### 问题

1. yarn storybook

TypeError: Cannot read property 'parseComponent' of undefined

解决：babel.config.js，删除presets->"@babel/typescript"，删除yarn.lock，node_modules，重新yarn