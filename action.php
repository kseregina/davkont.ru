<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    $email = trim($_POST['user_email']);
    $name = htmlspecialchars($_POST['user_name']);
    $tel = htmlspecialchars($_POST["user_tel"]);
    $email = htmlspecialchars($email);
    $text = htmlspecialchars($_POST['text_comment']);
    

    if($name == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($tel == "")     $errors[] = "Поле 'Ваш телефон' не заполнено!";
    if($email == "")   $errors[] = "Поле 'Ваш e-mail' не заполнено!";
    if($text == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $name . "<br/>";
        $message .= "Телефон пользователя: " . $tel . "<br/>";
        $message .= "E-mail пользователя: " . $email . "<br/>";
        $message .= "Текст письма: " . $text;      
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    }
    else{
        // если были ошибки, то выводим их
        $msg_box = "";
        foreach($errors as $one_error){
            $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
        }
    }
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array('result' => $msg_box));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "ksenia.m.lebedeva@yandex.ru"; 
        // тема письма
        $subject = "Письмо с обратной связи";
         
        // заголовок письма
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>
