class Operation{
    constructor(){
        // Empty Constructor
    }
    add(n1, n2, n3){
        if (arguments.length==2) {
            console.log(n1+n2); 
        }
        if (arguments.length==3) {
            console.log(n1+n2+n3); 
        }
    }
    // add(n1, n2, n3){
    //     console.log(n1+n2+n3);
    // }
}
const opr = new Operation();
opr.add(10, 20);
opr.add(10, 20, 30);