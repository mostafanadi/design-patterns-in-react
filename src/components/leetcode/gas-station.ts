function canCompleteCircuit(gas: number[], cost: number[]): number {
    let startPosition= 0;
    let total=0
    let tank = 0 
    for(let i =0 ;i<gas.length;i++){
        total += gas[i] - cost[i];
        tank+=gas[i] - cost[i];
        if(total<0){
            total = 0;
            startPosition = i+1
        }
    }
    if(tank<0){
        return -1
    }
    return startPosition
};