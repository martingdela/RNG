var table = [
	[0.9, 0.95, 0.975, 0.99, 0.995, 0.9975, 0.999, 0.99950],
	[0.68337, 0.77639, 0.84189, 0.9, 0.92929, 0.95, 0.96838, 0.97764],
	[0.56481, 0.63604, 0.70760, 0.78456, 0.829, 0.86428, 0.9, 0.92065],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[0.18732,0.21756,0.24170,0.27023,0.28986,0.30818,0.33072,0.34672],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
]
/**
 * 
 * @param {*} n 
 * @param {*} alpha 
 */
function invSmirnov(n, alpha) {
	if (n > 50) {
		switch (alpha) {
			case 0.20:
				return 1.07 / Math.sqrt(n)
			case 0.10:
				return 1.22 / Math.sqrt(n)
			case 0.05:
				return 1.36 / Math.sqrt(n)
			case 0.02:
				return 1.52 / Math.sqrt(n)
			case 0.01:
				return 1.63 / Math.sqrt(n)
			case 0.005:
				return 1.73 / Math.sqrt(n)
			case 0.002:
				return 1.85 / Math.sqrt(n)
			case 0.001:
				return 1.95 / Math.sqrt(n)
			default:
				console.error("No soportamos ese alpha")
				return;
		}
	}

	var i
	switch (alpha) {
		case 0.20:
			i = 0
			break
		case 0.10:
			i = 1
			break
		case 0.05:
			i = 2
			break
		case 0.02:
			i = 3
			break
		case 0.01:
			i = 4
			break
		case 0.005:
			i = 5
			break
		case 0.002:
			i = 6
			break
		case 0.001:
			i = 7
			break
		default:
			console.error("No soportamos ese alpha")
			return;
	}

	return table[n-1][i]
}

module.exports = {invSmirnov}