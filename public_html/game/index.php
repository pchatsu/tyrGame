<?
require_once (__DIR__ .'/../../util/fb-check.php');
require_once (__DIR__ .'/../../config/config.php');
?>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<div>
<?
 echo "<div>" .$user['name'] ."</div>";
echo "<img src=" .$user['picture']['data']['url'] .">";
?>
</div>
<div>
<a href="/game/logout.php">ログアウト</a>
</div>
</body>
</html>
