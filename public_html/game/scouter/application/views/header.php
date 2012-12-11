<link href="<?=base_url()?>css/page.css" rel="stylesheet" type="text/css">
<script src="<?=base_url()?>js/jquery-1.7.2.min.js" language="javascript"></script>
<script src="<?=base_url()?>js/fbApi.js" language="javascript"></script>

<link rel="shortcut icon" href="<?=base_url()?>img/">
</head>
<body>
<div id="fb-root"></div>
<script>
(function(){
 var e = document.createElement('script');
 e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
 e.async = true;
 document.getElementById('fb-root').appendChild(e);
 }());
</script>
<h1>
<div id="header">
</div>
</h1>


<div class="fb-login-button" id="button" redirect_uri="<?=base_url()?>" data-show-faces="true" data-width="200" style="display:none;" scope="user_likes,user_education_history,user_about_me,user_photos">Login with Facebook</div>

<div id="contents">

