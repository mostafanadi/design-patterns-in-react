import { Button, Image, Visitor, Text } from "./types";

// RenderVisitor for rendering components
export class RenderVisitor implements Visitor {
  visitButton(button: Button): void {
    console.log(`Rendering Button: ${button.label}`);
    // Actual render logic for Button
  }

  visitText(text: Text): void {
    console.log(`Rendering Text: ${text.content}`);
    // Actual render logic for Text
  }

  visitImage(image: Image): void {
    console.log(`Rendering Image with src: ${image.src}`);
    // Actual render logic for Image
  }
}

// LogVisitor for logging components
export class LogVisitor implements Visitor {
  visitButton(button: Button): void {
    console.log(`Logging Button: ${button.label}`);
  }

  visitText(text: Text): void {
    console.log(`Logging Text: ${text.content}`);
  }

  visitImage(image: Image): void {
    console.log(`Logging Image with src: ${image.src}`);
  }
}
