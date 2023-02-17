# sky-ui
组件库采用monorepo架构，pnpm + workspace，rollup打包，vitest单元测试，storybook展示组件

## 开始
```
pnpm install
pnpm dev
```

## 业务项目 + 组件开发
1. 组件中执行 pnpm link sky(别名)
2. 业务项目执行 pnpm link sky --dir (../sky/组件目录)
3. 业务项目 import { SkyButton } from 'sky'

## 项目升级
1. 最小复杂度
2. yarn 改为 pnpm
3. 原来58个包，缩小到22个
4. 项目结构优化
5. jest 改为 vitest

## TODO
1. xxx.vue.d.ts声明文件需要改进，提示错误的值，比如<sky-button type="abc">未存在的值，并且提示可选的值
2. rollup --watch 修改vue文件 生成index.esm 无法更新，修改js可以

## 提交规则

格式：前缀 + 英文冒号: + 1个空格 + 描述

1. feat: 新功能（feature）
2. fix: 修补bug
3. docs: 文档（documentation）
4. style: 格式（不影响代码运行的变动）
5. refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
6. build: 生产环境改动
7. test: 增加测试
8. delete: 删除文件
9. other: 其它
