#include <stdio.h>

int main() {
    int n;

    printf("Enter odd number: "); //since pattern contains only odd number of *
    scanf("%d", &n);

    if (n % 2 == 0) {
        printf("The number must be odd.\n");
        return 1;
    }


    for (int i = 1; i <= n; i += 2) {
        for (int j = 0; j < (n - i) / 2; j++)
            printf(" ");
        for (int j = 0; j < i; j++)
            printf("*");
        printf("\n");
    }
    for (int i = n - 2; i > 0; i -= 2) {
        for (int j = 0; j < (n - i) / 2; j++)
            printf(" ");
        for (int j = 0; j < i; j++)
            printf("*");
        printf("\n");
    }

    return 0;
}
