// create tipCalc: 
	// bill < $50: 20%, 
	// bill > 50 && bill < 200: 15%, 
	// bill > 200: 10%

var billList = {
	preTip: [124, 48, 268, 180, 42],
	tips: [],
	totalBills: []
}

function tipCalculator(list) {
	for (var i = 0; i < list.preTip.length; i++) {
		if (list.preTip[i] < 50) {
			var tip = (list.preTip[i] * .2);
		} else if (list.preTip[i] > 50 && list.preTip[i] < 200) {
			var tip = (list.preTip[i] * .15);
		} else {
			var tip = (list.preTip[i] * .1);
		}
		var totalBill = list.preTip[i] + tip;
		list.tips.push(tip.toFixed(2));
		list.totalBills.push(totalBill.toFixed(2));
	}
}

tipCalculator(billList);
console.log(billList.preTip, billList.tips, billList.totalBills);
// console.log(billList.tips);
// console.log(billList.totalBills);













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