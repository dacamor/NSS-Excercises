const dollarAmount = 0.10
const piggyBank = {quarters: 0,	dimes: 0, nickels: 0, pennies: 0}


  while (dollarAmount >= .25){
	  piggyBank.quarters++
	  dollarAmount -= .25
  }
while (dollarAmount >= .10){
	piggyBank.dimes++
	dollarAmount -= .10
}
while (dollarAmount >= .05){
	piggyBank.nickels++
	dollarAmount -= .05
}
while (dollarAmount >= .01){
	piggyBank.pennies++
	dollarAmount -= .01
}

console.log(piggyBank)