# noteskin相关

## 下载
在`stepmania online群 群共享`搜索对应资源，或者在`etterna online`上下载[noteskins](https://etternaonline.com/noteskins)

## 使用
如果你是`4k`玩家，`noteskin`默认放到游戏目录下的`NoteSkins/dance`

## 如何使用note
在`选歌界面`双击/长按回车，找到`箭头样式`，然后选到后按`左右方向键`选择。

## 注意事项
1. 由于`etterna`从`0.57`开始移除了`cmd function`，所以皮肤需要修复，群共享有白点修复脚本，如果需要请在群共享搜索`"白点"`关键词下载，或者到[etterna online noteskins](https://etternaonline.com/noteskins)下载皮肤，都是修复好的。
2. 修复好的皮肤支持`0.57以及之后`的版本，`0.57以下`的版本会出问题，除非这个皮肤本身不需要修复。
3. 新版本使用Attang皮肤(官网noteskins库里标着Jousway制作的)可能会出现卡顿(不确定)。
4. 由于新版使用了NoMines后，游玩含有炸弹的歌曲该成绩会变成0.00，但并没有限制对noteskin的修改，所以可以用透明图层或者点图层替换对应的mines图层。详情参考[关于NoMines](#no-mines)章节。

## 关于NoMines<span id="no-mines"></span>

地雷（Mine）是不可击打的按键，按到会扣很多HP。很多从别的游戏转过来的玩家从来没有接触过地雷，而开启NoMines模式则可以移除谱面内的全部地雷。从Etterna 0.60版本开始，NoMines的成绩被无效化了。具体表现为如果谱面有地雷，则玩家带有NoMines的成绩为00.00。

如果实在不会打地雷（雨幕幕：像我在0.60之前一直开着NoMines，根本不会打），可以用一个简单的方式解决这个问题。因为地雷是由三个部分组成的，所以依次消除掉就好。

1. 地雷的图片，大部分时候都是属于所用NoteSkin的一部分。
2. 地雷击中的图片，默认的图片位于根目录下`NoteSkins/common/common/Fallback HitMine Explosion.png`。
3. 地雷击中的音效，可以在游戏内由`图像与音效设定->炸弹音效`直接关掉。

1和2可以通过替换透明图片文件来解决，3则可以直接改设置。这样操作的结果就是地雷是完全看不见的，所以可以放心开着地雷打而不用担心影响读谱。不过打中地雷HP和百分比还是照扣，这也是这样修改之后唯一能知道自己中雷的方法。