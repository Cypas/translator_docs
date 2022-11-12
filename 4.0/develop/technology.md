## 项目说明
- `团子翻译器`项目于`2020年2月`由胖次团子立项，并不断逐步发展，至今已维护`两年多`，发布十多个大版本，github star数量`3.8k`，用户规模`6w+`

- [翻译器官网](https://translator.dango.cloud)
- [b站官方账号](https://space.bilibili.com/227927)
- github地址
  - [翻译器代码开源地址](https://github.com/PantsuDango/Dango-Translator)
  - [翻译器文档开源地址](https://github.com/Cypas/translator_docs)
  - 有空可以给上面两个项目都点下`star`,谢谢啦

### 项目技术介绍
1. 翻译器客户端，纯py写的基于pyqt，持续性迭代
2. 翻译器用户服务端，go写的，基于gin和gorm，目前处于生产中
3. 在线ocr的用户管理页面+后台管理页面，目前1.0已经在生产了，2.0还在开发
4. 在线ocr的管理端后台服务，go写的，目前1.0已经在生产了，2.0还在开发
5. 一些项目的公共组件服务，比如支付系统，go写的，开发中
6. 在线ocr服务端，py+paddleocr自训练搭建的，目前处于生产中

- 然后运维这块是基于k8s底座的容器化跑的

### 之后我们想做的事情

1. 手机端的翻译器，可能需要懂原生安卓的技术
2. gan文字消除模型开发，就是能实现类似ps的抠字嵌字，把翻译结果直接贴上去
3. 语音asr模型开发，想做语音翻译，比如看外语直播之类的，需要语音转文字
4. 官网，这个的话，目前连想做什么样子都不知道～
5. 想开启服务器租赁业务，基于此的前后端开发，就类似阿里云服务器页面那样的
- 差不多就是这些了，其实想听听大佬有什么新的想法，觉得翻译器的项目可以开发些什么有意思的东西，我们也可以以孵化想法为目的去做出来～

## 特别鸣谢

[PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)  本地ocr基于此框架搭建

[QPT打包工具](https://github.com/GT-ZhangAcer/QPT)  本地ocr基于此工具打包

[GT-Zhang](https://github.com/GT-ZhangAcer) 本地ocr开发过程给予了诸多帮助的大佬

[C4a15Wh](https://c4a15wh.cn) 星河云在线OCR(团子在线ocr)主力开发

[Cypas_Nya](https://blog.ayano.top) 使用文档编写