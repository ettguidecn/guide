# (新功能)把非J4成绩全部转成J4

etterna支持使用多种判定游玩并且存分，但是存分的过程是存储对应判定，比如J5的成绩，在主界面，或者结算界面，看到的不是转换成J4的成绩而是J5的成绩。在0.68这个版本，就加入了这个新功能， 可以把所有非J4的成绩转成J4的成绩并显示。

转换前:

<img :src="$withBase('/zhs/ssrnorm1.png')" alt="ssrnorm off">

转换后:

<img :src="$withBase('/zhs/ssrnorm2.png')" alt="ssrnorm on">

## 如何更改

注意: 该功能仅支持0.68+的版本

打开游戏选项(Options)->进阶选项(ADVANCED OPTIONS)->找到SSRNORM SORT，把off改成on即可。也可以编辑Save文件夹下的Prefernces.ini，找到SortBySSRNormPercent，把0改成1。