window.fbAsyncInit = function(){
	FB.init({
                    appId: '320190004734207', //アプリケーション ID
                    status: true,
                    cookie: true,
                    xfbml: true,
	});
	document.getElementById("contents").style.display = "block";
	myInit();
};
function myInit(){
		gender = me.gender;
		document.getElementById("fb_link").innerHTML = me.link;
		document.getElementById("prof_photo").src = profile.picture;
		document.getElementById("name").innerHTML = profile.name;
		if(profile.bio!=null && profile.bio!="undefined" && profile.bio.length>100){
			profile.bio=profile.bio.substr(0,99)+"...";
		}
		document.getElementById("bio").innerHTML = profile.bio;
		for(var i = 0;i < 6;i++){
			getPic(profile.likes.data[i].id,'like' + String(i+1));
		}
		if(friends.data.length >= 30){
			for(var i = 0;i < 30;i++){
				getPicName(friends.data[i].id,'friend' + String(i+1));
			}
			for(var i = 0;i < 6;i++){
				getPicName(friends.data[i].id,'friend' + String(i+1) + '_');
			}
		}
		else if(friends.data.length >= 6){
			for(var i = 0;i < friends.data.length;i++){
				getPicName(friends.data[i].id,'friend' + String(i+1));
			}
			for(var i = 0;i < 6;i++){
				getPicName(friends.data[i].id,'friend' + String(i+1) + '_');
			}
		}
		else{
			for(var i = 0;i < friends.data.length;i++){
				getPicName(friends.data[i].id,'friend' + String(i+1));
				getPicName(friends.data[i].id,'friend' + String(i+1) + '_');
			}
		}
		culcRia(friends.data);
		document.getElementById('friends_num').innerHTML = friends.data.length;
		timer = setInterval(function(){
			pre_power = power;
			power = parseInt((female / (female + male)) * 10000);
			document.getElementById('power_value').innerHTML = power;
			if((male + female) === parseInt((friends.data.length)/2)){
				clearInterval(timer);
			}
		},100);
};
function getPic(id,name){
	FB.api('/' + id + '?fields=picture,name', function(response){
		document.getElementById(name).src = response.picture;
		//document.getElementById(name + '_name').innerHTML = response.name;
		//document.getElementById("name").innerHTML = response.name;
		//document.getElementById("bio").innerHTML = response.bio;
		console.log(response.picture);
	});
}
function getPicName(id,name){
	FB.api('/' + id + '?fields=picture,name', function(response){
		document.getElementById(name).src = response.picture;
		document.getElementById(name + '_name').innerHTML = response.name;
		//document.getElementById("name").innerHTML = response.name;
		//document.getElementById("bio").innerHTML = response.bio;
		console.log(response.picture);
	});
}

function culcRia(friendsData){
	for(var i = 0; i < parseInt((friendsData.length)/2);i++){//friendsData.length;
		var query = '/' + friendsData[i].id;
		FB.api(query,function(response){
			if(response.gender === gender){
				male++;
			}
			else{
				female++;
			}
		});
	}
}

var me;
var gender;
var profile;
var friends;
var likes;
var male = 0;
var female = 0;
me = {
  "id": "100002174861736", 
  "name": "Sunagawa Tatsunori", 
  "first_name": "Tatsunori", 
  "last_name": "Sunagawa", 
  "link": "http://www.facebook.com/pchatsu", 
  "username": "pchatsu", 
  "birthday": "07/06/1988", 
  "hometown": {
    "id": "142528069141190", 
    "name": "Naha-shi, Okinawa, Japan"
  }, 
  "location": {
    "id": "168617189852969", 
    "name": "Arakawa-ku, Tokyo, Japan"
  }, 
  "bio": "M１です。\n専門は機械学習です。\ntwitterは、@pchatsuです。", 
  "work": [
    {
      "employer": {
        "id": "182036945146044", 
        "name": "なし"
      }
    }
  ], 
  "sports": [
    {
      "id": "166131490111555", 
      "name": "キャニオニング", 
      "with": [
        {
          "id": "100002163037511", 
          "name": "Kazuki Haijima"
        }
      ], 
      "from": {
        "id": "100002163037511", 
        "name": "Kazuki Haijima"
      }
    }
  ], 
  "favorite_athletes": [
    {
      "id": "103194909766429", 
      "name": "Hayato Sakamoto"
    }, 
    {
      "id": "180812011964570", 
      "name": "John Stockton"
    }, 
    {
      "id": "120364574708739", 
      "name": "Michael Jordan"
    }
  ], 
  "education": [
    {
      "school": {
        "id": "115711755110865", 
        "name": "私立昭和薬科大学附属高等学校"
      }, 
      "year": {
        "id": "140617569303679", 
        "name": "2007"
      }, 
      "type": "High School"
    }, 
    {
      "school": {
        "id": "107391685976556", 
        "name": "Showayakka high school"
      }, 
      "type": "High School"
    }, 
    {
      "school": {
        "id": "112282255455122", 
        "name": "University of Tokyo"
      }, 
      "year": {
        "id": "118118634930920", 
        "name": "2012"
      }, 
      "type": "College"
    }, 
    {
      "school": {
        "id": "199293630090022", 
        "name": "東京大学 | Todai"
      }, 
      "degree": {
        "id": "151899668200763", 
        "name": "修士課程"
      }, 
      "concentration": [
        {
          "id": "150583428332054", 
          "name": "学際情報学府"
        }, 
        {
          "id": "190545487655389", 
          "name": "学際情報学専攻 先端表現情報学コース"
        }
      ], 
      "type": "Graduate School"
    }
  ], 
  "gender": "male", 
  "email": "sunagawa0706@gmail.com", 
  "timezone": 9, 
  "locale": "ja_JP", 
  "languages": [
    {
      "id": "109549852396760", 
      "name": "Japanese"
    }
  ], 
  "verified": true, 
  "updated_time": "2012-06-27T17:49:45+0000", 
  "type": "user"
};
profile = {
  "name": "Sunagawa Tatsunori", 
  "bio": "M１です。\n専門は機械学習です。\ntwitterは、@pchatsuです。", 
  "id": "100002174861736", 
  "type": "user", 
  "picture": "http://profile.ak.fbcdn.net/hprofile-ak-snc4/573453_100002174861736_112562387_q.jpg", 
  "likes": {
    "data": [
      {
        "name": "Perfume (パフューム)", 
        "category": "Musician/band", 
        "id": "369369099754870", 
        "created_time": "2012-03-24T01:12:38+0000"
      }, 
      {
        "name": "グラソー ビタミンウォーター", 
        "category": "Food/beverages", 
        "id": "357695887592515", 
        "created_time": "2012-03-14T13:35:23+0000"
      }, 
      {
        "name": "RUN TOGETHER", 
        "category": "Website", 
        "id": "325529044149939", 
        "created_time": "2012-03-11T04:30:44+0000"
      }, 
      {
        "name": "Madeon", 
        "category": "Musician/band", 
        "id": "124650574258090", 
        "created_time": "2012-02-21T12:46:39+0000"
      }, 
      {
        "name": "Justice", 
        "category": "Musician/band", 
        "id": "39082832518", 
        "created_time": "2012-01-23T19:46:22+0000"
      }, 
      {
        "name": "Passion Pit", 
        "category": "Musician/band", 
        "id": "63224190085", 
        "created_time": "2012-01-23T19:30:50+0000"
      }, 
      {
        "name": "2manydjs", 
        "category": "Musician/band", 
        "id": "52702473317", 
        "created_time": "2012-01-23T19:29:17+0000"
      }, 
      {
        "name": "2 Many Djs", 
        "category": "Musician/band", 
        "id": "112035292149143", 
        "created_time": "2012-01-23T19:28:55+0000"
      }, 
      {
        "name": "Aphex Twin", 
        "category": "Musician/band", 
        "id": "6026674951", 
        "created_time": "2012-01-23T19:28:01+0000"
      }, 
      {
        "name": "MUTEMATH", 
        "category": "Musician/band", 
        "id": "6647293011", 
        "created_time": "2012-01-23T19:25:42+0000"
      }, 
      {
        "name": "The Qemists", 
        "category": "Musician/band", 
        "id": "103147559725989", 
        "created_time": "2012-01-23T19:25:21+0000"
      }, 
      {
        "name": "80kidz", 
        "category": "Musician/band", 
        "id": "199220813441723", 
        "created_time": "2012-01-20T16:45:03+0000"
      }, 
      {
        "name": "Nike Japan (ナイキ)", 
        "category": "Retail and consumer merchandise", 
        "id": "276907439024459", 
        "created_time": "2012-01-16T04:35:49+0000"
      }, 
      {
        "name": "Twitter", 
        "category": "App page", 
        "id": "278029242253904", 
        "created_time": "2012-01-14T19:01:48+0000"
      }, 
      {
        "name": "くろまゆ誕生日おめでとう！ | お花サプライズ！", 
        "category": "Website", 
        "id": "265506790180366", 
        "created_time": "2012-01-11T06:24:21+0000"
      }, 
      {
        "name": "OKINAWA STYLE by TOWER RECORDS", 
        "category": "Retail and consumer merchandise", 
        "id": "217141521667527", 
        "created_time": "2011-11-22T07:34:46+0000"
      }, 
      {
        "name": "No Music,No Life.", 
        "category": "Musician/band", 
        "id": "150376075017715", 
        "created_time": "2011-11-22T07:34:40+0000"
      }, 
      {
        "name": "TOWER RECORDS JAPAN", 
        "category": "Retail and consumer merchandise", 
        "id": "161874350536289", 
        "created_time": "2011-11-22T07:32:57+0000"
      }, 
      {
        "name": "SWA Student Web Service Award 2011", 
        "category": "Internet/software", 
        "id": "254453454592994", 
        "created_time": "2011-11-17T16:58:41+0000"
      }, 
      {
        "name": "日テレNEWS24公式ページ", 
        "category": "Tv channel", 
        "id": "282571518441363", 
        "created_time": "2011-11-16T09:30:07+0000"
      }, 
      {
        "name": "NIKE RUN GROOVE 2011", 
        "category": "Local business", 
        "id": "284302768268830", 
        "created_time": "2011-11-14T06:22:10+0000"
      }, 
      {
        "name": "お江戸、いいね！～ I Like! EDO", 
        "category": "Community", 
        "id": "159311520796578", 
        "created_time": "2011-11-10T14:24:21+0000"
      }, 
      {
        "name": "ウェルカムページメーカー", 
        "category": "Website", 
        "id": "274513662561154", 
        "created_time": "2011-11-06T06:09:02+0000"
      }, 
      {
        "name": "ハイブリッドスクール", 
        "category": "Company", 
        "id": "279903718715962", 
        "created_time": "2011-11-04T01:44:33+0000"
      }, 
      {
        "name": "AutoKratz", 
        "category": "Musician/band", 
        "id": "108670519158062", 
        "created_time": "2011-11-03T08:26:32+0000"
      }, 
      {
        "name": "Foster The People", 
        "category": "Musician/band", 
        "id": "326149431743", 
        "created_time": "2011-11-03T08:24:47+0000"
      }, 
      {
        "name": "国会.in", 
        "category": "Computers/internet", 
        "id": "304319239595226", 
        "created_time": "2011-10-31T05:27:34+0000"
      }, 
      {
        "name": "サントリー ザ・プレミアム・モルツ", 
        "category": "Food/beverages", 
        "id": "131958416889648", 
        "created_time": "2011-10-27T14:04:04+0000"
      }, 
      {
        "name": "Motherhouse Japan マザーハウス", 
        "category": "Bags/luggage", 
        "id": "212402295458451", 
        "created_time": "2011-10-27T09:26:44+0000"
      }, 
      {
        "name": "お花サプライズ！", 
        "category": "App page", 
        "id": "176977199053816", 
        "created_time": "2011-10-23T04:56:55+0000"
      }, 
      {
        "name": "UT Startup Gym", 
        "category": "Internet/software", 
        "id": "256358524386556", 
        "created_time": "2011-10-21T09:30:09+0000"
      }, 
      {
        "name": "大木優紀（公式:テレビ朝日アナウンサー）", 
        "category": "Public figure", 
        "id": "187940001254620", 
        "created_time": "2011-10-21T06:11:27+0000"
      }, 
      {
        "name": "Uniqlo", 
        "category": "Company", 
        "id": "146309392069492", 
        "created_time": "2011-10-20T08:59:32+0000"
      }, 
      {
        "name": "「ブレーン」編集部", 
        "category": "Magazine", 
        "id": "185930808093645", 
        "created_time": "2011-10-20T05:34:39+0000"
      }, 
      {
        "name": "Michael Jordan", 
        "category": "Athlete", 
        "id": "120364574708739", 
        "created_time": "2011-10-20T05:00:53+0000"
      }, 
      {
        "name": "Hayato Sakamoto", 
        "category": "Athlete", 
        "id": "103194909766429", 
        "created_time": "2011-10-20T05:00:52+0000"
      }, 
      {
        "name": "John Stockton", 
        "category": "Athlete", 
        "id": "180812011964570", 
        "created_time": "2011-10-20T05:00:52+0000"
      }, 
      {
        "name": "宇宙兄弟", 
        "category": "Book", 
        "id": "104474662917735", 
        "created_time": "2011-10-20T04:58:23+0000"
      }, 
      {
        "name": "アフロ田中", 
        "category": "Book", 
        "id": "102302639806643", 
        "created_time": "2011-10-20T04:58:00+0000"
      }, 
      {
        "name": "永遠の０", 
        "category": "Book", 
        "id": "109017382480346", 
        "created_time": "2011-10-20T04:58:00+0000"
      }, 
      {
        "name": "Friendly Fires", 
        "category": "Musician/band", 
        "id": "101165868169", 
        "created_time": "2011-10-12T21:26:50+0000"
      }, 
      {
        "name": "Mongol800", 
        "category": "Musician/band", 
        "id": "175189905866530", 
        "created_time": "2011-10-12T09:45:36+0000"
      }, 
      {
        "name": "Kasabian", 
        "category": "Musician/band", 
        "id": "13737917044", 
        "created_time": "2011-10-12T09:30:59+0000"
      }, 
      {
        "name": "The Kooks", 
        "category": "Musician/band", 
        "id": "5932128890", 
        "created_time": "2011-10-12T09:30:27+0000"
      }, 
      {
        "name": "maximum the hormone (マキシマム ザ ホルモン)", 
        "category": "Musician/band", 
        "id": "147778051967006", 
        "created_time": "2011-10-12T09:29:35+0000"
      }, 
      {
        "name": "Special Others", 
        "category": "Musician/band", 
        "id": "190184471024697", 
        "created_time": "2011-10-12T09:28:30+0000"
      }, 
      {
        "name": "Sakanaction", 
        "category": "Musician/band", 
        "id": "162533273803023", 
        "created_time": "2011-10-12T09:27:34+0000"
      }, 
      {
        "name": "onyourmark", 
        "category": "Recreation/sports", 
        "id": "184211361634577", 
        "created_time": "2011-10-10T14:05:07+0000"
      }, 
      {
        "name": "映画「モテキ」公式フォトギャラリー", 
        "category": "Movie", 
        "id": "266767393335071", 
        "created_time": "2011-10-07T18:37:16+0000"
      }, 
      {
        "name": "turntable.fm", 
        "category": "Internet/software", 
        "id": "128433533924920", 
        "created_time": "2011-09-26T17:47:03+0000"
      }, 
      {
        "name": "Nike Running Japan", 
        "category": "Product/service", 
        "id": "125530084148237", 
        "created_time": "2011-08-30T00:31:51+0000"
      }, 
      {
        "name": "NO MUSIC, NO WHISKY.", 
        "category": "Wine/spirits", 
        "id": "214399445263736", 
        "created_time": "2011-08-25T13:37:00+0000"
      }, 
      {
        "name": "タキザワケイタ（プランナー）日記", 
        "category": "Producer", 
        "id": "226839774012016", 
        "created_time": "2011-08-12T00:52:13+0000"
      }, 
      {
        "name": "日テレ\"シューカツ\"公式ページ", 
        "category": "Media/news/publishing", 
        "id": "114283695335920", 
        "created_time": "2011-08-05T08:47:54+0000"
      }, 
      {
        "name": "iCon（日本テレビ）", 
        "category": "Tv show", 
        "id": "149353331751200", 
        "created_time": "2011-08-05T07:50:18+0000"
      }, 
      {
        "name": "じゃらんnet", 
        "category": "Travel/leisure", 
        "id": "150554231642532", 
        "created_time": "2011-08-04T05:34:54+0000"
      }, 
      {
        "name": "オーマ株式会社", 
        "category": "Local business", 
        "id": "133579793369872", 
        "created_time": "2011-08-04T04:17:04+0000"
      }, 
      {
        "name": "Arrow.com", 
        "category": "Website", 
        "id": "208451402510155", 
        "created_time": "2011-07-25T19:29:17+0000"
      }, 
      {
        "name": "伊東屋 itoya", 
        "category": "Retail and consumer merchandise", 
        "id": "193247174039995", 
        "created_time": "2011-07-19T06:50:12+0000"
      }, 
      {
        "name": "The Yellow Monkey", 
        "category": "Musician/band", 
        "id": "200119340018796", 
        "created_time": "2011-07-17T14:26:32+0000"
      }, 
      {
        "name": "greenz.jp", 
        "category": "News/media", 
        "id": "127630840622436", 
        "created_time": "2011-07-08T00:25:58+0000"
      }, 
      {
        "name": "fukulog.jp", 
        "category": "Website", 
        "id": "133436326721737", 
        "created_time": "2011-07-06T15:03:48+0000"
      }, 
      {
        "name": "私立昭和薬科大学附属高等学校", 
        "category": "School", 
        "id": "115711755110865", 
        "created_time": "2011-07-06T13:47:34+0000"
      }, 
      {
        "name": "カンバン娘＆カンバン男子", 
        "category": "Computers/internet", 
        "id": "161847617201265", 
        "created_time": "2011-07-02T16:53:45+0000"
      }, 
      {
        "name": "ｆacebookページ研究室（企業・法人-日本語）", 
        "category": "Computers/internet", 
        "id": "185420951482905", 
        "created_time": "2011-07-02T05:18:21+0000"
      }, 
      {
        "name": "東京大学　沖縄県人会", 
        "category": "School", 
        "id": "223270854369933", 
        "created_time": "2011-07-02T04:13:12+0000"
      }, 
      {
        "name": "ポカリスエット", 
        "category": "Food/beverages", 
        "id": "222906224388095", 
        "created_time": "2011-07-01T13:28:33+0000"
      }, 
      {
        "name": "Nextbook株式会社", 
        "category": "Internet/software", 
        "id": "126663137398771", 
        "created_time": "2011-06-29T11:48:32+0000"
      }, 
      {
        "name": "SugiyamaStyle", 
        "category": "Teacher", 
        "id": "125190207552428", 
        "created_time": "2011-06-29T11:24:48+0000"
      }, 
      {
        "name": "一休.comレストラン", 
        "category": "Website", 
        "id": "175058505840113", 
        "created_time": "2011-06-29T11:20:31+0000"
      }, 
      {
        "name": "株式会社リバネス", 
        "category": "Business services", 
        "id": "174145712598753", 
        "created_time": "2011-06-29T08:22:04+0000"
      }, 
      {
        "name": "ANA.Japan", 
        "category": "Transport/freight", 
        "id": "143718759008710", 
        "created_time": "2011-06-29T07:48:55+0000"
      }, 
      {
        "name": "Kayac inc.", 
        "category": "Internet/software", 
        "id": "121263934600849", 
        "created_time": "2011-06-28T05:00:08+0000"
      }, 
      {
        "name": "いとうまい子", 
        "category": "Public figure", 
        "id": "165104563519325", 
        "created_time": "2011-06-19T08:57:22+0000"
      }, 
      {
        "name": "これ買ってまじ良かったよ！", 
        "category": "Website", 
        "id": "146600035394613", 
        "created_time": "2011-06-09T03:42:10+0000"
      }, 
      {
        "name": "Zappos.com", 
        "category": "Retail and consumer merchandise", 
        "id": "7172307686", 
        "created_time": "2011-06-08T00:25:21+0000"
      }, 
      {
        "name": "無印良品", 
        "category": "Household supplies", 
        "id": "106191702776460", 
        "created_time": "2011-06-07T16:25:24+0000"
      }, 
      {
        "name": "Freshness Burger", 
        "category": "Organization", 
        "id": "211311035552961", 
        "created_time": "2011-06-05T13:29:41+0000"
      }, 
      {
        "name": "Bijostagram", 
        "category": "Website", 
        "id": "204085469617041", 
        "created_time": "2011-06-03T05:17:32+0000"
      }, 
      {
        "name": "Kana Hanazawa", 
        "category": "Actor/director", 
        "id": "138935089508788", 
        "created_time": "2011-06-03T03:57:56+0000"
      }, 
      {
        "name": "アイドル図鑑", 
        "category": "Product/service", 
        "id": "185176364839239", 
        "created_time": "2011-06-03T02:15:55+0000"
      }, 
      {
        "name": "Open Network Lab", 
        "category": "Local business", 
        "id": "132559586800757", 
        "created_time": "2011-06-01T15:15:13+0000"
      }, 
      {
        "name": "東大プログラミングサークルHackers", 
        "category": "Organization", 
        "id": "144718355593555", 
        "created_time": "2011-06-01T12:46:27+0000"
      }, 
      {
        "name": "jsdo.it share JavaScript, HTML5 and CSS", 
        "category": "Computers/internet", 
        "id": "138382942860000", 
        "created_time": "2011-06-01T09:17:53+0000"
      }, 
      {
        "name": "nanapi", 
        "category": "Computers/internet", 
        "id": "105290312856037", 
        "created_time": "2011-05-31T15:53:46+0000"
      }, 
      {
        "name": "Before Sunrise", 
        "category": "Movie", 
        "id": "107577462605173", 
        "created_time": "2011-05-31T14:51:10+0000"
      }, 
      {
        "name": "新世紀エヴァンゲリヲン", 
        "category": "Movie general", 
        "id": "357044374819", 
        "created_time": "2011-05-31T14:51:10+0000"
      }, 
      {
        "name": "アフタースクール", 
        "category": "Movie general", 
        "id": "357405131537", 
        "created_time": "2011-05-31T14:51:10+0000"
      }, 
      {
        "name": "The band apart", 
        "category": "Musician/band", 
        "id": "208977635780819", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "四畳半神話大系", 
        "category": "Book", 
        "id": "107820815911774", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "Kamogawa Horumo", 
        "category": "Book", 
        "id": "156649631060869", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "Phoenix", 
        "category": "Musician/band", 
        "id": "19227674432", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "化物語", 
        "category": "Book", 
        "id": "110307135661126", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "Klaxons", 
        "category": "Musician/band", 
        "id": "15106420351", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "The Strokes", 
        "category": "Musician/band", 
        "id": "167528651335", 
        "created_time": "2011-05-31T14:51:09+0000"
      }, 
      {
        "name": "Foals", 
        "category": "Musician/band", 
        "id": "6226458530", 
        "created_time": "2011-05-31T14:51:08+0000"
      }, 
      {
        "name": "Quruli", 
        "category": "Musician/band", 
        "id": "108278462534004", 
        "created_time": "2011-05-31T14:51:08+0000"
      }, 
      {
        "name": "The Rapture", 
        "category": "Musician/band", 
        "id": "133896639724", 
        "created_time": "2011-05-31T14:51:08+0000"
      }, 
      {
        "name": "Kayac Designer's BLOG", 
        "category": "Computers/internet", 
        "id": "159181630773402", 
        "created_time": "2011-05-31T14:03:21+0000"
      }, 
      {
        "name": "Coca-Cola", 
        "category": "Food/beverages", 
        "id": "40796308305", 
        "created_time": "2011-05-27T00:53:54+0000"
      }, 
      {
        "name": "秩父『あのはな』委員会", 
        "category": "Entertainment", 
        "id": "180757748635167", 
        "created_time": "2011-05-22T13:15:25+0000"
      }, 
      {
        "name": "ストライド ヤバーランド", 
        "category": "Food/beverages", 
        "id": "213522061999380", 
        "created_time": "2011-05-20T01:38:51+0000"
      }, 
      {
        "name": "TechCrunch Japan", 
        "category": "Computers/internet", 
        "id": "114870808553071", 
        "created_time": "2011-05-18T15:36:48+0000"
      }, 
      {
        "name": "コカ・コーラ パーク ファンページ Coca-Cola Park Fan Page", 
        "category": "Website", 
        "id": "138477036209783", 
        "created_time": "2011-05-13T17:05:24+0000"
      }, 
      {
        "name": "Glaceau vitaminwater", 
        "category": "Food/beverages", 
        "id": "146950345349835", 
        "created_time": "2011-05-13T17:03:32+0000"
      }, 
      {
        "name": "ROOT Communications", 
        "category": "Local business", 
        "id": "148596298491830", 
        "created_time": "2011-05-11T02:52:34+0000"
      }, 
      {
        "name": "サブウェイ / Subway JAPAN", 
        "category": "Food/beverages", 
        "id": "156881647683094", 
        "created_time": "2011-05-09T10:38:51+0000"
      }, 
      {
        "name": "つじ田", 
        "category": "Local business", 
        "id": "172593906110523", 
        "created_time": "2011-05-09T09:36:39+0000"
      }, 
      {
        "name": "iFLYER", 
        "category": "Media/news/publishing", 
        "id": "266568835009", 
        "created_time": "2011-05-09T04:57:20+0000"
      }, 
      {
        "name": "Ready for?", 
        "category": "Computers/internet", 
        "id": "193828030632195", 
        "created_time": "2011-05-08T09:02:34+0000"
      }, 
      {
        "name": "Web of Knowledge", 
        "category": "Product/service", 
        "id": "119687984715358", 
        "created_time": "2011-05-06T05:12:59+0000"
      }, 
      {
        "name": "キャニオニング", 
        "category": "Sport", 
        "id": "166131490111555"
      }
    ], 
    "paging": {
      "next": "https://graph.facebook.com/100002174861736/likes?metadata=1&value=1&format=json&redirect=1&access_token=AAACEdEose0cBADyLBK77dQXCIq7udBKNfrZCDDV2sZCj7RdbooZC4xHKrA1lZBBwS4IZAP0BzVmL6Bk8p2pZAmDMJchvXFEugLHyPD2SXTagqbvKU9EF7l&limit=5000&offset=5000&__after_id=166131490111555"
    }
}
};
friends = {
  "data": [
    {
      "name": "Emiri Igarashi", 
      "id": "500209315"
    }, 
    {
      "name": "Masane Moriyama", 
      "id": "501939797"
    }, 
    {
      "name": "Kenta Sano", 
      "id": "510394609"
    }, 
    {
      "name": "Jiang Nan", 
      "id": "515004527"
    }, 
    {
      "name": "Maria Fuwa", 
      "id": "563245342"
    }, 
    {
      "name": "Keiko Hiranuma Fukuchi", 
      "id": "671386140"
    }, 
    {
      "name": "Shikin Shu", 
      "id": "678333965"
    }, 
    {
      "name": "Tatsuo Q Sakamoto", 
      "id": "682786327"
    }, 
    {
      "name": "Ryo Okubo", 
      "id": "716062139"
    }, 
    {
      "name": "Kosuke Inoue", 
      "id": "720160623"
    }, 
    {
      "name": "Ayumu Ken Kikkawa", 
      "id": "731465390"
    }, 
    {
      "name": "Yuta Hino", 
      "id": "804090483"
    }, 
    {
      "name": "Dina Barilova", 
      "id": "833617696"
    }, 
    {
      "name": "松尾和佳", 
      "id": "1023641909"
    }, 
    {
      "name": "Takanori Kusaka", 
      "id": "1044426920"
    }, 
    {
      "name": "Hitoshi Amano", 
      "id": "1055572299"
    }, 
    {
      "name": "なおき あわず", 
      "id": "1130711227"
    }, 
    {
      "name": "Sato Saito", 
      "id": "1235768774"
    }, 
    {
      "name": "Takahiro Anno", 
      "id": "1260031777"
    }, 
    {
      "name": "Ayumu Takezaki", 
      "id": "1293379002"
    }, 
    {
      "name": "Katsuhiro Kimura", 
      "id": "1322469916"
    }, 
    {
      "name": "Ayano Araki", 
      "id": "1326362164"
    }, 
    {
      "name": "Yusuke Matsuda", 
      "id": "1340392625"
    }, 
    {
      "name": "Yutaka Matsuo", 
      "id": "1345161734"
    }, 
    {
      "name": "Akitoshi Kobayashi", 
      "id": "1377892801"
    }, 
    {
      "name": "Tomoko Tomioka", 
      "id": "1384998218"
    }, 
    {
      "name": "Tasuku Miyagi", 
      "id": "1402893796"
    }, 
    {
      "name": "Shirin Makihara", 
      "id": "1406020813"
    }, 
    {
      "name": "Yamashita Shusuke", 
      "id": "1416654990"
    }, 
    {
      "name": "Amarsanaa Agchbayar", 
      "id": "1420427663"
    }, 
    {
      "name": "Shingo Kawashima", 
      "id": "1426785256"
    }, 
    {
      "name": "Len Ishikawa", 
      "id": "1455698530"
    }, 
    {
      "name": "Kiyoyasu Ando", 
      "id": "1475344970"
    }, 
    {
      "name": "Satoru Osawa", 
      "id": "1484495563"
    }, 
    {
      "name": "Shino Iwami", 
      "id": "1501181035"
    }, 
    {
      "name": "Miku Tomoyose", 
      "id": "1502461697"
    }, 
    {
      "name": "Yoko Okada", 
      "id": "1513924529"
    }, 
    {
      "name": "Kazuha Aoki", 
      "id": "1517597738"
    }, 
    {
      "name": "Haru Nakamura", 
      "id": "1531406327"
    }, 
    {
      "name": "Yohei Nakada", 
      "id": "1566884780"
    }, 
    {
      "name": "Sawa Tahara", 
      "id": "1573221979"
    }, 
    {
      "name": "Takeshi Inden", 
      "id": "1661141791"
    }, 
    {
      "name": "Shumpei Kitamura", 
      "id": "1828403615"
    }, 
    {
      "name": "Keisuke Ito", 
      "id": "1836053975"
    }, 
    {
      "name": "Haruka Mera", 
      "id": "100000004968477"
    }, 
    {
      "name": "Kohei Yamashiro", 
      "id": "100000029404314"
    }, 
    {
      "name": "Natsuki Abe", 
      "id": "100000043696915"
    }, 
    {
      "name": "Toshiya Yoshimatsu", 
      "id": "100000069273716"
    }, 
    {
      "name": "Tomoyuki Morimae", 
      "id": "100000091186348"
    }, 
    {
      "name": "Kazuhito Ono", 
      "id": "100000121481942"
    }, 
    {
      "name": "田場絵理奈", 
      "id": "100000131151129"
    }, 
    {
      "name": "Moritake Ota", 
      "id": "100000135500678"
    }, 
    {
      "name": "Yu Fujinami", 
      "id": "100000150475712"
    }, 
    {
      "name": "Kenta Fujinawa", 
      "id": "100000153310186"
    }, 
    {
      "name": "崎濱紗奈", 
      "id": "100000153871192"
    }, 
    {
      "name": "Satoshi Uchida", 
      "id": "100000158996135"
    }, 
    {
      "name": "Kensuke Muraki", 
      "id": "100000169092645"
    }, 
    {
      "name": "Mari Kanda", 
      "id": "100000193624635"
    }, 
    {
      "name": "Yurika Goto", 
      "id": "100000194163142"
    }, 
    {
      "name": "Gen Wakabayashi", 
      "id": "100000203132781"
    }, 
    {
      "name": "Yukari Ueno", 
      "id": "100000243399661"
    }, 
    {
      "name": "Miki Kinjo", 
      "id": "100000259571294"
    }, 
    {
      "name": "世古和希", 
      "id": "100000276023116"
    }, 
    {
      "name": "Ai Ono", 
      "id": "100000289056892"
    }, 
    {
      "name": "Shindo Yoshihisa", 
      "id": "100000292558167"
    }, 
    {
      "name": "Yoshiaki Oida", 
      "id": "100000309452666"
    }, 
    {
      "name": "Ayane Iha", 
      "id": "100000327274822"
    }, 
    {
      "name": "Asami Kudo", 
      "id": "100000411760420"
    }, 
    {
      "name": "Yukimi Yamamoto", 
      "id": "100000461643279"
    }, 
    {
      "name": "Masahiro Saito", 
      "id": "100000527320484"
    }, 
    {
      "name": "Kenji Sekine", 
      "id": "100000584056601"
    }, 
    {
      "name": "Akari Ogawa", 
      "id": "100000585154037"
    }, 
    {
      "name": "Shoko Ogata", 
      "id": "100000608328743"
    }, 
    {
      "name": "Shuhei Iitsuka", 
      "id": "100000617688375"
    }, 
    {
      "name": "Masatomi Nobuyuki", 
      "id": "100000673036671"
    }, 
    {
      "name": "Yuki Hamanaka", 
      "id": "100000721140099"
    }, 
    {
      "name": "Saki Nakayama", 
      "id": "100000739891767"
    }, 
    {
      "name": "Eri Kono", 
      "id": "100000747757719"
    }, 
    {
      "name": "Yasutomo Nomura", 
      "id": "100000747800898"
    }, 
    {
      "name": "Haruou Kawano", 
      "id": "100000766611722"
    }, 
    {
      "name": "Nahoko Koma", 
      "id": "100000823649221"
    }, 
    {
      "name": "Yukari Suzukawa", 
      "id": "100000845352725"
    }, 
    {
      "name": "Eri Takara", 
      "id": "100000873847337"
    }, 
    {
      "name": "Hayato Kumagai", 
      "id": "100000906751160"
    }, 
    {
      "name": "Masato Yoshida", 
      "id": "100000915913280"
    }, 
    {
      "name": "Takumi Hiranaka", 
      "id": "100000919687593"
    }, 
    {
      "name": "Ayaka Oshiro", 
      "id": "100000928500017"
    }, 
    {
      "name": "Teruya Takahiro", 
      "id": "100000946595890"
    }, 
    {
      "name": "Suzuki Reina", 
      "id": "100000966756876"
    }, 
    {
      "name": "Tsuto Yui", 
      "id": "100001012993066"
    }, 
    {
      "name": "Rika Miyagi", 
      "id": "100001029432098"
    }, 
    {
      "name": "Kentaro Ueda", 
      "id": "100001050493066"
    }, 
    {
      "name": "Kano Mai", 
      "id": "100001053679634"
    }, 
    {
      "name": "Yuki Ito", 
      "id": "100001065191453"
    }, 
    {
      "name": "Toshihiko Fukushima", 
      "id": "100001070296368"
    }, 
    {
      "name": "Atsuo Shiraki", 
      "id": "100001073880767"
    }, 
    {
      "name": "Yasuhiro Yonemura", 
      "id": "100001116905805"
    }, 
    {
      "name": "Masahiro Kimura", 
      "id": "100001121751821"
    }, 
    {
      "name": "Junya Namba", 
      "id": "100001143124281"
    }, 
    {
      "name": "Katsunari Takeda", 
      "id": "100001158291279"
    }, 
    {
      "name": "Yui Tsuha", 
      "id": "100001162953707"
    }, 
    {
      "name": "Takeki Mori", 
      "id": "100001164921509"
    }, 
    {
      "name": "Kentaro Takahashi", 
      "id": "100001175865739"
    }, 
    {
      "name": "Asaya Uezu", 
      "id": "100001185935915"
    }, 
    {
      "name": "Ryuchin Nagae", 
      "id": "100001191273625"
    }, 
    {
      "name": "Mayu Kuroki", 
      "id": "100001195244422"
    }, 
    {
      "name": "Mariko Yamashiro", 
      "id": "100001202610353"
    }, 
    {
      "name": "Ai Noborikawa", 
      "id": "100001216987974"
    }, 
    {
      "name": "SangJic Lee", 
      "id": "100001223443767"
    }, 
    {
      "name": "Ai Oyamada", 
      "id": "100001227885180"
    }, 
    {
      "name": "Hikaru  Kuniyoshi", 
      "id": "100001233173458"
    }, 
    {
      "name": "Ryoma Ohashi", 
      "id": "100001238350793"
    }, 
    {
      "name": "Keisei Matumoto", 
      "id": "100001238853704"
    }, 
    {
      "name": "Akito Gyoten", 
      "id": "100001252776955"
    }, 
    {
      "name": "Kunihiro Miyazaki", 
      "id": "100001258431354"
    }, 
    {
      "name": "Masashi Takaichi", 
      "id": "100001263776930"
    }, 
    {
      "name": "Shun-ichi Kimura", 
      "id": "100001274611391"
    }, 
    {
      "name": "Masao Sone", 
      "id": "100001300210765"
    }, 
    {
      "name": "Satoshi Fukuhara", 
      "id": "100001312415761"
    }, 
    {
      "name": "Sho Otsu", 
      "id": "100001357764745"
    }, 
    {
      "name": "Saki Narimatsu", 
      "id": "100001366685870"
    }, 
    {
      "name": "Kengo Hidaka", 
      "id": "100001390651278"
    }, 
    {
      "name": "Yusuke Sakai", 
      "id": "100001393809278"
    }, 
    {
      "name": "Kana Hirasawa", 
      "id": "100001405608010"
    }, 
    {
      "name": "Katahira Hotaka", 
      "id": "100001420733570"
    }, 
    {
      "name": "Shun Takeshita", 
      "id": "100001427942283"
    }, 
    {
      "name": "Saki Iizumi", 
      "id": "100001431934260"
    }, 
    {
      "name": "Yumi Fushimi", 
      "id": "100001432887544"
    }, 
    {
      "name": "Yasunori Tabei", 
      "id": "100001437591226"
    }, 
    {
      "name": "Koichiro Den", 
      "id": "100001443427580"
    }, 
    {
      "name": "Sakurako Haruta", 
      "id": "100001444547919"
    }, 
    {
      "name": "Mutsumi Shimaoka", 
      "id": "100001449289232"
    }, 
    {
      "name": "Rika Tajima", 
      "id": "100001461329133"
    }, 
    {
      "name": "Misaki Kajiura", 
      "id": "100001469911594"
    }, 
    {
      "name": "Shunsuke Kado", 
      "id": "100001470233364"
    }, 
    {
      "name": "Shotaro Asai", 
      "id": "100001483163929"
    }, 
    {
      "name": "Haruka Nakata", 
      "id": "100001507599975"
    }, 
    {
      "name": "Hiroto Furugen", 
      "id": "100001528174609"
    }, 
    {
      "name": "中村史希", 
      "id": "100001530550515"
    }, 
    {
      "name": "Motohiro Ando", 
      "id": "100001534351530"
    }, 
    {
      "name": "Naoki Nohara", 
      "id": "100001548617597"
    }, 
    {
      "name": "Wataru Kobayashi", 
      "id": "100001549470329"
    }, 
    {
      "name": "Genki Taguchi", 
      "id": "100001558471209"
    }, 
    {
      "name": "Makoto Yoshida", 
      "id": "100001568530861"
    }, 
    {
      "name": "Keiko Fujii", 
      "id": "100001569111333"
    }, 
    {
      "name": "Keisuke Okuda", 
      "id": "100001581974116"
    }, 
    {
      "name": "Jun Hirota", 
      "id": "100001599303890"
    }, 
    {
      "name": "Yuki Nabeta", 
      "id": "100001605592553"
    }, 
    {
      "name": "Ryo Ueno", 
      "id": "100001606493435"
    }, 
    {
      "name": "Shinya Miura", 
      "id": "100001610934888"
    }, 
    {
      "name": "Yoshinori Kitagawa", 
      "id": "100001611700285"
    }, 
    {
      "name": "Makoto Tanikura", 
      "id": "100001617641039"
    }, 
    {
      "name": "Chisa Kato", 
      "id": "100001628630802"
    }, 
    {
      "name": "Sho Hosokawa", 
      "id": "100001629960360"
    }, 
    {
      "name": "Kazuya Yafuso", 
      "id": "100001634774909"
    }, 
    {
      "name": "Haruka Takenaka", 
      "id": "100001636925175"
    }, 
    {
      "name": "Wakako Teruya", 
      "id": "100001637347290"
    }, 
    {
      "name": "Shoshin Akamine", 
      "id": "100001659131866"
    }, 
    {
      "name": "Takumi Yura", 
      "id": "100001662426869"
    }, 
    {
      "name": "Junro Suzuki", 
      "id": "100001677769761"
    }, 
    {
      "name": "Kodai Hayashi", 
      "id": "100001693120768"
    }, 
    {
      "name": "Mitsunori Nanno", 
      "id": "100001694660083"
    }, 
    {
      "name": "Koji Yamanaka", 
      "id": "100001725966720"
    }, 
    {
      "name": "Satomi Suga", 
      "id": "100001743144103"
    }, 
    {
      "name": "Naofumi Yamada", 
      "id": "100001757537950"
    }, 
    {
      "name": "Hiroko Nagata", 
      "id": "100001772636162"
    }, 
    {
      "name": "Mitoshi Inoue", 
      "id": "100001789127281"
    }, 
    {
      "name": "Kenta Sato", 
      "id": "100001789914771"
    }, 
    {
      "name": "Haruki Hirayama", 
      "id": "100001790559827"
    }, 
    {
      "name": "Shunsuke Mito", 
      "id": "100001798543100"
    }, 
    {
      "name": "Kuniyo Hiroyu", 
      "id": "100001813141477"
    }, 
    {
      "name": "Hidenori Chida", 
      "id": "100001820206305"
    }, 
    {
      "name": "Tomonari Miyasaka", 
      "id": "100001853462494"
    }, 
    {
      "name": "Yu Fukuda", 
      "id": "100001860371279"
    }, 
    {
      "name": "Tetsuo Matsuzaki", 
      "id": "100001878381853"
    }, 
    {
      "name": "Ufo Yamazaki", 
      "id": "100001890854861"
    }, 
    {
      "name": "Miku Takahashi", 
      "id": "100001906167775"
    }, 
    {
      "name": "Miki Hokama", 
      "id": "100001907725384"
    }, 
    {
      "name": "Keigo Makino", 
      "id": "100001923521842"
    }, 
    {
      "name": "Hasegawa Takashi", 
      "id": "100001925096370"
    }, 
    {
      "name": "Masanari Ishibashi", 
      "id": "100001933515748"
    }, 
    {
      "name": "Rinko Yoshimine", 
      "id": "100001936819815"
    }, 
    {
      "name": "Mao Ueda", 
      "id": "100001954478414"
    }, 
    {
      "name": "Takaho Kumagai", 
      "id": "100001955286967"
    }, 
    {
      "name": "Risa Imoto", 
      "id": "100001964217759"
    }, 
    {
      "name": "有紀大里", 
      "id": "100001967139761"
    }, 
    {
      "name": "Nozomi Mitsui", 
      "id": "100001971121612"
    }, 
    {
      "name": "Mana Koike", 
      "id": "100001980045682"
    }, 
    {
      "name": "Narita Atsuhiro", 
      "id": "100001987635603"
    }, 
    {
      "name": "Ayaka Hirano", 
      "id": "100001989649305"
    }, 
    {
      "name": "Yuki Kakichi", 
      "id": "100001991465120"
    }, 
    {
      "name": "Ryohei Igarashi", 
      "id": "100001996718979"
    }, 
    {
      "name": "Tateshi Yaeo", 
      "id": "100001997424510"
    }, 
    {
      "name": "Ippei Suzuki", 
      "id": "100001998942714"
    }, 
    {
      "name": "Tetsuya Nakanishi", 
      "id": "100001999241990"
    }, 
    {
      "name": "Yuasa Sato", 
      "id": "100002000601723"
    }, 
    {
      "name": "Yohei Shono", 
      "id": "100002002241149"
    }, 
    {
      "name": "Kenyu Arime", 
      "id": "100002002401777"
    }, 
    {
      "name": "Kuniyo Sueyoshi", 
      "id": "100002008683016"
    }, 
    {
      "name": "Yuki Miyauchi", 
      "id": "100002010428953"
    }, 
    {
      "name": "Yuichi Tokunaga", 
      "id": "100002020057377"
    }, 
    {
      "name": "Kyoichiro Tamaki", 
      "id": "100002026214758"
    }, 
    {
      "name": "Daisuke Matsumoto", 
      "id": "100002033894246"
    }, 
    {
      "name": "Marie Ota", 
      "id": "100002034947653"
    }, 
    {
      "name": "Daichi Taniguchi", 
      "id": "100002035865247"
    }, 
    {
      "name": "Fumiya Shinozuka", 
      "id": "100002039121687"
    }, 
    {
      "name": "Ito Kaoru", 
      "id": "100002040909136"
    }, 
    {
      "name": "Kei Asato", 
      "id": "100002044478134"
    }, 
    {
      "name": "Naofumi Wakabayashi", 
      "id": "100002045132859"
    }, 
    {
      "name": "Daiki  Yamaguchi", 
      "id": "100002046452396"
    }, 
    {
      "name": "Tomoko Niida", 
      "id": "100002048128572"
    }, 
    {
      "name": "Junki Arai", 
      "id": "100002054626708"
    }, 
    {
      "name": "Mana Chinen", 
      "id": "100002056187944"
    }, 
    {
      "name": "Yuki Sakaguchi", 
      "id": "100002071398434"
    }, 
    {
      "name": "Takashi Ikegami", 
      "id": "100002079627480"
    }, 
    {
      "name": "Hironori Sakano", 
      "id": "100002083777077"
    }, 
    {
      "name": "Akina Toda", 
      "id": "100002086778734"
    }, 
    {
      "name": "Chisa Yoshida", 
      "id": "100002086789883"
    }, 
    {
      "name": "島村豪", 
      "id": "100002095008004"
    }, 
    {
      "name": "Tsuyohito Muromoto", 
      "id": "100002100150030"
    }, 
    {
      "name": "Kaoru Nasuno", 
      "id": "100002104448630"
    }, 
    {
      "name": "Kenji Tsuchiya", 
      "id": "100002111380696"
    }, 
    {
      "name": "Ueyama Kazuhisa", 
      "id": "100002112295764"
    }, 
    {
      "name": "Seiya Kudeken", 
      "id": "100002116134390"
    }, 
    {
      "name": "Akiko Nagaoka", 
      "id": "100002119728466"
    }, 
    {
      "name": "Yoshimi Hidai", 
      "id": "100002125185298"
    }, 
    {
      "name": "Kento Tsukada", 
      "id": "100002127033802"
    }, 
    {
      "name": "Ayano Une", 
      "id": "100002129885651"
    }, 
    {
      "name": "Aki Ishioka", 
      "id": "100002136928806"
    }, 
    {
      "name": "Yuuka Kitamura", 
      "id": "100002138183805"
    }, 
    {
      "name": "Takahiro Ohmori", 
      "id": "100002154842395"
    }, 
    {
      "name": "Kazuki Haijima", 
      "id": "100002163037511"
    }, 
    {
      "name": "Takiguchi Mami", 
      "id": "100002165682895"
    }, 
    {
      "name": "Kento Hada", 
      "id": "100002169221765"
    }, 
    {
      "name": "濱畑有衣子", 
      "id": "100002173909306"
    }, 
    {
      "name": "Sakura Higa", 
      "id": "100002175738157"
    }, 
    {
      "name": "Kazuhito Fukuchi", 
      "id": "100002185581114"
    }, 
    {
      "name": "Yume Ou", 
      "id": "100002191113611"
    }, 
    {
      "name": "Haruka Fujii", 
      "id": "100002192584319"
    }, 
    {
      "name": "Yoshihiro Shingaki", 
      "id": "100002199900566"
    }, 
    {
      "name": "Kobayashi Naoki", 
      "id": "100002206935964"
    }, 
    {
      "name": "Emi Sakurai", 
      "id": "100002213154802"
    }, 
    {
      "name": "Yosuke Arai", 
      "id": "100002216758428"
    }, 
    {
      "name": "Junya Ogasawara", 
      "id": "100002218246935"
    }, 
    {
      "name": "Masahiro Takamura", 
      "id": "100002235003760"
    }, 
    {
      "name": "Fumiya Iwata", 
      "id": "100002246439210"
    }, 
    {
      "name": "Tomoko Yonamine", 
      "id": "100002247948412"
    }, 
    {
      "name": "Yuji Shinohara", 
      "id": "100002252452830"
    }, 
    {
      "name": "Keishi Sakata", 
      "id": "100002263048284"
    }, 
    {
      "name": "Tomoe Nakayama", 
      "id": "100002263484883"
    }, 
    {
      "name": "Tomoaki Fujita", 
      "id": "100002264269284"
    }, 
    {
      "name": "Momoko Yamashiro", 
      "id": "100002271503003"
    }, 
    {
      "name": "Erika Ikehara", 
      "id": "100002286972332"
    }, 
    {
      "name": "Kaito  Kinjo", 
      "id": "100002324332759"
    }, 
    {
      "name": "Genta Koja", 
      "id": "100002324754990"
    }, 
    {
      "name": "Eri Izumi", 
      "id": "100002332832700"
    }, 
    {
      "name": "Maiko Ikeda", 
      "id": "100002362325404"
    }, 
    {
      "name": "Taisuke Ojima", 
      "id": "100002379268000"
    }, 
    {
      "name": "Issey Ishikura", 
      "id": "100002386716105"
    }, 
    {
      "name": "Kota Matayoshi", 
      "id": "100002392226716"
    }, 
    {
      "name": "Tacoco Wada", 
      "id": "100002392361658"
    }, 
    {
      "name": "Yuta  Sasaki", 
      "id": "100002402699024"
    }, 
    {
      "name": "Tsutomu  Matsuzaki", 
      "id": "100002410590192"
    }, 
    {
      "name": "Takashi Kagose", 
      "id": "100002416024050"
    }, 
    {
      "name": "Hisano Kato", 
      "id": "100002434668241"
    }, 
    {
      "name": "Tatsuya Kurokawa", 
      "id": "100002444524975"
    }, 
    {
      "name": "Kawazoe Kohei", 
      "id": "100002447307741"
    }, 
    {
      "name": "Ayaka  Sakuma", 
      "id": "100002455314281"
    }, 
    {
      "name": "Takeshi Tsuda", 
      "id": "100002459161075"
    }, 
    {
      "name": "Taiga  Mitsuyuki", 
      "id": "100002461296005"
    }, 
    {
      "name": "Yuta  Ishii", 
      "id": "100002466576679"
    }, 
    {
      "name": "Hanae Tomimura", 
      "id": "100002466608270"
    }, 
    {
      "name": "Yumi Sakima", 
      "id": "100002476140349"
    }, 
    {
      "name": "Miki Sunada", 
      "id": "100002487692217"
    }, 
    {
      "name": "Takahiro Ando", 
      "id": "100002505103547"
    }, 
    {
      "name": "Ryo  Tamaki", 
      "id": "100002514533981"
    }, 
    {
      "name": "Haeyoung Kim", 
      "id": "100002524045275"
    }, 
    {
      "name": "湖城 れみ", 
      "id": "100002532544632"
    }, 
    {
      "name": "Youjiro  Kobayasi", 
      "id": "100002537085020"
    }, 
    {
      "name": "Hiroyuki  Ono", 
      "id": "100002543672135"
    }, 
    {
      "name": "Taichi Sakuda", 
      "id": "100002543828145"
    }, 
    {
      "name": "Shizuka  Miyazato", 
      "id": "100002544334626"
    }, 
    {
      "name": "Mai Iwasaki", 
      "id": "100002546299222"
    }, 
    {
      "name": "Mai Itohara", 
      "id": "100002550230713"
    }, 
    {
      "name": "多和田珠里", 
      "id": "100002551285623"
    }, 
    {
      "name": "Hayato Shinzato", 
      "id": "100002557167921"
    }, 
    {
      "name": "Akihiro Konishi", 
      "id": "100002557568460"
    }, 
    {
      "name": "Aiko Ogawa", 
      "id": "100002567807284"
    }, 
    {
      "name": "知花喜与丸", 
      "id": "100002569552933"
    }, 
    {
      "name": "Kaori Nobuto", 
      "id": "100002570552446"
    }, 
    {
      "name": "Akihiko  Fukushima", 
      "id": "100002571038430"
    }, 
    {
      "name": "Ryuichi  Matsumoto", 
      "id": "100002572753128"
    }, 
    {
      "name": "Kohei  Aso", 
      "id": "100002573816048"
    }, 
    {
      "name": "Kei Sato", 
      "id": "100002574342070"
    }, 
    {
      "name": "Sayaka Nomura", 
      "id": "100002575767595"
    }, 
    {
      "name": "Tomihiro  Doi", 
      "id": "100002580518746"
    }, 
    {
      "name": "Wakana Zaima", 
      "id": "100002586574332"
    }, 
    {
      "name": "Yayaka  Kikuchi", 
      "id": "100002589074468"
    }, 
    {
      "name": "Haruka  Kawagoe", 
      "id": "100002594351926"
    }, 
    {
      "name": "Shori Moriyama", 
      "id": "100002596184885"
    }, 
    {
      "name": "Toshihiro Furukawa", 
      "id": "100002597777227"
    }, 
    {
      "name": "Yurina  Otsuka", 
      "id": "100002599668530"
    }, 
    {
      "name": "Airi  Maezato", 
      "id": "100002601403890"
    }, 
    {
      "name": "Yui Kinjo", 
      "id": "100002605877763"
    }, 
    {
      "name": "Shu Sasaki", 
      "id": "100002607564041"
    }, 
    {
      "name": "草野麗", 
      "id": "100002627593617"
    }, 
    {
      "name": "Sakima Yumi", 
      "id": "100002670163618"
    }, 
    {
      "name": "Kentaro  Kaji", 
      "id": "100002676124552"
    }, 
    {
      "name": "和博増子", 
      "id": "100002679084167"
    }, 
    {
      "name": "Hiromi  Saotome", 
      "id": "100002679261851"
    }, 
    {
      "name": "Tomoya Narita", 
      "id": "100002679717878"
    }, 
    {
      "name": "Mori Masaji", 
      "id": "100002680516276"
    }, 
    {
      "name": "Yukiko Sunagawa", 
      "id": "100002692976587"
    }, 
    {
      "name": "Hideko  Hidenaga", 
      "id": "100002695051476"
    }, 
    {
      "name": "Kenta  Okano", 
      "id": "100002706462518"
    }, 
    {
      "name": "Fumihiro  Nakayama", 
      "id": "100002708553342"
    }, 
    {
      "name": "Hiroko  Niwa", 
      "id": "100002716920865"
    }, 
    {
      "name": "Aya Hirai", 
      "id": "100002722497888"
    }, 
    {
      "name": "Emi  Yamazaki", 
      "id": "100002723412009"
    }, 
    {
      "name": "佳上江田", 
      "id": "100002725028942"
    }, 
    {
      "name": "Toru  Takahashi", 
      "id": "100002750230716"
    }, 
    {
      "name": "Momoko Michioka", 
      "id": "100002751256697"
    }, 
    {
      "name": "Kumiko  Tomimatsu", 
      "id": "100002760048613"
    }, 
    {
      "name": "Naoki  Matsumura", 
      "id": "100002787595459"
    }, 
    {
      "name": "Yu Kawano", 
      "id": "100002803620640"
    }, 
    {
      "name": "Mebae Yamakawa", 
      "id": "100002828666436"
    }, 
    {
      "name": "中澤裕二", 
      "id": "100002837675222"
    }, 
    {
      "name": "飯国葵", 
      "id": "100002859644266"
    }, 
    {
      "name": "Eichi  Sakihara", 
      "id": "100002863079034"
    }, 
    {
      "name": "田井弘平", 
      "id": "100002865565425"
    }, 
    {
      "name": "Takuya Uehara", 
      "id": "100002873595241"
    }, 
    {
      "name": "加藤利奈", 
      "id": "100002878123845"
    }, 
    {
      "name": "Airi Tsuji", 
      "id": "100002883625474"
    }, 
    {
      "name": "Taiga Fuchigami", 
      "id": "100002888477499"
    }, 
    {
      "name": "Kako Nose", 
      "id": "100002888488511"
    }, 
    {
      "name": "Yoko Adachi", 
      "id": "100002903329014"
    }, 
    {
      "name": "Kosho  Mukozono", 
      "id": "100002933020464"
    }, 
    {
      "name": "Yuu Yonashiro", 
      "id": "100002944598158"
    }, 
    {
      "name": "Risa  Fukuda", 
      "id": "100002945625284"
    }, 
    {
      "name": "Akiyuki  Kojima", 
      "id": "100002947942308"
    }, 
    {
      "name": "Shunsuke Kyuwa", 
      "id": "100002948968454"
    }, 
    {
      "name": "Yuki  Kurohara", 
      "id": "100002950763701"
    }, 
    {
      "name": "Haruka Uechi", 
      "id": "100002951319232"
    }, 
    {
      "name": "屋比久豪", 
      "id": "100002952272324"
    }, 
    {
      "name": "Mio Takahama", 
      "id": "100002956362683"
    }, 
    {
      "name": "Hiro Momohara", 
      "id": "100002961372455"
    }, 
    {
      "name": "Rino  Arakawa", 
      "id": "100002962127289"
    }, 
    {
      "name": "Ryosuke  Takazawa", 
      "id": "100002966357889"
    }, 
    {
      "name": "Sohei Oshiro", 
      "id": "100002991192857"
    }, 
    {
      "name": "原田理紗", 
      "id": "100003003920500"
    }, 
    {
      "name": "Tomomi Okushi", 
      "id": "100003015403481"
    }, 
    {
      "name": "Hiromu Yamada", 
      "id": "100003022450876"
    }, 
    {
      "name": "Koto Nouno", 
      "id": "100003023283505"
    }, 
    {
      "name": "福田優美子", 
      "id": "100003024472112"
    }, 
    {
      "name": "大城正史", 
      "id": "100003031077731"
    }, 
    {
      "name": "Mikana Isa", 
      "id": "100003031557121"
    }, 
    {
      "name": "Yui Nishime", 
      "id": "100003032217197"
    }, 
    {
      "name": "勢理客晶子", 
      "id": "100003035996758"
    }, 
    {
      "name": "Hitomi Kuda", 
      "id": "100003041757229"
    }, 
    {
      "name": "Sayuri Nakayoshi", 
      "id": "100003042416689"
    }, 
    {
      "name": "Haruka Kinjo", 
      "id": "100003044787295"
    }, 
    {
      "name": "Yuki  Shimizu", 
      "id": "100003051996773"
    }, 
    {
      "name": "Takuya Fukuda", 
      "id": "100003083427869"
    }, 
    {
      "name": "Daisuke  Arai", 
      "id": "100003110148518"
    }, 
    {
      "name": "Shota Taharabaru", 
      "id": "100003115745846"
    }, 
    {
      "name": "三谷 麻友", 
      "id": "100003117891941"
    }, 
    {
      "name": "Rie Asakura", 
      "id": "100003126573828"
    }, 
    {
      "name": "Kensuke  Masumura", 
      "id": "100003140291829"
    }, 
    {
      "name": "Tomoko  Uehara", 
      "id": "100003155245569"
    }, 
    {
      "name": "Ikemura  Shingo", 
      "id": "100003163146359"
    }, 
    {
      "name": "Hiroto  Miyagi", 
      "id": "100003174970993"
    }, 
    {
      "name": "Shin  Toubaru", 
      "id": "100003180790195"
    }, 
    {
      "name": "Oguri Yoshiharu", 
      "id": "100003185447151"
    }, 
    {
      "name": "Taichirou  Tokumori", 
      "id": "100003188574744"
    }, 
    {
      "name": "Yu Shimabukuro", 
      "id": "100003195680919"
    }, 
    {
      "name": "Natsumi Kawasaki", 
      "id": "100003229683802"
    }, 
    {
      "name": "Shogo Tamaki", 
      "id": "100003239354145"
    }, 
    {
      "name": "Kobayashi Shinya", 
      "id": "100003254764456"
    }, 
    {
      "name": "Naoyuki  Gunji", 
      "id": "100003270244526"
    }, 
    {
      "name": "NaoTo  Mitsume", 
      "id": "100003274499021"
    }, 
    {
      "name": "瑞慶覧長斉", 
      "id": "100003289374295"
    }, 
    {
      "name": "Daisuke  Okamoto", 
      "id": "100003304967219"
    }, 
    {
      "name": "Makiko  Maehra", 
      "id": "100003309765266"
    }, 
    {
      "name": "Masahiro Okawa", 
      "id": "100003319816486"
    }, 
    {
      "name": "宝美緒", 
      "id": "100003333672108"
    }, 
    {
      "name": "Nozomi Sakamoto", 
      "id": "100003334585803"
    }, 
    {
      "name": "Kuniaki  Yui", 
      "id": "100003344638977"
    }, 
    {
      "name": "Manami  Saito", 
      "id": "100003376430456"
    }, 
    {
      "name": "Shin Matsubara", 
      "id": "100003377613953"
    }, 
    {
      "name": "Ryoma Oka", 
      "id": "100003387817436"
    }, 
    {
      "name": "Ayako Izena", 
      "id": "100003391764725"
    }, 
    {
      "name": "Tomihiro Higa", 
      "id": "100003400307141"
    }, 
    {
      "name": "Hidetoshi  Sai", 
      "id": "100003493167534"
    }, 
    {
      "name": "Kosuke Saito", 
      "id": "100003505576846"
    }, 
    {
      "name": "Shinichi Aoyama", 
      "id": "100003509134090"
    }, 
    {
      "name": "Mami Uesaka", 
      "id": "100003559008425"
    }, 
    {
      "name": "Nanako  Mitai", 
      "id": "100003563358684"
    }, 
    {
      "name": "Takumi  Aikawa", 
      "id": "100003574462955"
    }, 
    {
      "name": "Yui Ishikawa", 
      "id": "100003624720329"
    }, 
    {
      "name": "Yasunori  Yamada", 
      "id": "100003628896018"
    }, 
    {
      "name": "Haruna Ooshiro", 
      "id": "100003644905608"
    }, 
    {
      "name": "Naohisa  Mitsushima", 
      "id": "100003645488203"
    }, 
    {
      "name": "Ayaaki  Kai", 
      "id": "100003663323317"
    }, 
    {
      "name": "Kinyo Kou", 
      "id": "100003669418383"
    }, 
    {
      "name": "Kenta  Takehara", 
      "id": "100003699075095"
    }, 
    {
      "name": "Matsurika  Tani", 
      "id": "100003700911577"
    }, 
    {
      "name": "Kota  Tsubouchi", 
      "id": "100003715730094"
    }, 
    {
      "name": "Seiki  Yoza", 
      "id": "100003718186923"
    }, 
    {
      "name": "Kazuhiro  Hata", 
      "id": "100003751865091"
    }, 
    {
      "name": "Ran Shinzato", 
      "id": "100003754067613"
    }, 
    {
      "name": "Shimada Hirotaka", 
      "id": "100003789930471"
    }, 
    {
      "name": "Atsushi  Suzuki", 
      "id": "100003862578142"
    }, 
    {
      "name": "Miya Morishima", 
      "id": "100003865757840"
    }, 
    {
      "name": "Mitsutaka Wada", 
      "id": "100003888308511"
    }, 
    {
      "name": "Shiori Ichikawa", 
      "id": "100003925513676"
    }, 
    {
      "name": "Haruka  Tamaki", 
      "id": "100003936354764"
    }, 
    {
      "name": "Yu Sawada", 
      "id": "100003955519017"
    }, 
    {
      "name": "Yurika  Kano", 
      "id": "100003963198254"
    }, 
    {
      "name": "Satoshi  Okabe", 
      "id": "100004032283584"
    }
  ], 
  "paging": {
    "next": "https://graph.facebook.com/100002174861736/friends?value=1&redirect=1&limit=5000&offset=5000"
  }
};
