# (新功能)评分细分 midgrade(AA AA+ AA++)

etterna 默认的评分有 AAAA AAA AA A B C D，最近 etterna 有一个关于评分细化(midgrade)的帖子，里面提到了把评分再细分成+和++,并且添加 5A(quint)这个新评分，目前已在 0.68 版本加入，默认不打开，需要手动开启。由于开发者在发布前没有测试，该功能只在语言为**English**的时候才正常，选择其他语言会出现奇怪的 bug，预计在 0.68.1 修复，不过也可以通过手动修复，比较简单，参考下文即可。

<img :src="$withBase('/zhs/midgrade1.png')" alt="midgrade">

## 如何开启

### 准备工作

在开启前，如果你使用的版本为 0.68.0，需要进行下面的操作，如果你默认使用英文或者大于此版本可以忽略。

首先打开文件夹 Themes/\_fallback/Languages，打开 en.ini,大概在 2347 行位置(千万别使用记事本不然找半天，推荐装 sumblime/vscode/nodepad++选择其中一个进行编辑),把[Grade]到 Tier17 的代码复制一遍，如下图，然后替换你当前使用的语言，比如使用**中文**的时候替换**zh.ini**里面的对应的内容即可

<img :src="$withBase('/zhs/midgrade2.png')" alt="midgrade content">

### 步骤

游戏主界面打开系统选项(Options)->显示选项(DISPLAY OPTIONS)->用户界面选项(UI OPTIONS)->MID GRADES 把关(off)改成开(on)即可。
