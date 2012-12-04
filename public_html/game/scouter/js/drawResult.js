
function drawResult() {
	var canvas = document.getElementById('c1');
	canvas.width=580;
	canvas.height=760;
	if ( ! canvas || ! canvas.getContext ) { return false; }
	var ctx = canvas.getContext('2d');
	/* Imageオブジェクトを生成 */
	var img = new Image();
	img.src = "../../img/yoursheet_background.png";
	/* 画像が読み込まれるのを待ってから処理を続行 */
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
		/* フォントスタイルを定義 */
		ctx.font = "18px 'ＭＳ Ｐゴシック'";
		/* 青色でstrokText */
		/* 赤色でfillText */
		//ctx.fillStyle = "red";
		var string=document.getElementById("resultMessage").innerHTML;
		splitStr=splitBr(string);
		for(var i=0;i<splitStr.length;i++){
			ctx.fillText(splitStr[i], 100, 225+25*i,380);
		}
		stamp=new Image();
		stamp.src=document.getElementById("answerStamp").src;
		ctx.drawImage(stamp,215,570,100,100);
		/* canvasの描画結果をPNGで取り出しimg要素にセット */
		try {
			var img_png_src = canvas.toDataURL();
			document.getElementById("image_png").src = img_png_src;
		} catch(e) {
			document.getElementById("image_png").alt = "未対応";
		}
		/* canvasの描画結果をJPEGで取り出しimg要素にセット */
		/*
		   try {
		   var img_jpeg_src = canvas.toDataURL("image/jpeg");
		   document.getElementById("image_jpeg").src = img_jpeg_src;
		   } catch(e) {
		   document.getElementById("image_jpeg").alt = "未対応";
		   }
		   */
		canvas.width=0;
		canvas.height=0;
		canvas.style.visibility="hidden";


		//document.getElementById("topLink").onclick=function(){alert("b");};
	}
};


function splitBr(str){
	return str.split(/<\s*br\s*\/\s*>|<\s*\/\s*br\s*>|<\s*br\s*>/);
}
