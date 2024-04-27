declare interface State {
  doLogic(reactNode?: ReactNode): (ReactNode | null)
}

declare interface StateContext {
  handleRequest(): ReactNode;
  setSatte(state: State): State
} 