import React from "react";
import { LogVisitor, RenderVisitor } from "./classes";
import { Button, Image, Text } from "./types";

// Define a type for the components
type UIComponent = Button | Text | Image;

const Visitor: React.FC = () => {
  const components: UIComponent[] = [
    new Button("Click me"),
    new Text("Hello, world!"),
    new Image("image.png"),
  ];

  const renderVisitor = new RenderVisitor();
  const logVisitor = new LogVisitor();

  return (
    <div>
      <h1>Visitor Pattern in React</h1>
      {components.map((component, index) => {
        // Perform rendering
        component.accept(renderVisitor);
        // Perform logging
        component.accept(logVisitor);

        return <div key={index}>Component rendered and logged</div>;
      })}
    </div>
  );
};

export default Visitor;
