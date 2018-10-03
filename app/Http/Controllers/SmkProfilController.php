<?php 
namespace App\Http\Controllers;

use App\Models\SmkProfilModel;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use DB;

class SmkProfilController extends Controller {
	public function index() {
		$barang = new SmkProfilModel;
		return response()->json($barang->all(),201);
	}
}