#include <fstream>
#include <iostream>

int main() {
    std::ifstream infile("input.txt");
    std::ofstream outfile("output.txt");

    if (!infile || !outfile) {
        std::cerr << "Error opening file\n";
        return 1;
    }

    std::string content((std::istreambuf_iterator<char>(infile)), std::istreambuf_iterator<char>());
    outfile << content;

    return 0;
}

