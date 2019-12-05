jQuery(function($) {
	$(function() {
		//延迟1秒加载
		setTimeout(function () {loadScroller();}, 1000);
	});
	
	//加载导航目录
	function loadScroller() {
		//先获取第一个h标签, 之后循环时作为上一个h标签
		var $ph = $('#cnblogs_post_body :header');
		// 首页里的title
		var $postTitle = $('.forFlow .postTitle2')
		// 绝对定位距离顶部高度
		var topValue = $("#header").height() + 10;
		// 正则表达式，配置数组
		var hxReg = RegExp(/\d/);
		if($ph.length > 0 || $postTitle.length > 0) {
			//添加导航目录的内容，导航栏放在右侧
			$('#main').append('<div id="sidebar_scroller" class="catListPostArchive sidebar-block"><h3 class="catListTitle">导航目录</h3><ul class="nav"></ul></div>');
			//取当前边栏的宽度
			$('#sidebar_scroller').css({'width': $('#blog-sidecolumn').width(), 'top': topValue, 'max-height': window.screen.availHeight - topValue - 46});
			//让导航目录停留在页面顶端
			$('#sidebar_scroller').stickUp({ marginTop: 'auto'});
			//正文，遍历文章里每个h标签
			$ph.length > 0 && $ph.each(function(index, val) {
				var title = val.textContent.trim()
				// 级别
				var hx = hxReg.exec(val.nodeName)[0]
				//设置h标签的id, 编号从0开始
				$(val).attr('id', 'scroller-' + index);
				$(val).attr('offset', hx)
				//添加h标签的目录内容
				$('#sidebar_scroller ul').append('<li class="scroller-offset' + hx + '"><a href="#scroller-' + index + '" title="'+ title +'">' + title + '</a></li>');
			});
			// 首页，遍历文章里的postTitle2
			$postTitle.length > 0 && $postTitle.each(function(index, val) {
				var title = val.text.trim()
				//设置h标签的id, 编号从0开始
				$(val).attr('id', 'scroller-' + index);
				// 首页固定为h1
				$(val).attr('offset', 1)
				//添加h标签的目录内容
				$('#sidebar_scroller ul').append('<li class="scroller-offset1"><a href="#scroller-' + index + '" title="'+ title +'">' + title + '</a></li>');
			});
			
			//开启滚动监听, 监听所有在.nav类下的li
			$('body').scrollspy();
			
			//让页面的滚动更平滑
			$('#sidebar_scroller a').on('click', function() {
				var targetOffset = $(this.hash).offset().top;
				$('html, body').animate({scrollTop: targetOffset}, 800);
				return false;
			});

			$(document).on('scroll', debounce(function() {
				if($(document).scrollTop() == 0) {
					$("#sidebar_scroller").animate({top: topValue, position: 'fixed;!important'}, 300);
				}
			}, 800))
		}
	}
});

// 防抖
var debounce = (fn, wait) => {
	let timer, startTimeStamp = 0;
	let context, args;
	let run = (timerInterval)=>{
		timer = setTimeout(()=>{
			let now = (new Date()).getTime();
			let interval = now-startTimeStamp
			if (interval < timerInterval){ // the timer start time has been reset, so the interval is less than timerInterval
				startTimeStamp=now;
				run(timerInterval-interval);  // reset timer for left time
			} else {
				fn.apply(context,args);
				clearTimeout(timer);
				timer = null;
			}

		},timerInterval);
	}
	return function (){
		context = this;
		args = arguments;
		let now = (new Date()).getTime();
		startTimeStamp = now;

		if(!timer){
			console.log('debounce set',wait);
			run(wait);    // last timer alreay executed, set a new timer
		}
	}
}