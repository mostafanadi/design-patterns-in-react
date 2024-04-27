import { Calculator } from "./calculator"
import { AddCommand, MultiplyCommand } from "./commands"




export default function Command() {
  const addCommand = new AddCommand(25)
  const multiplyCommand = new MultiplyCommand(2)
  const calculator = new Calculator()
  calculator.invoke(multiplyCommand)
  console.log(calculator.value)
  return (
    <div className="flex flex-col gap-4">
      <button className="btn" onClick={() => {
        calculator.invoke(addCommand)
      }}>add 25</button>
      <button className="btn" onClick={() => {
        calculator.invoke(multiplyCommand)
      }}>multiply by 2</button>
      <button className="btn" onClick={() => {
        calculator.undo()
      }}>undo</button>

    </div>
  )
}