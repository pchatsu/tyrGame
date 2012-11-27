<?
require_once(__DIR__ .'/../php-sdk/facebook.php');
require_once(__DIR__ .'/../config/config.php');
$config = array(
    'appId'  => APP_ID,
    'secret' => APP_SECRET
);
$facebook = new Facebook($config);
$facebook->destroySession();
header('Location: ' .SITE_URL);
exit;
