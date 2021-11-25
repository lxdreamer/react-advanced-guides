import { useState } from "react"
import { CounterButton } from "./Counter-button"
import { CounterButtonPure } from "./Counter-button-pure"

export function OptimizeDemo() {
  const [state, setState] = useState('按钮一')
  const changeText = (event: any) =>{
    setState( event.target.value)
  }
  return (
    <div>
      <h1>OptimizeDemo</h1>
      <input type="text" onChange={changeText} />
      <CounterButton text={state}></CounterButton>
      {/* <CounterButtonPure></CounterButtonPure> */}
    </div>
  )
}
