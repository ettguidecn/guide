# 基本操作/功能介绍

Etterna版本一个亮眼的地方就是其丰富的功能，下面简单介绍下在各个界面的快捷操作。

## 选歌界面（Select Music）

<img :src="$withBase('/zhs/ScreenSelectMusic.png')" alt="Select Music">

### 鼠标操作

* 左键单击选中歌曲：开始游玩
* 左键单击未选中的歌曲：选中该歌曲
* 左键单击最右侧滑槽区域：快速切换位置
* 滚轮滑动：上下切换选中歌曲
* 左键单击难度：切换难度

<img :src="$withBase('/zhs/ScreenSelectMusic-LeftArea.png')" alt="Left Area">

+ 左键单击下图的各项标签：切换到该标签页面，各个标签的详细功能请参阅[标签明细](#标签明细)
<img :src="$withBase('/zhs/ScreenSelectMusic-Tabs.png')" alt="Tabs">

* 左键单击头像：切换头像。头像图片应放在`Assets/Avatars/`文件夹内
* 左键单击昵称：更改昵称
* 左键单击登录（Click to Login）：登录到Etterna Online，再次单击该位置登出
* 左键单击刷新歌曲（Refresh Songs）：重新读取Caches内的缓存刷新歌曲

### 键盘操作

+ 左&lt;Left&gt;/右&lt;Right&gt;：切换选中的歌曲，选单左&lt;Menu Left&gt;/选单右&lt;MenuRight&gt;亦可
+ 上&lt;Up&gt;上&lt;Up&gt;/下&lt;Down&gt;下&lt;Down&gt;：切换难度，选单上&lt;Menu Up&gt;选单上&lt;Menu Up&gt;/选单下&lt;Menu Down&gt;选单下&lt;Menu Down&gt;亦可
+ F2：重新读取主题和材质
+ 按住F3：打开除错菜单。涉及高级操作，详情请参阅[除错清单明细](#除错清单明细)
+ F12：打开帮助菜单，按任意键关闭。这个界面包含了绝大部分的键盘操作，如下图：
<img :src="$withBase('/zhs/ScreenSelectMusic-HelpMenu.png')" alt="Help Menu">

* 数字键1-0（非小键盘）：切换到对应的标签页面，1键对应General，2键对应MSD，以此类推。各个标签的详细功能请参阅[标签明细](#标签明细)
<img :src="$withBase('/zhs/ScreenSelectMusic-Tabs.png')" alt="Tabs">

+ 双击选择&lt;Select&gt;键：切换头像。头像图片应放在`Assets/Avatars/`文件夹内
+ Ctrl + Q：与点击刷新歌曲（Refresh Songs）相同，重新读取Caches内的缓存刷新歌曲
+ Ctrl + F：如果当前选中了歌曲，则标记该歌曲为‘Favorite’（可以专门查看）。标记后一个粉色&hearts;图案会出现在歌曲标题旁边
+ Ctrl + G：如果当前选中了歌曲，则为该歌曲设置一个目标可以在目标（Goal）标签下查看。设置后歌曲标题左边的难度颜色中间会有增加一道深红色显示当前目标未完成
+ Ctrl + M：如果当前选中了歌曲，则将该歌曲的谱面永久镜像（再按一次可取消）。镜像后一个镜子图案会出现在歌曲标题旁边
+ 效果上&lt;Effect Up&gt;/效果下&lt;Effect Down&gt;：播放速率&plusmn;0.1
+ 选择&lt;Select&gt; + 效果上&lt;Effect Up&gt;/效果下&lt;Effect Down&gt;：播放速率&plusmn;0.05
+ 选单上&lt;Menu Up&gt;选单下&lt;Menu Down&gt;选单上&lt;Menu Up&gt;选单下&lt;Menu Down&gt;：按顺序按（上下上下）可切换歌曲排列顺序
+ 按住Tab：动画加速
+ ScrollLock：转到设置界面（雨幕幕：目前貌似没用，很久以前一直是有用的......）

## 游玩界面（Gameplay）

* F8/Shift + F8：开启自动游玩，区别是Shift + F8显示连击
* F7：开启节拍器
* 重新开始&lt;Restart&gt;：重新开始当前歌曲，默认是`

游玩界面基本所有物件的开关都在玩家设置中，通过[界面设置](/settings.html#游玩界面（gameplay）)可以调整各物件的位置和大小。在调整之前可以先了解一下每个物件的功能，看看有哪些是需要的。

<img :src="$withBase('/zhs/ScreenGameplay.png')" alt="Gameplay">

看成绩回放的时候会有相关的按钮。

<img :src="$withBase('/zhs/ScreenGameplay-ReplayButtons.png')" alt="Replay Buttons">

## 标签明细

* General：歌曲和谱面的基础信息。显示谱面键数、种类、歌曲标题图、作者CDTitle、歌曲时长、难度数、BPM、个人最好成绩等基本信息
	* 左键单击玩家设置（Player Options）：进入歌曲设置界面
	* 左键单击开启预览（Toggle Preview）：预览谱面，再次点击关闭预览。鼠标点击上方进度条可以调整预览的位置
	* SPACE：预览谱面，再次点击关闭预览。鼠标点击上方进度条可以调整预览的位置（对某些音乐文件有时轴错位），鼠标右键点击任意位置暂停/继续预览
<img :src="$withBase('/zhs/ScreenSelectMusic-General.png')" alt="General">

+ MSD：谱面难度信息。七项评分标准大致为大乱（很快的单键/Stream）、双键流及双切（Jumpstream）、三键流及三切（Handstream）、耐力（Stamina）、叠键速度（JackSpeed）、混合双切及拍砖（Chordjack）、长叠键及爆发类（Technical）。以上为雨幕幕个人理解，评分标准由固定算法计算，难免有误差，不用太过遵循
<img :src="$withBase('/zhs/ScreenSelectMusic-MSD.png')" alt="MSD">

* Scores：玩家成绩，在这个界面用鼠标点击或滚轮可翻看不同的成绩，或者用切换播放速率的键位（选择&lt;Select&gt; + 效果上&lt;Effect Up&gt;/效果下&lt;Effect Down&gt;）查看不同速率下的成绩。除此之外，还可以点击上传成绩到服务器（Upload Replay Data）、查看该成绩的回放数据（Show Replay Data）（此时下&lt;Down&gt;可以查看左右手成绩，右键再次点击Show Replay Data可返回）、观看回放（View Replay）<b>【提醒：该功能目前不完善，无法准确使用】</b>以及查看结算界面（View Eval Screen）
<img :src="$withBase('/zhs/ScreenSelectMusic-Scores.png')" alt="Scores">

+ Search：搜索特定歌曲，目前只支持英文和数字。输入字符后可以按开始&lt;Start&gt;固定搜索结果、后退&lt;Back&gt;取消搜索以及Delete键重置搜索
<img :src="$withBase('/zhs/ScreenSelectMusic-Search.png')" alt="Search">

* Profile：玩家档案，可以点击Online/Local来查看官网/本地的水平等级，同时可以详细查看每项最高分的歌曲。鼠标点击下方选项可以保存档案（Save Profile）、导入成绩（Import Scores）<b>【提醒：该功能目前不完善，基本无法使用】</b>以及验证所有成绩（Validate All）（有时可能会出现成绩不被认可的情况，可以通过这个功能尝试验证）
<img :src="$withBase('/zhs/ScreenSelectMusic-Profile.png')" alt="Profile">

+ Filters：过滤器，可以通过自定义的规则来寻找特定的歌曲，比如只显示JumpStream难度26以上的。可以选择过滤模式是显示同时满足所有条件的谱面（AND）还是任意条件的谱面（OR）
+ Goals：目标，用Ctrl + G登记当前歌曲。鼠标左键/右键点击数字可以微调目标，左键点击红色方块删除目标。点击歌曲标题可以快速跳转
<img :src="$withBase('/zhs/ScreenSelectMusic-Goals.png')" alt="Goals">

* Playlists：播放列表，按Ctrl + P新建列表，Ctrl + A将当前歌曲加入到选中的播放列表
* Packs：下载服务器上的曲包，同样可以用过滤器部分过滤
* Tags：书签，可以给歌曲添加特定的书签，方便检索。在歌曲书签（Chart Tags）下在下方黑色方框输入字符即可添加新书签，点击书签即可为当前歌曲添加对应的书签。在按书签过滤（Filter By）下可以点击书签来显示所有被标记了该书签的歌曲，可以选择过滤模式是显示同时具有所有选中书签的谱面（AND）还是任意选中书签的谱面（OR）。在删除书签（Remove）下点击书签即可删除，<b>注意此操作不可撤销</b>
<img :src="$withBase('/zhs/ScreenSelectMusic-Tags.png')" alt="Tags">

## 除错清单明细

~~还没写，不知何时补~~
