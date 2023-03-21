package exercicios;

import java.util.List;
import java.util.stream.Collectors;

public class Imutabilidade {

	public static void main(String[] args) {
		List<String> rooms = List.of("R1", "R2", "R3");
		List<String> newRooms = rooms
				.stream()
				.map(room -> room.equals("R3") ? "R4" : room)
				.collect(Collectors.toList());

		System.out.println(rooms); // [R1, R2, R3]
		System.out.println(newRooms); // [R1, R2, R4]
	}

}
