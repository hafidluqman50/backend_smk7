<?php 
namespace App\Http\Controllers;

use App\Models\SmkKontakModel;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use DB;

class SmkKontakController extends Controller {
	public function input(Request $request) {
		$nomor = $request->input('nomor');
		if (substr($nomor, 0, 1) == "0") {
			$nomor = substr($nomor, 1, (strlen($nomor) - 1));
		}
		$array = [
			'nama' => $request->input('nama'),
			'no_telp' => "+62".$nomor,
			'email' => $request->input('email'),
			'waktu' => date('Y-m-d H:i:s'),
			'komentar' => $request->input('komentar'),
			'status' => "1",
		];
		$barang = new SmkKontakModel;
		$barang->insert($array);
		return response()->json('done',201);
	}
}