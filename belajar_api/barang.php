<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Barang</title>
</head>
<body>
	<table width="40%" border="1" align="center">
		<thead>
			<th>No</th>
			<th>Nama Barang</th>
			<th>Jenis Barang</th>
			<th>Stok</th>
		</thead>
		<tbody>
		</tbody>
	</table>
<script src="jquery-3.3.1.min.js"></script>
<script>
	$(function(){
		$.ajax({
			url: 'http://localhost:8000/api/barang',
			type: 'GET',
		})
		.done(function(done) {
			$.each(done, function(index, val) {
				var int = index+1;
				$('tbody').append('<tr><td>'+int+'</td><td>'+val.nama+'</td><td>'+val.nip+'</td><td>'+val.tempat_lahir+'</td></tr>');
			});
		})
		.fail(function(fail) {
			console.log(fail);
		});
	});
</script>
</body>
</html>