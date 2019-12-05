/**

 第一章 Node简介
 1.2.1 Node的诞生
 作者最初的目的是写一个基于事件驱动，非阻塞I/O的web服务器，以达到更高的性能，比较各种语言之后选择了JavaScript。C开发门槛高，Haskell难度大，Lua自身有很多阻塞I/O库，Ruby虚拟机性能不好。JavaScript在浏览器中有广泛的事件驱动应用，其次，浏览器大战已经分出高下，Chrome的v8引擎性能最好，而且基于BSD许可，服务端JavaScript没有历史包袱，最终选择了JavaScript。

 1.3 Node给JavaScript带来的意义
 在Node中，JavaScript可以访问文件，搭建websockt服务器端，连接数据库，像web workers一样使用多线程等。

 1.4   Node的特点
 1.4.1 异步I/O
 在Node中，绝大多数操作都是以异步风湿调动，从文件操作到网络请求等，每个调用之间无需等待之前的I/O调用结束，编程模式上极大提高效率。

 1.4.2 事件与回调函数
 事件编程方式有轻量级，松耦合，只关注事务点灯优势，但是多个异步任务场景下事件之间如何协作是一个问题。代码的编写顺序和执行顺序无关，会造成阅读上的障碍。

 1.4.3 单线程
 Node.js保持了JavaScript在浏览器中的单线程特点。而且在Node中JavaScript与其他线程无法共享状态。好处是不像多线程编程那样要注意状态的同步问题，没有死锁，也没有交换线程上下文带来的性能开销。
 单线程弱点是：
 无法利用多核CPU；
 错误会引起整个应用退出，应用的健壮性不好；
 如果出现大量计算占用CPU的情况，导致无法继续调用异步IO；

 和JavaScript在浏览器中和UI公用一个线程一样，长时间执行会导致UI的渲染和响应中断。Node中长时间占用CPU会导致后续的异步IO无法调用，已完成的也无法及时执行回调。

 HTML5标准制定了web worker，能够创建多个工作线程来计算，以解决JavaScript阻塞UI渲染问题。工作线程为了不阻塞主线程，通过消息传递的方式来传递运行结果，这样工作线程不能访问到主线程的UI。

 Node采用了相同思路，child_process。通过将计算分发到各个子进程可以将大量计算分解掉，然后通过进程之间的事件消息来传递结果，这可以很好的保持应用模型的简单和低依赖。通过master-worker的管理方式可以很好的管理工作进程，提高健壮性。

 1.4.4 跨平台
 兼容windows和linux，它在操作系统和Node上层模块系统之间构建了一层平台架构，libuv。

 1.5 NOde应用场景
 1.5.1 IO密集型
 IO密集型的优势主要体现在Node利用事件循环的处理能力，而不是启动每一个线程为每一个请求服务，资源占用少。

 1.5.2 是否不擅长CPU密集型业务
 Node可以通过C/C++扩展的方式更高效的利用CPU，将v8做不到的地方使用C/C++来实现。
 通过子进程的方式，将一部分Node进程当做常驻服务进程用于计算，利用进程间的消息来传递结果，将计算和IO分离，这样可以充分利用多核CPU。

 1.5.3 与遗留系统和平共处

 1.5.4 分布式应用
 NodeFox，ITier将数据库集群做了划分和映射，查询调用依旧是针对单张表SQL查询，中间层分解查询SQL，并行地区多台数据库中获取数据并合并。
 NodeFox可以实现对多台MySql数据库的查询，就像查新一台一样
 iTier查询多个数据库如同查询单个数据库一样，这里的多个是指不同的数据库如MYSQL和SQLServer

 1.6 Node的使用者
 雅虎Cocktail
 socket.io
 网易pomelo游戏框架

 第二章 模块机制
 2.1   CommonJS规范
 2.1.1 CommonJS的出发点
 没有模块系统
 标准库较少
 没有标准接口
 缺乏包管理系统
 CommonJS规范主要为了弥补JavaScript没有标准的缺陷，以达到像Python，Java那样可以开发大型应用的能力，这样可以富客户端应用。
 服务器端JavaScript应用程序
 命令行工具
 桌面图形界面应用
 混合应用

 2.1.2 CommonJS的模块规范
 规范身份简单，主要分为模块引用，模块定义，模块标识。
 1. 模块引用 var math = require('math')
 2. 模块定义，上下文提供require()方法引入外部模块，提供exports对象导出当前模块的方法或变量，并且它是唯一导出的出口。在模块中，module对象代表模块本身，而exports是module的属性。在Node中，一个文件就是一个模块，将方法挂载在exports对象上作为属性可定义导出的方式。
 math.js
 exports.add = function () { ... }
 program.js
 var math = require('math')
 exports.increment = function(val) { return math.add(val, 1) }
 3. 模块的标识
 模块的标识就是传递给requir()方法的参数，它必须是驼峰命名的字符串，或者以.，..开头的相对路径，或绝对路径，可以不要后缀.js

 2.2 Node的模块实现
 Node在实现中并非完全按照规范实现，而是对模块规范进行了一定的取舍，同时也增加了少许自身需要的特性。
 Node中引入模块，需要3个步骤
 （1）路径分析
 （2）文件定位
 （3）编译执行
 在Node中，模块分为两类，一类是Node提供的核心模块，另一类是用户编写的模块，成为文件模块。核心模块部分在Node源码的编译过程中编译进了二进制执行文件，Node进程启动时部分核心模块加载进入内存，所以这部分核心模块引入时，文件定位和编译执行步骤可以省略，加载速度快。文件模块则是在运行时动态加载，需要完整的路径分析，文件定位，编译执行过程，速度慢。

 2.2.1 优先从缓存加载
 无论核心模块还是文件模块，require()方法对相同模块的二次加载都采用缓存优先，核心模块的缓存价差优先于文件模块的缓存检查。
 2.2.2 路径分析和文件定位
 （1）模块标识符分析
 模块标识符有下面几种类型
 核心模块，http，fs，path等
 .或..开始的相对路径文件模型
 非路径形式的文件模型，如CONNECT模块
 核心模块加载速度仅次于缓存加载，在Node的源代码编译过程中已编译为二进制，加载最快。
 以.，..，/开始的标识符，被当做文件模块来处理，在分析模块时require()将标识符转换为真实路径，并以真实路径作为索引，将编译执行后的结果存放在缓存中，这样二次加载更快。
 自定义模块时指非核心模块，也不是路径形式的标识符，它是一种特殊的文件模块，可能是一个文件或者包的形式。费时，最慢。

 模块路径
 模块路径是Node在定位文件模块的具体文件时指定的查找策略，具体表现为一个路径组成的数组。
 模块路径的生成规则如下：
 1. 当前文件目录下的node_modules目录
 2. 父目录下的node_modules目录
 3. 父目录的父目录下的node_modules目录
 4. 沿着路径向上递归查找，直到根目录下的node_modules目录
 这个和JavaScript原型链或者作用域链的查找方式十分类似。文件路径越深，模块加载耗时越多。

 文件定位
 分析标识符过程中，可能不包含文件扩展名，CommonJS允许这样，这种情况下回按照.js，.node，.json顺序依次补充，尝试。如果是
 .node，.json，带上扩展名肯定会快一点的。

 目录分析和包
 require分析文件扩展名之后，可能没有找到对应的文件，但是得到一个目录，这时Node会将目录当一个包来处理。在这个过程中Node在当前目录下查找package.json（CommonJS包规范定义的包描述文件），通过JSON.parse()解析出包描述兑现个，从中获得main属性指定的文件名进行定位。如果文件缺少扩展名，将会进入扩展名分析的步骤。如果main属性指定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js,index.node,index.json

 如果在目录分析过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组被遍历完仍然找不到，则抛出查找失败的异常。
 */
/**

 2.2.3 模块编译
 在Node中，每个文件模块都是一个对象，定义如下
 function Module(id, parent) {
  this.id = id;
  this.exports = {}
  this.parent = parent
  if (parent && parent.children) {
    parent.children.push(this)
  }
  this.filename = null
  this.loaded = false
  this.children = []
}
 *
 */
/**

 编译和执行时引入文件模块的最后一个阶段，定位到具体文件后，Node会新建一个模块对象，然后根据路径载入并编译。不同的文件扩展名，载入的方法不同。
 js文件通过fs模块同步读取文件后编译执行
 node文件是用c编写的扩展文件，动过dlopen()方法加载后编译生成的文件
 json文件，通过fs模块读取文件后，通过JSON.parse()解析后返回结果
 其他的扩展名文件，都被当做js文件载入
 不同的文件扩展名，Node会调用不同的读取方式，例如json文件
 Module._extensions['.json'] = function(module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8')
  try {
    module.exports = JSON.parse(stripBOM(content))
  } catch (err) {
    err.message= filename + ':' + err.message
    throw err
  }
}
 MOdule._extensions会被赋值给require()的extensions属性，所以通过在代码中访问require.extensions可以知道系统中已有的扩展加载方式。

 */








