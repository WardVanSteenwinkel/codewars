function queueTime(customers, n) {
    //kassa's > klanten
    if(n>customers.length && customers.length!==0){
        customers.sort(function(a, b){return a - b});
        return customers[customers.length-1];
    }else if(customers.length===0){
        return 0;
    }else{
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
        return arr[n-1];
    }
}





console.log(queueTime([],3));