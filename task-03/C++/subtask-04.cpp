#include <iostream>
#include <fstream>
#include <string>

void generate_diamond(int n) {
    std::ofstream file("output.txt");
    for (int i = 0; i < n; ++i) {
        file << std::string(n - i - 1, ' ') << std::string(2 * i + 1, '*') << '\n';
    }
    for (int i = n - 2; i >= 0; --i) {
        file << std::string(n - i - 1, ' ') << std::string(2 * i + 1, '*') << '\n';
    }
    file.close();
}

int main() {
    std::ifstream file("input.txt");
    int n;
    file >> n;
    file.close();

    generate_diamond(n);

    return 0;
}
