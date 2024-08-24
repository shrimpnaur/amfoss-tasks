#include <stdio.h>

int main() {
    int i, j, r; // Declare variables for loop control and the number of rows.
    FILE *inputFile, *outputFile; // File pointers for input and output files.

    // Open input file for reading
    inputFile = fopen("input.txt", "r");
    if (inputFile == NULL) {
        perror("Error opening input file");
        return 1;
    }

    // Read the number of rows from the input file
    fscanf(inputFile, "%d", &r);
    fclose(inputFile);

    // Open output file for writing
    outputFile = fopen("output.txt", "w");
    if (outputFile == NULL) {
        perror("Error opening output file");
        return 1;
    }

    // Calculate the middle row index for symmetry
    int mid = r / 2;

    // Print the upper half of the diamond to the output file
    for (i = 0; i <= mid; i++) {
        for (j = 0; j < mid - i; j++) // Loop to print spaces before the asterisks.
            fprintf(outputFile, " ");
        for (j = 0; j < 2 * i + 1; j++) // Loop to print asterisks with spaces.
            fprintf(outputFile, "* ");
        fprintf(outputFile, "\n"); // Move to the next line after completing a row.
    }

    // Print the lower half of the diamond to the output file
    for (i = mid - 1; i >= 0; i--) {
        for (j = 0; j < mid - i; j++) // Loop to print spaces before the asterisks.
            fprintf(outputFile, " ");
        for (j = 0; j < 2 * i + 1; j++) // Loop to print asterisks with spaces.
            fprintf(outputFile, "* ");
        fprintf(outputFile, "\n"); // Move to the next line after completing a row.
    }

    fclose(outputFile); // Close the output file

    return 0; // Return 0 to indicate successful execution.
}
