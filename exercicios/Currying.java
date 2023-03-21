package exercicios;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Currying {

	public static void main(String[] args) {
		List<Integer> numeros = List.of(1, 2, 3, 4, 5);

		Function<Integer, Function<Integer, Integer>> 
		soma = x -> y -> x + y;

		var resultado = numeros.stream()
				.map(soma.apply(2))
				.collect(Collectors.toList());

		System.out.println(resultado); // [3, 4, 5, 6, 7]
	}

}
