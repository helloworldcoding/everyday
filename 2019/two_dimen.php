<?php

/*
$arr = [
	[1,1,1,1,1,1],
	[1,0,0,1,0,0],
	[1,1,1,1,1,1]
];
count_zero($arr) == 2
 */


$stack = [];
$notOk = false;

function count_zero($arr) {
	$rowNum = count($arr);	
	$colNum = count($arr[0]);
	$res = []; //保存符合条件的元素的index，如1_1,2_1
	$seen = []; // 保存查询过的元素index
	for($i = 0; $i < $rowNum; $i++ ){
		for($j = 0; $j < $colNum; $j++) {
			if(0 == $arr[$i][$j] && !in_array($i.'_'.$j,$res) ) {
				$nerbs = nerbs($arr,$i,$j,$rowNum,$colNum);
				$res[] = array_merge($res,$nerbs['ok']);
				$seen[] = array_merge($seen,$nerbs['not_ok']);
			}
		}
	}
	return count($res);
}

//找到所有相邻的零
function nerbs($arr, $i,$j,$rowNum,$colNum) {
	global $stack;
	global $notOk;
	for($col = $i; $col< $colNum;$col++){
		for($row = $j;$row < $rowNum;$row++) {
		}
	}
	
	/**
	如果出现了null，就说明这一区域相连的0都是不满足需求的
	**/
	$up = $arr[$i-1][$j] ?? null;
	$right = $arr[$i][$j+1] ?? null;
	$down = $arr[$i+1][$j] ?? null;
	$left = $arr[$i][$j-1] ?? null;
	if($up === 0) {
		array_push($stack,($i-1)."_".$j);
		var_dump($stack);
		nerbs($arr,$i-1,$j,$rowNum,$colNum);
	}
	if($right === 0) {
		array_push($stack,($i)."_".$j+1);
		nerbs($arr,$i,$j+1,$rowNum,$colNum);
	}
	if($down === 0) {
		array_push($stack,($i+1)."_".$j);
		nerbs($arr,$i+1,$j,$rowNum,$colNum);
	}
	if($left === 0) {
		array_push($stack,($i)."_".$j-1);
		nerbs($arr,$i,$j-1,$rowNum,$colNum);
	}

	if(in_array(null,[$up,$right,$down,$left],true)) {
		$notOk = true;
		return [
			'ok' => [],
			'not_ok' => $stack,
		];
	} else {
		return [
			'ok' => $stack,
			'not_ok' => [],
		];
	}

}

$arr = [
	[1,1,1,1,1,1],
	[1,0,0,1,0,0],
	[1,1,1,1,1,1]
];
var_dump(count_zero($arr) == 2);
