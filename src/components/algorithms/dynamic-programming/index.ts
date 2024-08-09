export const fib = (n: number, memo: { [key: number]: number }): number => {
  let result
  if (memo[n]) {
    return memo[n]
  }
  if (n == 0 || n == 1) {
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  memo[n] = result;
  return result
}

console.log(fib(5, {}))

//without dynamic programming fib function has the O notation of 2^n
//with dynamic prigramming its now O(n)