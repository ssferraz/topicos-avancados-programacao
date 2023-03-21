package exercicios;

public class Imutabilidade {
	
	/*
	 * Imutabilidade é uma técnica em programação funcional em que uma vez que um objeto é criado, 
	 * ele não pode ser alterado. Em Java, isso pode ser feito usando a classe final para tornar 
	 * variáveis e métodos imutáveis.
	 * */
	
	private final String nome;
	private final int idade;

	public Imutabilidade(String nome, int idade) {
		this.nome = nome;
		this.idade = idade;
	}

	public String getNome() {
		return nome;	
	}

	public int getIdade() {
		return idade;
	}

}
