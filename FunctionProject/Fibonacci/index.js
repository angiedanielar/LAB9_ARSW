module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth    
    var fibo = {};

    fibo[0] = 0;
    fibo[1] = 1;

    function fib(n) {
        var sign = n >= 0 ? 1 : -1;
        n = Math.abs(n);        
        if(fibo[n] !== undefined)
            return sign*fibo[n];
        
        return sign*(fibo[n] = fib(n-1)+fib(n-2));
    }
    
    let answer = fib(nth)

    context.res = {
        body: answer.toString()
    };
}