<?php
require_once (__DIR__ .'/../config/config.php');
require_once(__DIR__ .'/../php-sdk/facebook.php');
if ( isset($_SERVER['HTTPS']) and $_SERVER['HTTPS'] == 'on' ) {  
    $protocol = 'https://';  
} else{  
    $protocol = 'http://';  
}
$url = $protocol.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$url = urlencode($url);

$config = array(
    'appId'  => APP_ID,
    'secret' => APP_SECRET
);

$facebook = new Facebook($config);

//ログイン済みの場合はユーザー情報を取得
if ($facebook->getUser()) {
    try {
        #$user = $facebook->api('/me','GET');
        $user = $facebook->api('/me?fields=id,picture,name,gender','GET');
    } catch(FacebookApiException $e) {
        //取得に失敗したら例外をキャッチしてエラーログに出力
        error_log($e->getType());
        error_log($e->getMessage());
    }
} else{
    $redirect_url = SITE_URL .'/login.php?redirect=' .$url;
    header('Location: '.$redirect_url);
    exit;
}
