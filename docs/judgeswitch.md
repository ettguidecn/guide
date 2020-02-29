# 结算界面 od/wife judge 切换

结算界面按判定切换是 etterna 的一个特性，目前新版本的回放之后的结算界面跟 view eval screen(查看结算界面)都可以使用这一特性。(0.64 之前的回放界面结算跟 view Eval Screen 的判定切换有 bug，升级 0.64 及以上的版本即可解决)。

## 切换 Wife J1 - Wife Justice

首先，前提条件是，在打歌设置界面(选歌界面按两下回车/长按回车/点选歌界面的 Player Options 进入),把"自定评分"选项(在亮度调节上面)改成"关",然后在结算界面，按效果键(默认是= -)就可以切换。

## 切换 DP J4 跟 od10

首先，前提条件是，在打歌设置界面(选歌界面按两下回车/长按回车/点选歌界面的 Player Options 进入),把"自定评分"选项(在亮度调节上面)改成"开",然后在结算界面，按效果键(默认是= -)可以切换 od10 或者 DP J4。

## 如何添加 od9、od8

具体参考[(链接)](https://github.com/etternagame/etterna/pull/308/commits/895ef05cae7de970bfda38f8bb1dff39728112ce),其中红色的为删除，绿色的为增加，嫌麻烦的可以直接在[(链接)](https://raw.githubusercontent.com/xNihil0/etterna/895ef05cae7de970bfda38f8bb1dff39728112ce/Themes/Til%20Death/Scripts/01%20timing_windows_config.lua)全选，然后复制粘贴即可。你也可以根据自己喜好添加更低的 od 或者一些稀奇古怪的判定，按照代码的格式修改即可。具体要修改的文件在 游戏目录/Themes/Til Death/01 timing_windows_config.lua 下。
