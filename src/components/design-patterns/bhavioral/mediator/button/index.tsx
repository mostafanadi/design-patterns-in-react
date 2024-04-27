// Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
}

class Button extends React.Component<ButtonProps> implements Colleague {
  private mediator: Mediator | undefined;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  notify(event: string): void {
    // Handle notification from mediator (if needed)
    console.log(`Button received notification: ${event}`);
  }

  handleClick = (): void => {
    if (this.mediator) {
      this.mediator.notify(this, 'buttonClicked');
    }
  };

  render() {
    const { label } = this.props;
    return <button onClick={this.handleClick}>{label}</button>;
  }
}

export default Button;
