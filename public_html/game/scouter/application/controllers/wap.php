<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Wap extends CI_Controller {

	var $template;
	var $photo;
	var $photos;
	var $selected_strings;
	var $selected_photos;

	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('wap');
		$this->load->view('footer');
	}

	public function page1(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('header');
		//$this->load->view('page1');
		$this->load->view('footer');
	}
	
	public function member(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('css_member');
		$this->load->view('js_header');
		$this->load->view('js_home');
		$data['class_index']=array("","current_page_item","","");
		$this->load->view('header',$data);
		$this->load->view('member');
		$this->load->view('footer');
	}

	public function pickup_data(){
		if(count($this->post_data)>1){
		while(list($key,$value) = each($this->post_data)){
		/*	if($key.match(/^fb_photo/)){
				array_push($this->photos,$value);
		}*/
			echo $key." : ".$value."<br/>";
		}
		}
	}

}

