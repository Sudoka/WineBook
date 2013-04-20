<?php
/**
 * Created by JetBrains PhpStorm.
 * User: huypham612
 * Date: 4/19/13
 * Time: 1:09 AM
 * To change this template use File | Settings | File Templates.
 */

$wineNameInput = explode( " ",$_GET['wineName']);
$searchQuery="";
for ($i = 0; $i < count($wineNameInput); ++$i) {
    if( $i < count($wineNameInput)-1){
        $searchQuery = $searchQuery . $wineNameInput[$i] . "%20" ;
    }
    else{
        $searchQuery = $searchQuery . $wineNameInput[$i];
    }
}

//$json_url = 'http://www.iwinedb.com/WineSearch.aspx?search=adv&wine=cabernet%20sauvignon';
//$json_url = 'http://www.iwinedb.com/WineSearch.aspx?search=adv&wine=Riesling';
//$json_url = 'http://www.iwinedb.com/WineSearch.aspx?search=adv&wine=Riesling%20Alsace%20Brandluft';
$json_url = 'http://www.iwinedb.com/WineSearch.aspx?search=adv&wine=' . $searchQuery;


$text = file_get_contents($json_url) ; // scrape page into variable
$text_String = htmlentities(json_encode($text)) ;

$arr = explode('DataCell', $text_String);

$name = 4;
$year = 5;
$id = 6;

$counter = 0;
$jsonArray = array();
for ($i = 0; $i < count($arr); ++$i) {   //only get 500 wines
	if($name <= count($arr) && $year <= count($arr) && $id <= count($arr)  && $counter <= 500 ){
		$wine = $arr[$name];
		$wineId = $arr[$id];
		$wineYear = $arr[$year];
		//print_r ($arr[$name]);echo "<br>";print_r ($arr[$id]); echo "<br>";
		$wine = substr($wine,11, strlen($wine) - 43);	
		$wineId = substr($wineId,11, strlen($wineId) - 43);	
		$wineYear = substr($wineYear,11, strlen($wineYear) - 43);	
		//echo $wine . "<br>" . $wineId . "<br>";
		$value = array('wineName' => $wine, 'id' => $wineId, 'year' => $wineYear);
		array_push($jsonArray, $value);
		$name = $name + 7;
		$id = $id + 7;
		$counter = $counter + 1;
		$year = $year + 7;
    }
}
echo (json_encode($jsonArray));

?>








