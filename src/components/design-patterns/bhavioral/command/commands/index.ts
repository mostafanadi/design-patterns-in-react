export class AddCommand implements Command {
  valueToAdd = 0;
  constructor(valueToAdd: number) {
    this.valueToAdd = valueToAdd
  }
  execute(currentValue: number) {
    console.log(this.valueToAdd + currentValue)
    return this.valueToAdd + currentValue;
  }
  undo(newValue: number) {
    console.log(newValue - this.valueToAdd)
    return newValue - this.valueToAdd
  }
}

export class MultiplyCommand implements Command {
  valueToMultiply = 1;
  constructor(valueToMultiply: number) {
    this.valueToMultiply = valueToMultiply
  }
  execute(currentValue: number) {
    console.log(this.valueToMultiply * currentValue)
    return this.valueToMultiply * currentValue;
  }
  undo(newValue: number) {
    console.log(newValue / this.valueToMultiply)
    return newValue / this.valueToMultiply
  }
}