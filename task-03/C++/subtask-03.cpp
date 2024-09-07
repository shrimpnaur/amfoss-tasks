#include <iostream>
#include <fstream>
#include <string>

void generateDiamond(int n, std::ostream& out) {
    for (int i = 0; i < n; ++i) {
        out << std::string(n - i - 1, ' ') << std::string(2 * i + 1, '*') << std::endl;
    }
    for (int i = n - 2; i >= 0; --i) {
        out << std::string(n - i - 1, ' ') << std::string(2 * i + 1, '*') << std::endl;
    }
}

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;

    generateDiamond(n, std::cout);

    return 0;
}

