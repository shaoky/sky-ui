# sky-ui

## 打包
```
yarn build
```
## 运行storybook
```
yarn storybook
```
## 测试
```
yarn test:unit
```

## 目录

<pre>
├── packages                        // 组件包
├── lib                             // 组件打包后的目录
├── build                           // 组件打包后的目录
│   ├── rollup.config.js            // 单个组件打包（暂时不使用，采用统一打包）
│   ├── rollup.config.bundle.js     // 组件打包
│   ├── bincomp.js                  // 编译每个组件
│   ├── build.component.js          // rollup编译组件
│   ├── gen-type.js                 // 文件夹重命名
├── README.md           
├── package.json       // 项目配置文件
├── src                // 组件展示，后续改为storybook
│   ├── stories        // storybook
│   └── main.js        // Webpack 预编译入口
</pre>

## 命令

1. build -> 项目初始化
1. build:lib-full -> 生成index.full.js
2. build:esm-bundle -> 生成每个Index.d.ts
3. build:type -> 文件夹加sky-
4. build:utils -> 编译package/utils
5. build:theme -> 编译css

### TODO
1. vuePress 还未支持vue3
2. storybook 还未支持vue3✅

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
10. delete: 删除文件

### 问题

1. yarn storybook

TypeError: Cannot read property 'parseComponent' of undefined

解决：babel.config.js，删除presets->"@babel/typescript"，删除yarn.lock，node_modules，重新yarn