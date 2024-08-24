#include <stdio.h> // Include the standard input/output header file.

void main()
{
    int i, j, r; // Declare variables for loop control and the number of rows.
    printf("Input number of rows (total rows of diamond): "); // Prompt the user to input the number of rows.
    scanf("%d", &r); // Read the number of rows from the user.

    // Calculate the middle row index for symmetry
    int mid = r / 2;

    // Print the upper half of the diamond
    for (i = 0; i <= mid; i++) 
    {
        for (j = 0; j < mid - i; j++) // Loop to print spaces before the asterisks.
            printf(" ");
        for (j = 0; j < 2 * i + 1; j++) // Loop to print asterisks with spaces.
            printf("* ");
        printf("\n"); // Move to the next line after completing a row.
    }

    // Print the lower half of the diamond
    for (i = mid - 1; i >= 0; i--) 
    {
        for (j = 0; j < mid - i; j++) // Loop to print spaces before the asterisks.
            printf(" ");
        for (j = 0; j < 2 * i + 1; j++) // Loop to print asterisks with spaces.
            printf("* ");
        printf("\n"); // Move to the next line after completing a row.
    }
}
