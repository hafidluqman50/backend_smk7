<?php 
namespace App\Http\Controllers;

use App\Models\SmkKontenModel;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use DB;

class SmkKontenController extends Controller {
	public function index() {
		$barang = new SmkKontenModel;
		return response()->json($barang->all(),201);
	}

	public function populer() {
		$barang = new SmkKontenModel;
		return response()->json($barang->orderBy('dilihat', 'desc')->limit(5)->get(),201);
	}

	public function detail(Request $request) {
		$barang = new SmkKontenModel;
		$id = $request->input('id');
		DB::update('UPDATE tb_konten SET dilihat=dilihat+1 WHERE id='.$id);
		return response()->json($barang->where('id', $id)->get(),201);
	}

	public function input(Request $request) {
		if ($request->hasFile('poto')) {
			$file = $request->file('poto');
			if ($file->getClientMimeType() == 'image/jpeg' || $file->getClientMimeType() == 'image/png') {
				$ext = ($file->getClientMimeType() == 'image/jpeg') ? '.jpg' : '.png';

				$size = getimagesize($request->file('poto'));
				$size = $size[0] / $size[1];

				if ($size < 0.75) {
					$size = '2';
				} elseif ($size < 1.25) {
					$size = '4';
				} else {
					$size = '8';
				}
				
				$fileName = $size.date("Ymd").md5(explode('.', $file->getClientOriginalName())[0]).$ext;
				$file->move('uploads/konten/', $fileName);
			} else {
				echo "gagal bang";
				return redirect('http://localhost/smkn7/_front_end/');
			}
		}
		echo $size;
		exit;
	}
}