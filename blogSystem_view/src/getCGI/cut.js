//鼠标点击图片触发裁剪函数
let cutImg = function (dom) {
	const imgObj = $x(dom).get(0);
	const oTailer = $x('.img-box').get(0);
	const oShadow = $x('.outer').ele;
	const preview = $x('.preview').get(0);
	//preview.style.clip = 'rect(20px 120px 120px 20px)';
	imgObj.onmousedown = function (e) {
		//获取事件对象
		let event = e || windo.event;

		//初始化鼠标位置
		let tempX = event.clientX;
		let tempY = event.clientY;

		//调整剪裁区域的位置
		oTailer.style.left = tempX + 'px';
		oTailer.style.top = tempY + 'px';

		//鼠标在图片上移动，绘制剪裁区域，阴影区域
		document.onmousemove = function (event) {
			let e = event || window.event;

			//鼠标移动距离
			let sleft = e.clientX - tempX;
			let stop = e.clientY - tempY;

			//剪裁越界限制，只需限制右侧和下侧
			if (oTailer.offsetLeft + oTailer.offsetWidth >= (imgObj.offsetWidth + imgObj.offsetLeft)) {
				sleft = imgObj.offsetLeft + imgObj.offsetWidth - oTailer.offsetLeft;
			}
			if (oTailer.offsetTop + oTailer.offsetHeight >= (imgObj.offsetTop + imgObj.offsetHeight)) {
				stop = imgObj.offsetTop + imgObj.offsetHeight - oTailer.offsetTop;
			}

			//剪裁区域绘制
			oTailer.style.width = sleft + 'px';
			oTailer.style.height = stop + 'px';

			//剪裁区域的显示
			oTailer.style.display = 'block';

			//阴影部分绘制
			for (let i = 0; i < oShadow.length; i++) {
				oShadow[i].style.display = 'block';
			}

			//阴影区域绘制
			shadow(imgObj, oTailer, oShadow, preview);

			e.preventDefault();
		}

		document.onmouseup = function (evet) {
			let eve = evet || window.event;

			//取消事件
			document.onmousemove = null;

			//阻止默认事件
			eve.preventDefault();
		};
		event.preventDefault();
	}

	//监视阴影区域
	for (let j = 0; j < oShadow.length; j++) {
		oShadow[j].onmousedown = function () {
			oTailer.style.width = 0;
			oTailer.style.height = 0;
			oTailer.style.display = 'none';
			preview.style.clip = 'auto';
			for (let k = 0; k < oShadow.length; k++) {
				oShadow[k].style.display = 'none';
				oShadow[k].style.left = 0;
				oShadow[k].style.top = 0;
			}
		}
	}

	oTailer.onmousedown = function (ev) {
		tailorMove(ev, oTailer , imgObj, oShadow);
	}
}

/**
* @params: imgObj  图片dom对象
* @params: oTailer  剪裁区域dom对象
* @params: oShadow  阴影dom对象
*/

function shadow(imgObj, oTailer, oShadow) {
	//绘制左侧阴影区
	
	setAssign(oShadow[0], 'width', (parseInt(getCss(oTailer, 'left')) - parseInt(getCss(imgObj, 'left'))) + 'px');
	setAssign(oShadow[0], 'height', parseInt(getCss(imgObj, 'height')) + 'px');
	setAssign(oShadow[0], 'left', parseInt(getCss(imgObj, 'left')) + 'px');
	setAssign(oShadow[0], 'top', parseInt(getCss(imgObj, 'top')) + 'px');

	//右侧阴影
	setAssign(oShadow[2], 'width', (parseInt(getCss(imgObj, 'width')) - parseInt(getCss(oTailer, 'width')) - parseInt(getCss(oShadow[0], 'width'))) + 'px');
	setAssign(oShadow[2], 'height', parseInt(getCss(imgObj, 'height')) + 'px');
	setAssign(oShadow[2], 'left', (parseInt(getCss(oTailer, 'left')) + parseInt(getCss(oTailer, 'width'))) + 'px');
	setAssign(oShadow[2], 'top', parseInt(getCss(imgObj, 'top')) + 'px');

	//绘制上侧阴影区
	setAssign(oShadow[1], 'width', parseInt(getCss(oTailer, 'width')) + 'px');
	setAssign(oShadow[1], 'height', (parseInt(getCss(oTailer , 'top')) - parseInt(getCss(imgObj , 'top'))) + 'px');
	setAssign(oShadow[1], 'left', (parseInt(getCss(imgObj , 'left')) + parseInt(getCss(oShadow[0] , 'width'))) + 'px');
	setAssign(oShadow[1], 'top', parseInt(getCss(imgObj , 'top')) + 'px');

	// 下侧阴影区
    setAssign(oShadow[3] , 'width'  , parseInt(getCss(oTailer , 'width')) + 'px');
    setAssign(oShadow[3] , 'height' , (parseInt(getCss(imgObj , 'height')) - parseInt(getCss(oTailer , 'height')) - parseInt(getCss(oShadow[1] , 'height'))) + 'px');
    setAssign(oShadow[3] , 'left'    , (parseInt(getCss(imgObj , 'left' )) + parseInt(getCss(oShadow[0] , 'width'))) + 'px');
    setAssign(oShadow[3] , 'top'    , (parseInt(getCss(oTailer , 'top' )) + parseInt(getCss(oTailer , 'height'))) + 'px');

    let clipLeft = (parseInt(getCss(oTailer, 'left')) - parseInt(getCss(imgObj, 'left'))) + 'px';
	let clipTop = (parseInt(getCss(oTailer , 'top')) - parseInt(getCss(imgObj , 'top'))) + 'px';
	let clipRight = (parseInt(getCss(oTailer, 'width')) + parseInt(getCss(oShadow[0], 'width'))) + 'px';
	let clipBottom = (parseInt(getCss(oTailer, 'height')) + parseInt(getCss(oShadow[1], 'height'))) + 'px';
	preview.style.clip = 'rect(' + clipTop + ' ' + clipRight + ' ' + clipBottom + ' ' + clipLeft + ')';
	//preview.style.clip = 'rect(20px 120px 120px 20px)';
	//console.log('rect(' + clipTop + ' ' + clipRight + ' ' + clipBottom + ' ' + clipLeft + ')');
}


/*  裁剪区域的移动  */
function tailorMove(ev ,oTailor , oPicture ,oShadow) {
    var oEvent = ev || window.event;

    var oTmpx = oEvent.clientX - oTailor.offsetLeft;
    var oTmpy = oEvent.clientY - oTailor.offsetTop;        

    document.onmousemove = function(ev) {
        var oEvent = ev || window.event;                            

        oLeft = oEvent.clientX - oTmpx;
        oTop = oEvent.clientY - oTmpy;    


        if(oLeft < oPicture.offsetLeft ) {
            oLeft = oPicture.offsetLeft ;    
        } else if(oLeft > (oPicture.offsetLeft + oPicture.offsetWidth - oTailor.offsetWidth)) {
            oLeft = oPicture.offsetLeft + oPicture.offsetWidth - oTailor.offsetWidth;
        }            
        if(oTop < oPicture.offsetTop) {
            oTop = oPicture.offsetTop;    
        } else if (oTop > (oPicture.offsetTop + oPicture.offsetHeight - oTailor.offsetHeight)) {
            oTop = oPicture.offsetTop + oPicture.offsetHeight - oTailor.offsetHeight;
        }                

        oTailor.style.left = ( oLeft)+ 'px';
        oTailor.style.top = (oTop) + 'px';        
        shadow(oPicture , oTailor , oShadow, preview);
    }
}