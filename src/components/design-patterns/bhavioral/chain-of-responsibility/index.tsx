import React from 'react';
import { ButtonComponent, LinkComponent } from './components';

// Create a React component that acts as the client using the chain
const ChainOfResponsibility: React.FC = () => {
  // Instantiate chain links
  const buttonHandler = new ButtonComponent();
  const linkHandler = new LinkComponent();

  // Set up the chain
  buttonHandler.setNext(linkHandler);

  // Handle actions based on user interactions
  const handleButtonClick = () => {
    buttonHandler.handleRequest('button-click');
  };

  const handleLinkClick = () => {
    buttonHandler.handleRequest('link-click');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me (Button)</button>
      <br />
      <a href="#" onClick={handleLinkClick}>Click Me (Link)</a>
    </div>
  );
};

export default ChainOfResponsibility;
