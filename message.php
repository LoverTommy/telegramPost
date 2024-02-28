<?php

// Получаем данные из тела запроса
$requestBody = file_get_contents('php://input');

// Декодируем JSON данные
$formValues = json_decode($requestBody, true);

// Данные для вашего бота Telegram
$telegramBotToken = '6427339077:AAG-NpEtgUaSVSPv9ZP16XEBexhU4LPrDhc';
$telegramChatId = '-4149954876';

// Формируем сообщение для отправки в Телеграм
$messageToSend = "Новые данные:\n";
foreach ($formValues as $key => $value) {
    $messageToSend .= "$key: $value\n";
}

// Отправляем сообщение в Телеграм
$response = file_get_contents("https://api.telegram.org/bot$telegramBotToken/sendMessage?chat_id=$telegramChatId&text=" . urlencode($messageToSend));

// Проверяем ответ от сервера Telegram
if ($response === false) {
    // Если есть ошибка при отправке сообщения в Телеграм, обрабатываем её
    echo 'Ошибка при отправке сообщения в Телеграм.';
} else {
    // Если сообщение успешно отправлено в Телеграм, можно выполнить дополнительные действия, если необходимо
    echo 'Сообщение успешно отправлено в Телеграм.';
}

?>