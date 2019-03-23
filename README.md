#study blog
---
<h5>make some demo</h5>

```$xslt
practice box model and waterfall
```

&emsp;&emsp;一开始发现瀑布流的图片无法在DOM渲染之初获取每个图片的高度，查阅了网上的资料后，总结得出可能是JS消息队列的关系，需要在mounted中使用settimeout使瀑布流排列进入消息队列，等到所有dom渲染完再进行操作。
在子组件给父组件传值后，父组件收到了新图片也渲染了出来，但却没有将img马上加到$refs中，需要等到下一个事件触发才能加入。<br/>
解：因为ref不是响应式的，需要在DOM渲染之后才生效，所以在v-for中使用会无法及时获取到DOM，我只能将DOM操作放到updated钩子中。