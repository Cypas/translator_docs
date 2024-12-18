## 安装运行
### 打开应用
双击桌面的快捷方式打开翻译器应用，若安装时未勾选创建快捷方式，可自行查找目录，应用位于安装目录下(默认安装路径为D:\Programs\DangoTranslator)，双击运行即可

![打开翻译器](../assets/img/101.webp ':size=50%')

## 1.注册并登陆翻译器账号

### 注册账号
- 点击翻译器首页的注册按钮
- 可选择使用手机号或邮箱账号注册(以下以邮箱注册为例)
  - ![注册账号](../assets/img/103.webp ':size=50%')
  - 在输入框内输入自己想要的翻译器账号，密码，邮箱地址(或手机号)，点击发送验证码，一分钟内会收到注册验证码
  - 邮箱注册若未及时收到验证码，请登录具体邮箱，查看`垃圾箱`内是否有验证码邮件
  - 输入验证码后，点击注册

### 登录账号
- 回到翻译器主页面，输入刚才注册的账号密码，点击登录即可
- 账号主要用途是`软件设置的自动同步`，不管在哪登录你的账号，所有的设置内容都会随之同步

![登录账号](../assets/img/102.webp ':size=50%')

!> 如果只希望使用图片翻译(漫画翻译)功能，后续功能无需配置，请跳转[图片翻译](/5.0/basic/manga)

## 2.ocr设定

打开应用后，设置入口在这儿

![image-20241006112603291](./../assets/img/image-20241006112603291.webp ':size=70%')


### 配置ocr源
- ocr是指`将屏幕上显示的 日文/英文/韩文/俄文 进行识别，提取文本`，再配合下文的翻译源完成对 日文/英文/韩文 的翻译
- 当前提供了三种ocr接口供选择，可切换不同标签页查看具体介绍和设定
- 除`在线ocr`点击购买按钮跳转到网站进行购买后可直接使用，其他两种都是需要进行一定配置
- ocr对比及每种ocr配置请查看[ocr教程](/5.0/basic/ocr)

![image-20241006112653871](./../assets/img/image-20241006112653871.webp ':size=50%')

### 配置ocr设定
![image-20241006112717423](./../assets/img/image-20241006112717423.webp ':size=50%')

这里可以修改ocr识别相关的设定，如文字方向，是否拼接换行文字，原文语种选择等

- `原文语种`默认为`日文`，如果原文是英文/韩文/俄文/繁体中文，需要在此进行修改
  - ![原文语种](../assets/img/135-1.webp ':size=30%')
  - 源语种即为游戏内字幕显示的文字类型，只支持单种字幕，多种语言混合字幕无法翻译

- `是否显示原文`开启后会在翻译框内输出识别到的原文，可对比屏幕查看ocr的识别准确度
  - ![是否显示原文](../assets/img/135-2.webp ':size=30%')

- `文字方向` 有两种模式，横向与竖向
  - ![文字方向](../assets/img/135-3.webp ':size=30%')
  - 文字方向默认为横向，适合大部分游戏/文档的文字
  - 切换为竖向时，适合日漫等竖着的文字

- `是否拼接文本` 有两种模式，拼接与换行
  - ![是否拼接文本](../assets/img/135-4.webp ':size=30%')
  - 拼接会将识别到的多行文字合并为一句话，再进行翻译
  - 换行则是将每行文字单独作为一句话进行翻译
  - 一般情况下，开启拼接即可

  
## 3.翻译设定
### 配置翻译源
- 软件提供了多种`在线翻译源`和`翻译模型`，可点开不同标签页进行查看
- `建议多花一点时间去注册至少一个在线翻译源，体验会好很多`
- 翻译源对比及每种翻译源配置请查看[翻译源教程](/5.0/basic/translate)


![image-20241006112803126](./../assets/img/image-20241006112803126.webp ':size=50%')

## 4.框选翻译区域
~演示游戏为ATRI -My Dear Moments （中文名：亚托莉 -我挚爱的时光），steam有售，我的是游戏正版，也有官方中文，只是为了演示翻译而调为日文模式，感兴趣的也可以自己去买一份~
- 点击翻译器功能区域的`范围选择按钮`，框选出游戏内的文字框，正常情况下选择区域后便会立刻出现翻译内容
  - `注意翻译区域不要与翻译器页面重合`，可以把翻译器`放到翻译区域下方或上方`

![翻译区域](../assets/img/43.webp ':size=70%')

![框选演示](../assets/gif/框选演示.gif ':size=70%')


- 翻译区域的`右上角`可以`点击隐藏`，来隐藏翻译区域的蓝线，翻译区域仍会生效
- 翻译区域的`右下角`，当鼠标移上去时，也可以`左键拖拽`来更细致的调节翻译区域大小

![隐藏区域](../assets/img/44.webp ':size=70%')

![框选演示](../assets/gif/框选边框调节隐藏.gif ':size=70%')

- 翻译器中间也可以切换`自动/手动`模式，自动模式为`0.5s`刷新一次且（`检测到文字与之前改变`）后自动进行翻译，手动模式为每次点击`翻译按钮`时进行翻译
  - 也可以在`设置-功能设定-快捷键`页面，开启快捷键后，更方便重选区域和进行翻译

![自动/手动切换](../assets/img/45.webp ':size=70%')

 - 手动翻译模式

   ![手动翻译](../assets/gif/手动翻译.gif ':size=50%')

 - 自动翻译模式

   ![自动翻译](../assets/gif/自动翻译.gif ':size=50%')

- 基础运行的部分到此也就结束了，你也可以继续查看[其他设定教程](/5.0/basic/else)

- 软件仅能提供机翻供理解文字或剧情，更多还是得靠个人理解能力，翻译质量上比不过汉化组润色翻译，请不要将两者用作对比