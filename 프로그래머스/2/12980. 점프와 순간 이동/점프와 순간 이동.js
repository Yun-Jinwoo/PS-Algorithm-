function solution(n)
{
    let answer = 0;
    
    while(n !== 0){
        while(n%2 === 0){
            n /= 2;
        }
        n -= 1;
        answer += 1;
    }
    
    return answer;
}