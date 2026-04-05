# DMU AI Community Website

Dalian Maritime University 本科生科研学习 Community 官网（纯静态站点）。

## 1. 项目说明
- 本项目用于展示社区信息、科研与竞赛、成员信息、学习路径和招新联系方式。
- 技术栈：`HTML + CSS + JavaScript`（无后端、无构建工具）。
- 适合直接部署到 GitHub Pages。

## 2. 页面结构
- `index.html`：门户页（导航 + News）
- `research.html`：科研与竞赛页
- `members.html`：成员页
- `learning.html`：学习路径页
- `collab.html`：招新页（要求 + 联系方式）
- `styles.css`：全站样式
- `script.js`：移动端菜单交互

素材目录：
- `assets/members/`：成员照片素材
- `assets/research/`：科研页图示素材

## 3. 本地预览
直接双击打开 `index.html` 即可。

推荐方式（可避免部分路径问题）：
1. 在项目根目录启动本地静态服务（例如 VS Code Live Server）。
2. 浏览器访问本地地址查看。

## 4. 多人协作（Fork 流程）
1. Fork 本仓库到自己的 GitHub 账号。
2. 在自己仓库新建分支（不要直接改 `main`）。
3. 修改页面内容后提交 commit。
4. 向上游仓库发起 Pull Request（PR）。
5. 维护者 review 后合并。

建议分支命名：
- `feat/news-update`
- `feat/member-photos`
- `fix/link-typo`

## 5. 修改规范（建议）
- 尽量只改你负责的页面，减少冲突。
- 文案改动保持简洁一致，优先中文。
- 外链先检查是否可访问。
- 图片尽量压缩后再提交（推荐 `webp` 或优化后的 `png/jpg`）。
- 不要提交无关文件（临时文件、编辑器缓存等）。

成员照片建议：
- 缩略图放 `assets/members/thumb/`
- 高清图放 `assets/members/full/`
- 统一比例建议 `4:5`


## 6. GitHub Pages 部署
在仓库 `Settings -> Pages`：
- Source 选择部署分支（如 `main`）
- Folder 选择 `/ (root)`

保存后等待发布完成。

## 7. 联系维护者
如需新增页面结构或大改样式，建议先提 issue 讨论后再动手，避免多人重复改动。
