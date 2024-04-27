declare interface Command {
  execute(valueToAdd: number): number;
  undo(newValu: number): number;
}