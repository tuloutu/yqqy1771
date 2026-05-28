---
name: fix-custom-domain-error
overview: 修复自定义域名访问错误，构建项目并上传静态文件到CloudBase托管。
todos:
  - id: check-project
    content: 检查项目结构和构建配置
    status: completed
  - id: build-project
    content: 执行项目构建生成静态文件
    status: completed
    dependencies:
      - check-project
  - id: login-cloudbase
    content: 使用 [mcp:CloudBase AI ToolKit] 登录云开发环境
    status: completed
    dependencies:
      - build-project
  - id: upload-files
    content: 使用 [mcp:CloudBase AI ToolKit] 上传构建文件到静态托管
    status: completed
    dependencies:
      - login-cloudbase
  - id: verify-domain
    content: 验证自定义域名yqqy1771.com访问正常
    status: completed
    dependencies:
      - upload-files
---

## Product Overview

修复自定义域名访问错误问题，通过构建项目并将静态文件上传至CloudBase托管来解决"Invalid path"错误。

## Core Features

- 构建前端项目生成静态文件
- 上传构建产物到CloudBase静态托管
- 验证自定义域名访问正常
- 确保静态托管存储桶包含必要的项目文件

## Tech Stack

- 构建工具：基于项目现有的构建配置（npm/yarn build）
- 部署平台：CloudBase 静态网站托管
- 项目类型：Web前端项目（React/Vue等，需根据实际项目确定）

## Tech Architecture

### 系统架构

- 本地构建：执行构建命令生成dist/build目录
- 文件上传：通过CloudBase MCP工具上传静态文件
- 域名访问：通过已绑定的自定义域名yqqy1771.com访问

### 部署流程

```mermaid
flowchart LR
    A[检查项目构建状态] --> B[执行项目构建]
    B --> C[登录CloudBase环境]
    C --> D[上传静态文件到托管]
    D --> E[验证域名访问]
```

## Implementation Details

### 关键步骤说明

**1. 项目构建**

- 执行构建命令（npm run build 或 yarn build）
- 确认构建产物目录及内容
- 验证入口文件（index.html）存在

**2. 文件上传**

- 使用uploadFiles工具上传构建目录
- 覆盖现有静态托管内容
- 确保文件结构正确

**3. 域名验证**

- 检查域名绑定状态
- 测试自定义域名访问
- 确认"Invalid path"错误已解决

## Agent Extensions

### MCP

- **CloudBase AI ToolKit**
- Purpose: 管理CloudBase静态托管，包括登录环境、上传静态文件和域名管理
- Expected outcome: 成功上传项目文件到托管存储，解决域名访问错误

### Integration

- **tcb**
- Purpose: CloudBase服务集成，提供静态网站托管能力
- Expected outcome: 项目文件部署到CloudBase托管环境