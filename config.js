/* ============================================================================
 *  WOT辅助中心 · 文件下载配置
 *  ----------------------------------------------------------------------------
 *  日常维护只改本文件，主页面 HTML 无需再改动。
 *
 *  ▍修改下载文件：在对应分区的 files 数组里增删一行
 *      { name:'文件名', url:'下载链接', desc:'文件说明', time:'更新时间' }
 *    - name：页面上显示的文件名
 *    - url ：下载链接。文件放在本文件夹的 files/ 目录时写 'files/文件名'；
 *            也可以直接填完整网址（http/https 开头）
 *    - desc：文件说明，不需要可留 ''（留空则文件名下方不显示说明）
 *    - time：更新时间，显示在下载按钮左侧
 *
 *  ▍修改分区：
 *    - color：分区边框颜色 + 标题颜色（黑=SIMP / 红=B4IT / 蓝=PFmods / 灰=其它）
 *    - title：分区标题
 *    - locked: true 表示该分区需输入密码才能展开
 *    - password：该分区自己的解锁密码（每个分区可单独设置，互不影响）
 *    - desc：分区展开后的一句话说明
 * ============================================================================ */

/* ---- 右上角淘宝店铺按钮 ---- */
var TAOBAO_TEXT = '小可的淘宝店铺';                  // 按钮文字
var TAOBAO_URL  = 'https://simp-xiaoke.taobao.com/'; // 淘宝店铺地址

/* ---- 右下角客服按钮链接 ---- */
var KEFU_URL    = 'https://qm.qq.com/q/OICZmAVnKc'; // 客服跳转地址（QQ 临时会话）

/* ---- 各分区独立解锁密码（纯前端演示级保护，页面源码可见） ----
 *  每个 locked 分区在 SECTIONS 里用自己的 password 字段单独设密码；
 *  下方 PASSWORD 仅作为全局兜底值，日常请直接改各分区的 password。 */
var PASSWORD    = 'xiaoke';

/* ---- 页脚作者信息 ---- */
var AUTHOR_TEXT = '作者：SIMP 中国区经销商（小可）';
var AUTHOR_QQ   = 'QQ：3637487607';

/* ---- 分区与文件配置 ---- */
var SECTIONS = [
  {
    id: 'simp',
    title: 'SIMP 艺术机器人',
    color: '#16181b',          // 黑色
    desc: 'SIMP系列自行火炮挂机软件  支持360国服  亚服  欧服  美服  俄罗斯莱服',
    locked: true,              // 默认隐藏，需输入密码
    password: 'EFGHAQ',        // 第一区独立解锁密码
    files: [
      { name: 'SIMP启动器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/SIMP/SIMP%E5%90%AF%E5%8A%A8%E5%99%A8.zip', desc: '先运行挂机环境，在运行此主程序。', time: '2026-10-02' },
      { name: '挂机环境设置', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/SIMP/%E8%AE%BE%E7%BD%AE%E6%8C%82%E6%9C%BA%E7%8E%AF%E5%A2%83.zip', desc: '第一次使用艺术机器人与游戏客户端更新后必须运行此程序', time: '2026-10-02' },
      { name: 'SIMP辅助工具', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/SIMP/SIMP%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7.zip', desc: '自动上号软件', time: '2026-10-02' },
      { name: '艺术机器人使用说明', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/SIMP/%E8%89%BA%E6%9C%AF%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.jpg', desc: '需要更多教程资料请添加客服QQ: 3637487607', time: '2026-10-02' },
    ]
  },
  {
    id: 'b4it',
    title: 'B4IT 插件',
    color: '#d83a3a',          // 红色
    desc: 'B4IT插件支持360国服  亚服  欧服  美服 插件QQ群：823294873',
    locked: true,              // 默认隐藏，需输入密码
    password: 'NYSBYH',          // 第二区独立解锁密码
    files: [
      { name: 'B4IT安装器中文版', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/B4IT/B4IT%E5%AE%89%E8%A3%85%E5%99%A8%E4%B8%AD%E6%96%87%E7%89%88.zip', desc: 'B4IT安装器CN版3.2功能说明：游戏启动自动更新、不用频繁手动操作、一键安装与卸载(无残留)、界面简单清晰，[小可]特别制作。', time: '2026-11-08' },
      { name: 'B4IT安装器英文版', url: 'https://b4it-release.oss-cn-beijing.aliyuncs.com/release/download/setup.exe.zip', desc: '英文版安装器', time: '2026-10-14' },
      { name: 'B4IT安装器操作说明', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/B4IT/B4IT%E5%AE%89%E8%A3%85%E5%99%A8%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E.zip', desc: '英文版安装器操作说明', time: '2026-10-02' },
      { name: 'B4IT功能说明', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/B4IT/B4IT%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.jpg', desc: '插件页面及快捷键说明', time: '2026-10-02' },
    ]
  },
  {
    id: 'pfmods',
    title: 'PFMods 北极狐插件',
    color: '#2f6fed',          // 蓝色
    desc: '特别注意:WG与RU版激活码不通用 插件QQ群：823294873',
    locked: true,              // 默认隐藏，需输入密码
    password: 'RYKJSD',        // 第三区独立解锁密码
    files: [
      { name: 'PFMods_WG安装器中文版', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/PF/PFMods%E5%AE%89%E8%A3%85%E5%99%A8CN%E7%89%88.zip', desc: '1.2中文版：一键安装与卸载(无残留)、一键汉化、适配网吧环境、不卡游戏加载界面、界面简单清晰，[小可]特别制作。', time: '2026-10-20' },
      { name: 'PFMods_WG安装器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/PF/PFMods-WG%E5%AE%89%E8%A3%85%E5%99%A8.zip', desc: 'WG版支持360国服  亚服  欧服  美服', time: '2026-10-14' },
      { name: 'PFMods_RU安装器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/PF/PFMods-RU%E5%AE%89%E8%A3%85%E5%99%A8.zip', desc: 'RU版支持俄罗斯服', time: '2026-10-02' },
    ]
  },
  {
    id: 'others',
    title: '其它插件',
    color: '#8a94a3',          // 灰色
    desc: '更多插件与辅助工具文件',
    locked: true,              // 默认隐藏，需输入密码
    password: 'IAGATG',    // 第四区独立解锁密码
    files: [
      { name: '小可盒子', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/share/%E5%B0%8F%E5%8F%AF%E7%9B%92%E5%AD%90.zip', desc: '本软件提供插件的一键安装、更新与卸载管理服务、操作简单，完全免费使用，不收取任何费用。', time: '2026-10-21' },
    ]
  }
];
