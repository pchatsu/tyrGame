<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Input extends CI_Controller {

	var $label = array(
		"name"=>"相手の名前",
		"date"=>"初めてデートしたところ",
		"club"=>"相手の部活（サークル）",
		"anniversary"=>"付き合った記念日",
		"birthday"=>"相手の誕生日",
		"present"=>"初めてプレゼントでもらったもの",
		"charmpoint"=>"相手の好きだったところ",
		"happiest"=>"１番嬉しかったこと",
		"holdhands"=>"初めて手をつないだシチュエーション",
		"song"=>"相手が好きだった曲",
		"friend"=>"相手の親友の名前"
	);

	public function index()
	{
		$this->load->helper('form');
		$easy=array_slice($this->label,0,3);
		$difficult=array_slice($this->label,3,count($this->label)-3);
		$difficult_key = array_rand($difficult,4);
		$difficult_rand=array();
		foreach($difficult_key as $key){
			$difficult_rand[$key]=$difficult[$key];
		}
		$question=array_merge($easy,$difficult_rand);
		$data['label']=$question;
		$data['post']=$this->input->post();
		$this->load->view('template');
		$this->load->view('css_common');
		$this->load->view('css_page');
		$this->load->view('css_input');
		$this->load->view('js_sound_page');
		$this->load->view('header');
		$this->load->view('input',$data);
		$this->load->view('footer');
	}

	function result(){
		$this->load->helper('url');
		$data['post']=$this->input->post();
		//$data['post']=$this->
		//_mbConvertEncodingEx($data['post'], "Shift-JIS","UTiF-8");
		$data = $this->isBlank($data,$data['post']);
		//redirect('welcome/thankyou','refresh');
		$data['label']=$this->label;
		$this->load->view('template');
		$this->load->view('css_common');
		$this->load->view('css_result');
		$this->load->view('js_drawResult');
		$this->load->view('header');
		$this->load->view('result',$data);
		$this->load->view('footer');
	}

	function isBlank($data,$obj){
		$data['blank']=array();
		$blankStr = "";
		$lastKey = array_keys($obj);
		$lastKey = $lastKey[$obj["arrived_page"]];
		$lastBlank = false;
		foreach($obj as $key => $value){
			if(($value==""||$value==null)&&$key!="post_status"){
				$data['blank'][]=$this->label[$key];
				$blankStr .= "「".$this->label[$key]."」も";
				if($key==$lastKey){
					$lastBlank=true;
				}
			}
			if($key==$lastKey){
				break;
			}
		}
		if($blankStr!=""){
			if(count($data["blank"])>1||!$lastBlank){
				$blankStr ="初めて付き合った相手について".$data['blank'][0]."も忘れてしまったんですね。。。";
			}else{
				$blankStr ="初めて付き合った相手との大切な思い出、<br/>思い出すのに時間かかりすぎじゃないですか？";
			}
			//$blankStr = mb_substr($blankStr,0,mb_strlen($blankStr)-1);
			//$blankStr ="初恋について".$blankStr."も忘れてしまったんですね。。。";
		}elseif($obj["arrived_page"]<count($obj)-4){
			$blankStr ="初めて付き合った相手との大切な思い出、<br/>思い出すのに時間かかりすぎじゃないですか？";
		}else{
			$blankStr ="初めて付き合った相手についてしっかり覚えているんですね！素晴らしい！";
		}
		if($obj["post_status"]=="giveup"){
			$blankStr .= "(ギブアップ)";
		}
		$data['blankStr']=$blankStr;
		return $data;
	}
	function _mbConvertEncodingEx($target, $toEncoding, 
		$fromEncoding = null)
	{
		if (is_array($target)) {
			$newTarget=array();
			foreach ($target as $key => $val) {
				if (is_null($fromEncoding)) {
					$fromEncoding = mb_detect_encoding($val);
				}
				$newTarget[$this->_mbConvertEncodingEx($key,
					$toEncoding, $fromEncoding)] = $this->_mbConvertEncodingEx($val,
					$toEncoding, $fromEncoding);
			}
			$target=$newTarget;
		} else {
			if  (is_null($fromEncoding)) {
				$fromEncoding = mb_detect_encoding($target);
			}
			$target = mb_convert_encoding($target, $toEncoding, 
				$fromEncoding);
		}
		return $target;
	}
}



