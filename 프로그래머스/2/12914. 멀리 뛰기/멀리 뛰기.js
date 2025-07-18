function solution(n) {
    let f = new Array(n+1).fill(0);
    f[1] = 1
    f[2] = 2
    for(let i = 3; i <= n; i++){
        f[i] = (f[i-1] + f[i-2])%1234567
    }
    return f[n]
}

// f(n) = f(n-1) + f(n-2)
