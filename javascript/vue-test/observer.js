/**vue原理之Observer*/
class Observer {
	// 构造函数
	constructor (data) {
		this.walk(data);
	}
	
	walk (data) {
		// 遍历对象属性
		let keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			defineReactive(data, keys[i], data[keys[i]])
		}
	}
}

function defineReactive (data, key, val) {
	observer(val);
	/** dep在这里实例化，是为了实现对象的每一层，每一个key都有自己的订阅实例，比如a.b对应dept1，a.c对应dept2，这里虽然都是
	 * let dep = new Dep()，但是每次来到这个方法dep都是独立的，会一直保存在内存，这样每次在调用set方法都能找到这个a.b对应的dep
	 * dep这里会一直保存，是因为闭包的关系，object这个全局函数，引用了上层的作用域，这个作用域包含了dep，除非Object = null，或者
	 * 退出浏览器，dep才会消失
	 * 实例化之后，dep就有了被订阅，发布消息的功能，dep不写在这里也是可以的，多定义一个全局函数，每次obser的时候增加一个dep
	 * */
	let dep = new Dep();
	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get: function () {
			// 每次new Watch('a.b')，都会先执行get方法，进而来到这里，触发dep.depend()，这个dep就是a.b对应的订阅
			dep.depend();
			return val;
		},
		set: function (newVal) {
			if (val === newVal) {
				return;
			}
			observer(newVal);
			dep.notify();
		}
	})
	
}

// 递归获取，直到基本类型
function observer (data) {
	if (Object.prototype.toString.call(data) !== '[object Object]') {
		return;
	}
	return new Observer(data);
}

class Dep {
	constructor () {
		this.subs = []
	}

// 这里是收集回调函数的过程，也就是收集依赖项，数据改变后要触发的改变UI和其他函数
	depend () {
		this.subs.push(Dep.target)
	}
	
	notify () {
		for (let i = 0; i < this.subs.length; i++) {
			this.subs[i].fn();
		}
	}
}

Dep.target = null;

function pushTarget (watch) {
	Dep.target = watch;
}

class Watch {
	constructor (exp, fn) {
		this.exp = exp;
		this.fn = fn;
		pushTarget(this);
		data[exp];
	}
}

var data = {
	a: 1,
	b: {
		c: 2
	}
};

// 递归对象的属性，层层监听
observer(data);

// new产生this，this挂载上exp和回调fn，再用data[exp]触发get方法，从而订阅dep.push(this)
new Watch('a', () => {
	console.log(90);
});
new Watch('b.c', () => {
	console.log(80);
});
setTimeout(() => {
	data.a = 2;
}, 1000);

/**observer: 检测每一个对象，每一层的属性，每个属性都有get，set方法，如果这些属性有 变化，调用相应的dep处理
 * Dep：根据不同的数据生成不同的dep依赖，这个依赖手机了相关的回调方法，和触发这些回调执行
 * watcher：包含需要触发的回调函数，在get方法中，订阅这个属性的dep，如果watcher('a.b', fn1);
 * watcher('a.b', fn2);就对同一个属性生成了两个订阅者，subs1，subs2，当a.b=3;赋值的时候，触发set方法
 * 从而依次执行了：subs1的回调方法fn1，subs2的回调方法fn2
 *
 * 主要还是利用了Object.defineProperty方法，get，set会找到同一个dep00，每一次访问数据的时候触发get，
 * dep00收集依赖，后面设置新值的时候，触发set方法，dep00触发所有订阅者的回调函数。
 *
 * 整个vm的核心，就是实现了observer（观察数据变化），parser（解析依赖），watcher（观察到的数据更新，通知指令的执行
 * 更新相应UI）
 * */
