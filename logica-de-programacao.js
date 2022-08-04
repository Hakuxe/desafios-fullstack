let sum = 0;
// fazer um loop 1000 vezes
for (let i = 0; i < 1000; i++) {
   // somar numeros multiplos de 3 ou 5
	if (i % 3 == 0 || i % 5 == 0) {
		sum += i;
	}
}

console.log("Soma dos múltiplos de 3 ou 5: ", sum);
console.log("\n");
