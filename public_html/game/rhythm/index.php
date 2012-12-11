<?
#facebookログイン
require_once(__DIR__ .'/../../../util/fb-check.php');
?>
<html lang="ja">
	<head>
		<title>りずむぬなり</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="Content-Language" content="ja" />
		<meta http-equiv="Content-Style-Type" content="text/css" />
		<meta http-equiv="Content-Script-Type" content="text/javascript" />
	</head>

	<body
	style="width:1000px; height:750px; margin:0 auto;"   
	bgcolor="#222222" text="#FFFFFF" onload="init()">

        <!-- <img src="usage.png" width="380px" height="150px"></img> -->
			<canvas id="canvas1" width="1000" height="750"
			style"width:1000px; height:750; margin: 0 auto;">
			</canvas><br>
			
		
			<script type="text/javascript" src="canvas.js">			</script>
			<script type="text/javascript" src="wap.js">			</script>
			<script type="text/javascript" src="bufferLoader.js">	</script>
			<script type="text/javascript" src="mouse.js">			</script>
			<script type="text/javascript" src="demoplay.js">		</script>

	</body>
</html>
