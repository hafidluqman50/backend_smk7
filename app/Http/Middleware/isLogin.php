<?php 
namespace App\Http\Middleware;

use Closure;
use Auth;

class isLogin {
	public function handle($request,Closure $next) {
		if (Auth::check()) {
			if (Auth::user()->level == 1) {
				if (Auth::user()->ket == 'admin-inventory') {
					// return redirect('/');
					// TO DO LIST
				}
			}
			elseif (Auth::user()->level == 0) {
				if (Auth::user()->ket == 'petugas-inventory') {
					// TO DO LIST
				}
			}
		}
		return $next($request);
	}
}