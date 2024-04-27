

export class Calculator {
  value = 0
  history: Command[] = []
  command: undefined | Command = undefined
  invoke(command: Command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }
  undo() {
    const command = this.history.pop()
    this.value = command!.undo(this.value)
  }
}