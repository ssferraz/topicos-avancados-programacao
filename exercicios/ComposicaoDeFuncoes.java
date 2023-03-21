package exercicios;

import java.util.List;

public class ComposicaoDeFuncoes {

    public static void main(String[] args) {

        List<Aluno> alunos = List.of(
                new Aluno("Alice", 7.5, 4.5),
                new Aluno("Bob", 8.5, 5.5),
                new Aluno("Charles", 6.0, 6.5),
                new Aluno("Debora", 4.5, 7.5),
                new Aluno("Edgar", 7.0, 10.0)
        );
        
        double mediaAprovados = alunos.stream()
                .map(aluno -> new Aluno(aluno.getNome(), 
                	(aluno.getNota1() + aluno.getNota2()) / 2))
                .filter(aluno -> aluno.getMedia() >= 7)
                .mapToDouble(Aluno::getMedia)
                .average()
                .orElse(0.0);
        System.out.println(mediaAprovados); // 7.75
      
    }

}

class Aluno {
    private String nome;
    private double nota1;
    private double nota2;
    private double media;

    public Aluno(String nome, double nota1, double nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = (nota1 + nota2) / 2;
    }
    
    public Aluno(String nome, double media) {
        this.nome = nome;
        this.media = media;
    }

    public String getNome() {
        return nome;
    }

    public double getNota1() {
        return nota1;
    }

    public double getNota2() {
        return nota2;
    }

	public double getMedia() {
		return media;
	}
}
