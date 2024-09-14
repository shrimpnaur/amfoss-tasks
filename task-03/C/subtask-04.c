#include <stdio.h>

int main() {
    int i, j, r;
    FILE *inputFile, *outputFile; 


    inputFile = fopen("inputt.txt", "r");
    if (inputFile == NULL) {
        perror("Error opening input file");
        return 1;
    }


    fscanf(inputFile, "%d", &r);
    fclose(inputFile);


    outputFile = fopen("outputt.txt", "w");
    if (outputFile == NULL) {
        perror("Error opening output file");
        return 1;
    }

    int mid = r / 2;


    for (i = 0; i <= mid; i++) {
        for (j = 0; j < mid - i; j++) 
            fprintf(outputFile, " ");
        for (j = 0; j < 2 * i + 1; j++) 
            fprintf(outputFile, "* ");
        fprintf(outputFile, "\n");
    }


    for (i = mid - 1; i >= 0; i--) {
        for (j = 0; j < mid - i; j++) 
            fprintf(outputFile, " ");
        for (j = 0; j < 2 * i + 1; j++) 
            fprintf(outputFile, "* ");
        fprintf(outputFile, "\n");
    }


    fclose(outputFile);

    return 0;
}

