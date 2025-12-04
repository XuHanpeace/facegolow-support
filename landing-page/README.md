# FaceGlow Landing Page

FaceGlow APP 的落地页，介绍 APP 功能并引导用户下载。

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
# 构建生产版本
npm run build
```

构建产物在 `dist` 目录。

## 部署到 CloudBase

### 1. 安装 CloudBase CLI

```bash
npm install -g @cloudbase/cli
```

### 2. 登录 CloudBase

```bash
cloudbase login
```

### 3. 开通静态网站托管

在 [CloudBase 控制台](https://console.cloud.tencent.com/tcb) 开通「静态网站托管」服务。

### 4. 部署

```bash
# 构建项目
npm run build

# 部署到 CloudBase
cloudbase hosting deploy dist -e your-env-id
```

将 `your-env-id` 替换为您的环境 ID。

### 5. 配置安全域名

在 CloudBase 控制台的「安全来源」中添加您的域名：
- 本地开发：`localhost:5173`、`127.0.0.1:5173`
- 生产环境：您的实际域名

## 访问

部署后可通过 CloudBase 分配的默认域名访问：
`https://your-env-id.tcb.qcloud.la/landing-page/`

