<?php 
namespace App\Http\Controllers;

use App\Models\SmkKontenModel;
use Illuminate\Http\Response;
use DB;

class SmkKontenController extends Controller {
	public function index() {
		$barang = new SmkKontenModel;
		return response()->json($barang->all(),201);
	}
}