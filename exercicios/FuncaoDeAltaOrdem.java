package exercicios;

import java.util.function.IntBinaryOperator;

public class FuncaoDeAltaOrdem {

	public static void main(String[] args) {
		/*
		 * Uma função de alta ordem é uma função que recebe outra função 
		 * como argumento ou retorna uma função como resultado. 
		 */
		
		IntBinaryOperator soma = (x, y) -> x + y;
		
		var resultado = soma.applyAsInt(5, 3);
		
		System.out.println(resultado);
	}

}
