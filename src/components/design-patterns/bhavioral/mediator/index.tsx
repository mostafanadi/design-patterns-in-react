// MediatorImplementation.tsx

import React from 'react';
import { Mediator } from './mediator-class';
import Button from './button';
import Input from './input';


class MediatorImplementation extends React.Component {
  private mediator: Mediator;

  constructor(props: object) {
    super(props);
    this.mediator = new Mediator();
  }


  componentDidMount() {
    const buttonColleague: Colleague = new Button({ label: 'Click me' });
    const inputColleague: Colleague = new Input({});
    buttonColleague.setMediator(this.mediator);
    inputColleague.setMediator(this.mediator);

    this.mediator.addColleague(buttonColleague);
    this.mediator.addColleague(inputColleague);
  }

  render() {
    return (
      <div>
        <Button label="Click me" />
        <Input />
      </div>
    );
  }
}

export default MediatorImplementation;
