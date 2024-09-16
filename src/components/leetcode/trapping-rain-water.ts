function trap(height: number[]): number {
    let water = 0
    let right = height.length - 1
    let left = 0
    let rightMax = height[right]
    let leftMax = height[left]
    while (left < right) {
        if (leftMax < rightMax) {
            left++
            leftMax = Math.max(leftMax, height[left])
            water += leftMax - height[left]
        } else {
            right--
            rightMax = Math.max(rightMax, height[right])
            water += rightMax - height[right]
        }
    }
    return water;
};