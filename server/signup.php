<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huypham612
 * Date: 9/22/12
 * Time: 2:21 PM
 */

$con = mysql_connect("127.0.0.1","root","Toilahuypham12");
if($con){
    if(mysql_select_db('winebook',$con)){
        //checking for duplicated username:
        $username_input = $_POST['username'];
        $checkNameQry = "select username from userLogin where username = '".$username_input."'";
        $result = mysql_query($checkNameQry);
        if(mysql_num_rows($result) != 0){
            echo ('Username already exist');
            mysql_free_result($result);
            return;
        }
        mysql_free_result($result);

        //Insert new info into the table
        $insertQry = "INSERT INTO userLogin(username,password) VALUES ('".$_POST['username']."','".hash( "sha256" , $_POST['password'])."')";
        if(mysql_query($insertQry))
        {
            echo('Signup Succeeded');
            mysql_free_result($result);
            mysql_free_result($profileResults);
        }
        else
        {
            echo('Account Upload Failed');
        }
    }
    else{
        echo('Table Allocating Failed');
    }
}
else{
    echo('Databases Connection Failed');
}
?>