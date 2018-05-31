<?php 
namespace App\Http\Controllers;

use App\Models\BarangModel;
use Illuminate\Http\Response;

class BarangController extends Controller {
	public function barang() {
		$barang = new BarangModel;
		return response()->json($barang->all(),201);
	}
}