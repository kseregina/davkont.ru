$(document).ready(function(){
    $('#btn_submit').click(function(){
        // собираем данные с формы
        var user_name    = $('#user_name').val();
        var user_tel     = $('#user_tel').val();
        var user_email   = $('#user_email').val();
        var text_comment = $('#text_comment').val();
        // отправляем данные
        $.ajax({
            url: "action.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "user_name":    user_name,
                "user_tel":   user_tel,
                "user_email":   user_email,
                "text_comment": text_comment
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
            }
        });
    });
});
