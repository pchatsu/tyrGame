<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Scouter extends CI_Controller {

	var $template;
	var $photo;
	var $photos;
	var $selected_strings;
	var $selected_photos;

	public function index(){
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->view('template');
		$this->load->view('header');
		$this->load->view('result');
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
}

