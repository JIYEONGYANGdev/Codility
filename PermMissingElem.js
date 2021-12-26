// second try - passed by 100% score
// first에서 놓쳤던 부분: 빈 배열(1이 빠진 경우), 마지막인덱스(A.length-1) A.length == N 이 빠진 경우 
// * Time Complexity: O(N) + O(N *logN)
function solution(A) {
  // 정렬해서 인덱스+1 과 값이 같지 않은 경우 찾기
  A.sort((a,b) => a-b);
  // ! 내가 놓친 부분 : 빈 배열(return 1), 마지막요소 빠지는 경우(return A.length + 1);

  if(A.length === 0) return 1;

  for(let i = 0; i<A.length; i++) {
    if(A[i] !== i+1) return i+1;
  }

  // 배열은 N개의 정수를 요소로 가지고 == 길이는 N+1
  // 마지막 N이 빠지는 경우 즉 배열 마지막 요소가 N 인 경우(index : A.length -1 +1 == A.length 즉 N이 마지막이어야 되는데 N+1이 들어가있는 경우)
  return A.length + 1;
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