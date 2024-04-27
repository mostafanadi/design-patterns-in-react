// Input.tsx

import React from 'react';

interface InputProps { }

interface InputState {
  value: string;
}

class Input extends React.Component<InputProps, InputState> implements Colleague {
  private mediator: Mediator | undefined;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  notify(event: string): void {
    if (event === 'buttonClicked') {
      this.setState({ value: 'Updated by Button click!' });
    }
  }

  render() {
    return <input type="text" value={this.state.value} />;
  }
}

export default Input;
