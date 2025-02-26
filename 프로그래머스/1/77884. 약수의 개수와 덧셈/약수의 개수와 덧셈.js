function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++){
        if(get_factors(i)%2 === 0){
            answer += i;
        }
        else{
            answer -= i;
        }
    }
    return answer;
}

function get_factors(num){
    let result = 0;
    for(let i = 1; i <= num; i++){
        if(num%i === 0){
            result++;
        }
    }
    return result;
}