#include<stdio.h>
int main(){
    
    int marks;

    printf("enter marks: ");
    scanf("%d", &marks);

    (marks >= 90) ? printf("A grade") :
    (marks >= 80) ? printf("B grade") :
    (marks >= 70) ? printf("C grade") :
    (marks >= 60) ? printf("D grade") : printf("Fail");

    return 0;
}