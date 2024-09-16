function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const left = new Array(n);
    const right = new Array(n);
    right[n-1 ] =1;
    left[0]=1;
    for(let i =1;i<n;i++){
        left[i] = left[i-1] * nums[i-1];
    }
    for(let j = n-2;j>=0;j--){
        right[j] = right[j+1]* nums[j+1]; 
    }
    const answer = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer
};