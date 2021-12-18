## 百度ocr接口说明

- 团子翻译器内的离线ocr只支持`横向阅读`的文字，纵向阅读文字需要`api设定`内填写`百度ocr的密钥`并勾选`使用百度在线ocr`（限制很严格，仅`1000次/月`，你也可以考虑开通他的付费版提升额度），且在翻译器`设置-其他设置`内启用`竖排文字识别模式`，若无高额度百度ocr还是算了

- 2021年5月27日后的用户还是建议使用团子自带离线ocr，毕竟现在百度在线ocr额度太太太小了，非常容易上限
- 下图是百度ocr的具体`免费额度`
- 通用文字识别（标准版）为正常翻译时使用的接口，消耗其次数
- 通用文字识别（高精度版）为开启高精度时和竖排文字使用的接口

![百度ocr额度](../assets/img/46.webp ':size=50%')

- 老用户也可以点这里查看自己额度为多少[点击查看自己百度ocr额度](https://console.bce.baidu.com/ai/?_=1628852476294&fromai=1#/ai/ocr/overview/index)

## 百度ocr注册
1. 打开[百度ocr注册网址](https://console.bce.baidu.com/ai/?_=1579777147726&fromai=1#/ai/ocr/overview/index)

2. 扫码完成`注册或登陆`
   
3. 点击右下角的`立刻领取`

![立刻领取](../assets/img/48.webp ':size=50%')

4. 点击`立刻认证`

![立刻认证](../assets/img/49.webp ':size=50%')

4. 点击`个人认证`

![个人认证](../assets/img/50.webp ':size=50%')

5. 如之前百度翻译已经实名认证过，这里直接`确定`就行，没有实名认证的输入一下自己个人信息也就可以了

![确定信息](../assets/img/51.webp ':size=50%')

6. 高级认证这个不用管，返回[百度ocr注册网址](https://console.bce.baidu.com/ai/?_=1579777147726&fromai=1#/ai/ocr/overview/index)

![高级认证](../assets/img/52.webp ':size=50%')

7. 再次点击右下角的`立刻领取`

![立刻领取2](../assets/img/48.webp ':size=50%')

8. 接口名字勾选`全部`，然后点击`0元领取`

![0元领取](../assets/img/54.webp ':size=50%')

9. 领取成功后再再回到[百度ocr注册网址](https://console.bce.baidu.com/ai/?_=1579777147726&fromai=1#/ai/ocr/overview/index)

10. 点击`创建应用`

![创建应用](../assets/img/53.webp ':size=50%')

11. 应用名字例如填写`本地文字识别`，接口选择默认的就行，文字识别包名:`不需要`，应用归属:`个人`，应用描述：例如`一款本地ocr小程序，用于毕业设计`

![创建应用2](../assets/img/55.webp ':size=50%')

12. 创建完毕后，点击`查看应用详情`

![创建完毕](../assets/img/56.webp ':size=50%')

13. 应用详情的API Key和Secret Key就是我们需要的密钥

![查看应用详情](../assets/img/57.webp ':size=50%')

14. 将密钥填入到团子翻译器百度ocr密钥的地方，再打开百度ocr开关

![团子翻译器设置内](../assets/img/58.webp ':size=50%')

?>[点我查看翻译器使用文档](/3.6/basic/translate)