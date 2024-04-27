// Memento
export class EditorMemento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Originator
export class Editor {
  private content: string;

  constructor() {
    this.content = '';
  }

  type(text: string) {
    this.content = text;
  }

  getContent(): string {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
}
