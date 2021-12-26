// second try - passed by 100% score
// first에서 놓쳤던 부분: 빈 배열(1이 빠진 경우), 마지막인덱스(A.length-1) A.length == N 이 빠진 경우 
// * Time Complexity: O(N) + O(N *logN)
// function solution(A) {
//   // 정렬해서 인덱스+1 과 값이 같지 않은 경우 찾기
//   A.sort((a,b) => a-b);
//   // ! 내가 놓친 부분 : 빈 배열(return 1), 마지막요소 빠지는 경우(return A.length + 1);

//   if(A.length === 0) return 1;

//   for(let i = 0; i<A.length; i++) {
//     if(A[i] !== i+1) return i+1;
//   }

//   // 배열은 N개의 정수를 요소로 가지고 == 길이는 N+1
//   // 마지막 N이 빠지는 경우 즉 배열 마지막 요소가 N 인 경우(index : A.length -1 +1 == A.length 즉 N이 마지막이어야 되는데 N+1이 들어가있는 경우)
//   return A.length + 1;
// }

// third try - passed by 100% score
// 가본 수학 공식
// 1~N 까지 정수값이 오름차순으로 하나도 빠지지 않은 경우 합 : (N * (N+1)) / 2
// 주어진 배열의 실제 합과 차이를 계산하면 끝.
function solution(A) {

  if(A.length === 0) return 1;
  A.sort((a,b) => a-b);

  // 최댓값을 기준으로 요소가 빠지지 않았더라면 합 (요소 총 N+1개 일 때,)
  let N = A.length + 1;
  let tobeSum = (N * (N+1)) / 2;
  
  let sum = A.reduce((a,c) => a+c, 0);

  return tobeSum - sum;
}


/* first try
test result
example
example test✔OK
expand allCorrectness tests
▶empty_and_single
empty list and single element✘RUNTIME ERROR
tested program terminated with exit code 1
▶missing_first_or_last
the first or the last element is missing✘RUNTIME ERROR
tested program terminated with exit code 1
▶single
single element✘RUNTIME ERROR
tested program terminated with exit code 1
▶double
two elements✘RUNTIME ERROR
tested program terminated with exit code 1
▶simple
simple test✔OK
expand allPerformance tests
▶medium1
medium test, length = ~10,000✔OK
▶medium2
medium test, length = ~10,000✔OK
▶large_range
range sequence, length = ~100,000✘RUNTIME ERROR
tested program terminated with exit code 1
▶large1
large test, length = ~100,000✔OK
▶large2
large test, length = ~100,000✔OK
*/