import java.io.*;

public class subtask4 {
    public static void main(String[] args) {
        int n = 0;


        try (BufferedReader reader = new BufferedReader(new FileReader("input.txt"))) {
            String line = reader.readLine().trim();
            n = Integer.parseInt(line);  
        } catch (IOException | NumberFormatException e) {
            System.err.println("Error reading input file.");
            return;
        }


        if (n % 2 == 0) {
            n += 1;
        }

        StringBuilder pattern = new StringBuilder();


        for (int i = 1; i <= n; i += 2) {
            pattern.append(" ".repeat((n - i) / 2)).append("*".repeat(i)).append("\n");
        }


        for (int i = n - 2; i > 0; i -= 2) {
            pattern.append(" ".repeat((n - i) / 2)).append("*".repeat(i)).append("\n");
        }


        try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
            writer.write(pattern.toString());
        } catch (IOException e) {
            System.err.println("Error writing to output file.");
        }
    }
}

