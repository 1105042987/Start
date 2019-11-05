# 说明

此项目以及其后更新，仅保证可在Chrome浏览器正常工作．

# Start

主要功能：
- 可以动态编辑并存储的收藏夹栏；

  - 页中＂＋＂符号提供了添加新收藏，导出当前收藏夹导出至文件，从文件导入收藏夹三个功能，用于存储一些临时性的需要关注的收藏信息，用以避免浏览器的收藏夹过于混乱；
  - 页左下角的DELETE按钮会高亮可删除的收藏，点击即可删除；再次点击DELETE按钮退出删除模式；

- 可以通过快捷键进行不同引擎的搜索；

|快捷键|Enter|ctrl+Enter|Alt+Enter|Shift+Enter|
|-|-|-|-|-|
|功能|百度搜索|谷歌搜索|谷歌学术搜索|谷歌翻译(目标语言默认为汉英互译)|

# 其他插件建议
推荐以下插件以最大程度的脱离鼠标对网页进行控制.

- [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en-US) 
  - 不做任何改动是标准的Vim用法；
  - 个人根据习惯做了改动，[个人配置文件](./vim_setting.txt) 将其复制入Custom key mappings即可；
- [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en-US) 
  - Windows自带配置方式：
    - WIN+S 启用搜索；
    - 输入：启用或关闭Windows功能；打开；
    - 展开Internet Information Service，将＂Web管理工具＂与＂万维网＂前的选框调整为黑色方块或对勾状态；
    - 打开资源管理器访问[C:\inetpub\wwwroot](C:\inetpub\wwwroot)，将本项目代码解压至此；
    - New Tab Redirect重定向位置：index.html所在的完整路径或其根目录路径；
  - Python方式：
    - 任意位置处解压缩此项目代码；
    - 在index.html所在的根目录处运行指令：python -m http.server
    - New Tab Redirect重定向位置：http://0.0.0.0:8000/
  - Github方式：
    - New Tab Redirect重定向位置：https://1105042987.github.io/Start/
- 翻墙托管[SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en-US)：
  - PAC规则：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt