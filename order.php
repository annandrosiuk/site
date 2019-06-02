<?php
// ----------------------------конфигурация-------------------------- //

$adminemail="Englishschoolwise@gmail.com";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="/call.php";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$user_ip=$_SERVER['REMOTE_ADDR'];

$name=$_POST['name'];

$phone=$_POST['phone'];

$form=$_POST['form'];

$email=$_POST['email'];

$msg=$_POST['message'];

$country=$_POST['country'];

$post_message.='IP-адрес '.$user_ip."\nОтправлено ".date("d-m-Y H:i:s");



// Проверяем валидность e-mail

 




$msg="


Имя: $name
Телефон: $phone
Е-mail: $email

Форма №: $form

Сообщение: $form с сайта Eswise.top


";



 // Отправляем письмо админу

mail("$adminemail", "$date $time Заказ $form
от $name", "$msg", "$post_message");



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 500); 
//--></script> ";  

exit; 
 
 
?>