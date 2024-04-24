// Define a factory function to create different types of components
function ComponentFactory(type: "button" | "input") {
  switch (type) {
    case "button":
      return ButtonComponent;
    case "input":
      return InputComponent;
    default:
      throw new Error(`Unsupported component type: ${type}`);
  }
}

// Button component
function ButtonComponent(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

// Input component
function InputComponent(props: any) {
  return <input type="text" value={props.value} onChange={props.onChange} />;
}

// Parent component that uses the factory to create components
function FactoryMethod() {
  // Use the factory function to create a button component
  const Button = ComponentFactory("button");

  // Use the factory function to create an input component
  const Input = ComponentFactory("input");

  return (
    <div className="flex flex-col items-start">
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />

      <Input value="Hello" onChange={(e: any) => console.log(e.target.value)} />
    </div>
  );
}

export default FactoryMethod;
