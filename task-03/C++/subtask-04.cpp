#include <iostream>
#include <fstream>
#include <string>

int main() {

    std::ifstream infile("input.txt");
    if (!infile) {
        std::cerr << "Error opening input file" << std::endl;
        return 1;
    }


    int n;
    infile >> n;
    infile.close();


    if (n % 2 == 0) {
        n++;
    }

    std::string pattern;


    for (int i = 1; i <= n; i += 2) {
        pattern += std::string((n - i) / 2, ' ') + std::string(i, '*') + "\n";
    }


    for (int i = n - 2; i > 0; i -= 2) {
        pattern += std::string((n - i) / 2, ' ') + std::string(i, '*') + "\n";
    }


    std::ofstream outfile("outputstar.txt");
    if (!outfile) {
        std::cerr << "Error creating output file" << std::endl;
        return 1;
    }
    
    outfile << pattern;
    outfile.close();

    return 0;
}

