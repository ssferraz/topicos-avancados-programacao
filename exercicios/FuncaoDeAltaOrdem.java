package exercicios;

import java.util.function.IntBinaryOperator;

public class FuncaoDeAltaOrdem {

	public static void main(String[] args) {
		
		IntBinaryOperator soma = (x, y) -> x + y;
		
		var resultado = soma.applyAsInt(5, 3);
		
		System.out.println(resultado); // 8
	}

}
