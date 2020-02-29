# 游戏编译

注：本教程只介绍新版 etterna 的编译方式以及 windows10 64 位环境的编译(试过 32 位系统好像无法编译成功，其他系统也没有尝试过)，其他环境请参考[Building](https://github.com/etternagame/etterna/blob/master/Docs/Building.md)。

## 工具准备

首先需要下载以下的工具:

1. [visual studio](https://visualstudio.microsoft.com/zh-hans/)，2017 或者 2019 版都可以，下载 community 版就够了，安装时安装 c++部分模块。
2. [cmake](https://cmake.org/download/)，下载最新版即可，安装的时候建议把 cmake 添加到 path。除了 cmake 也可以使用 ninja 编译，由于没尝试过就不介绍了。
3. [git](https://npm.taobao.org/mirrors/git-for-windows/)，下载最下面的版本即可。
4. [OPENSSL 32 位](https://slproweb.com/download/Win32OpenSSL-1_1_0L.exe)或者[OPENSSL 64 位]，安装到一个方便找的地方，主要用于编译的时候选择编译 32 位还是 64 位。
5. [DIRECTX RUNTIME](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
6. [DIRECTX SDK](https://www.microsoft.com/en-us/download/details.aspx?id=6812)
7. [Microsoft Visual C++ Redistributables](https://www.microsoft.com/en-us/download/details.aspx?id=48145)，32 位和 64 位都要安装
8. [Windows 10 Development Kit](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk/)，安装 visual studio 的时候，在选择 c++的时候勾选了 windows10 SDK 可以忽略
9. [NSIS](https://nsis.sourceforge.io/Main_Page)，主要用于把游戏打包成 exe

## 克隆仓库

假如你安装了 git，使用 git clone -b develop --depth=1 https://github.com/etternagame/etterna.git命令可以克隆develop分支，如果配置了ssh可以使用git clone -b develop --depth=1 git@github.com:etternagame/etterna.git。可以把 develop 改成其他分支名。直接下载仓库代码编译还没尝试过，不太推荐。

## 使用 cmake GUI 编译

首先在克隆好的仓库下面新建一个 build 文件夹，装在其他位置应该也可以。(命令行的编译参考[Building](https://github.com/etternagame/etterna/blob/master/Docs/Building.md))

打开 cmake，浏览克隆好的仓库的路径和 build 文件夹的路径，配置 OPENSSL 路径。

<img :src="$withBase('/zhs/compile1.png')" alt="compile">

这里 OPENSSL 根据自己编译的版本选择(32 或者 64 位)，要与下面 configure 的版本对应
<img :src="$withBase('/zhs/compile2.png')" alt="compile">

然后点开 configure，其中第一项为你 visual studio 的版本，15 2017 是 visual studio 2017，16 2019 是 visual studio 2019，第二项是你编译游戏是多少位的，要与上面 OPENSSL 版本对应。

<img :src="$withBase('/zhs/compile3.png')" alt="compile">

等待 configure done 之后，点 generate。等待 generate 完成后，点开 Open Project 打开 visual studio，然后点击图标为绿色三角形的 本地 Windows 调试器即可开始编译，编译过程非常漫长，速度取决于机器的配置，这个过程配置稍微低一点会非常卡，编译成功的标志是，游戏界面会出来，失败的话，会弹出一个失败的弹窗。

## 打包游戏

如果上面编译成功了，使用 cmd 或者 powershell 或者 bash 等，定位到你 build 的目录，或者直接打开那个文件夹，点击左上角的**文件(蓝色底)**->打开 Windows Powershell(R)->以管理员身份打开 Windows Powershell(A)，然后输入**CPACK，按回车即可开始打包**，前提是安装 NSIS 的时候已经添加到环境变量里面。

<img :src="$withBase('/zhs/compile4.png')" alt="compile">
