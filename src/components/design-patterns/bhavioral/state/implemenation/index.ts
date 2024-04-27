import { ReactNode } from "react"

export class AdminState implements State {
  reactNode: ReactNode | undefined
  constructor(reactNode: ReactNode) {
    this.reactNode = reactNode

  }
  doLogic(): ReactNode {
    const s = "SHOWING THE INFO TO ADMIN..."
    console.log(s)
    return this.reactNode
  }
}
export class UserState implements State {
  reactNode: ReactNode | undefined
  constructor(reactNode: ReactNode) {
    this.reactNode = reactNode

  }
  doLogic(): ReactNode {
    const s = "NOT AUTHORIZED !!!"
    console.log(s)
    return "NOT AUTHORIZED :("
  }
}


export class Dashboard implements StateContext {
  state: State | undefined = undefined
  constructor(state: State) {
    this.state = state
  }

  handleRequest() {
    return this.state!.doLogic()
  }

  setSatte(state: State): State {
    this.state = state
    return this.state
  }
}