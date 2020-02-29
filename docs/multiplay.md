# 多人游戏(multiplay)

由于在 2018/12/03 stepmaniaonline 停止对 etterna 的 mp 支持，现在只能使用 ett multi 进行 mp。

注: mp 请使用 0.65.1 及更新的版本，其他版本可能会出现更多未知 bug。

## 使用指南

1. 在游戏主界面，用鼠标点击多人游戏或者键盘移动到多人游戏按下回车
2. 会看到一个界面，有连接跟分数版两个选项，当光标选中连接的时候，按下回车，会让你输入一个 ip，此时输入 `multi.etternaonline.com` ,按下回车，等待连接。连接成功后，会让你选个人账号，此时直接回车即可。(目前新版本已经不需要这一步了)
   <img :src="$withBase('/zhs/connect.png')" alt="connect">
   <img :src="$withBase('/zhs/multiinput.png')" alt="multiinput">
3. 输入在 etterna online 的密码，按下回车即可进入 mp 界面。
   <img :src="$withBase('/zhs/multimain.png')" alt="multimain">
4. 创建房间，鼠标点击或者使用键盘移动到 Create Room；或者直接选中已有的房间按下回车输入密码回车。
5. 根据提示输入相关信息，然后回车,进入 mp 选歌界面。
   <img :src="$withBase('/zhs/multiselect.png')" alt="multiselect">
6. ready 为准备按钮，准备之后，聊天面板会显示 xxx is ready,force start 为房主设置的选项，即强制开始 mp。
7. 在光标选中的歌曲，按下回车，即可选择此歌曲作为多人游戏曲目，房主在所有人准备完后，按下回车即可进入游戏，使用 force start 可以强制开始。

## mp 指令(/help)

点击聊天输入框，此时聊天框输入框会变成紫色，输入/help 之后，会在 CHAT 里聊天选项卡中名字空白处，需要鼠标点击。
<img :src="$withBase('/zhs/command.png')" alt="command">

指令(除了 6 跟 7，其他都需要房主才能使用):

1. /free 可以让其他人具有选歌的权限(其他人只能选 1.0 速)
2. /freerate 前提是使用了/free，让其他人在可以选歌的基础上，还能按歌曲倍率选择。
3. /op 给予某个玩家房主权限，比如: /op test ，这样就把房主给了叫 test 的玩家。
4. /countdown 开始倒计时功能。比如: /countdown 3 ，当房主确认开始后倒计时三秒进入游戏。
5. /stop 禁用倒计时功能，前提是使用了 /countdown 指令。
6. /shrug 一个聊天 emoji。
7. /roll 跟 osu 的!roll 一样，可以带参数也可以不带参数，比如: /roll 跟 /roll test 都可以。

## 注意事项

1. 建议使用 0.65.1 及以上版本，其他版本可能会出现比 0.65.1 及以上版本更多的问题
2. 由于战网(smo)已经对 etterna 进行封禁，现在 etterna 已经不能使用`stepmaniaonline.net` 的 ip 进行 mp 了，想要体验 smo 的 mp 请使用原生 stepmania
3. 聊天无法输入中文(应该不是 bug)
4. mp 选歌尽量不要选 osu mania 直接读取的歌，大多数情况会 crash
