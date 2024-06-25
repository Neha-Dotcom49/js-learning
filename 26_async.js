async function giveMeMoney(){
    console.log("Let me arrange for you..");
    return "Take this 10000 RS";
}

async function arrangeMoney(){
    try {
        const result = await giveMeMoney();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
arrangeMoney();

