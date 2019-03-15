#study blog
---
<h5>make some demo</h5>

```$xslt
practice box model and waterfall
```

&emsp;&emsp;一开始发现瀑布流的图片无法在DOM渲染之初获取每个图片的高度，查阅了网上的资料后，总结得出</br>可能是JS消息队列的关系，需要在mounted中使用settimeout使瀑布流排列进入消息队列，等到所有dom渲染完再进行操作。