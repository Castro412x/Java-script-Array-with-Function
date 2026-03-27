function stockChecker(){
    let stock = [10,0,5,0,8,0,3];
    let count = 0;
    for (i = 0; i < stock.length; i++){
        if(stock[i] === 0){
            count++;
        }
    }
    console.log("Out of Stock items:",count)
}
stockChecker()