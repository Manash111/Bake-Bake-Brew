<?php
$name=$_POST['name']
$email=$_POST['email']
$message=$_POST['message']

//Database connection

$conn=new mysqli('localhost','root','','bake & brew');
if($conn->connect_error){
    die('connection Failed:'.$conn->connect_error);
}
else{
    $stmt->$conn->prepare("insert into bake & brew(name,email,message) values(?,?,?)");
    $stmt->bind_param("sss",$name,$email,$message);
    $stmt->execute();
    echo"Message sent";
    $stmt->close();
    $connection->close();
    }
    ?>
