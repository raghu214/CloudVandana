package codeVandana.com;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class panagram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence to check if it's a pangram:");
        String input = scanner.nextLine();
        scanner.close();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        input = input.replaceAll(" ", "").toLowerCase();
        Set<Character> letterSet = new HashSet<>();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }

        return letterSet.size() == 26;
    }
}
