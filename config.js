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
 *    - locked: true 表示该分区需输入密码才能展开（密码在下方 PASSWORD）
 *    - desc：分区展开后的一句话说明
 * ============================================================================ */

/* ---- 右上角淘宝店铺按钮 ---- */
var TAOBAO_TEXT = '小可的淘宝店铺';                  // 按钮文字
var TAOBAO_URL  = 'https://simp-xiaoke.taobao.com/'; // 淘宝店铺地址

/* ---- 右下角客服按钮链接 ---- */
var KEFU_URL    = 'https://qm.qq.com/q/OICZmAVnKc'; // 客服跳转地址（QQ 临时会话）

/* ---- 第一分区解锁密码（纯前端演示级保护，页面源码可见） ---- */
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
    files: [
      { name: 'SIMP启动器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/SIMP/SIMP%E5%90%AF%E5%8A%A8%E5%99%A8.zip', desc: '主程序', time: '2026-10-02' },
      { name: '挂机环境设置', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/SIMP/%E8%AE%BE%E7%BD%AE%E6%8C%82%E6%9C%BA%E7%8E%AF%E5%A2%83.zip', desc: '第一次使用艺术机器人与游戏客户端更新后必须运行此程序', time: '2026-10-02' },
      { name: 'SIMP辅助工具', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/SIMP/SIMP%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7.zip', desc: '自动上号软件', time: '2026-10-02' },
      { name: '艺术机器人使用说明', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/SIMP/%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B.jpg', desc: '需要更多教程资料请添加客服QQ: 3637487607', time: '2026-10-02' },
    ]
  },
  {
    id: 'b4it',
    title: 'B4IT 插件',
    color: '#d83a3a',          // 红色
    desc: 'B4IT插件支持360国服  亚服  欧服  美服 插件QQ群：823294873',
    files: [
      { name: 'B4IT免安装版', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/B4IT/B4IT%E5%85%8D%E5%AE%89%E8%A3%85%E7%89%88.zip', desc: '主程序 因官方原版安装器为纯英文界面没有中文，新手容易看不懂，所以[小可]特别制作中文免安版本。', time: '2026-10-02' },
      { name: 'B4IT安装器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/B4IT/B4IT%E5%AE%89%E8%A3%85%E5%99%A8V8.zip', desc: '主程序', time: '2026-10-02' },
      { name: 'B4IT功能说明', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/B4IT/B4IT%E5%8A%9F%E8%83%BD%E8%AF%B4%E6%98%8E.png', desc: '插件页面及快捷键说明', time: '2026-10-02' },
    ]
  },
  {
    id: 'pfmods',
    title: 'PFMods 北极狐插件',
    color: '#2f6fed',          // 蓝色
    desc: 'PFMods北极狐  特别注意:它们激活码不通用 插件QQ群：823294873',
    files: [
      { name: 'PFMods_WG安装器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/PFMods/PFMods_WG%E5%AE%89%E8%A3%85%E5%99%A8.zip', desc: 'WG版支持360国服  亚服  欧服  美服', time: '2026-10-02' },
      { name: 'PFMods_RU安装器', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/PFMods/PFMods_RU%E5%AE%89%E8%A3%85%E5%99%A8.zip', desc: 'RU版支持俄罗斯服', time: '2026-10-02' },
    ]
  },
  {
    id: 'others',
    title: '其它插件',
    color: '#8a94a3',          // 灰色
    desc: '更多插件与辅助工具文件',
    files: [
      { name: '去草', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/%E5%85%B6%E5%AE%83%E6%8F%92%E4%BB%B6/%E5%8E%BB%E8%8D%89.zip', desc: '已更新至2.4.0.2版本', time: '2026-10-02' },
      { name: '界面&科技树&坦克名称汉化', url: 'https://1843345044.cdn.123clouddisk.com/1843345044/%E5%88%86%E4%BA%AB%E7%AB%99/%E5%85%B6%E5%AE%83%E6%8F%92%E4%BB%B6/%E7%95%8C%E9%9D%A2&%E7%A7%91%E6%8A%80%E6%A0%91&%E5%9D%A6%E5%85%8B%E5%90%8D%E7%A7%B0%E6%B1%89%E5%8C%96.zip', desc: '已更新至2.4.0.2版本', time: '2026-10-02' },
    ]
  }
];
