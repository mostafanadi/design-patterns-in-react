interface Strategy {
  doAlgorithm(data: number[]): number[];
}

export class SortStrategy implements Strategy {
  doAlgorithm(data: number[]): number[] {
    return data.sort()
  }
}
export class ReverseStrategy implements Strategy {
  doAlgorithm(data: number[]): number[] {
    return data.reverse()
  }
}

export class Operation {
  data: number[] = []
  strategy: Strategy | null = null
  constructor(data: number[], strategy: Strategy) {
    this.data = data
    this.strategy = strategy
  }
  setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }
  doLogic() {
    return this.strategy?.doAlgorithm(this.data)
  }
}

