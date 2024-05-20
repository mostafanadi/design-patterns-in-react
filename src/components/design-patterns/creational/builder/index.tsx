import React from "react";

// Define interface for ButtonProps
interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
  disabled: boolean;
}

// ButtonBuilder class to construct customizable Button components
class ButtonBuilder {
  private props: Partial<ButtonProps>; // Partial props to allow optional configuration

  constructor() {
    this.props = {
      text: "Click Me", // Default text
      color: "blue", // Default color
      onClick: () => {}, // Default onClick handler
      disabled: false, // Default disabled state
    };
  }

  // Set text of the button
  withText(text: string): this {
    this.props.text = text;
    return this;
  }

  // Set color of the button
  withColor(color: string): this {
    this.props.color = color;
    return this;
  }

  // Set onClick handler of the button
  withOnClick(onClick: () => void): this {
    this.props.onClick = onClick;
    return this;
  }

  // Set disabled state of the button
  withDisabled(disabled: boolean): this {
    this.props.disabled = disabled;
    return this;
  }

  // Build the Button component based on configured properties
  build(): JSX.Element {
    const { text, color, onClick, disabled } = this.props;
    return (
      <button
        className="p-2 rounded-lg text-white"
        style={{ backgroundColor: color }}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}

// Example usage of the ButtonBuilder to create a customized Button component
const Builder: React.FC = () => {
  // Create a new button using the builder pattern
  const button = new ButtonBuilder()
    .withText("Submit")
    .withColor("black")
    .withOnClick(() => alert("Button clicked!"))
    .withDisabled(false)
    .build();

  return (
    <div>
      <h1>Customizable Button</h1>
      {button}
    </div>
  );
};

export default Builder;
