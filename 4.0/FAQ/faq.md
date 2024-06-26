<!-- tabs:start -->
 # **部分问答内容**
 ## 部分问答内容
 ### Q:翻译器可以全屏模式下使用吗
 - `4.2.6`版本后可以在全屏游戏下使用

### Q:团子翻译器有移动端吗？
 - 正在开发中


 # **翻译器相关问题**
## 翻译器相关问题
### 登录时闪退
- 可以尝试前往[团子翻译器官网](https://translator.dango.cloud/)下载登录修复版本的安装包
- ![修复版本安装包](../assets/img/174.webp ':size=70%')

### 公共翻译抽风/启动失败
- 请先下载安装一个最新版[chrome](https://www.google.cn/chrome/index.html)/[firefox](https://www.mozilla.org/zh-CN/firefox/)/[edge](https://www.microsoft.com/zh-cn/edge)三种主流浏览器中至少一种，随后重启翻译器

- 如果安装完成后，公共翻译仍抽风/启动失败，建议去注册一个私人翻译源(推荐腾讯翻译)，参考[私人翻译源教程](/4.0/basic/translate#公共翻译与私人翻译的区别)

### 邮箱地址不合法

![邮箱地址不合法](../assets/img/117.webp ':size=50%')

- 请仔细查看注册时的输入框，第一行是自定义的用户名，第二行是密码，`第三行才是邮箱`，请检查是否有填写第三行的邮箱

### appid不正确或密钥不正确
- `百度ocr`密钥和`私人百度翻译`密钥`无法通用`，请去不同网站进行注册并重新输入密钥
- 以私人腾讯翻译为例，复制密钥时，`不需要`复制前面的`Secretld：`或`SecretKey：`部分，只复制后面密钥部分即可

### [winError 2] 系统找不到指定的文件
- 这个提示信息代表安装过程中出现了`文件丢失`(一般是被杀毒软件干掉了)，请先关闭杀毒软件后再进行安装

 # **安装过程相关问题**
## 安装过程相关问题

 ### 防止软件被误杀
- 在管家软件，安全卫士等软件内将团子翻译器安装路径(默认安装路径是`D:\Programs\DangoTranslator`)添加到杀毒白名单
- 若电脑未安装任何管家或安全卫士，可以参考以下教程添加wd白名单，单击图片可放大
1. ![1](../assets/img/128.webp ':size=30%')
2. ![2](../assets/img/129.webp ':size=30%')
3. ![3](../assets/img/130.webp ':size=30%')
4. ![4](../assets/img/131.webp ':size=30%')
5. ![5](../assets/img/132.webp ':size=30%')
6. ![6](../assets/img/133.webp ':size=30%')
7. 选择文件夹，将团子翻译器安装路径添加进去即可，翻译器默认安装路径是`D:\Programs\DangoTranslator`

### 安装包打不开
- 如遇到计算机环境特殊导致安装包无法进行安装，可以前往[团子翻译器官网](https://translator.dango.cloud)下载`压缩包版`解压到非中文且非空路径后运行

### [winError 2] 系统找不到指定的文件
- 这个提示信息代表安装过程中出现了文件丢失(一般是被杀毒软件干掉了)，请先将软件安装路径添加到管家软件，安全卫士，wd等安全软件白名单后，再进行安装，详细参考[防止软件被误杀](/4.0/FAQ/faq#防止软件被误杀)
  

### 软件未正确卸载导致无法重新安装
- 例如:软件安装在移动硬盘，移动硬盘拔掉后无法重新进行安装，也无法卸载
- 例如:直接将文件夹删掉，而不是通过windows设置内的`应用和功能`进行卸载

- 以上都属于有意/无意`未正确卸载而导致的无法重新安装`
  - (正确卸载方式为`windows设置`-`应用`，搜索或选中希望卸载的应用后，点击应用会出现卸载按钮，再点击`卸载按钮`，并根据提示点击`确认`按钮进行卸载)

#### 解决方法
1. 下载软件卸载软件geek,该软件[官网地址](https://geekuninstaller.com/download)可能需要代理才能访问，也可通过[备用地址](https://dango-static.eos-shanghai-2.cmecloud.cn/resources/translator/geek.exe)进行下载
2. 在geek内搜索`团子翻译器`，点击卸载
3. 会提示卸载失败，您要清理XXXX，点击`是`

![确认1](../assets/img/5510.webp ':size=30%')

4. 再次确认，点击`是`

![确认2](../assets/img/5511.webp ':size=30%')

5. 点击`完成`，会清理残留文件

![确认2](../assets/img/5512.webp ':size=30%')

6. 关闭geek，重新打开团子翻译器安装包，即可重新开始安装

 # **本地ocr相关问题**
## 本地ocr相关问题
- 本地ocr对系统硬件与环境的要求都较高，推荐系统(win7 64位，win10 64位)
- 如果您不想折腾，可以试试我们的[在线ocr](/4.0/basic/ocr#在线ocr介绍)，对系统环境没有要求，仅依赖网络，识别精确度也比本地ocr高，费用为`20元/月`
- 实在希望解决的情况下，可以加我们的[疑难解答群](https://jq.qq.com/?_wv=1027&k=ij5CjMkm)

### Errno22错误
- 完整报错信息

```
[Errno 22] Invalid argument
```
#### 解决方法
- 更新本地ocr到最新版本，具体步骤为关闭本地ocr窗口后，点击本地ocr页面的`卸载`，再点击`安装`，之后再启动本地ocr试试看
  - ![重装本地ocr](../assets/img/206.webp ':size=50%')
- 如果更新最新版ocr也无法解决，则可能是您的电脑环境不支持使用本地ocr，请更换其他在线ocr

### check_hostname requires server_hostname
- 完整报错信息

```
   raise ValueError("check_hostname requires server_hostname")
ValueError: check_hostname requires server_hostname
```
#### 解决方法
- 首次运行本地ocr时，不能开启代理，会导致部分环境文件下载失败
- 请先关闭本地代理软件后，重新打开本地ocr

<!--
### gbk解码错误
- 完整报错信息

```
File "D:\Programs\DangoTranslator\app\ocr\Python\lib\site-packages\qpt\kernel\tools\terminal.py", line 67, in handle
    msg = line.decode('gbk').strip("b'").strip("\n").strip(SHELL_ACT)
UnicodeDecodeError: 'gbk' codec can't decode byte 0x80 in position 47: illegal multibyte sequence
```

#### 解决方法
- 请按照下图流程更改windows设置，单击图片可放大

1. ![1](../assets/img/121.webp ':size=30%')

2. ![2](../assets/img/122.webp ':size=50%')

3. ![3](../assets/img/123.webp ':size=50%')

4. ![4](../assets/img/124.webp ':size=50%')

5. ![5](../assets/img/125.webp ':size=50%')

6. ![6](../assets/img/126.webp ':size=50%')

7. 完成设置后，再重新打开本地ocr
-->

### cpu不支持本地ocr
- 完整报错信息

```
ModuleNotFoundError: No module named 'paddle.fluid.core_noavx'
```

#### 解决方法
- CPU过旧不支持`AVX2指令集`，无法运行本地ocr程序,请更换其他在线ocr
- 若新CPU仍有该问题，需要手动开启AVX指令集
- 查询自己电脑cpu是否支持`AVX2指令集`的方法
  - 打开windows设置-关于，`with`前面的这串英文一般就是电脑cpu
    - ![查看cpu型号](../assets/img/264.webp ':size=50%')
  - 打开[bing搜索](https://bing.com),输入`[上面查到的cpu型号] cpu指令集扩展 site:cpu-panda.com`,如我上面查到的是`AMD Ryzen 5 4600H`，则搜索`AMD Ryzen 5 4600H cpu指令集扩展 site:cpu-panda.com`
  - 打开第一个搜索结果
    - ![打开第一个搜索结果](../assets/img/265.webp ':size=50%')
  - 结果页面往下翻找到`技术细节`这个标题，查看指令集扩展这一栏是否含有`AVX2`
    - ![找到技术细节](../assets/img/265.webp ':size=50%')
  - 如果含有`AVX2`，在使用本地ocr时仍显示上面报错信息，可以去搜索`[上面查到的cpu型号] 开启AVX2指令集`
  - 如果不含有`AVX2`，则说明CPU过旧不支持`AVX2指令集`，无法运行本地ocr程序,请更换其他在线ocr

### 本地ocr所使用的端口可能被占用
- 首先重启电脑后试试能不能用，仍显示端口被占用再使用下列方法

1. 本地ocr使用的是电脑的`6666`端口，需要做的是找到占用该端口的进程并停止运行
2. 使用快捷键<kbd>win</kbd>+<kbd>r</kbd> 输入`cmd`，回车
3. 打开cmd窗口后输入`netstat -ano |findstr 6666`，回车
4. 如果这里有输出结果，将输出结果的最后一串数字记下来，如下图为3488，这个值叫做进程id
- 如果没有结果，则可能是虚拟机占用端口，排查问题也很困难，建议使用[在线ocr](/4.0/basic/ocr#在线ocr介绍)

![应用接口](../assets/img/119.webp ':size=50%')

5. 接着在刚刚的cmd窗口输入`tasklist |findstr 3488`，后面这个3488根据前面获得的进程id跟着改变
6. 输出结果的第一个值表示是这个应用占用了6666端口，这里显示为python.exe，是正常情况

![应用接口](../assets/img/120.webp ':size=50%')

7. 如果是显示为其他应用，接着在cmd窗口输入`taskkill /f /t /im 3488`，后面的3488同样是根据前面获得的进程id跟着改变
8. 打开本地ocr重试

<!--
### 替换本地ocr
- 正常用户不需要进行此替换，部分用户本地ocr无法运行，且文档内也没提供相关解决方法时，可替换本地ocr文件后重试
1. 下载[本地ocr替换文件](https://l2.drive.c4a15wh.cn/api/v3/slave/source/0/dXBsb2Fkcy8yLzIwMjIvMTIvMjIvM1FET3JzdFJfb2NyMy42LjIrcnUuemlw/ocr3.6.2+ru.zip?sign=bQUQcI23zsN8lX5PD21mMBcqdsQvV4QAVD-WjKhbUrc%3D%3A0)
2. 关闭翻译器以及本地ocr，将刚才下载的ocr文件解压缩
3. 用解压后的ocr文件夹替换原安装路径下的ocr文件夹

![替换文件夹](../assets/img/127.webp ':size=50%')

4. 打开翻译器后再次启动本地ocr
-->

 # **在线ocr相关问题**
## 在线ocr相关问题
- 在线ocr指代我们团队运营的在线ocr(星河ocr)

- 在线ocr仍在`发展过程中`，部分字符的识别情况不佳，部分省份的网络访问不佳等情况，都有待进一步优化，有什么体验觉得不好的地方欢迎联系[用户群](https://jq.qq.com/?_wv=1027&k=h9LeHRKy)内客服娘

- 如果`偶尔`出现在线ocr未知错误的情况，属于`正常`现象，可能是`本地网络不稳定`

- 现在在线ocr服务对象`主要是大陆`用户，如果是`国外/海外`用户，可能延迟会非常高，如仍需使用，请自备`回国梯子`

- 如果`连续出现多次在线ocr未知错误`，请先尝试`更换在线ocr服务节点`，如仍无法正常使用请联系[用户群](https://jq.qq.com/?_wv=1027&k=h9LeHRKy)内客服娘


<!-- tabs:end -->