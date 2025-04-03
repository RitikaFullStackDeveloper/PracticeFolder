#include <stdio.h>

void decimalToBinary(int num) {
    if (num > 1) {
        decimalToBinary(num / 2); 
    }
    printf("%d", num % 2); 
}

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    printf("Binary representation: ");
    decimalToBinary(number);
    printf("\n");

    return 0;
}
