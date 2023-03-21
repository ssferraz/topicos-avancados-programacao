package exercicios;

public class Recursao {
	
	/*
	 * Recursão é uma técnica em programação em que uma função chama a si mesma
	 * para resolver um problema. Em Java, é possível criar funções recursivas 
	 * usando a declaração void ou return para chamar a si mesma.
	 * */

	public static int fatorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * fatorial(n - 1);
        }
    }
	
	public static void main(String[] args) {
		
		System.out.println(fatorial(5)); // Imprime 120
	}

}
