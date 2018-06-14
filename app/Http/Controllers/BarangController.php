<?php 
namespace App\Http\Controllers;

use App\Models\BarangModel;
use Illuminate\Http\Response;
use DB;

class BarangController extends Controller {
	public function barang() {
		$barang = new BarangModel;
		return response()->json($barang->all(),201);
	}
	public function test() {
		DB::insert('INSERT INTO `takis_sob` (nama, nip, tempat_lahir) VALUES ("asddsa", "dsaasd", "qweewq")');
	}
}