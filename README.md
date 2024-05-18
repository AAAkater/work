# 工程实践2前端

## 下载依赖并运行

```bash
cd work
pnpm install
pnpm dev
```

## 创建并切换到新分支

```bash
git checkout -b <new-feat-name>
```

## git commit规范

    feat：新功能

    fix/to：修复bug

    fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
        to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
        docs：文档（documentation）。

    style：格式（不影响代码运行的变动）。

    refactor：重构。

    perf：优化相关。

    test：增加测试。

    chore：构建过程或辅助工具的变动。

    revert：回滚到上一个版本。

    merge：代码合并。

    sync：同步主线或分支的Bug。
