<?php
$shoutcastServer = 'http://45.64.97.82:8072/stream';

header('Content-Type: audio/mpeg');
header('Connection: keep-alive');

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $shoutcastServer);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_exec($ch);
curl_close($ch);
