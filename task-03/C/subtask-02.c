#include <stdio.h>

int main() {
    FILE *infile, *outfile;
    char buffer[256];

    infile = fopen("inputt.txt", "r");
    outfile = fopen("outputt.txt", "w");

    while (fgets(buffer, sizeof(buffer), infile)) {
        fputs(buffer, outfile);
    }

    fclose(infile);
    fclose(outfile);
    return 0;
}
