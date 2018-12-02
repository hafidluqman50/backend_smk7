<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Users;
use Log;

class UsersController extends Controller {
    public function __construct() {
        $this->middleware('auth', [
            'only' => ['authenticate']
        ]);
    }

    public function authenticate(Request $request) {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);
        $user = Users::where('username', $request->input('username'))->first();
        Log::info($user->password);
        Log::info($user->username);    
        if(sha1($request->input('password')) == $user->password){
            $apikey = base64_encode(str_random(40));
            Users::where('username', $request->input('username'))->update(['api_key' => "$apikey"]);;
            return response()->json(['status' => 'success','api_key' => $apikey]);
        }else{
            return response()->json(['status' => 'fail'],401);
        }
    }
}