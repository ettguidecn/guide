# 基本操作

Etterna版本一个亮眼的地方就是其丰富的功能，下面简单介绍下在各个界面的快捷操作。

## 选歌界面（Select Music）

<img :src="$withBase('/ScreenSelectMusic.png')" alt="Select Music">

### 鼠标操作

* 左键单击上方边界：开启/关闭当前歌曲文件夹
* 左键单击选中歌曲：开始游玩
* 左键单击未选中的歌曲：选中该歌曲
* 左键单击最右侧滑槽区域：快速切换位置
* 滚轮滑动：上下切换选中歌曲
* 左键单击难度：切换难度

<img :src="$withBase('/ScreenSelectMusic-LeftArea.png')" alt="Left Area">

+ 左键单击玩家设置（Player Options）：进入歌曲设置界面
+ 左键单击开启预览（Toggle Preview）：预览谱面，再次点击关闭预览
+ 左键单击下图的各项标签：切换到该标签页面，各个标签的详细功能请参阅[标签明细](#tags)
<img :src="$withBase('/ScreenSelectMusic-Tabs.png')" alt="Tabs">

* 左键单击头像：切换头像。头像图片应放在`Assets/Avatars/`文件夹内
* 左键单击昵称：更改昵称
* 左键单击登录（Click to Login）：登录到Etterna Online，再次单击该位置登出
* 左键单击刷新歌曲（Refresh Songs）：重新读取Caches内的缓存刷新歌曲

### 键盘操作

* F2：重新读取主题和材质
* 按住F3：打开除错菜单。涉及高级操作，详情请参阅[除错清单明细](#debug-menu)
* F12：打开帮助菜单，按任意键关闭。这个界面包含了绝大部分的键盘操作，如下图：
<img :src="$withBase('/ScreenSelectMusic-HelpMenu.png')" alt="Help Menu">

* 数字键1-0（非小键盘）：切换到对应的标签页面，1键对应General，2键对应MSD，以此类推。各个标签的详细功能请参阅[标签明细](#tags)
<img :src="$withBase('/ScreenSelectMusic-Tabs.png')" alt="Tabs">

+ 双击选择&lt;Select&gt;键：切换头像。头像图片应放在`Assets/Avatars/`文件夹内
+ Ctrl + Q：与点击刷新歌曲（Refresh Songs）相同，重新读取Caches内的缓存刷新歌曲
+ Ctrl + F：如果当前选中了歌曲，则标记该歌曲为‘Favorite’（可以专门查看）。标记后一个粉色&hearts;图案会出现在歌曲标题旁边
+ Ctrl + G：如果当前选中了歌曲，则为该歌曲设置一个目标可以再目标（Goal）标签下查看。设置后歌曲标题左边的难度颜色中间会有增加一道深红色显示当前目标未完成
+ Ctrl + M：如果当前选中了歌曲，则将该歌曲的谱面永久镜像（再按一次可取消）。镜像后一个镜子图案会出现在歌曲标题旁边
+ 效果上&lt;Effect Up&gt;/效果下&lt;Effect Down&gt;：播放速率&plusmn;0.1
+ 选择&lt;Select&gt; + 效果上&lt;Effect Up&gt;/效果下&lt;Effect Down&gt;：播放速率&plusmn;0.05
+ 选单上&lt;Menu Up&gt;选单下&lt;Menu Down&gt;选单上&lt;Menu Up&gt;选单下&lt;Menu Down&gt;：按顺序按（上下上下）可切换歌曲排列顺序
+ 按住Tab：动画加速
+ ScrollLock：转到设置界面（雨幕幕：目前貌似没用，很久以前一直是有用的......）

## 标签明细<span id="tags"/>

~~还没写，明天补~~

## 除错清单明细<span id="debug-menu"/>

~~还没写，不知何时补~~
