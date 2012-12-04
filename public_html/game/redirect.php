<?php

require_once (__DIR__ .'/../../config/config.php');
require_once(__DIR__ .'/../../php-sdk/facebook.php');
if($_GET['redirect']){
    $redirect_url = urldecode($_GET['redirect']);
} else{
    $redirect_url = SITE_URL;
}

$config = array(
    'appId'  => APP_ID,
    'secret' => APP_SECRET
);

$facebook = new Facebook($config);
$access_token = $facebook->getAccessToken();
if ($facebook->getUser()) {
    try {
        #$me = $facebook->api('/me','GET');
        $me = $facebook->api('/me?fields=id,picture,name,gender','GET');
    } catch(FacebookApiException $e) {
        //取得に失敗したら例外をキャッチしてエラーログに出力
        error_log($e->getType());
        error_log($e->getMessage());
        header('Location: ' .SITE_URL .'/error.php');
        exit;
    }
} else{
        header('Location: ' .SITE_URL);
        exit;
}

// DB処理
try {
    $dbh = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME,DB_USER,DB_PASSWORD);
    $stmt = $dbh->prepare("select * from users where facebook_user_id=:user_id limit 1");
    $stmt->execute(array(":user_id"=>$me['id']));
    $user = $stmt->fetch();
} catch (PDOException $e) {
    echo $e->getMessage();
    header('Location: ' .SITE_URL .'/error.php');
    exit;
}


if (empty($user)) {
    try {
        $stmt = $dbh->prepare("INSERT INTO users (facebook_user_id, facebook_user_gender, facebook_name, facebook_picture, facebook_access_token, created, modified) VALUES (:user_id, :gender, :name, :picture, :access_token, now(), now());");
        $params = array(
            ":user_id"=>$me['id'],
            ":gender"=>$me['gender'],
            ":name"=>$me['name'],
            ":picture"=>$me['picture']['data']['url'],
            ":access_token"=>$access_token
        );
        $stmt->execute($params);
    } catch (PDOException $e) {
        echo $e->getMessage();
        header('Location: ' .SITE_URL .'/error.php');
        exit;
    }
}
header('Location: ' .$redirect_url);
exit;
