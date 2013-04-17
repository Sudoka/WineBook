<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/16/13
 * Time: 10:23 PM
  */
$con = mysql_connect("127.0.0.1","root","Toilahuypham12");
if($con){
    if(mysql_select_db('winebook',$con)){
        //checking for valid password:
        $username_input = $_POST['username'];
        $pass_input     = hash('sha256',$_POST['password']);
        $qry = "select password from userLogin where username = '".$username_input."'";
        $result = mysql_query($qry);
        if($pass_input == mysql_result($result,0)){

            //check if user already has a profile in the PROFILES table:
            //$qry2 = "select username from profiles where username = '".$username_input."'";
            //$profileResults = mysql_query($qry2);
//            if(mysql_num_rows($profileResults) == 0){
//                echo ('Login Succeeded but No Profile');
//                mysql_free_result($result);
//                mysql_free_result($profileResults);
//                return;
//            }
            echo ('Login Succeeded');
            mysql_free_result($result);
            mysql_free_result($profileResults);
            return;
        }
        else{
            echo('Invalid Password');
        }
        mysql_free_result($result);
    }
    else{
        echo('Table Allocating Failed');
    }
}
else{
    echo('Databases Connection Failed');
}
?>