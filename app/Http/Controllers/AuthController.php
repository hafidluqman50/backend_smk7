<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller {
	public function login(Request $request) {
		$username = $request->username;
		$password = $request->password;
		if (Auth::attempt(['username'=>$username,'password'=>$password,'active'=>'1'])) {
			
		}
	}
}