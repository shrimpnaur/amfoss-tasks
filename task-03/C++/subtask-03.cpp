#include <iostream>

void print_diamond(int n) {

    for (int i = 1; i <= n; i += 2) {
        for (int j = 0; j < (n - i) / 2; j++) {
            std::cout << " ";
        }
        
        for (int j = 0; j < i; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }


    for (int i = n - 2; i > 0; i -= 2) {

        for (int j = 0; j < (n - i) / 2; j++) {
            std::cout << " ";
        }

        for (int j = 0; j < i; j++) {
            std::cout << "*";
        }
        std::cout << std::endl;
    }
}

int main() {
    int n;
    std::cout << "Enter a number: ";
    std::cin >> n;
    print_diamond(n);
    return 0;
}

