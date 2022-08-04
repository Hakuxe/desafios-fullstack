function smallerDivisibleNumber(number) {
	//criterio de parada
	if (number % 2 == 0 && number % 3 == 0 && number % 10 == 0) {
		console.log("menor número inteiro divisível por 2, 3 e 10: ", number);

		return "";
	} else {
		smallerDivisibleNumber(number + 1);
	}
}

smallerDivisibleNumber(0);
smallerDivisibleNumber(1);
