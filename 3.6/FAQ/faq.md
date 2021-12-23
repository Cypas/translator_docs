## 提示
> [!TIP]
> 请善用左侧搜索栏，凡是报错总能找到一些瞩目的关键句子，可能是最后一句话或倒数第二句话，将其中的关键词输入到搜索栏试试有无结果再去提问

## ocr错误:团子翻译器未启动或运行失败
- 如果是选择的本地ocr模式（默认也就是这种模式），需要先开启本地ocr且最小化其窗口，不要关闭！！！
- 本地ocr使用参考[本地ocr说明](/basic/ocr#本地ocr说明)

## ocr错误:response无响应
- 百度ocr免费额度达到上限，建议换为免费的本地ocr，使用参考[本地ocr说明](/basic/ocr#本地ocr说明)
- 你也可以氪金购买百度的调用包，价格参考[百度ocr说明](/basic/ocr#百度ocr说明)

## ocr错误:你调用速度太快啦，度娘受不了惹
- 你使用的是低版本翻译器，请参考[下载安装](/basic/start)更新到最新版本

## 竖排文字识别无法生效
- 本地ocr无法实现竖排文字，这个需要百度在线ocr，`设置-其他设定`内的`竖排文字`以及`高精度模式`都是只有百度在线ocr可用
- 百度ocr免费额度参考[百度ocr说明](/basic/ocr#百度ocr说明)

![应用接口](../assets/img/47.webp ':size=50%')

## 由于目标计算机积极拒绝，无法连接
- 你没启动本地ocr程序或把本地ocr程序的窗口关了，那个窗口需要一直开 着，建议最小化，参考[本地ocr说明](/basic/ocr#本地ocr说明)

## ocr连接失败惹
- 百度ocr免费额度使用达到上限了
- 百度ocr免费额度参考[百度ocr说明](/basic/ocr#百度ocr说明)
- 可以换本地ocr试试[本地ocr说明](/basic/ocr#本地ocr说明)

## 谷歌/彩云/百度 :我抽风啦！
- 换私人翻译接口，公共接口非常容易挂
- 参考[私人翻译接口注册](/basic/api-register)

## ocr连接失败，请打开【网络和internet设置】的【代理】页面，将其中的全部代理设置开关关掉，保证关闭后请重试
- 把梯子/ssr/游戏加速器都关掉再开翻译器软件
- 你也可以将 360/腾讯电脑管家/火绒 内的网络修复/断网修复/断网急救箱等名字的功能运行一下
- 都没有的话你可以下载这个[独立版火绒断网修复](https://s.dango.cloud/s/y7ehb)

## ModuleNotFoundError: NO module named 'paddle.fluid.core_noavx'
- 请检查电脑cpu型号，建议i3 3220及以上cpu，amd则是弈龙2 X4 965及以上，说人话就是已经10年以上的电脑跑不了，建议换电脑
- 电脑cpu是`celeron`，即`赛扬`的，建议换电脑

## ModuleNotFoundError: NO module named 'src'
- 首次启动本地ocr时中途出现这个提示可以不用去管，等进度条7/7跑完就行了，不影响使用
- 如果在这个提示这里或进度4/7，5/7这里卡了很久（5分钟以上），建议把360，腾讯管家等安全类软件关了再重新运行本地ocr

## unhandled exception in script
如图,显示这种跳出cmd窗口外的报错

![报错页面](../assets/img/67.webp ':size=50%')

- 目前没有很好的解决方法，你可以尝试退回3.6.1版本，[旧版本下载地址](https://c.ayano.top/s/vZkf7)

- 你可以加入此群协助修复此bug

![疑难解答群二维码](../assets/img/68.webp ':size=50%')

## \[Errno 22\] invalid argument
- 目前没有很好的解决方法，你可以尝试退回3.6.1版本，[旧版本下载地址](https://c.ayano.top/s/vZkf7)

- 你可以加入此群协助修复此bug

![疑难解答群二维码](../assets/img/68.webp ':size=50%')

##  \[winError 2\]
- 建议去重装一个正版win10系统
- 或是换台电脑

## Hint: Expected static_cast<bool>(fin.is.open()) == true
- 软件路径含有中文或空格或中文感叹号，问号等
- 请在全英文路径下再运行

## No module named 'cv2'
- 关掉电脑管家/360/火绒等安全/杀毒软件
- 然后重新运行安装包

## UnicodeDecodeError 'gbk' codec can't decode byte
- 把windows切换为简体中文后再试

## 本地ocr正常启动一段时间后停止
- 可能电脑内存过低，4G以下无法运行
- 确认杀毒软件是否关闭
- 虚拟内存太低，[调整方法](https://jingyan.baidu.com/article/67508eb402aeb19cca1ce4a7.html)
- 以上都不行，换性能更高的电脑再试

## 字体不完整/太大
- `window设置-显示` 文本大小调到125%及以下
- 然后重启软件

## pause
- 看这句话的前一句信息，光一个pause无法说明问题

## 翻译器登录/注册时提示:以一种访问权限不允许的方式做了一个访问套接字的尝试
- 如果电脑有火绒，关掉下面这个设置
- 如果是360/腾讯电脑管家等管家类软件，关掉网络防护/访问限制，等类似名字的功能，当然你直接退出管家也行，只是治标不治本

![应用接口](../assets/img/64.webp ':size=50%')

## 本地ocr运行时提示:以一种访问权限不允许的方式做了一个访问套接字的尝试
- 表示电脑的6666端口被占用，本地ocr是通过这个端口传递数据的
- 使用快捷键`win+r` 输入`cmd`，回车
- 打开cmd窗口后输入`netstat -ano |findstr 6666`，回车
- 如果这里有输出结果，将输出结果的最后一串数字记下来，如下图为3488，这个值叫做进程id

![应用接口](../assets/img/65.webp ':size=50%')

- 接着在刚刚的cmd窗口输入`tasklist |findstr 3488`，后面这个3488根据前面获得的进程id跟着改变
- 输出结果的第一个值表示是这个应用占用了6666端口，这里显示为python.exe，是正常情况

![应用接口](../assets/img/66.webp ':size=50%')

- 如果是显示为其他应用，接着在cmd窗口输入`taskkill /f /t /im 3488`，后面的3488同样是根据前面获得的进程id跟着改变
- 打开本地ocr重试

## Running on http://192.168.1.3:6666/ (Press CTRL+C to quit)
- 这个代码在ip部分每个人稍有不同
- 这个是本地ocr启动完毕，是正常信息，注意这个窗口不要关闭，最小化就行了，然后去打开翻译器使用

## 下载好了的团子翻译器怎么解压/打开/没法提取/无法复制该文件
- 不要用windows自带解压
- 下载并安装[bandizip](http://www.bandisoft.com/bandizip/dl.php?web)
- 然后再双击打开下载的团子翻译器

## 解压后软件是哪个文件/软件怎么打开/哪个是启动
- 参考[安装文档](/basic/start#安装)

## 哪个翻译接口更好
- 彩云小译 > 腾讯 > 百度

## 百度翻译api注册时没有填身份证和姓名的地方/百度翻译无法注册
- 按ctrl F5强制刷新一下网页，然后稍等一会儿
- 也可以换浏览器重试，[chrome](https://www.google.cn/chrome/)，[firefox](https://www.mozilla.org/zh-CN/firefox/windows)，[edge](https://www.microsoft.com/zh-cn/edge)三选一，不要用国产浏览器

## 查询电脑版本信息
- 按下`win＋r`键 输入`dxdiag` 回车，然后截取如图所示信息

![版本信息](../assets/img/72.webp ':size=50%')

## 缺少.net
- 访问[下载地址](https://s.dango.cloud/s/vnqt7)
- `下载`并`安装`里面的`vc++合集包`
