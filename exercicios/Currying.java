package exercicios;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Currying {

	/*
	 * Currying é uma técnica em que uma função com múltiplos 
	 * argumentos é transformada em uma sequência de funções
	 * com um único argumento.
	 */

	public static void main(String[] args) {
		List<Integer> numeros = List.of(1, 2, 3, 4, 5);

		Function<Integer, Function<Integer, Integer>> soma = x -> y -> x + y;

		var resultado = numeros.stream()
				.map(soma.apply(2))
				.collect(Collectors.toList());

		System.out.println(resultado); // Imprime [1, 4, 9, 16, 25]

	}

}
