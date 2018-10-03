<?php 
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmkProfilModel extends Model {
	protected $table = 'tb_profil';
	protected $primaryKey = 'id';
	protected $guarded = [];
	protected $timestamps = false;
}