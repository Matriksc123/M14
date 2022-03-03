<?php
include("config.php");
$curl = curl_init();
$offset = $_POST['offset'];
$limit = $_POST['limit'];
curl_setopt_array($curl, [
	CURLOPT_URL => 'https://spotify23.p.rapidapi.com/album_tracks/?id=7j11BWRSLFBFUVR4EPG6WD&offset='.$offset. '&limit=' . $limit,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: spotify23.p.rapidapi.com",
		"x-rapidapi-key: f85f931f28mshe325849c6069c91p1ff277jsnff139b26efbd"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}

?>
