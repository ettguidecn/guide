# (新功能)把非 J4 成绩全部转成 J4

etterna 支持使用多种判定游玩并且存分，但是存分的过程是存储对应判定，比如 J5 的成绩，在主界面，或者结算界面，看到的不是转换成 J4 的成绩而是 J5 的成绩。在 0.68 这个版本，就加入了这个新功能， 可以把所有非 J4 的成绩转成 J4 的成绩并显示。

转换前:

<img :src="$withBase('/zhs/ssrnorm1.png')" alt="ssrnorm off">

转换后:

<img :src="$withBase('/zhs/ssrnorm2.png')" alt="ssrnorm on">

## 如何更改

注意: 该功能仅支持 0.68+的版本

打开游戏选项(Options)->进阶选项(ADVANCED OPTIONS)->找到 SSRNORM SORT，把 off 改成 on 即可。也可以编辑 Save 文件夹下的 Prefernces.ini，找到 SortBySSRNormPercent，把 0 改成 1。
