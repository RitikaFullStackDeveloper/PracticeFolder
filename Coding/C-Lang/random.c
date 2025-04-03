// #include <stdio.h>
// #include <string.h>
// int main(){
//     char member[10] = "ramesh";
//     printf("Enter member name");
//     scanf("%s", member );
//     char name[10] = "ramesh";
//     int amount;
//     printf("enter amount");
//     scanf("%d", & amount);
     
//      if(amount >= 5000 && strcmp (member , name) == 0){
//         printf("you are a member \n");
//      }else{
//         printf("you are not member \n");
//      }

// }
#include <stdio.h>
#include <string.h>

int main() {
    char member[10] = "ramesh"; 
    char name[10]; 
    int amount;
   

    printf("Enter name: ");
    scanf("%s", name); 
    printf("Enter amount: ");
    scanf("%d", &amount); 
     float x = 0.3*amount;
    if (amount >= 5000 && strcmp(member, name) == 0) {
        printf("%.2f", (amount - x));
    } else {
        printf("No discount!\n");
    }

    return 0;
}

