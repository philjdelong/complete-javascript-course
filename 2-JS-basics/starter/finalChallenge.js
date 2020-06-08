// create tipCalc: 
	// bill < $50: 20%, 
	// bill > 50 && bill < 200: 15%, 
	// bill > 200: 10%

var preTipBills = [124, 48, 268, 180, 42];
var tips = [];
var totalBills = [];

function tipCalculator(list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i] < 50) {
			var tip = list[i] * .2;
		} else if (list[i] > 50 && list[i] < 200) {
			var tip = list[i] * .15;
		} else {
			var tip = list[i] * .1;
		}
		var totalBill = list[i] + tip;
		tips.push(tip);
		totalBills.push(totalBill);
	}
}

tipCalculator(preTipBills);
console.log(tips);
console.log(totalBills);













// for (var i = 0; i < preTipBills.length; i++) {
// 	if (preTipBills[i] < 50) {
// 		var tip = preTipBills[i]*(0.2);
// 	} else if (preTipBills[i] > 50 && preTipBills[i] < 200) {
// 		var tip = preTipBills[i]*(0.15);
// 	} else {
// 		var tip = preTipBills[i]*(0.1);
// 	}
// 	var totalBill = tip + preTipBills[i];
// 	tips.push(tip);
// 	totalBills.push(totalBill);
// }

// console.log("Tips: " + tips);
// console.log("Total Bills: " + totalBills);