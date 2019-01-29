<?php

/* https://api.telegram.org/bot593466875:AAHeLNUHSyT5e8aqhaCv_5ViG1B7WJRWJFM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$hidden = $_POST['hidden'];
$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "593466875:AAHeLNUHSyT5e8aqhaCv_5ViG1B7WJRWJFM";
$chat_id = "-280176376";
$arr = array(
	'Откуда: ' => $hidden,
  	'Имя: ' => $name,
  	'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
 	header('Location: index.html');
} else {
  	echo "Error";
}
?>