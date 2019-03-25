/* Mathematical packages */
const math = require('mathjs')
const gamma = require('./distribution/gammafns')
const kolmorogov = require('./distribution/kolmo')
/**
 * 
 * @param {*} randomnumbers 
 * @param {*} alpha 
 */
function chisquare(randomnumbers, alpha){
	// Step 1. Calculate the required range, classes and data
	var size = randomnumbers.length
	var max = math.max(randomnumbers)
	var min = math.min(randomnumbers)
	var range = max - min
	var k = math.floor(1 + 3.322*math.log10(size))
	var tsize = range / k
	// Step 2. Calculate the table
	var tble = []
	var lowerBound = min
	var feisqrsum = 0
	for(var i = 0; i < k; i++){
		// Create an object to add on
		var obj = {}
		// Determine i
		obj.i = i+1
		// Determine the lower bound
		obj.lowerb = lowerBound
		// Determine the upper bound
		obj.upperb = obj.lowerb + tsize
		// Rewrite the lower bound
		lowerBound = obj.upperb
		// Calculate f0abs
		// eslint-disable-next-line
		obj.f0abs = randomnumbers.reduce((r,n) => n >= obj.lowerb && n <= obj.upperb ? ++r : r, 0);
		// Calculate f0rel
		obj.f0rel = obj.f0abs / size
		// Calculate FEI
		obj.fei = 1/k
		// Calculate FEI-FO^2/FEI
		obj.feisq = (math.pow((obj.fei-obj.f0rel),2))/obj.fei
		feisqrsum+=obj.feisq
		tble.push(obj)
	}
	// Step 4 > Calculate the liberty degrees
	var v = (k-1)-1
	console.log(v)
	// Step 5 > Calculate xi^2 dist.
	if(alpha > 1){
		alpha = alpha/100
	}

	var g = gamma.calcFunctionInv(alpha,v)
	return [feisqrsum, g, tble,size,max,min,range,k,tsize]

}

/**
 * 
 * @param {*} randomnumbers 
 * @param {*} alpha 
 */
function kolmorogovTest(randomnumbers, alpha){
	// Step 1: Sort all numbers 
	randomnumbers.sort()
	var result = []
	for(var i = 0 ; i < randomnumbers.length; i++){
		var res = {}
		// Store i
		res.i = i+1

		res.num = randomnumbers[i]
		// Calculate i/n
		res.iOVERn = (i+1)/randomnumbers.length
		// Calculate i/n - F(x)
		res.iOVERnMINUSfxi = res.iOVERn - randomnumbers[i]
		// Calculate F(xi) - (i-1)/n
		if(i === 0){
			res.fxiMINUSiMINUS1OVERn = randomnumbers[i]
		} else {
			res.fxiMINUSiMINUS1OVERn = randomnumbers[i] - (i)/randomnumbers.length
		}
		// Push to the result array
		result.push(res)
	}

	//Calculate max number from the iOVERnMINUSfxi column
	var dPLUS = -1
	for(i = 0; i < result.length; i++){
		if(result[i].iOVERnMINUSfxi > dPLUS){
			dPLUS = result[i].iOVERnMINUSfxi
		}
	}
	//Calculate max number from the fxiMINUSiMINUS1OVERn column
	var dMINUS = -1
	for(i = 0; i < result.length; i++){
		if(result[i].fxiMINUSiMINUS1OVERn > dMINUS){
			dMINUS = result[i].fxiMINUSiMINUS1OVERn
		}
	}
	//Calculate the max between both
	var D = Math.max(dPLUS,dMINUS)
	// Calculate the kolm. inv
	var k = kolmorogov.invSmirnov(randomnumbers.length,alpha)
	// Check
	return [dMINUS,dPLUS,D,k,result]
	
}

module.exports = {kolmorogovTest, chisquare}