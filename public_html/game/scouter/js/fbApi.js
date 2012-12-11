window.fbAsyncInit = function(){
	FB.init({
                    appId: APP_ID,
		    		status: true,
                    cookie: true,
                    xfbml: true,
//	},
//	function(){
//		document.getElementById("contents").style.display = "block";
//		console.log("myInit1");
//		myInit();
	}
	);
	
	FB.Event.subscribe('auth.statusChange', function(response) {
  // do something with response
	if(response.status === "connected"){
		document.getElementById("contents").style.display = "block";
		console.log("status changed !!");
		myInit();
	}});
	
	//ユーザーの状況を調べる。
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			//ログインしている。
			console.log("connected");
			myInit();
			document.getElementById("contents").style.display = "block";
		} else if (response.status === 'not_authorized') {
			//ログインしているけれどアプリに接続していない
			console.log("not authorized");
			document.getElementById("button").style.display = "block";
		} else {
			//ログインしていない
			console.log(" not log in");
			login();
		}
	});

	function login(){       
		FB.login(function(response){
			if(response.authResponse){
				//ログインした時の処理
				console.log("logged in");
			}else{
				//ログインしなかった時の処理
				console.log("not log in...");
			}
		},{scope:'user_about_me'});//permissionの設定
	}
};

function myInit(){
	if(doneInit==false){
		doneInit=true;
	}else{
		return;
	}
	FB.api('/me?fields=picture,name,bio,likes,link', function(response){
		//alert("Welcome, " + response);
		me = response;
		gender = me.gender;
		document.getElementById("fb_link").innerHTML = me.link;
		document.getElementById("prof_photo").src = me.picture.data.url;
		document.getElementById("name").innerHTML = me.name;
		if(me.bio!=null && me.bio!="undefined" && me.bio.length>100){
			me.bio=me.bio.substr(0,99)+"...";
		}
		document.getElementById("bio").innerHTML = me.bio;
		for(var i = 0;i < 6;i++){
			getPic(me.likes.data[i].id,'like' + String(i+1));
		}
	});
	FB.api('me/friends',function(response){
		friends = response;
		if(friends.data.length >= 30){
			for(var i = 0;i < 30;i++){
				getPicName(response.data[i].id,'friend' + String(i+1));
			}
			for(var i = 0;i < 6;i++){
				getPicName(response.data[i].id,'friend' + String(i+1) + '_');
			}
		}else if(friends.data.length >= 6){
			for(var i = 0;i < friends.data.length;i++){
				getPicName(response.data[i].id,'friend' + String(i+1));
			}
			for(var i = 0;i < 6;i++){
				getPicName(response.data[i].id,'friend' + String(i+1) + '_');
			}
		}else{
			for(var i = 0;i < friends.data.length;i++){
				getPicName(response.data[i].id,'friend' + String(i+1));
				getPicName(response.data[i].id,'friend' + String(i+1) + '_');
			}
		}
		culcRia(response.data);
		document.getElementById('friends_num').innerHTML = response.data.length;

		timer = setInterval(function(){
			pre_power = power;
			if((female+male)==0){
				power=0;
			}else if(gender == 'male'){
				power = parseInt((female / (female + male)) * 10000);
			}else{
				power = parseInt((male / (female + male)) * 10000);
			}
			if((male+female+unisex)===response.data.length){
				clearInterval(timer);
				console.log(male+","+female+","+unisex);
			}
			document.getElementById('power_value').innerHTML = power;
		},100);
	});
};

function getPic(id,name){
	FB.api('/' + id + '?fields=picture,name', function(response){
		document.getElementById(name).src = response.picture.data.url;
		//document.getElementById(name + '_name').innerHTML = response.name;
		//document.getElementById("name").innerHTML = response.name;
		//document.getElementById("bio").innerHTML = response.bio;
		//console.log(response.picture.data.url);
	});
}
function getPicName(id,name){
	FB.api('/' + id + '?fields=picture,name', function(response){
		document.getElementById(name).src = response.picture.data.url;
		document.getElementById(name + '_name').innerHTML = response.name;
		//document.getElementById("name").innerHTML = response.name;
		//document.getElementById("bio").innerHTML = response.bio;
		//console.log(response.picture.data.url);
	});
}

function culcRia(friendsData){
	for(var i = 0; i < parseInt(friendsData.length);i++){//friendsData.length;
		var query = '/' + friendsData[i].id;
		FB.api(query,function(response){
			if(response.gender === "male"){
				male++;
			}else if(response.gender === "female"){
				female++;
			}else{
				unisex++;
			}
		});
	}
}

var me;
var gender = 'male';
var pictureUrl;
var friends;
var likes;
var power;
var pre_power;
var male = 0;
var female = 0;
var unisex = 0;
var finishCulcRia = false;
var doneInit = false;
