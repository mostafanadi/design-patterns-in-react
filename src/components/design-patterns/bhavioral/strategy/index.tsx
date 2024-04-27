import { useEffect, useState } from "react"
import { Operation, ReverseStrategy, SortStrategy } from "./implementation"

type Props = {}

export default function Strategy({ }: Props) {
  const [data, setData] = useState<number[]>([])
  const sortSt = new SortStrategy()
  const revSt = new ReverseStrategy()

  const handleSortStrategy = () => {
    const s = new Operation([1, 10, 5, 9, 58, 4, 5], sortSt)
    s.doLogic()
    setData(s.data)
  }
  const handleReverseStrategy = () => {
    const s = new Operation([1, 10, 5, 9, 58, 4, 5], revSt)
    s.doLogic()
    setData(s.data)
  }
  return (
    <div className="flex flex-col gap-5">
      <button onClick={handleSortStrategy}>SORT STRATEGY</button>
      <button onClick={handleReverseStrategy}>REVERSE STRATEGY</button>
      <div>DATA : {data.join(",")}</div>
    </div>
  )
}