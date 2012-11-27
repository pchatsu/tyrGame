<?php
//Facebook SDK for PHP の src/ にあるファイルを
//サーバ内の適当な場所にコピーしておく
require_once (__DIR__ .'/../config/config.php');
require_once(__DIR__.'/../php-sdk/facebook.php');
if($_GET['redirect']){
    $redirect_url = $_GET['redirect'];
} else{
    $redirect_url = SITE_URL;
}

$config = array(
    'appId'  => APP_ID,
    'secret' => APP_SECRET
);

$facebook = new Facebook($config);
$params = array(
    'scope' => 'friends_likes, user_likes',
    'redirect_uri' => SITE_URL .'/redirect.php?redirect=' .$redirect_url
);
$loginUrl = $facebook->getLoginUrl($params);
echo '<a href="' . $loginUrl . '">Login with Facebook</a>';
