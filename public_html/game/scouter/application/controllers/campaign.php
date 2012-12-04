<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Campaign extends CI_Controller {

	public function index()
	{
		$this->load->helper('form');
		$this->load->helper('html');
		$this->load->view('template');
		$this->load->view('css_common');
		$this->load->view('css_home');
		$this->load->view('js_sound');
		$this->load->view('header');
		$this->load->view('campaign_home');
		$this->load->view('footer');
	}
}


