function hIndex(citations: number[]): number {
    const sorted = citations.sort((a,b)=>a-b)
    let h = sorted.length
    for(let i =0;i<sorted.length;i++){
        if(sorted[i]<h){
            h--
        }
    }
    return h
};