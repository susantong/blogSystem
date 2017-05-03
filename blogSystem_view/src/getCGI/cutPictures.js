//import '../../assets/js/jquery.Jcrop'

let cutPictures = function () {
	//监控上传控件的变化
	let widthScale, heightScale, jcrop_api;
	$('#upload').on('change', function () {
		if (document.getElementById('upload').files.length === 0) {
	   		return;
		}
		let oFile = document.getElementById('upload').files[0];
		if (!oFile) {
			return;
		}
		let fileName = oFile.name;
		let fileSize = oFile.size;
		let fileType = fileName.substring(fileName.lastIndexOf('.'), fileName.length).toLowerCase();
		if (fileType != '.jpg' && fileType != '.jpeg' && fileType != '.png' && fileType != '.gif' && fileType != '.bmp') {
			alert('请选择jpg,jpeg,png,gif,bmp格式的图片');
			return;
		}
		if (fileSize > 2*1024*1024) {
			alert('最大支持2MB图片');
			return;
		}
		//读取文件的API，fileReader
		let fileReader = new FileReader();
		fileReader.readAsDataURL(oFile);
		//读取成功显示弹窗等效果
		fileReader.onload = function (e) {
			$('.mask').show();
			$('.cover').show();
			//将弹窗中的图片路径设置为选择图片的base4
			//console.log(e.target.result);
			$('#image').attr('src', e.target.result);
			//裁剪组件初始化
			initJcrop();
		};
	});

	//初始化弹窗
	function initJcrop() {
		$('#image').Jcrop({
			onChange: updateCoords,
			onSelect: updateCoords,
			aspectRatio: 1,
			boxWidth: 300,
			boxHeight: 300
		},function () {
			//弹窗中显示的图片尺寸
			let mask = this.getBounds();
			let maskWidth = Number(mask[0])/2;
			let maskHeight = Number(mask[1])/2;

			//设置初始选中裁减范围
			this.setSelect([0, 0, maskWidth, maskHeight]);
			try{
				widthScale = $('#image')["0"].width / 250;
				heightScale = $('#image')["0"].height / 250;
			} catch(e) {}
			jcrop_api = this;
		});
	}

	//重绘
	function updateCoords(c) {
		let img = document.getElementById('image');
		let ctx = document.getElementById('myCanvas').getContext('2d');
		ctx.clearRect(0, 0, 146, 146);
		try {
			widthScale = widthScale === 1 ? $('#image')["0"].width / 250 : widthScale;
			heightScale = heightScale === 1 ? $('#image')["0"].height / 250 : heightScale; 
		} catch(e) {}
		//绘制画布
		ctx.drawImage(img, c.x, c.y, c.w * widthScale, c.h * heightScale, 0, 0, 146, 146);
	}

	//处理保存按钮
	$('#save').on('click', function () {
		let data = document.getElementById('myCanvas').toDataURL();
		$('#preview').attr('src', data);
	});
}

export default cutPictures;