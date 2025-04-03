#include<stdio.h>
int main(){
    float temp;

    printf("enter temprture: ");
    scanf("%f", &temp);

float F = (temp* 9/5)+32;

//  if(temp > 0){
//     printf("%f",F);
//  }
//  else{
//     printf("It's too cold");
//  }

(temp > 0) ? printf("%f",F) : printf("It's too cold");


}