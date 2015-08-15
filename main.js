var name = "Olaf";
var zahl = 1;
var marken = ["Audi","BMW", "Kia", "Hyundai", "Porsche"];
var objekt = {
	schl1 : "Joghurt",
	schl2 : 1.2,
	schl3 : [1, 2, 3],
	objekt : {
		schl4 : 3
	}
};
// console.log(objekt.objekt.schl4);




function multi_by_two(number, number2){
	var result = number * number2;
	console.log(result);
	return result;
};

var shit = multi_by_two(zahl, objekt.objekt.schl4);




function mix(arr){
	var origin = getRandomInt(0, arr.length);
	var target = getRandomInt(0, arr.length);
	
	var origin_value = arr[origin];
	var target_value = arr[target];
	
	console.log(origin_value, target_value);

	arr[origin] = target_value;
	arr[target] = origin_value;


	console.log(arr);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


mix(marken);
mix(objekt.schl3);

//foo


// console.log(multi_by_two(objekt.schl2));

// change_key(objekt)

// function change_key(json){
// 	json.schl2 = multi_by_two(json.schl2);
// 	console.log(json);
// };
