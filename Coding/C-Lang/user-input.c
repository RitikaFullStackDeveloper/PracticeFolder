#include <stdio.h>
int main(){
    char firstname [25];
    char lastname  [25];

  printf("Enter your first name: ");
    scanf("%s", firstname);

    printf("Enter your last name: ");
    scanf("%s", lastname);
    printf("your name is: %s %s", firstname,lastname);
  
}