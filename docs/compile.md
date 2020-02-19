# 游戏编译

注：本教程只介绍新版etterna的编译方式以及windows10 64位环境的编译(试过32位系统好像无法编译成功，其他系统也没有尝试过)，其他环境请参考[Building](https://github.com/etternagame/etterna/blob/master/Docs/Building.md)。

## 工具准备

首先需要下载以下的工具:
1. [visual studio](https://visualstudio.microsoft.com/zh-hans/)，2017或者2019版都可以，下载community版就够了，安装时安装c++部分模块。
2. [cmake](https://cmake.org/download/)，下载最新版即可，安装的时候建议把cmake添加到path。除了cmake也可以使用ninja编译，由于没尝试过就不介绍了。
3. [git](https://npm.taobao.org/mirrors/git-for-windows/)，下载最下面的版本即可。
4. [OPENSSL 32位](https://slproweb.com/download/Win32OpenSSL-1_1_0L.exe)或者[OPENSSL 64位]，安装到一个方便找的地方，主要用于编译的时候选择编译32位还是64位。
5. [DIRECTX RUNTIME](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
6. [DIRECTX SDK](https://www.microsoft.com/en-us/download/details.aspx?id=6812)
7. [Microsoft Visual C++ Redistributables](https://www.microsoft.com/en-us/download/details.aspx?id=48145)，32位和64位都要安装
8. [Windows 10 Development Kit](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk/)，安装visual studio的时候，在选择c++的时候勾选了windows10 SDK可以忽略
9. [NSIS](https://nsis.sourceforge.io/Main_Page)，主要用于把游戏打包成exe

## 克隆仓库

假如你安装了git，使用git clone -b develop --depth=1 https://github.com/etternagame/etterna.git命令可以克隆develop分支，如果配置了ssh可以使用git clone -b develop --depth=1 git@github.com:etternagame/etterna.git。可以把develop改成其他分支名。直接下载仓库代码编译还没尝试过，不太推荐。

## 使用cmake GUI编译

首先在克隆好的仓库下面新建一个build文件夹，装在其他位置应该也可以。(命令行的编译参考[Building](https://github.com/etternagame/etterna/blob/master/Docs/Building.md))

打开cmake，浏览克隆好的仓库的路径和build文件夹的路径，配置OPENSSL路径。

<img :src="$withBase('/zhs/compile1.png')" alt="compile">

这里OPENSSL根据自己编译的版本选择(32或者64位)，要与下面configure的版本对应
<img :src="$withBase('/zhs/compile2.png')" alt="compile">

然后点开configure，其中第一项为你visual studio的版本，15 2017是visual studio 2017，16 2019是visual studio 2019，第二项是你编译游戏是多少位的，要与上面OPENSSL版本对应。

<img :src="$withBase('/zhs/compile3.png')" alt="compile">

等待configure done之后，点generate。等待generate完成后，点开Open Project打开visual studio，然后点击图标为绿色三角形的 本地Windows 调试器即可开始编译，编译过程非常漫长，速度取决于机器的配置，这个过程配置稍微低一点会非常卡，编译成功的标志是，游戏界面会出来，失败的话，会弹出一个失败的弹窗。

## 打包游戏

如果上面编译成功了，使用cmd或者powershell或者bash等，定位到你build的目录，或者直接打开那个文件夹，点击左上角的**文件(蓝色底)**->打开Windows Powershell(R)->以管理员身份打开Windows Powershell(A)，然后输入**CPACK，按回车即可开始打包**，前提是安装NSIS的时候已经添加到环境变量里面。

<img :src="$withBase('/zhs/compile4.png')" alt="compile">