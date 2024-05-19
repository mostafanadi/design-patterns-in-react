// Component interfaces
export interface Component {
  accept(visitor: Visitor): void;
}

export class Button implements Component {
  constructor(public label: string) {}

  accept(visitor: Visitor): void {
    visitor.visitButton(this);
  }
}

export class Text implements Component {
  constructor(public content: string) {}

  accept(visitor: Visitor): void {
    visitor.visitText(this);
  }
}

export class Image implements Component {
  constructor(public src: string) {}

  accept(visitor: Visitor): void {
    visitor.visitImage(this);
  }
}

// Visitor interface
export interface Visitor {
  visitButton(button: Button): void;
  visitText(text: Text): void;
  visitImage(image: Image): void;
}
