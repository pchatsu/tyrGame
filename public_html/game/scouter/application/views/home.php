
<div id="contents_home">

<div id="title"><img src=<?=base_url("img/")?>></div>

<div id="textBox"></div>
<div id="input">
<img src=<?=base_url("img/top_email1.png")?>>
<?php
echo form_open("teaser/post");
$data=array(
	"name" => "EmailAddress",
	"id" => "input_address",
	"size" => "29",
	"value" => "Email Address",
);
echo form_input($data);
$data=array(
	"name" => "submit",
	"id" => "submit_address",
	"value" => "",
);
echo form_submit($data);
echo form_close();
?>
</div>

<div id="top_word"><img src=<?=base_url("img/top_word.png")?>></div>

</div>

