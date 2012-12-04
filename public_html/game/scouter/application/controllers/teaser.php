<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Teaser extends CI_Controller {

	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('css_home');
		$this->load->view('js_header');
		$this->load->view('js_home');
		$data['class_index']=array("current_page_item","","","");
		$this->load->view('header',$data);
		$this->load->view('home');
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

	public function interview(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('css_home');
		$this->load->view('js_header');
		$this->load->view('js_home');
		$data['class_index']=array("","","current_page_item","");
		$this->load->view('header',$data);
		$this->load->view('interview');
		$this->load->view('footer');
	}

	public function contact(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('css_home');
		$this->load->view('js_header');
		$this->load->view('js_home');
		$data['class_index']=array("","","","current_page_item");
		$this->load->view('header',$data);
		$this->load->view('contact');
		$this->load->view('footer');
	}

}

