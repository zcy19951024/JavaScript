# Layout布局
### 概述
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在页面呈现的时候能够快速的进行布局。一般使用12栅格系统，也有采用8栅格，但是随着设备屏幕越来越大，传统的12栅格系统在一些场景下没办法解决元素布局问题，所以使用25格栅系统。也就是将页面分成24等分。
### 基础布局
<div class="demo-block">
 <w-row>
   <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 </w-row>
</div>

::: demo
```html

<w-row>
 <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
</w-row>

```
:::
