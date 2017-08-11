//模仿jquery获取dom元素
function $x(dom) {
	function getDom (dom) {
		var str = dom[0];
		switch(str) {
			case '.':
				this.ele = document.getElementsByClassName(dom.substring(1) || null);
				break;
			case '#':
				this.ele = document.getElementById(dom.substring(1) || null);
				break;
			default:
				if (document.getElementsByTagName(dom).length) {
					this.ele = document.getElementsByTagName(dom);
				} else if (document.getElementsByName(dom).length) {
					this.ele = document.getElementsByName(dom);	
				} else {
					this.ele = null;
				}
		}
		return this;
	}

	getDom.prototype.get = function (num) {
		return this.ele[num] || this.ele;
	};

	getDom.prototype.insert = function (value, num) {
		this.ele[num].innerHTML = value;
	}

	return new getDom(dom);
}

//css获取属性
function getCss(o, key) {
	return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
}

/**
	赋值函数
	@param: obj 被赋值对象
	@param: option 进行的操作
	@param: value 赋值内容
**/
function setAssign(obj, option, value) {
	switch(option) {
		case 'width':
			obj.style.width = value;
			break;
		case 'height':
			obj.style.height = value;
			break;
		case 'top':
			obj.style.top = value;
			break;
		case 'left':
			obj.style.left = value;
			break;
		case 'position':
			obj.style.position = value;
			break;
		case 'cusor':
			obj.style.cusor = value;
	}
}

export {$x, getCss, setAssign};