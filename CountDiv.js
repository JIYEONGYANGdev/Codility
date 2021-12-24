/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/

// test passed by score 100%; Time Complexity O(1);
function solution(A, B, K) {
  // K의 배수만 찾으면 되는데, 그걸 B까지 한단계씩 다 돌아야 하느냐 아니면 efficient 한 방식이 있냐

  // A가 K의 배수인가
    // 아닐경우 나머지 보고 ++
  // B가 K의 배수인가
    // 아닐경우 나머지 보고 -- 시켜서..

  // 시작 정수가 K의 배수인 경우 시작 정수 값 자체는 K 이상일 것이므로.
  // ( 끝 수 / K ) - ( 시작점 / K )

  let start = A;
  let end = B;

  if(start % K !== 0) {
    // if(start > K) {
      start = start + (K - start % K); // 다음으로 가까운 배수로 만듦
    // }
  }
  if(end % K !== 0) {
    end = end - (end % K); // 직전으로 가까운 배수로 만듦
  }

  return end / K - (start / K -1);
}