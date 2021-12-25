/*
A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

For example, given array A such that:

A[0] = 3  A[1] = 2  A[2] = -6
A[3] = 4  A[4] = 0
the function should return 5 because:

(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [−1,000,000..1,000,000];
the result will be an integer within the range [−2,147,483,648..2,147,483,647].

*/

second - reference
function solution(A) {
  // 음수를 고려해야 함 -> 0을 상정해두고 reduce로 합을 구하되, 부분 합이 음수가 나오면 max = 0 return, 
  // 합이 0보다 큰 양수라면
  // 모두 음수면 sum은 0으로 할당될테니 본 함수에서 max가 0 이면 가장 큰 음수 1개의 값만 리턴(음수는 더할수록 작아지니)

  // global vs local 전체 합 계산해두고 부분 합과 비교하며 바로 업데이트

  // 완전 탐색 - O(N)

  let max = 0;

  const sum = A.reduce((prevSum, curr) => {
    // 현재 값을 더한 값을 기준으로,
    let currSum = prevSum + curr;

    if(currSum < 0) return 0; // 음수합이 되었으니 0으로 상정

    if(currSum < max) return currSum;

    return max = currSum; // max 에 할당하면서 max 값 return

  },0)

  return max === 0 ? Math.max(...A) : max;
}

// * passed by 100% score
// * 완전탐색이려면 reduce로 한 번? 순회할 수 있도록 해보기.

/* first try

function solution(A) {
  // 우선 전체 합?
  const totalSum = A.reduce((a,c) => a+c);
  // 음수가 있을 경우 합하면 감소하니까..
  // efficient 하게 짜려면..?
  // 모든 부분순열의 합을 비교할 수 밖에 없을 것 같은데

  // 음수 index 찾기? 가장 작은 음수?
  let temp = A.slice();
  let minus = [];

  const toFindMinus = (arr) => {
    let minusIdx = arr.findIndex((el) => el < 0)
    if(minusIdx !== -1) {
        minus.push(minusIdx);
        arr = [...arr.slice(minusIdx+1)];
        toFindMinus(arr)
    }
  }

  toFindMinus(temp);

  // 합 비교
  let max = totalSum;
  for(let i = 0; i< minus.length; i++) {
    let idx = minus[i];

    let tempSum = A.slice(0, minus[i]).reduce((a,c) => a+c);

    if(max < tempSum) max = tempSum;

  }

    return max;

};

// test result

one_element✘RUNTIME ERROR
tested program terminated with exit code 1
▶two_elements✘RUNTIME ERROR
tested program terminated with exit code 1
▶three_elements✘RUNTIME ERROR
tested program terminated with exit code 1
▶simple✘WRONG ANSWER
got 52 expected 53
▶extreme_minimum✘RUNTIME ERROR
tested program terminated with exit code 1
▶fifty_random✘RUNTIME ERROR
tested program terminated with exit code 1
▶neg_const✘RUNTIME ERROR
tested program terminated with exit code 1
▶pos_const✔OK
expand allPerformance tests
▶high_low_1Kgarbage✔OK
▶1Kgarbage_high_low✘WRONG ANSWER
got 999 expected 1000
▶growing_saw✘RUNTIME ERROR
tested program terminated with exit code 1
▶blocks✘TIMEOUT ERROR
running time: 1.984 sec., time limit: 0.464 sec.
▶growing_negative✘TIMEOUT ERROR
running time: 2.320 sec., time limit: 0.560 sec.
*/