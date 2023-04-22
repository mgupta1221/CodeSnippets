for (int i = 5; i > 0 ; i-- ) {
    for (int j = 1; j <= 5 ; j++ ) {

        if (j >= i) {
            System.out.print("*");
        }
        else {
            System.out.print(" ");
        }

    }
    System.out.println("");
}


//pattern 5 - Diamond
int m = 5;
for (int i = 1; i <= m / 2 + 1 ; i++ ) {
    for (int j = 1; j <= (m / 2 - i + 1) ; j++ ) {

        System.out.print(" ");
    }

    for (int j = 1; j <= (2 * i) - 1 ; j++ ) {

        System.out.print("X");
    }
    System.out.println("");
}
for (int i = 1; i <= m / 2 ; i++ ) {
    for (int j = 1; j <= i ; j++ ) {

        System.out.print(" ");
    }

    for (int j = 1; j <= m - (2 * i) ; j++ ) {

        System.out.print("X");
    }
    System.out.println("");
}

//pattern 7

for (int i=1;i<=5 ;i++ ){
    for (int j=1;j<=i ;j++ ){
        if(i==j){
         System.out.print("x");
        }
        else{
            System.out.print(" ");
        }
  }
      System.out.println("");
 } 


 //Pattern 8
 for (int i=1;i<=5 ;i++ ){
    for (int j=1;j<=5 ;j++ ){
        if(j==i || j==5-i+1){
         System.out.print("x");
        }
        else{
            System.out.print(" ");
        }
  }
      System.out.println("");
 } 