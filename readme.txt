此练习主要练习事件代理，也叫事件委托和构造函数。

JavaScript事件代理和委托（Delegation）
参考文章：
http://blog.csdn.net/majian_1987/article/details/8591385
http://www.cnblogs.com/liugang-vip/p/5616484.html

为什么要用事件委托：
减少与dom的交互次数，提高性能；

事件委托的原理：
事件委托是利用事件的冒泡原理来实现的

那什么样的事件可以用事件委托，什么样的事件不可以用呢？
适合用事件委托的事件：click，mousedown，mouseup，keydown，keyup，keypress。