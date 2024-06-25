function divide(n1, n2=1){
    if(n2==0){
        console.log(`Invalid Input: ${n2}`);
        return;
    }
    console.log(n1/n2);
}
divide(10, 5);
divide(5, 3);
divide(4);
divide(7, 0);