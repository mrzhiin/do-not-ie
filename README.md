# IE 兼容性弹窗

该弹窗特别为国内制作，推荐浏览器包含了 360浏览器、QQ浏览器、Google Chrome、Mozilla Firefox

由于 Google Chrome 官网链接不稳定，所以采用了新浪的下载地址

![](https://raw.githubusercontent.com/mrzhiin/do-not-ie/master/screen.png)

# 使用

在 ```head``` 标签中添加 js 链接，并包含在 IE 的条件注释里

```
<!--[if lte IE 9]>
<script src="js/dnie.min.js"></script>
<![endif]-->
``` 
将 ```dnie```文件夹放在```html```文件同级目录

#

注意：IE6 及以下可能无法正常显示