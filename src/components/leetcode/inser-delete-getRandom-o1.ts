class RandomizedSet {
    numbers: number[] = []
    constructor(public elements: { [key: number]: (number ) } = {}) {

    }
    insert(val: number): boolean {
        if (this.elements[val]!==undefined) {
            return false
        } else {
            this.elements[val] = this.numbers.length;
            this.numbers.push(val)
            return true
        }
    }
    remove(val: number): boolean {
        if (this.elements[val] === undefined) {
            return false
        } else {
            const toBeRemovedIndex:number = this.elements[val]
            delete this.elements[val];
            if (this.numbers[this.numbers.length - 1] !== val) {
                const lastElement = this.numbers.pop()
                this.elements[lastElement!] = toBeRemovedIndex
                this.numbers[toBeRemovedIndex]  = lastElement as number
            } else {
                this.numbers.pop()
            }
            return true
        }
    }
    getRandom() {
        return this.numbers[Math.floor(Math.random() * this.numbers.length)]
    }
}