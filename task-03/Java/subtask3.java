import java.util.Scanner;

public class subtask3 {
    public static void main(String[] args) {
        System.out.println("enter odd number: ");
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        if (n % 2 == 0) {
            System.out.println("The number must be odd.");
            
        }

        for (int i = 1; i <= n; i += 2) {
            for (int j = 0; j < (n - i) / 2; j++)
                System.out.print(" ");
            for (int j = 0; j < i; j++)
                System.out.print("*");
            System.out.println();
        }

        for (int i = n - 2; i > 0; i -= 2) {
            for (int j = 0; j < (n - i) / 2; j++)
                System.out.print(" ");
            for (int j = 0; j < i; j++)
                System.out.print("*");
            System.out.println();
        }

        scanner.close();
    }
}
