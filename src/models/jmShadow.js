


/**
 * 画图阴影对象表示法
 *
 * @class jmShadow
 * @for jmGraph
 * @param {number} x 横坐标偏移量
 * @param {number} y 纵坐标编移量
 * @param {number} blur 模糊值
 * @param {string} color 阴影的颜色
 */

function jmShadow(x,y,blur,color) {
	if(typeof x == 'string' && !y && !blur && !color) {
		this.fromString(x);
	}
	else {
		this.x = x;
		this.y = y;
		this.blur = blur;
		this.color = color;
	}
}

/**
 * 根据字符串格式转为阴影
 * @method fromString
 * @param {string} s 阴影字符串 x,y,blur,color
 */
jmShadow.prototype.fromString = function(s) {
	var ms = s.match(/\s*([^,]+)\s*,\s*([^,]+)\s*(,[^,]+)?\s*(,[\s\S]+)?\s*/i);
	if(ms) {
		this.x = ms[1]||0;
		this.y = ms[2]||0;
		if(ms[3]) {
			ms[3] = jmUtils.trim(ms[3],', ');
			//如果第三位是颜色格式，则表示为颜色
			if(ms[3].indexOf('#')===0 || /^rgb/i.test(ms[3])) {
				this.color = ms[3];
			}
			else {
				this.blur = jmUtils.trim(ms[3],', ');
			}
		}
		if(ms[4]) {
			this.color = jmUtils.trim(ms[4],', ');
		}
	}
}

/**
 * 转为字符串格式 x,y,blur,color
 * @method toString
 * @returns {string} 阴影字符串
 */
jmShadow.prototype.toString = function(s) {
	var s = this.x + ',' + this.y;
	if(this.blur) s += ',' + this.blur;
	if(this.color) s += ',' + this.color;
	return s;
}