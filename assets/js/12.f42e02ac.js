(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{337:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"游戏编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#游戏编译"}},[e._v("#")]),e._v(" 游戏编译")]),e._v(" "),r("p",[e._v("注：本教程只介绍新版 etterna 的编译方式以及 windows10 64 位环境的编译(试过 32 位系统好像无法编译成功，其他系统也没有尝试过)，其他环境请参考"),r("a",{attrs:{href:"https://github.com/etternagame/etterna/blob/master/Docs/Building.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"工具准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具准备"}},[e._v("#")]),e._v(" 工具准备")]),e._v(" "),r("p",[e._v("首先需要下载以下的工具:")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://visualstudio.microsoft.com/zh-hans/",target:"_blank",rel:"noopener noreferrer"}},[e._v("visual studio"),r("OutboundLink")],1),e._v("，2017 或者 2019 版都可以，下载 community 版就够了，安装时安装 c++部分模块。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cmake"),r("OutboundLink")],1),e._v("，下载最新版即可，安装的时候建议把 cmake 添加到 path。除了 cmake 也可以使用 ninja 编译，由于没尝试过就不介绍了。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://npm.taobao.org/mirrors/git-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),r("OutboundLink")],1),e._v("，下载最下面的版本即可。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://slproweb.com/download/Win32OpenSSL-1_1_0L.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPENSSL 32 位"),r("OutboundLink")],1),e._v("或者[OPENSSL 64 位]，安装到一个方便找的地方，主要用于编译的时候选择编译 32 位还是 64 位。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=8109",target:"_blank",rel:"noopener noreferrer"}},[e._v("DIRECTX RUNTIME"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=6812",target:"_blank",rel:"noopener noreferrer"}},[e._v("DIRECTX SDK"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Visual C++ Redistributables"),r("OutboundLink")],1),e._v("，32 位和 64 位都要安装")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 10 Development Kit"),r("OutboundLink")],1),e._v("，安装 visual studio 的时候，在选择 c++的时候勾选了 windows10 SDK 可以忽略")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://nsis.sourceforge.io/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("NSIS"),r("OutboundLink")],1),e._v("，主要用于把游戏打包成 exe")])]),e._v(" "),r("h2",{attrs:{id:"克隆仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#克隆仓库"}},[e._v("#")]),e._v(" 克隆仓库")]),e._v(" "),r("p",[e._v("假如你安装了 git，使用 git clone -b develop --depth=1 https://github.com/etternagame/etterna.git命令可以克隆develop分支，如果配置了ssh可以使用git clone -b develop --depth=1 git@github.com:etternagame/etterna.git。可以把 develop 改成其他分支名。直接下载仓库代码编译还没尝试过，不太推荐。")]),e._v(" "),r("h2",{attrs:{id:"使用-cmake-gui-编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-cmake-gui-编译"}},[e._v("#")]),e._v(" 使用 cmake GUI 编译")]),e._v(" "),r("p",[e._v("首先在克隆好的仓库下面新建一个 build 文件夹，装在其他位置应该也可以。(命令行的编译参考"),r("a",{attrs:{href:"https://github.com/etternagame/etterna/blob/master/Docs/Building.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("p",[e._v("打开 cmake，浏览克隆好的仓库的路径和 build 文件夹的路径，配置 OPENSSL 路径。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/zhs/compile1.png"),alt:"compile"}}),e._v(" "),r("p",[e._v("这里 OPENSSL 根据自己编译的版本选择(32 或者 64 位)，要与下面 configure 的版本对应\n"),r("img",{attrs:{src:e.$withBase("/zhs/compile2.png"),alt:"compile"}})]),e._v(" "),r("p",[e._v("然后点开 configure，其中第一项为你 visual studio 的版本，15 2017 是 visual studio 2017，16 2019 是 visual studio 2019，第二项是你编译游戏是多少位的，要与上面 OPENSSL 版本对应。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/zhs/compile3.png"),alt:"compile"}}),e._v(" "),r("p",[e._v("等待 configure done 之后，点 generate。等待 generate 完成后，点开 Open Project 打开 visual studio，然后点击图标为绿色三角形的 本地 Windows 调试器即可开始编译，编译过程非常漫长，速度取决于机器的配置，这个过程配置稍微低一点会非常卡，编译成功的标志是，游戏界面会出来，失败的话，会弹出一个失败的弹窗。")]),e._v(" "),r("h2",{attrs:{id:"打包游戏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打包游戏"}},[e._v("#")]),e._v(" 打包游戏")]),e._v(" "),r("p",[e._v("如果上面编译成功了，使用 cmd 或者 powershell 或者 bash 等，定位到你 build 的目录，或者直接打开那个文件夹，点击左上角的"),r("strong",[e._v("文件(蓝色底)")]),e._v("->打开 Windows Powershell(R)->以管理员身份打开 Windows Powershell(A)，然后输入"),r("strong",[e._v("CPACK，按回车即可开始打包")]),e._v("，前提是安装 NSIS 的时候已经添加到环境变量里面。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/zhs/compile4.png"),alt:"compile"}})])}),[],!1,null,null,null);t.default=o.exports}}]);