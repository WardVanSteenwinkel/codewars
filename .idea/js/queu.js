function queueTime(customers, n) {
    //array voor bijhouden kassa'a
    let arr = [];
    //aanmaken initiele kassa's
    for (let i = 0; i < n; i++) {
        let kassa = 0;
        kassa += customers[i];
        arr.push(kassa);
    }
    //neem kassa dat eerste klaar is en geef deze de volgende klant
    for (let i = n; i < customers.length; i++) {
        arr.sort(function(a, b){return a - b});
        arr[0] += customers[i];
    }
    arr.sort(function(a, b){return a - b});
    return arr[0];
}




console.log(queueTime([10,2,3,3]),2);